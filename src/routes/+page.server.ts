import { TortaController } from "$lib/server/tortacms";

export async function load() {
  const posts = await TortaController.fetchAllPosts()
  return posts;
}