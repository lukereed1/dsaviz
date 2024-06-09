/* eslint-disable no-mixed-spaces-and-tabs */
import { PaletteMode } from "@mui/material";

export const getDesignTokens = (mode: PaletteMode) => ({
	palette: {
		mode,
		...(mode === "dark"
			? {
					primary: {
						main: "#2C2C2E",
					},
					secondary: {
						main: "#FE971D",
					},
					background: {
						default: "#1C1C1E",
					},
					text: {
						primary: "#FFFFFF",
						secondary: "#000000",
					},
			  }
			: {
					primary: {
						main: "#E0E0E0",
					},
					secondary: {
						main: "#9800F6",
					},
					background: {
						default: "#EDEDED",
					},
					text: {
						primary: "#000000",
						secondary: "#FFFFFF",
					},
			  }),
	},
	typography: {
		fontFamily: "VT323, sans-serif",
		fontWeightRegular: 400,
	},
});
