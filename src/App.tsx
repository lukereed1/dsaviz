import { ThemeProvider } from "@emotion/react";
import theme from "./app/theme/theme";
import { Box, Container, CssBaseline } from "@mui/material";
import HomePage from "./pages/home/HomePage";
import Header from "./app/layout/Header";
import SideMenu from "./app/layout/SideMenu";
import Footer from "./app/layout/Footer";

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />

			<Box display={"flex"} minHeight={"100vh"} flexDirection={"column"}>
				<SideMenu />
				<Header />
				<Container sx={{ flex: 1, mt: 3 }}>
					<HomePage />
				</Container>
				<Footer />
			</Box>
		</ThemeProvider>
	);
}
