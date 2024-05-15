import { Container, Stack } from '@mui/material'
import NavBar from '@/components/common/NavBar'
import { Outlet } from 'react-router-dom'
import { auth } from '@/apis/servers/google-auth-server'
import { useAppDispatch } from '@/hooks/store-hooks'
import { setIsLogin } from '@/store/slices/authSlice'

export default function RootPage() {
  const dispatch = useAppDispatch()

  auth.onAuthStateChanged((user) => {
    if (user) {
      // testing force sign out
      // signOut(auth)
      console.log('user is currently login', user)
      dispatch(setIsLogin(true))
    } else {
      console.log('user is signed out')
      dispatch(setIsLogin(false))
    }
  })
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
      <Container className="w-full h-full mt-[5rem]">
        <Outlet />
      </Container>
    </Stack>
  )
}
