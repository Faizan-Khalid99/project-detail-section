import React from "react";
import {
  Typography,
  Grid,
  Container,
  TextField,
  Link,
  InputAdornment,
  Box,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { ReactComponent as TwitterIcon } from "../Assets/twitterfooter.svg";
import { ReactComponent as DiscordIcon } from "../Assets/discordfooter.svg";
import { ReactComponent as FacebookIcon } from "../Assets/facebookFooter.svg";
import { ReactComponent as InstagramIcon } from "../Assets/instagramfooter.svg";
import { ReactComponent as LinkedinIcon } from "../Assets/linkedInFooter.svg";
import { ReactComponent as TelegramIcon } from "../Assets/telegramFooter.svg";
import { ReactComponent as TiktokIcon } from "../Assets/tiktokIcon.svg";
import { ReactComponent as YoutubeIcon } from "../Assets/YoutubeIcon.svg";
import { ReactComponent as MIcon } from "../Assets/M-Footer.svg";
import FooterLogo from "../Assets/FooterLogo.svg";
import {
  AppFooter,
  FooterHeading,
  CustomLink,
  BorderFooter,
  PageEnd,
} from "./StyledComponents/AppFooter";
const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <AppFooter>
      <Container disableGutters={isMobile ? true : false} fixed>
        <Grid container spacing={2}>
          <Grid item lg={2} md={3} sm={12} xs={12}>
            <img src={FooterLogo} alt="Footer Logo" />
          </Grid>
          <Grid item lg={2} md={2} sm={4} xs={6}>
            <Box ml={isMobile ? 0 : 10}>
              <FooterHeading gutterBottom>Company</FooterHeading>
              <Typography variant="body2" gutterBottom>
                <CustomLink href="/">Careers</CustomLink>
              </Typography>
              <Typography variant="body2" gutterBottom>
                <CustomLink href="/">About</CustomLink>
              </Typography>
              <Typography variant="body2" gutterBottom>
                <CustomLink href="/">Private Sales</CustomLink>
              </Typography>
              <Typography variant="body2">
                <CustomLink href="/">Submit Project</CustomLink>
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={1} md={1} sm={4}></Grid>
          <Grid item lg={2} md={2} sm={4} xs={6}>
            <Box ml={isMobile ? 0 : 10}>
              <FooterHeading gutterBottom>Help</FooterHeading>
              <Typography variant="body2" gutterBottom>
                <CustomLink href="/">Support</CustomLink>
              </Typography>
              <Typography variant="body2" gutterBottom>
                <CustomLink href="/">Privacy Policy</CustomLink>
              </Typography>
              <Typography variant="body2" gutterBottom>
                <CustomLink href="/">Cookie Policy</CustomLink>
              </Typography>
              <Typography variant="body2" gutterBottom>
                <CustomLink href="/">Lightpaper</CustomLink>
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={2} md={1} sm={4} xs={12}></Grid>
          <Grid item md={3} sm={6} ml={0}>
            <FooterHeading gutterBottom>Subscribe</FooterHeading>
            <TextField
              sx={{ marginTop: "16px" }}
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <KeyboardArrowRightIcon style={{ color: "#fff" }} />
                  </InputAdornment>
                ),
              }}
              color="darkBgText"
              label="Enter Email"
            />

            <Stack direction="row" mt={4} spacing={1.5}>
              <Link href="/">
                <TelegramIcon />
              </Link>
              <Link href="/">
                <TwitterIcon />
              </Link>
              <Link href="/">
                <MIcon />
              </Link>
              <Link href="/">
                <YoutubeIcon />
              </Link>
              <Link href="/">
                <DiscordIcon />
              </Link>
              <Link href="/">
                <InstagramIcon />
              </Link>
              <Link href="/">
                <LinkedinIcon />
              </Link>
              <Link href="/">
                <FacebookIcon />
              </Link>
              <Link href="/">
                <TiktokIcon />
              </Link>
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <BorderFooter />
      <PageEnd variant="subtitle1" align="center">
        ?? GAINS Associates
      </PageEnd>
    </AppFooter>
  );
};

export default Footer;
