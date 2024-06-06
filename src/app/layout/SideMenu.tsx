import DataArrayIcon from "@mui/icons-material/DataArray";
import HomeIcon from "@mui/icons-material/Home";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import { Box, Divider, Drawer, List, ListItem } from "@mui/material";
import { useState } from "react";
import React from "react";
import NestedList from "../components/NestedList";

export default function SideMenu() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [dsMenuOpen, setDsMenuOpen] = useState(false);
	const [algoMenuOpen, setAlgoMenuOpen] = useState(false);

	function handleMenu() {
		setMenuOpen(!menuOpen);
	}

	function handleDsMenu() {
		setDsMenuOpen(!dsMenuOpen);
	}

	function handleAlgoMenu() {
		setAlgoMenuOpen(!algoMenuOpen);
	}

	const sideMenuItems = [
		{
			label: "Main Menu",
			path: "#",
			icon: <HomeIcon sx={{ fontSize: 20 }} />,
			nested: false,
		},
		{
			label: "Data Structures",
			path: "#",
			icon: <DataArrayIcon sx={{ fontSize: 20 }} />,
			nested: true,
			items: [
				{ label: "Array", path: "#" },
				{ label: "Linked List", path: "#" },
			],
			function: () => handleDsMenu(),
			open: dsMenuOpen,
		},
		{
			label: "Algorithms ",
			path: "#",
			icon: <AccountTreeIcon sx={{ fontSize: 20 }} />,
			nested: true,
			items: [
				{ label: "Quick Sort", path: "#" },
				{ label: "Merge Sort", path: "#" },
			],
			function: () => handleAlgoMenu(),
			open: algoMenuOpen,
		},
	];

	return (
		<>
			<Box
				onMouseEnter={handleMenu}
				sx={{
					position: "fixed",
					left: 0,
					top: 0,
					bottom: 0,
					width: 46,
					backgroundColor: "primary.main",
				}}>
				<List
					sx={{
						display: "flex",
						flexDirection: "column",
						marginTop: 1,
						gap: 1,
					}}>
					{sideMenuItems.map(({ label, icon }) => (
						<React.Fragment key={label}>
							<ListItem sx={{ justifyContent: "center" }}>
								{icon}
							</ListItem>
							<Divider />
						</React.Fragment>
					))}
				</List>
			</Box>
			<Drawer anchor="left" open={menuOpen}>
				<Box
					onMouseLeave={handleMenu}
					sx={{
						backgroundColor: "primary.main",
						justifyContent: "center",
						width: 250,
						height: "100%",
					}}>
					<NestedList menuItems={sideMenuItems} />
				</Box>
			</Drawer>
		</>
	);
}
