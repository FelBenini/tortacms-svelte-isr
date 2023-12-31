import { TORTACMS_HOST } from "$env/static/private"

export class TortaController {
  public static fetchAllPosts = async (page: string | number = 1) => {
    const response = await fetch(`${TORTACMS_HOST}/api/posts?page=${page}`)
    const posts = await response.json()
    return {
      posts: posts.posts,
      pages: posts.number_of_pagination,
      number_of_posts: posts.number_of_posts
    }
  }

  public static fetchSinglePost = async (day: string, month: string, year: string, slug: string) => {
    const response = await fetch(`${TORTACMS_HOST}/api/post/${day}/${month}/${year}/${slug}`)
    if (response.status === 200) {
      const post = await response.json()
      return post
    }
    return null
  }

  public static fetchSinglePage = async (slug: string) => {
    const response = await fetch(`${TORTACMS_HOST}/api/page/${slug}`)
    if (response.status !== 200) {
      return null
    }
    const page = await response.json()
    return page
  }

  public static searchForPosts = async (query: string, page: string | number = 1) => {
    const response = await fetch(`${TORTACMS_HOST}/api/posts?search=${query}&page=${page}`)
    const posts = await response.json()
    return {
      posts: posts.posts,
      pages: posts.number_of_pagination,
      number_of_posts: posts.number_of_posts,
      query: query
    }
  }
}