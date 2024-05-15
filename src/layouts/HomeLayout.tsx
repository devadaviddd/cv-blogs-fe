import PostList from '@/components/home/PostList';
import StreamFeedRecommendation from '@/components/home/StreamFeedRecommendation';
import StreamTab from '@/components/home/StreamTab';
import { Grid } from '@mui/material';

export default function HomeLayout() {
  return (
    <Grid container spacing={2}>
      <Grid item lg={8} md={12}>
        <PostList />
      </Grid>
      <Grid item md={4} className="hidden xl:flex flex-col items-center ">
        <StreamFeedRecommendation />
        <StreamTab />
      </Grid>
    </Grid>
  );
}
