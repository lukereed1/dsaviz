import { ThemeProvider } from "@emotion/react";
import theme from "./app/theme/theme";
import { CssBaseline } from "@mui/material";
import HomePage from "./pages/home/HomePage";
import Header from "./app/layout/Header";
import SideMenu from "./app/layout/SideMenu";

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<SideMenu />
			<Header />
			<HomePage />
		</ThemeProvider>
	);
}
