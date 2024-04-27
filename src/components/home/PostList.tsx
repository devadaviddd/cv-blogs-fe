import Flicking from '@egjs/react-flicking'
import { useEffect, useRef } from 'react'
import PostCard from './PostCard'

export default function PostList() {
  const postCarouselRef = useRef<Flicking>(null)

  useEffect(() => {
    document.body.addEventListener('wheel', onWheelChange)
  }, [])

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
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </Flicking>
  )
}
