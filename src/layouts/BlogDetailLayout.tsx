import { Container, Grid } from '@mui/material';

interface IBlogDetailLayout {
  children: React.ReactElement[] |  React.ReactElement
}

//bg-[#E0EAF0]

export default function BlogDetailLayout(props: IBlogDetailLayout) {
  return (
    <Container className='relative bg-[#E0EAF0] w-full h-full'>
      <Grid container spacing={2}>
        {props.children}
      </Grid>
    </Container>
  )
}