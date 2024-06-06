import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import DarkLogo from "../../assets/dark-logo.svg";
import LightLogo from "../../assets/light-logo.svg";
import {
	Box,
	Avatar,
	IconButton,
	PaletteMode,
	useTheme,
	Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

interface Props {
	mode: PaletteMode;
	toggleMode: () => void;
}

export default function Header(props: Props) {
	const theme = useTheme();
	const navigate = useNavigate();

	return (
		<Box
			paddingLeft={13}
			paddingRight={8}
			paddingY={1}
			display={"flex"}
			justifyContent={"space-between"}>
			<Button sx={{ padding: 0 }} onClick={() => navigate("/")}>
				<img
					src={theme.palette.mode === "dark" ? DarkLogo : LightLogo}
					alt="DsaViz Logo"
				/>
			</Button>

			<IconButton
				onClick={props.toggleMode}
				sx={{
					padding: 0,
					marginTop: 0.5,
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
					{theme.palette.mode === "dark" ? (
						<LightModeIcon
							sx={{ fontSize: 22, color: "text.primary" }}
						/>
					) : (
						<DarkModeIcon
							sx={{ fontSize: 22, color: "text.primary" }}
						/>
					)}
				</Avatar>
			</IconButton>
		</Box>
	);
}
