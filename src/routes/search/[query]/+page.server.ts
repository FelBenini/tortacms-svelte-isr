import { TortaController } from "$lib/server/tortacms";

export async function load({url, params}: {url: URL, params: {query: string}}) {
  const page = url.searchParams.get('page') || 1
  const posts = await TortaController.searchForPosts(params.query, page)
  return posts;
}