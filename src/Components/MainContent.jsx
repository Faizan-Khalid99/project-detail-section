import React from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  Stack,
  Link,
  Button,
  LinearProgress,
  styled,
} from "@mui/material";
import { FONT_WEIGHT, colors } from "../Theme/theme";

import CeloIcon from "../Assets/CeloIcon.svg";
import telegramIcon from "../Assets/telegramIcon.svg";
import TwitterIcon from "../Assets/TwitterIcon.svg";
import TwitterBookIcon from "../Assets/TwitterBookIcon.svg";
import webIcon from "../Assets/webIcon.svg";
import infoIcon from "../Assets/infoIcon.svg";
const ProgressHeading = styled(Typography)({
  fontWeight: FONT_WEIGHT.bold,
  fontSize: "20px",
  lineHeight: "150%",
  color: colors.slateGrey,
});

const RaiseHeading = styled(Typography)({
  fontWeight: FONT_WEIGHT.bold,
  fontSize: "20px",
  lineHeight: "150%",
  color: colors.slateGrey,
  marginTop: "27px",
});
const LaunchHeading = styled(Typography)({
  fontWeight: FONT_WEIGHT.bold,
  fontSize: "20px",
  lineHeight: "150%",
  color: colors.slateGrey,
  marginTop: "24px",
});
const RemainingTime = styled(Typography)({
  fontWeight: FONT_WEIGHT.bold,
  fontSize: "20px",
  lineHeight: "112.27%",
  marginTop: "8px",
  paddingBottom: "24px",
  color: colors.swamp,
});
const StyledProgressBar = styled(LinearProgress)(({ theme }) => ({
  width: "100px",
  height: "8px",
  borderRadius: "16px",
  color: theme.palette.primary.main,
  marginTop: "3px",
  marginRight: "11px",
}));
const ProgressSection = styled(Box)({
  border: "1px solid rgba(0, 0, 0, 0.1)",
  width: "184px",
  height: "270px",
  borderRadius: "8px",
  padding: "24px",
});

const MainContent = () => {
  return (
    <Box mt="40px" sx={{ borderBottom: "1px solid rgba(0, 0, 0, 0.12)" }}>
      <Container fixed>
        <Typography variant="h1" color="primary">
          Project{" "}
          <Typography variant="h1" component="span" color="secondary">
            Detail
          </Typography>
        </Typography>
        <Grid mt="40px" mb="40px" container spacing={6}>
          <Grid item md={1}>
            <img src={CeloIcon} alt="Celo Icon" />
          </Grid>
          <Grid item md={8}>
            <Box ml={3}>
              <Typography variant="h2" color="secondary">
                Celo
              </Typography>
              <Typography variant="body1">
                Celo is a blockchain ecosystem focused on increasing
                cryptocurrency <br /> adoption among smartphone users. By using
                phone numbers as public keys.{" "}
              </Typography>
              <Stack mt={3} direction="row" spacing={1}>
                <Link href="">
                  <img src={webIcon} alt="web" />{" "}
                </Link>
                <Link href="">
                  <img src={telegramIcon} alt="telegramIcon" />{" "}
                </Link>
                <Link href="">
                  <img src={TwitterIcon} alt="TwitterIcon" />{" "}
                </Link>
                <Link href="">
                  <img src={TwitterBookIcon} alt="TwitterBook" />{" "}
                </Link>
              </Stack>
              <Box mt={6.75} sx={{ display: "inline-flex" }}>
                <Button
                  variant="contained"
                  color="info"
                  sx={{
                    marginRight: "28px",
                  }}
                >
                  Get Whitelisted
                </Button>

                <img src={infoIcon} alt="infoIcon" />
                <Typography
                  sx={{ marginTop: "11px", marginLeft: "12px" }}
                  variant="body1"
                  component="span"
                >
                  Please connect your wallet.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item md={3}>
            <ProgressSection>
              <ProgressHeading>Progress</ProgressHeading>

              <Box sx={{ display: " inline-flex" }}>
                <StyledProgressBar variant="determinate" value={55} />
                <Typography
                  variant="subtitle1"
                  color="secondary"
                  component="span"
                >
                  55%
                </Typography>
              </Box>
              <Box mt={3}>
                <RaiseHeading>Total Raise</RaiseHeading>
                <Typography variant="h4" color="primary">
                  $324
                </Typography>
                <Box mt={3}>
                  <LaunchHeading>Launching</LaunchHeading>
                  <RemainingTime>1D 12H 35M</RemainingTime>
                </Box>
              </Box>
            </ProgressSection>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MainContent;
