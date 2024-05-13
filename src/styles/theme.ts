import { createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: ['Rubik', 'sans-serif'].join(','),
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          height: '3rem'
        }
      }
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          height: '3rem',
          '@media (min-width: 600px)': {
            minHeight: '0rem',
          }
        }
      }
    },
  
  },
  
});

export default theme;
