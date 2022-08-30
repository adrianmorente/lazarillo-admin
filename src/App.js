import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box } from '@mui/material';
import Header from "./components/Header";
import Robots from "./components/Robots";
import AboutView from "./components/About"

const appTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {

  return (
    <BrowserRouter>
      <ThemeProvider theme={appTheme}>
        <Box sx={{ display: 'flex' }}>
          <Header />
          <Routes>
            <Route exact path="/" element={<Robots />} />
            <Route exact path="/robots" element={<Robots />} />
            <Route exact path="/about" element={<AboutView />} />
          </Routes>
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
