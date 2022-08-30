import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box, CssBaseline } from '@mui/material';
import Header from "./components/Header";
import Robots from "./components/Robots";
import AboutView from "./components/About";
import { store } from "./redux/store";
import { Provider } from "react-redux";

const appTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={appTheme}>
        <CssBaseline>
          <Box sx={{ display: 'flex' }}>
            <Provider store={store}>
              <Header />
              <Routes>
                <Route exact path="/" element={<Robots />} />
                <Route exact path="/about" element={<AboutView />} />
              </Routes>
            </Provider>
          </Box>
        </CssBaseline>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
