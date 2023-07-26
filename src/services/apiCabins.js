import supabase from "./supabase";

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
  const { data, error } = await supabase
    .from("cabins")
    .insert([{ newCabin }])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Could not create the cabin. Try again later.");
  }

  return data;
}
