import { TORTACMS_HOST } from "$env/static/private"

export class TortaController {
  public static fetchAllPosts = async () => {
    const response = await fetch(`${TORTACMS_HOST}/api/posts`)
    const posts = await response.json()
    console.log(posts)
    return {
      posts: posts.posts,
      pages: posts.number_of_pagination,
      number_of_posts: posts.number_of_posts
    }
  }

  public static fetchSinglePost = async (day: string, month: string, year: string, slug: string) => {
    const response = await fetch(`${TORTACMS_HOST}/api/post/${day}/${month}/${year}/${slug}`)
    const post = await response.json()
    return post
  }
}