import { Stack } from '@mui/material'
import HomeLayout from './HomeLayout'
import NavBar from '@/components/common/NavBar'

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
      <NavBar />
      <HomeLayout />
    </Stack>
  )
}
