import { Stack } from '@mui/material'
import Navbar from '../components/common/Navbar'
import HomeLayout from './HomeLayout'

export default function AppLayout() {
  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="stretch"
      spacing={1}
      className="w-screen h-screen overflow-x-hidden"
      useFlexGap
    >
      <Navbar />
      <HomeLayout />
    </Stack>
  )
}
