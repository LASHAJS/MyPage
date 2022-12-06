
import {colors} from "../styles/colors"

export  const palette = {
    primary: {
      light: colors.primary_light,
      main: colors.primary,
      dark: colors.primary_dark,
    },
    secondary: {
      light: colors.secondary_light,
      main: colors.secondary,
      dark: colors.secondary_dark,
    }
  };

  const appTheme = {
    components: {
      MuiAppBar: {
        styleOverrides: {
          root:{
            boxShadow: 'none'
          }
        }
      }
    }

  }

  export default appTheme;

