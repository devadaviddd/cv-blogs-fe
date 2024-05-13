import { useQuery } from 'react-query'
import { AxiosError } from 'axios'
import PostService from './services/postService'
import WebError from './types/webError'
import { Post } from './types/post'

export default function GetPostApi() {
  const { data, isLoading, error } = useQuery<Post[], WebError >({
    queryKey: ['posts'],
    queryFn: async () => {
      const posts = await PostService.getPosts()
      if (posts instanceof AxiosError) {
        throw new WebError(posts.message, posts.status, 'Fail To Fetch Posts')
      }
      return posts
    },
    retry: false
  })
  return {
    data,
    isLoading,
    error 
  }
}
