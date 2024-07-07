import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Hidden from "@mui/material/Hidden";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar";
import Add from "./components/Add";
import { SnackbarProvider } from "notistack";
import { CssBaseline } from "@mui/material";
import { useState } from "react";
//import { theme } from "./theme";

function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <SnackbarProvider
        maxSnack={3}
        autoHideDuration={2000}
      >
        <Box
          bgcolor={"background.default"}
          color={"text.primary"}
        >
          <Navbar />
          <Stack
            direction="row"
            spacing={1}            
            justifyContent="space-between"
          >
            <Sidebar
              setMode={setMode}
              mode={mode}
            />
            <Hidden only={["xs", "sm"]}>
              <Feed />
            </Hidden>

            <Hidden only={["xs", "sm"]}>
              <Rightbar />
            </Hidden>
          </Stack>

          <Add />
        </Box>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
