import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { Button } from '@mui/base'
import LoginApi from '@/apis/LoginApi'
import { useAppDispatch } from '@/hooks/store-hooks'
import { setAuthSession } from '@/store/slices/authSlice'
import { isLoginSelector } from '@/store/selectors/authSelector'
import { useSelector } from 'react-redux'
import { auth } from '@/apis/servers/google-auth-server'

export default function Navbar() {
  const { onGoogleLogin } = LoginApi()
  const dispatch = useAppDispatch()
  const isLogin = useSelector(isLoginSelector)

  const handleGoogleSignIn = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault()
    if (!isLogin) {
      const user = await onGoogleLogin()
      dispatch(setAuthSession(user))
    } else {
      await auth.signOut()
    }
  }

  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          News
        </Typography>
        <Button color="inherit" onClick={handleGoogleSignIn}>
          {isLogin ? 'Logout' : 'Login'}
        </Button>
      </Toolbar>
    </AppBar>
  )
}
