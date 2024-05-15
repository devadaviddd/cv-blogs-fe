import {
  Toolbar,
  IconButton,
  Typography,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Button,
} from '@mui/material'
import { useEffect, useState } from 'react'
import { styled, useTheme } from '@mui/material/styles'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import MenuIcon from '@mui/icons-material/Menu'
import LoginApi from '@/apis/LoginApi'
import { useAppDispatch } from '@/hooks/store-hooks'
import { auth } from '@/apis/servers/google-auth-server'
import { isLoginSelector } from '@/store/selectors/authSelector'
import { setAuthSession } from '@/store/slices/authSlice'
import { useSelector } from 'react-redux'
import navList from '@/common/navList.json'
import IconMUI, { IconNames } from './IconMUI'
import { Link } from 'react-router-dom'

interface AppBarProps extends MuiAppBarProps {
  open?: boolean
}

const DRAWER_WIDTH = 240
const BREAK_POINT_SIDE_NAV = 1650

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    marginLeft: `${DRAWER_WIDTH}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}))

export default function NavBar() {
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

  const theme = useTheme()
  const [open, setOpen] = useState(true)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const handleResize = () => {
    if (window.innerWidth < BREAK_POINT_SIDE_NAV) {
      setOpen(false)
    } else {
      setOpen(true)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            PorfBlogs
          </Typography>
          <Button color="inherit" onClick={handleGoogleSignIn}>
            {isLogin ? 'Logout' : 'Login'}
          </Button>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: DRAWER_WIDTH,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: DRAWER_WIDTH,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader className="600-screen:min-h-0 600-screen:h-[3rem]">
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {navList.map((item, index) => (
            <Link to={item.path} key={index}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <IconMUI iconName={item.icon as IconNames} />
                  </ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    </>
  )
}
