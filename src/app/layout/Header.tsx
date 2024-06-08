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
		<Box sx={styles.box}>
			<Button sx={styles.logoButton} onClick={() => navigate("/")}>
				<img
					src={theme.palette.mode === "dark" ? DarkLogo : LightLogo}
					alt="DsaViz Logo"
				/>
			</Button>

			<IconButton onClick={props.toggleMode} sx={styles.themeButton}>
				<Avatar sx={styles.avatar}>
					{theme.palette.mode === "dark" ? (
						<LightModeIcon sx={styles.themeIcon} />
					) : (
						<DarkModeIcon sx={styles.themeIcon} />
					)}
				</Avatar>
			</IconButton>
		</Box>
	);
}

const styles = {
	box: {
		paddingLeft: 13,
		paddingRight: 8,
		paddingY: 1,
		display: "flex",
		justifyContent: "space-between",
	},
	logoButton: {
		padding: 0,
	},
	themeButton: {
		padding: 0,
		marginTop: 0.5,
		"&:hover": {
			backgroundColor: "transparent",
		},
	},
	avatar: {
		padding: 3,
		"&:hover": {
			backgroundColor: "background.default",
			boxShadow: 8,
		},
		bgcolor: "primary.main",
		boxShadow: 3,
	},
	themeIcon: {
		fontSize: 22,
		color: "text.primary",
	},
};
