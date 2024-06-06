import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import DarkLogo from "../../assets/dark-logo.svg";
import LightLogo from "../../assets/light-logo.svg";
import { Box, Avatar, IconButton, PaletteMode, useTheme } from "@mui/material";

interface Props {
	mode: PaletteMode;
	toggleMode: () => void;
}

export default function Header(props: Props) {
	const theme = useTheme();
	return (
		<Box
			display={"flex"}
			justifyContent={"space-between"}
			paddingLeft={10}
			paddingRight={4}
			paddingY={2.5}>
			<img
				src={theme.palette.mode === "dark" ? DarkLogo : LightLogo}
				alt="DsaViz Logo"
			/>
			<IconButton
				onClick={props.toggleMode}
				sx={{
					padding: 0,
					marginTop: 0,
					"&:hover": {
						backgroundColor: "transparent",
					},
				}}>
				<Avatar
					sx={{
						padding: 3,
						"&:hover": {
							backgroundColor: "background.default",
							boxShadow: 8,
						},
						bgcolor: "primary.main",
						boxShadow: 3,
					}}>
					<LightModeIcon
						sx={{ fontSize: 22, color: "text.primary" }}
					/>
				</Avatar>
			</IconButton>
		</Box>
	);
}
