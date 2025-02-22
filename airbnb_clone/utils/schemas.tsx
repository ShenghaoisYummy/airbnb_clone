import { z } from "zod";

export const profileSchema = z.object({
    firstName: z.string().min(2, { message: 'First name must be at least 2 characters' }),
    lastName: z.string().min(2, { message: 'Last name must be at least 2 characters' }),
    username: z.string().min(2, { message: 'Username must be at least 2 characters' }),
});

export function validateWithZodSchema<T>(schema: z.ZodSchema<T>, data: unknown): T {
    // 3. validate form data
    const result = schema.safeParse(data)
    // 4. update the profile
    if (!result.success) {
        const errors = result.error.errors.map(error => error.message).join(', ')
        throw new Error(errors)
    }
    return result.data
}