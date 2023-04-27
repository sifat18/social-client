import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Profile } from "./pages/profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
// import { Nav } from "./component/Nav";
function App() {

  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <>
      <div className="app">
        <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/profile/:userId" element={<Profile />}></Route>
          </Routes>
          </ThemeProvider>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
