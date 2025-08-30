// Cloudinary image upload utility
const CLOUDINARY_CLOUD_NAME = process.env
  .NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME as string;
const CLOUDINARY_UPLOAD_PRESET = process.env
  .NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET as string;

export const uploadImage = async (image: File) => {
  console.log("Cloudinary Config:", {
    cloudName: CLOUDINARY_CLOUD_NAME,
    uploadPreset: CLOUDINARY_UPLOAD_PRESET,
  });

  if (!CLOUDINARY_CLOUD_NAME || !CLOUDINARY_UPLOAD_PRESET) {
    throw new Error("Cloudinary configuration missing");
  }

  const formData = new FormData();
  formData.append("file", image);
  formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    console.log("Response status:", response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.log("Error response:", errorText);
      throw new Error(`Image upload failed: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    return data.secure_url;
  } catch (error) {
    console.error("Upload error:", error);
    throw error; // Re-throw the actual error instead of masking it
  }
};
