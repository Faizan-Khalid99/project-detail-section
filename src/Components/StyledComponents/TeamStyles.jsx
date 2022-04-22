import { Typography, Box, styled, Avatar, createTheme } from "@mui/material";
import { colors, FONT_WEIGHT } from "../../Theme/theme";

export const theme = createTheme();
export const ButtonSection = styled(Box)({
  marginTop: "52px",
});
export const TeamHeading = styled(Typography)({
  marginTop: "52px",
});
export const TeamMemberSection = styled(Box)({
  backgroundColor: colors.aliceBlue,
  borderRadius: "20px",
  padding: "40px",
  marginTop: "32px",
  width: "fit-content",
  [theme.breakpoints.down("sm")]: {
    padding: "10px",
  },
});
export const CustomAvatar = styled(Avatar)({
  width: "80px",
  height: "76px",
  marginTop: "24px",
  marginLeft: "43px",
  [theme.breakpoints.down("md")]: {
    width: "23.39px",
    height: "22.2px",
    marginTop: "10px",
    marginLeft: "12px",
    marginBottom: "0px",
  },
});
export const Designation = styled(Typography)({
  fontWeight: FONT_WEIGHT.bold,
  fontSize: "12px",
  lineHeight: "15.15px",
  marginTop: "8px",
  [theme.breakpoints.down("md")]: {
    marginTop: "-10px",
  },
});
