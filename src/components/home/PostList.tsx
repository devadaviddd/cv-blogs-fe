import { useEffect } from 'react'
import PostCard from './PostCard'
import { useAppDispatch } from '@/hooks/store-hooks'
import GetPostApi from '@/apis/GetPostApi'
import { setPostData } from '@/store/slices/postSlice'
import { CircularProgress } from '@mui/material'
import ErrorAlert from '../common/ErrorAlert'
import InfoAlert from '../common/InfoAlert'

const POST_EMPTY_MESSAGE = "Sorry, there aren't any posts yet."

export default function PostList() {
  const dispatch = useAppDispatch()
  const { data: posts, isLoading, error } = GetPostApi()

  useEffect(() => {
    if (posts) {
      dispatch(setPostData(posts))
    }
  }, [dispatch, posts])


  useEffect(() => {
    if (error) {
      console.log(error.uiMessage)      
    }
  }, [error])

  return (
    <div className='w-full h-full flex flex-col items-center'>
      {isLoading && <CircularProgress/>}
      
      {error && <ErrorAlert error={error}/>}
      
      {posts && posts.length === 0 && <InfoAlert message={POST_EMPTY_MESSAGE} />}
      
      {posts && posts.length > 0 &&
        posts.map((post) => {
          return <PostCard key={post.id} post={post} />
        })}
    </div>
  )
}
