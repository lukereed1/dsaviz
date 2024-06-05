import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Logo from "../../assets/logo.svg";
import { Box, Avatar, IconButton } from "@mui/material";

export default function Header() {
	return (
		<>
			<Box
				display={"flex"}
				justifyContent={"space-between"}
				paddingLeft={12}
				paddingRight={4}
				paddingY={2}>
				<img src={Logo} alt="DsaViz Logo" />
				<IconButton sx={{ "&:hover": { backgroundColor: "transparent" } }}>
					<Avatar sx={{ padding: 3, bgcolor: "primary.main" }}>
						<LightModeIcon sx={{ fontSize: 22, color: "white" }} />
					</Avatar>
				</IconButton>
			</Box>
		</>
	);
}
