import { TortaController } from "$lib/server/tortacms";

type Params = {
  day: string,
  month: string,
  year: string,
  slug: string
}

export async function load({ params }: {params: Params}) {
  const post = await TortaController.fetchSinglePost(params.day, params.month, params.year, params.slug)
  return post;
}