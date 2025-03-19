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

// set the image schema
export const imageSchema = z.object({
  image: validateFile(),
});

// validate the file
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

export const propertySchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "name must be at least 2 characters.",
    })
    .max(100, {
      message: "name must be less than 100 characters.",
    }),
  tagline: z
    .string()
    .min(2, {
      message: "tagline must be at least 2 characters.",
    })
    .max(100, {
      message: "tagline must be less than 100 characters.",
    }),
  price: z.coerce.number().int().min(0, {
    message: "price must be a positive number.",
  }),
  category: z.string(),
  description: z.string().refine(
    (description) => {
      const wordCount = description.split(" ").length;
      return wordCount >= 10 && wordCount <= 1000;
    },
    {
      message: "description must be between 10 and 1000 words.",
    }
  ),
  country: z.string(),
  guests: z.coerce.number().int().min(0, {
    message: "guest amount must be a positive number.",
  }),
  bedrooms: z.coerce.number().int().min(0, {
    message: "bedrooms amount must be a positive number.",
  }),
  beds: z.coerce.number().int().min(0, {
    message: "beds amount must be a positive number.",
  }),
  baths: z.coerce.number().int().min(0, {
    message: "bahts amount must be a positive number.",
  }),
  amenities: z.string(),
});
