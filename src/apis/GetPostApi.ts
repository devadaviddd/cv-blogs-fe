import { useQuery } from 'react-query'
import PostService from './services/postService'

export default function GetPostApi() {
  const { data } = useQuery({
    queryKey: ['posts'],
    queryFn: PostService.getPosts,
  })

  if (data instanceof Error) {
    throw new Error(data.message)
  }

  if (!data) return []

  return data
}
