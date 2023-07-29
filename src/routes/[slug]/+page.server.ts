import { TortaController } from "$lib/server/tortacms";
import { error } from '@sveltejs/kit';

export async function load({ params }: {params: {slug: string}}) {
  const post = await TortaController.fetchSinglePage(params.slug)
  if (!post) {
    throw error(404, 'Not Found');
  }
  return post;
}