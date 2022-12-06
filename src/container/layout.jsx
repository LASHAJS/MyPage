import React, { useState,useMemo  } from "react";
import { ThemeProvider, createTheme ,CssBaseline } from '@mui/material';
import ClippedDrawer from "../components/Sidebar/Sidebar";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import ButtonAppBar from "../components/Header/HeaderComponent"
import appTheme, {palette} from "../components/styles/theme"
import AppState from "../redux/state/appState";
import Loading from "../components/loading";

export default function Layout({ children }) {
 
  const [mode,setMode] = useState('light');

  const theme = createTheme({
    palette:{...palette,mode:mode},
  });

  const colorMode = useMemo(
    () => ({
      toggleMode: () => {
        setMode(prevMode => prevMode === 'light'? 'dark' : 'light')
      }
    }),
  );
  const isAuth = useSelector((state => state.authReducer.isAuth))
  return (
    <ThemeProvider theme={theme}>
      <Loading />
      <AppState>
    <CssBaseline />
    <>
      <Box sx={{ display: "flex" }}>
        {
          isAuth && (
            <ClippedDrawer />
          )
        }
        <ButtonAppBar  switchColorMode = {colorMode.toggleMode}/>
        {children}
      </Box>
    </>
    </AppState>
   </ThemeProvider>
  );
}
