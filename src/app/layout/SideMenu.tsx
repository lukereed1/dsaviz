import DataArrayIcon from "@mui/icons-material/DataArray";
import HomeIcon from "@mui/icons-material/Home";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import { Box, Drawer, List, ListItem } from "@mui/material";
import { useState } from "react";

export default function SideMenu() {
	const [menuOpen, setMenuOpen] = useState(false);

	function handleMenu() {
		setMenuOpen(!menuOpen);
	}

	return (
		<>
			<Box
				onMouseEnter={handleMenu}
				sx={{
					position: "absolute",
					left: 0,
					height: "100%",
					width: 60,
					backgroundColor: "primary.main",
				}}>
				<List
					sx={{
						display: "flex",
						flexDirection: "column",
						marginTop: 3.5,
						gap: 1,
					}}>
					<ListItem sx={{ justifyContent: "center" }}>
						<HomeIcon sx={{ fontSize: 30 }} />
					</ListItem>
					<ListItem sx={{ justifyContent: "center" }}>
						<DataArrayIcon sx={{ fontSize: 30 }} />
					</ListItem>
					<ListItem sx={{ justifyContent: "center" }}>
						<AccountTreeIcon sx={{ fontSize: 30 }} />
					</ListItem>
				</List>
			</Box>
			<Drawer anchor="left" open={menuOpen}>
				<Box
					onMouseLeave={handleMenu}
					sx={{
						width: 250,
						height: "100%",
						backgroundColour: "primary.main",
					}}></Box>
			</Drawer>
		</>
	);
}
