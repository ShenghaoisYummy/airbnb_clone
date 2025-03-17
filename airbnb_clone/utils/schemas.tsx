import { z } from "zod";

export const profileSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters" }),
  lastName: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters" }),
  username: z
    .string()
    .min(2, { message: "Username must be at least 2 characters" }),
});

export function validateWithZodSchema<T>(
  schema: z.ZodSchema<T>,
  data: unknown
): T {
  // 3. validate form data
  const result = schema.safeParse(data);
  // 4. update the profile
  if (!result.success) {
    const errors = result.error.errors.map((error) => error.message).join(", ");
    throw new Error(errors);
  }
  return result.data;
}

export const imageSchema = z.object({
  image: validateFile(),
});

function validateFile() {
  // set max upload size
  const maxUploadSize = 1024 * 1024;
  //set accepted file types
  const acceptedFileTypes = ["image/jpeg", "image/png", "image/webp"];

  // return a zod schema
  return (
    z
      // check if the file is an instance of file
      .instanceof(File)
      // check if the file size is less than the max upload size
      .refine((file) => {
        // if the file is not an instance of file, return true
        return !file || file.size <= maxUploadSize;
      }, "File size must be less than 1 MB")
      .refine((file) => {
        // if the file is not an instance of file, return true
        return !file || acceptedFileTypes.includes(file.type);
      }, "File type must be an image")
  );
}
