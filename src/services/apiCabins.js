import supabase, { supabaseBucketUrl, supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be retrieved.");
  }

  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Could not delete the cabin. Try again later.");
  }

  return data;
}

export async function addCabin(newCabin) {
  // Create an unique image name, replace all "/" that supabase adds
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = `${supabaseUrl}/${supabaseBucketUrl}/${imageName}`;

  // Create cabin
  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...newCabin, image: imagePath }])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Could not create the cabin. Try again later.");
  }

  // Upload image
  const { storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  if (storageError) {
    console.error(error);
    await deleteCabin(data.id);
    throw new Error(
      "Could not upload the image, and the cabin was not created."
    );
  }

  // Delete the cabin IF there was an error uploading the image
  return data;
}
