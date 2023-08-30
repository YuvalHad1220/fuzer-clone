import {createTheme, ThemeProvider} from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import {prefixer} from 'stylis';
import {CacheProvider} from '@emotion/react';
import createCache from '@emotion/cache';
import { CssBaseline } from '@mui/material';
import { ReactNode } from 'react';
const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
 });

        const theme = createTheme({
            direction: 'rtl',
            typography: {
              fontFamily: 'Rubik'
            },
            palette: {
                mode: 'dark',
                // palette values for dark mode
                primary: {
                  main: '#ffe57f',
                },
                secondary: {
                  main: '#ffb8cd',
                  light: '#F2C4D7'
                },
                background: {
                  paper: '#1a1a1a',
                },
                text: {
                  primary: '#ded8da'
                }
              }
        },

          );
  interface MainThemeProps {
    children: ReactNode;
  }
  
const MainTheme : React.FC<MainThemeProps> = (props) => {
  return (
  <CacheProvider value={cacheRtl}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  </CacheProvider>
  );
};

export default MainTheme;