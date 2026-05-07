import { supabase } from "./supabase";

const tableName = "saved_prompts";

export async function saveGeneratedPrompt({ userId, title, prompt, metadata }) {
  if (!supabase) {
    throw new Error("Dashboard saving is opening soon for CL360 beta members.");
  }

  const { data, error } = await supabase
    .from(tableName)
    .insert({
      user_id: userId,
      title,
      prompt,
      metadata,
    })
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function listSavedPrompts(userId) {
  if (!supabase) {
    throw new Error("Saved prompt dashboards are opening soon.");
  }

  const { data, error } = await supabase
    .from(tableName)
    .select("id,title,prompt,metadata,created_at")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data ?? [];
}

export async function deleteSavedPrompt({ userId, promptId }) {
  if (!supabase) {
    throw new Error("Saved prompt dashboards are opening soon.");
  }

  const { error } = await supabase
    .from(tableName)
    .delete()
    .eq("id", promptId)
    .eq("user_id", userId);

  if (error) throw error;
}
