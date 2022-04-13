import React from "react";
import Header from "./Components/Header";
import { ThemeProvider } from "@mui/material";
import { theme } from "./Theme/theme";
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
};

export default App;
