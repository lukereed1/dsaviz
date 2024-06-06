import { ThemeProvider } from "@emotion/react";
import { getDesignTokens } from "./app/theme/theme";
import {
	Box,
	Container,
	CssBaseline,
	PaletteMode,
	createTheme,
} from "@mui/material";
import HomePage from "./pages/home/HomePage";
import Header from "./app/layout/Header";
import SideMenu from "./app/layout/SideMenu";
import Footer from "./app/layout/Footer";
import { useMemo, useState } from "react";

export default function App() {
	const [mode, setMode] = useState<PaletteMode>("dark");

	function toggleMode() {
		console.log("secondary.main");
		setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
	}

	const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />

			<Box display={"flex"} minHeight={"100vh"} flexDirection={"column"}>
				<SideMenu />
				<Header mode={mode} toggleMode={toggleMode} />
				<Container sx={{ flex: 1, mt: 3 }}>
					<HomePage />
				</Container>
				<Footer />
			</Box>
		</ThemeProvider>
	);
}
