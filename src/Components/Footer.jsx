import React from "react";
import {
  styled,
  Typography,
  Grid,
  Container,
  TextField,
  Link,
  InputAdornment,
  InputLabelProps,
  Box,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { FONT_WEIGHT } from "../Theme/theme";
import FooterLogo from "../Assets/FooterLogo.svg";
const AppFooter = styled("div")(({ theme }) => ({
  background: theme.palette.dark.footer,
  color: theme.palette.dark.contrastText,
  padding: "61px",
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
const Footer = () => {
  return (
    <AppFooter>
      <Container fixed>
        <Grid container spacing={0}>
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
              <Typography variant="body2" gutterBottom>
                <CustomLink href="/">Submit your Project</CustomLink>
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={1} md={1} sm={4}></Grid>
          <Grid item lg={2} md={2} sm={4} xs={6}>
            <Box ml={10}>
              <FooterHeading gutterBottom>Help</FooterHeading>
              <Typography variant="body2" gutterBottom>
                <CustomLink href="/">Support</CustomLink>
              </Typography>
              <Typography variant="body2" gutterBottom>
                <CustomLink href="/">About</CustomLink>
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
          <Grid item md={3} sm={12}>
            <FooterHeading gutterBottom>Subscribe</FooterHeading>
            <TextField
              variant="outlined"
              sx={{
                "& label": {
                  color: "#fff",
                },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <KeyboardArrowRightIcon style={{ color: "#fff" }} />
                  </InputAdornment>
                ),
              }}
              label="Enter Email"
            />
          </Grid>
        </Grid>
      </Container>
    </AppFooter>
  );
};

export default Footer;
