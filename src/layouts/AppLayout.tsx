import { Stack } from '@mui/material'
import Navbar from '../components/common/Navbar'
import HomeLayout from './HomeLayout'

export default function AppLayout() {
  return (
    // <div className="w-screen h-screen">
    //   <Navbar />
    //   <HomeLayout />
    // </div>
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="stretch"
      spacing={1}
      className="w-screen h-screen"
      useFlexGap 
    >
      <Navbar />
      <HomeLayout />
    </Stack>
  )
}
