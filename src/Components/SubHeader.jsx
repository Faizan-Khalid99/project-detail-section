import React from "react";
import { Container, Button, Box, Typography } from "@mui/material";
import WarningIcon from "../Assets/WarningIcon.svg";
const SubHeader = () => {
  return (
    <Container fixed maxWidth="md">
      <Box
        sx={{
          display: "flex",
          marginTop: "24px",
          paddingBottom: "46px",
          borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
        }}
      >
        <Button variant="outlined" color="secondary">
          <Typography variant="btnTextOutline">Connect to a Wallet</Typography>
        </Button>
        <Box
          sx={{
            marginLeft: "30px",
            marginTop: "1px",
            width: "24px",
            height: "21.12px",
          }}
        >
          <img src={WarningIcon} alt="warning icon" />
        </Box>
      </Box>
    </Container>
  );
};

export default SubHeader;
