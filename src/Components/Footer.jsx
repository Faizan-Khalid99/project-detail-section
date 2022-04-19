import React from "react";
import {
  styled,
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
import { FONT_WEIGHT } from "../Theme/theme";
import FooterLogo from "../Assets/FooterLogo.svg";
import twitterIcon from "../Assets/twitterfooter.svg";
import discordIcon from "../Assets/discordfooter.svg";
import facebookIcon from "../Assets/facebookFooter.svg";
import instagramIcon from "../Assets/instagramfooter.svg";
import linkedinIcon from "../Assets/linkedInFooter.svg";
import telegramIcon from "../Assets/telegramFooter.svg";
import tiktokIcon from "../Assets/tiktokIcon.svg";
import youtubeIcon from "../Assets/youtubefooter.png";
import MIcon from "../Assets/M-Footer.svg";
const AppFooter = styled("div")(({ theme }) => ({
  background: theme.palette.dark.footer,
  color: theme.palette.dark.contrastText,
  padding: "61px",
  paddingBottom: "20px",
  marginTop: "89px",
}));
const FooterHeading = styled(Typography)(({ theme }) => ({
  color: theme.palette.dark.contrastText,
  fontWeight: FONT_WEIGHT.bold,
  fontSize: "1rem",
  lineHeight: "1.25rem",
}));
const CustomLink = styled(Link)({
  textDecoration: "none",
  fontWeight: FONT_WEIGHT.regular,
  color: "#fff",
  opacity: "0.8",
  marginBottom: "12px",
});
const BorderFooter = styled("div")({
  border: "1px solid rgba(255,255,255,0.1)",
  marginTop: "56px",
  paddingLeft: 0,
  paddingRight: 0,
});
const PageEnd = styled(Typography)(({ theme }) => ({
  color: theme.palette.dark.contrastText,
  marginTop: "20px",
}));

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <AppFooter>
      <Container fixed>
        <Grid container spacing={2}>
          <Grid item lg={2} md={3} sm={12} xs={12}>
            <img src={FooterLogo} alt="Footer Logo" />
          </Grid>
          <Grid item lg={2} md={2} sm={4} xs={6}>
            <Box ml={10}>
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
          <Grid item lg={2} md={2} sm={4} xs={12}>
            <Box ml={10}>
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
          <Grid item md={3} sm={12} ml={isMobile ? 2 : 0}>
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
                <img src={telegramIcon} alt="telegram" />
              </Link>
              <Link href="/">
                <img src={twitterIcon} alt="twitter" />
              </Link>
              <Link href="/">
                <img src={MIcon} alt="M" />
              </Link>
              <Link href="/">
                <img src={youtubeIcon} alt="youtube" />
              </Link>
              <Link href="/">
                <img src={discordIcon} alt="discord" />
              </Link>
              <Link href="/">
                <img src={instagramIcon} alt="instagram" />
              </Link>
              <Link href="/">
                <img src={linkedinIcon} alt="linkedin" />
              </Link>
              <Link href="/">
                <img src={facebookIcon} alt="fb" />
              </Link>
              <Link href="/">
                <img src={tiktokIcon} alt="tiktok" />
              </Link>
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <BorderFooter />
      <PageEnd variant="subtitle1" align="center">
        © GAINS Associates
      </PageEnd>
    </AppFooter>
  );
};

export default Footer;
