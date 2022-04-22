import { Box, Typography, LinearProgress, styled } from "@mui/material";
import { FONT_WEIGHT, colors } from "../../Theme/theme";

export const ProgressHeading = styled(Typography)({
  fontWeight: FONT_WEIGHT.bold,
  fontSize: "20px",
  lineHeight: "150%",
  color: colors.slateGrey,
});
export const RaiseHeading = styled(Typography)({
  fontWeight: FONT_WEIGHT.bold,
  fontSize: "20px",
  lineHeight: "150%",
  color: colors.slateGrey,
  marginTop: "27px",
});
export const LaunchHeading = styled(Typography)({
  fontWeight: FONT_WEIGHT.bold,
  fontSize: "20px",
  lineHeight: "150%",
  color: colors.slateGrey,
  marginTop: "24px",
});
export const RemainingTime = styled(Typography)({
  fontWeight: FONT_WEIGHT.bold,
  fontSize: "20px",
  lineHeight: "112.27%",
  marginTop: "8px",
  paddingBottom: "24px",
  color: colors.swamp,
});
export const StyledProgressBar = styled(LinearProgress)(({ theme }) => ({
  width: "100px",
  height: "8px",
  borderRadius: "16px",
  color: theme.palette.primary.main,
  marginTop: "3px",
  marginRight: "11px",
}));
export const ProgressSection = styled(Box)({
  border: "1px solid rgba(0, 0, 0, 0.1)",
  width: "184px",
  height: "270px",
  borderRadius: "8px",
  padding: "24px",
});
