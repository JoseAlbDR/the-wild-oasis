import supabase from "./supabase";
import { supabaseUrl, supabaseAvatarsBucketUrl } from "./supabase";
export async function signup({ fullName, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
      },
    },
  });

  if (error) throw new Error(error.message);
  return data;
}

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);
  return data;
}

export async function getCurrentUser() {
  const {
    data: { session: session },
  } = await supabase.auth.getSession();
  if (!session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);
  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
}

export async function updateUser({ password, fullName, avatar }) {
  // 1 Update fullName || password
  let updateData;
  if (password) updateData = { password };
  if (fullName) updateData = { data: { fullName } };

  const { data, error } = await supabase.auth.updateUser(updateData);

  console.log(data);

  if (error) throw new Error(error.message);
  if (!avatar) return data;

  // 2 Update avatar
  const avatarName = `avatar-${data.user.id}-${Math.random()}`;

  const { error: avatarError } = await supabase.storage
    .from("avatars")
    .upload(avatarName, avatar);

  if (avatarError) throw new Error(avatarError.message);

  // 3 Update avatar in the user
  const { data: updatedUser, error: updatedUserError } =
    await supabase.auth.updateUser({
      data: {
        avatar: `${supabaseUrl}/${supabaseAvatarsBucketUrl}/${avatarName}`,
      },
    });

  if (updatedUserError) throw new Error(updatedUserError.message);

  return updatedUser;
}
