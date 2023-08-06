import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
export const supabaseCabinsBucketUrl = import.meta.env
  .VITE_SUPABASE_CABINS_BUCKET_URL;
export const supabaseAvatarsBucketUrl = import.meta.env
  .VITE_SUPABASE_AVATARS_BUCKET_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
