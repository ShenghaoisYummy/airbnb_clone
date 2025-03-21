import FormContainer from '@/components/form/FormContainer';
import { updateProfileAction, fetchProfile, updateProfileImageAction } from '@/utils/actions';
import FormInput from "@/components/form/FormInput"
import { SubmitButton } from '@/components/form/Buttons';
import { redirect } from 'next/navigation';
import { ImageInputContainer } from '@/components/form/ImageInputContainer';

async function ProfilePage() {

    // 1. get the profile
    const profile = await fetchProfile();
    // 2. if the profile is not found, redirect to the create profile page
    if (!profile) redirect('/profile/create');

    return (
        <section>
            <h1 className="text-2xl font-semibold mb-8 capitalize">User Profile</h1>
            <div className="border p-8 rounded-md">
                <ImageInputContainer image={profile.profileImage} name={profile.username} action={updateProfileImageAction} text='Update Image' />
                <FormContainer action={updateProfileAction}>
                    <div className="grid md:grid-cols-2 gap-4">
                        <FormInput type="text" name="firstName" label="First Name" defaultValue={profile?.firstName} />
                        <FormInput type="text" name="lastName" label="Last Name" defaultValue={profile?.lastName} />
                        <FormInput type="text" name="username" label="Username" defaultValue={profile?.username} />
                    </div>
                    <SubmitButton text="Update Profile" className="mt-8" />
                </FormContainer >
            </div >
        </section >
    )
}

export default ProfilePage;