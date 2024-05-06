import { useQuery } from 'react-query'
import { AxiosError } from 'axios'
import PostService from './services/postService'

export default function GetPostApi() {
  const { data, isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const posts = await PostService.getPosts()
      if (posts instanceof AxiosError) {
        throw new Error(posts.message)
      }
      return posts
    },
  })
  return {
    data,
    isLoading,
  }
}
