import { createTheme } from "@mui/material";

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
  footer: "#163D53",
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
    dark: {
      main: colors.swamp,
      contrastText: colors.white,
      footer: colors.footer,
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
      [defaultTheme.breakpoints.down("md")]: {
        "& br": {
          display: "none",
        },
      },
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
      fontWeight: FONT_WEIGHT.regular,
      lineHeight: "0.938rem",
      color: colors.swamp,
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
        {
          props: {
            variant: "btnTextOutline",
          },
          style: {
            fontSize: "12px",
            lineHeight: "24px",
            fontWeight: FONT_WEIGHT.bold,
            fontFamily: FONT_FAMILY.Oxygen,
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
          paddingTop: "10px",
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
      variants: [
        {
          props: {
            variant: "disabled",
          },
          style: {
            backgroundColor: colors.white,
            color: colors.slateGrey,
            border: "1px solid rgba(0, 0, 0, 0.1)",
            textTransform: "none",
            fontSize: "16px",
            fontWeight: FONT_WEIGHT.bold,
            lineHeight: "24px",
            borderRadius: "36px",
          },
        },
      ],
      styleOverrides: {
        containedPrimary: {
          width: "121px",
          height: "32px",
          padding: "9px 16px 8px 16px",
          borderRadius: "23px",
          textTransform: "none",
          boxShadow: "none",
          [defaultTheme.breakpoints.down("md")]: {
            display: "none",
          },
        },
        containedInfo: {
          width: "211px",
          height: "48px",
          backgroundColor: colors.Solitude,
          borderRadius: "78px",
          textTransform: "none",
          boxShadow: "none",
          color: colors.slateGrey,
          fontFamily: FONT_FAMILY.Oxygen,
          "&:hover": {
            backgroundColor: colors.Solitude,
            color: colors.slateGrey,
          },
        },
        containedDark: {
          borderRadius: "36px",
          padding: "12px 24px",
          textTransform: "none",
          fontWeight: FONT_WEIGHT.bold,
          fontSize: "16px",
          lineHeight: "24px",
          color: colors.white,
          width: "90px",
          height: "48px",
        },
        outlinedSecondary: {
          width: "186px",
          height: "32px",
          padding: "4px 12px 4px 12px",
          borderRadius: "61px",
          textTransform: "none",
          border: "rgba(0, 0, 0, 0.2) solid 1px",
          [defaultTheme.breakpoints.down("md")]: {
            height: "70px",
            borderRadius: "12px",
          },
        },
      },
    },
    MuiAvatar: {
      "& .MuiAvatar-img": {
        width: "40px",
        height: "60px",
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          width: "166px",
          height: "223px",
          borderRadius: "24px",
          border: "1px solid rgba(17, 48, 45, 0.1)",
          background: colors.white,
          boxShadow: "none",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: "4px",
          padding: "12px, 16px",
          width: "234px",
          height: "48px",
          color: colors.white,
          "& label": {
            color: "#fff",
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          color: colors.white,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: colors.white,
          border: "1px solid #2a4e62",
          "&::placeholder": {
            color: colors.white,
          },
          "&::focus": {
            border: "1px solid #2a4e62",
          },
        },

        "&::hover": {
          border: "0.1px solid #2a4e62",
        },
      },
    },
  },
});
