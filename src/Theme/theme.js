import { createTheme } from "@mui/material";
import { fontFamily } from "@mui/system";

const defaultTheme = createTheme();

const FONT_FAMILY = {
  Oxygen: "Oxygen, sans-serif",
};

export const FONT_WEIGHT = {
  light: 300,
  regular: 400,
  medium: 500,
  semi: 600,
  bold: 700,
};

export const colors = {
  aliceBlue: "#ECF0F3",
  hawkersBlue: "#C6D7EB",
  rockBlue: "#8CA2B7",
  slateGrey: "#6B8299",
  Solitude: "#E3E6EC",
  puertoRico: "#3EB8AA",
  shamRock: "#22DBB5",
  brightTurqoise: "#09F9BF",
  swamp: "#11302D",
  white: "#FFFFFF",
  darkSlate: "#415957",
  loss: "#EC4949 ",
};

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.shamRock,
    },
    secondary: {
      main: colors.swamp,
    },
    darkBgText: {
      main: colors.white,
    },
  },
  spacing: 8,
  typography: {
    fontFamily: FONT_FAMILY.Oxygen,
    h1: {
      fontSize: "3.5rem",
      fontWeight: FONT_WEIGHT.bold,
      lineHeight: "3.9rem",
      [defaultTheme.breakpoints.down("md")]: {
        fontSize: "2rem",
        lineHeight: "2.375rem",
      },
    },
    h2: {
      fontSize: "2rem",
      fontWeight: FONT_WEIGHT.bold,
      lineHeight: "2.25rem",
      [defaultTheme.breakpoints.down("md")]: {
        fontSize: "1.5rem",
        lineHeight: "2.25rem",
      },
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: FONT_WEIGHT.bold,
      lineHeight: "1.68rem",
      [defaultTheme.breakpoints.down("md")]: {
        fontSize: "1rem",
        lineHeight: "1.5rem",
      },
    },
    h4: {
      fontSize: "1.25rem",
      fontWeight: FONT_WEIGHT.bold,
      lineHeight: "1.87rem",
    },
    h5: {
      fontSize: "1.125rem",
      fontWeight: FONT_WEIGHT.bold,
      lineHeight: "1.56rem",
    },
    h6: {
      fontSize: "1rem",
      fontWeight: FONT_WEIGHT.bold,
      lineHeight: "1.5rem",
    },
    body1: {
      fontSize: "1rem",
      fontWeight: FONT_WEIGHT.regular,
      lineHeight: "1.5rem",
      color: "rgba(17, 48, 45, 0.8)",
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: FONT_WEIGHT.regular,
      lineHeight: "1.5rem",
    },
    subtitle1: {
      fontSize: "0.75rem",
      fontWeight: FONT_WEIGHT.bold,
      lineHeight: "0.938rem",
    },
  },

  components: {
    MuiTypography: {
      styleOverrides: {
        colorTextWhite: {
          color: colors.white,
        },
      },
      variants: [
        {
          props: {
            variant: "btnTextHeader",
          },
          style: {
            fontFamily: FONT_FAMILY.Oxygen,
            fontWeight: FONT_WEIGHT.bold,
            fontSize: "12px",
            lineHeight: "15.15px",
            color: colors.white,
          },
        },
      ],
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: "1192px",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: colors.white,
          boxShadow: "none",
          borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        gutters: {
          paddingLeft: "0",
          paddingRight: "0",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          width: "121px",
          height: "32px",
          padding: "9px 16px 8px 16px",
          borderRadius: "23px",
          textTransform: "none",
        },
      },
    },
    MuiAvatar: {
      "& .MuiAvatar-img": {
        width: "40px",
        height: "60px",
      },
    },
  },
});
