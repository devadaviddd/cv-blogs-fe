import { QueryClient, QueryClientProvider } from 'react-query'
import AppLayout from './layouts/AppLayout'
import { auth } from './apis/servers/google-auth-server'
import { useAppDispatch } from './hooks/store-hooks'
import { setIsLogin } from './store/slices/authSlice'
import SideBar from './components/common/SideBar'

const queryClient = new QueryClient()

function App() {
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
    <QueryClientProvider client={queryClient}>
      <AppLayout />
      <SideBar/>
    </QueryClientProvider>
  )
}

export default App
