import { createClient } from "@supabase/supabase-js";
// Set the bucket name
const bucket = "temp-home-away";
// Get the URL and key from the environment variables
const url = process.env.SUPABASE_URL as string;
const key = process.env.SUPABASE_KEY as string;
// Create the client
const supabase = createClient(url, key);

export const uploadImage = async (image: File) => {
  // Get current timestamp
  const timestamp = Date.now();
  // Create a new name for the image with the timestamp
  const newName = `${timestamp}-${image.name}`;
  // Asynchronously upload the image to the bucket
  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(newName, image, { cacheControl: "3600" });
  if (!data) throw new Error("image upload failed");
  // return public url
  return supabase.storage.from(bucket).getPublicUrl(newName).data.publicUrl;
};
