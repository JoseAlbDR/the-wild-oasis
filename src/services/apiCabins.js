import supabase, { supabaseCabinsBucketUrl, supabaseUrl } from "./supabase";

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

export async function addUpdateCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

  // Create an unique image name, replace all "/" that supabase adds
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );

  // If newCabin already has an image add that image, if not, upload the new one
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/${supabaseCabinsBucketUrl}/${imageName}`;

  // Create/Update cabin
  let query = supabase.from("cabins");

  // Create if there is no id
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  // Edit it here is an id
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);

  // get feedback from operation
  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Could not create the cabin. Try again later.");
  }

  // Upload image

  if (hasImagePath) return data;

  const { storageError } = await supabase.storage
    .from("cabins-images")
    .upload(imageName, newCabin.image);

  if (storageError) {
    console.error(error);
    // Delete the cabin IF there was an error uploading the image
    await deleteCabin(data.id);
    throw new Error(
      "Could not upload the image, and the cabin was not created."
    );
  }

  return data;
}
