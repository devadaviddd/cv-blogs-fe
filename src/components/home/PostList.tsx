import { useEffect } from 'react'
import PostCard from './PostCard'
import { useAppDispatch } from '@/hooks/store-hooks'
import GetPostApi from '@/apis/GetPostApi'
import { setPostData } from '@/store/slices/postSlice'

export default function PostList() {
  const dispatch = useAppDispatch()
  const { data: posts } = GetPostApi()

  useEffect(() => {
    if (posts) {
      dispatch(setPostData(posts))
    }
  }, [dispatch, posts])



  return (
    <div className='w-full h-full '>
      {posts &&
        posts.map((post) => {
          return <PostCard key={post.id} post={post} />
        })}
    </div>
  )
}
