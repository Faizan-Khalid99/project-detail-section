import { styled, Typography, Link } from "@mui/material";
import { FONT_WEIGHT } from "../../Theme/theme";

export const AppFooter = styled("div")(({ theme }) => ({
  background: theme.palette.dark.footer,
  color: theme.palette.dark.contrastText,
  padding: "61px",
  paddingBottom: "20px",
  marginTop: "89px",
}));
export const FooterHeading = styled(Typography)(({ theme }) => ({
  color: theme.palette.dark.contrastText,
  fontWeight: FONT_WEIGHT.bold,
  fontSize: "1rem",
  lineHeight: "1.25rem",
}));
export const CustomLink = styled(Link)({
  textDecoration: "none",
  fontWeight: FONT_WEIGHT.regular,
  color: "#fff",
  opacity: "0.8",
  marginBottom: "12px",
});
export const BorderFooter = styled("div")({
  border: "1px solid rgba(255,255,255,0.1)",
  marginTop: "56px",
  paddingLeft: 0,
  paddingRight: 0,
});
export const PageEnd = styled(Typography)(({ theme }) => ({
  color: theme.palette.dark.contrastText,
  marginTop: "20px",
}));
