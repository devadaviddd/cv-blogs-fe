import PostList from '@/components/home/PostList'
import { Container } from '@mui/material'

export default function HomeLayout() {
  return (
    <Container className="h-screen overflow-hidden">
      <PostList />
    </Container>
  )
}
