import { TortaController } from "$lib/server/tortacms";

export async function load({url}: {url: URL}) {
  const page = url.searchParams.get('page') || 1
  const posts = await TortaController.fetchAllPosts(page)
  return posts;
}