'use server'
import { profileSchema } from "./schemas"

export const createProfileAction = async (prevState: any, formData: FormData) => {
    try {
        const rawData = Object.fromEntries(formData.entries())
        const validatedFields = profileSchema.parse(rawData)
        console.log(validatedFields)
        return { message: "Profile created successfully" }
    } catch (error) {
        console.log(error)
        return { message: "Invalid fields" }
    }
}