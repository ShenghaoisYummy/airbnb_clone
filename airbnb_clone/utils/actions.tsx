'use server'
import { profileSchema } from "./schemas"
import db from './db';
import { auth, clerkClient, currentUser } from '@clerk/nextjs/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';


const getAuthUser = async () => {
    // 1. get the user
    const user = await currentUser()
    // 2. if no user throw an error
    if (!user) throw new Error('Please login to create a profile');
    // 3. if the user has no profile redirect to home page
    if (!user.privateMetadata.hasProfile) redirect('/');
    // 4. return the user
    return user;
}


export const createProfileAction = async (prevState: any, formData: FormData) => {
    try {

        const user = await currentUser();
        if (!user) throw new Error('Please login to create a profile');

        const rawData = Object.fromEntries(formData.entries())
        const validatedFields = profileSchema.parse(rawData)
        console.log(validatedFields)
        await db.profile.create({
            data: {
                clerkId: user.id,
                email: user.emailAddresses[0].emailAddress,
                profileImage: user.imageUrl ?? '',
                ...validatedFields,
            }
        })
        await clerkClient.users.updateUserMetadata(user.id, {
            privateMetadata: {
                hasProfile: true,
            },
        });
        redirect('/');
    } catch (error) {
        console.log(error)
        return { message: error instanceof Error ? error.message : 'An unknown error occurred' }
    }
}



export const fetchProfileImage = async () => {

    // 1. get the user, if no user return null
    const user = await currentUser();
    if (!user) return null

    // 2. get the profile 
    const profile = await db.profile.findUnique({
        where: {
            clerkId: user.id,
        },
        select: {
            profileImage: true,
        }
    })
    return profile?.profileImage

}

export const fetchProfile = async () => {
    // 1. get the user
    const user = await getAuthUser();
    // 2. get the profile
    const profile = await db.profile.findUnique({
        where: {
            clerkId: user.id,
        }
    })
    if (!profile) redirect('/profile/create');
    return profile;
}

export const updateProfileAction = async (prevState: any, formData: FormData): Promise<{ message: string }> => {
    // 1. get the user
    const user = await getAuthUser();
    // 2. get form raw data
    const rawData = Object.fromEntries(formData.entries())
    // 3. validate form data
    const validatedFields = profileSchema.parse(rawData)
    // 4. update the profile
    await db.profile.update({
        where: {
            clerkId: user.id,
        },
        data: validatedFields,
    })
    revalidatePath('/profile')
    // 5. return the message
    return { message: 'Profile updated successfully' }
}