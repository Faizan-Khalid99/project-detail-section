import React from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  Stack,
  Link,
  Button,
} from "@mui/material";
import CeloIcon from "../Assets/CeloIcon.svg";
import telegramIcon from "../Assets/telegramIcon.svg";
import TwitterIcon from "../Assets/TwitterIcon.svg";
import TwitterBookIcon from "../Assets/TwitterBookIcon.svg";
import webIcon from "../Assets/webIcon.svg";
import infoIcon from "../Assets/infoIcon.svg";
const MainContent = () => {
  return (
    <Box mt="40px">
      <Container fixed>
        <Typography variant="h1" color="primary">
          Project{" "}
          <Typography variant="h1" component="span" color="secondary">
            Detail
          </Typography>
        </Typography>
        <Grid mt="40px" container spacing={3}>
          <Grid item md={1}>
            <img src={CeloIcon} alt="Celo Icon" />
          </Grid>
          <Grid item md={7}>
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
                <Link>
                  <img src={webIcon} alt="web" />{" "}
                </Link>
                <Link>
                  <img src={telegramIcon} alt="telegramIcon" />{" "}
                </Link>
                <Link>
                  <img src={TwitterIcon} alt="TwitterIcon" />{" "}
                </Link>
                <Link>
                  <img src={TwitterBookIcon} alt="TwitterBook" />{" "}
                </Link>
              </Stack>
              <Box mt={6.75}>
                <Button variant="contained" color="info">
                  Get Whitelisted
                </Button>

                <img src={infoIcon} alt="infoIcon" />
                <Typography variant="body2" component="span">
                  {" "}
                  Please connect your wallet.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item md={4}>
            To be made...
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MainContent;
