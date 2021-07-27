import { useState } from "react";
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  useMediaQuery,
} from "@material-ui/core";
import Journal from "./Journal/Journal";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [darkMode, setDarkMode] = useState(prefersDarkMode);

  const theme = createTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Journal darkMode={darkMode} setDarkMode={setDarkMode} />
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
