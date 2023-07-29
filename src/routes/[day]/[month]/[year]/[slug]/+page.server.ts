import { TortaController } from "$lib/server/tortacms";
import { error } from '@sveltejs/kit';

type Params = {
  day: string,
  month: string,
  year: string,
  slug: string
}

export async function load({ params }: {params: Params}) {
  const post = await TortaController.fetchSinglePost(params.day, params.month, params.year, params.slug)
  if (!post) {
    throw error(404, 'Not Found');
  }
  return post;
}