import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { themeSettings } from "@/theme";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "@/scenes/dashboard";
import Login from "@/scenes/login";

function App() {
  const theme = useMemo(() => createTheme(themeSettings), [])
  return (
      <div className="app">
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box width="100%" height="100%" padding="0.5rem">
              <Routes>
                <Route path="/login" element={<Login />}/>
                <Route path="/" element={<Dashboard />}/>
              </Routes>
            </Box>
          </ThemeProvider>
        </BrowserRouter>
      </div>
  )
}

export default App
