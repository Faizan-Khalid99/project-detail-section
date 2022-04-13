import React from "react";
import Header from "./Components/Header";
import { ThemeProvider } from "@mui/material";
import { theme } from "./Theme/theme";
import SubHeader from "./Components/SubHeader";
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <SubHeader />
    </ThemeProvider>
  );
};

export default App;
