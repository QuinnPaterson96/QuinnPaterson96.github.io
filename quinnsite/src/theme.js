import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          margin: '0 !important', // Remove all margins globally
          padding: '0 !important', // Optionally remove padding if needed
        },
      },
      defaultProps: {
        maxWidth: false, // Change default maxWidth to 'md' (960px)
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          marginLeft: '2rem', // Remove all margins globally
          marginRight: '2rem', // Optionally remove padding if needed
        },
        h2: {
          fontSize: "2.5rem",
          color: "black",
        },
        h3: {
          fontSize: "2rem",
          color: "black",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#000000", // Green
    },
    secondary: {
      main: "#ffffff", // Orange
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
});

export default theme;