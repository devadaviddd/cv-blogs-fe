import Flicking from '@egjs/react-flicking'
import { useEffect, useRef } from 'react'
import PostCard from './PostCard'
import { useAppDispatch } from '@/hooks/store-hooks'
import GetPostApi from '@/apis/GetPostApi'
import { setPostData } from '@/store/slices/postSlice'

export default function PostList() {
  const postCarouselRef = useRef<Flicking>(null)

  const dispatch = useAppDispatch()
  const { data: posts } = GetPostApi()

  useEffect(() => {
    document.body.addEventListener('wheel', onWheelChange)
    if (posts) {
      dispatch(setPostData(posts))
    }
  }, [dispatch, posts])

  const onWheelChange = (e: WheelEvent) => {
    if (postCarouselRef.current) {
      const postCarousel = postCarouselRef.current
      const cameraPosition = postCarousel.camera.position
      postCarousel.control.controller.axes.setTo(
        { flick: cameraPosition + e.deltaY },
        0
      )
    }
  }

  return (
    <Flicking
      circular={true}
      horizontal={false}
      className="w-full h-full"
      align="prev"
      useFindDOMNode={true}
      ref={postCarouselRef}
    >
      {posts &&
        posts.map((post) => {
          return <PostCard key={post.id} post={post} />
        })}
    </Flicking>
  )
}
