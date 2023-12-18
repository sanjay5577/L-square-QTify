import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins"
  },
  palette: {
    primary: {
      main: "#34C94B"
    },
    secondary: {
        main: "#121212"
      },
      tertiary: {
        main: "#ffffff"
      },
  },
  
});

export default theme;