import { createTheme } from "@mui/material";


export const theme = createTheme({
  palette:{
    primary:{
      main: "#1760a5",
      light: "skyblue"
    },
    secondary:{
      main: '#15c630',
    },
    otherColor:{
      main:"#999"
    }
  },
  breakpoints: {
    values: {      
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    }
  }
})