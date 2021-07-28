import { useEffect, useState } from "react";
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  useMediaQuery,
} from "@material-ui/core";
import purple from "@material-ui/core/colors/purple";
import blue from "@material-ui/core/colors/blue";
import { indigo } from "@material-ui/core/colors";
import Journal from "./Journal/Journal";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [darkMode, setDarkMode] = useState(prefersDarkMode);

  useEffect(() => {
    setDarkMode(prefersDarkMode);
  }, [prefersDarkMode]);

  const theme = createTheme({
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {},
      secondary: {
        main: indigo["50"],
      },
      background: {
        main: "#b3e5fc",
      },
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
