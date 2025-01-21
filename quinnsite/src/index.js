import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({

  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: "false", // Change default maxWidth to 'md' (960px)
      },
    },
    MuiTypography: {
      styleOverrides: {
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

// Use createRoot API
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


