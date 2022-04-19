import React from "react";
import {
  Container,
  Button,
  Box,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Stepper, Step } from "react-mui-stepper";
import WarningIcon from "../Assets/WarningIcon.svg";
import "./stepper.css";
const SubHeader = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery("md");
  return (
    <Box component="div" sx={{ borderBottom: "1px solid rgba(0, 0, 0, 0.12)" }}>
      <Container fixed maxWidth="md">
        <Box
          sx={{
            display: "flex",
            marginTop: "24px",
          }}
        >
          <Button variant="outlined" color="secondary">
            <Typography variant="btnTextOutline">
              Connect to a Wallet
            </Typography>
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
          <Box sx={{ width: "100%", marginTop: "-30px", marginLeft: "-80px" }}>
            <Stepper withNumbers activeStep={-1}>
              <Step>
                <Typography variant="subtitle1">Lock Tokens</Typography>
              </Step>
              <Step>
                <Typography variant="subtitle1">Learn</Typography>
              </Step>
              <Step>
                <Typography variant="subtitle1">Spread the Word</Typography>
              </Step>
              <Step>
                <Typography variant="subtitle1">Wait for Results</Typography>
              </Step>
            </Stepper>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SubHeader;
