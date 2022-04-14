import React from "react";
import Header from "./Components/Header";
import { ThemeProvider } from "@mui/material";
import { theme } from "./Theme/theme";
import SubHeader from "./Components/SubHeader";
import MainContent from "./Components/MainContent";
import Team from "./Components/Team";
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <SubHeader />
      <MainContent />
      <Team />
    </ThemeProvider>
  );
};

export default App;
