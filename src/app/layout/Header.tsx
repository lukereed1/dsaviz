import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Logo from "../../assets/logo.svg";
import { Box, Avatar, IconButton } from "@mui/material";

export default function Header() {
	return (
		<Box
			display={"flex"}
			justifyContent={"space-between"}
			paddingLeft={10}
			paddingRight={4}
			paddingY={2.5}>
			<img src={Logo} alt="DsaViz Logo" />
			<IconButton
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
							boxShadow: 10,
						},
						bgcolor: "primary.main",
						boxShadow: 3,
					}}>
					<LightModeIcon sx={{ fontSize: 22, color: "white" }} />
				</Avatar>
			</IconButton>
		</Box>
	);
}
