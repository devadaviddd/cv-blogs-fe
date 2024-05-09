import FeedsTab from '@/components/home/FeedsTab'
import NewUsersFeed from '@/components/home/NewUsersFeed'
import PostList from '@/components/home/PostList'
import { Container, Grid } from '@mui/material'

export default function HomeLayout() {
  return (
    <Container className="w-full h-full mt-[5rem]">
      <Grid container spacing={2}>
        <Grid item lg={8} md={12} >
          <PostList />
        </Grid>
        <Grid item md={4} className='hidden relative lg:flex flex-col items-center p-10'>
          <NewUsersFeed />
          <FeedsTab/>

        </Grid>
      </Grid>
    </Container>
  )
}
