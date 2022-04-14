import React from "react";
import Header from "./Components/Header";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "./Theme/theme";
import SubHeader from "./Components/SubHeader";
import MainContent from "./Components/MainContent";
import Team from "./Components/Team";
import Footer from "./Components/Footer";
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      {/* <CssBaseline /> */}
      <Header />
      <SubHeader />
      <MainContent />
      <Team />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
