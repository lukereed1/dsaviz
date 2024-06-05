import { createTheme } from "@mui/material";

const theme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			main: "#2C2C2E",
		},
		secondary: {
			main: "#FE971D",
		},
		background: {
			default: "#1C1C1E",
		},
	},

	typography: {
		fontFamily: "VT323",
		fontWeightRegular: 400,
	},
});

export default theme;
