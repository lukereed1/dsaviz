import DataArrayIcon from "@mui/icons-material/DataArray";
import HomeIcon from "@mui/icons-material/Home";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import { Box, Divider, Drawer, List, ListItem } from "@mui/material";
import { useState } from "react";
import React from "react";
import NestedList from "./MenuNestedList";

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
			path: "/dsaviz/menu",
			icon: <HomeIcon sx={{ fontSize: 20 }} />,
			nested: false,
		},
		{
			label: "Data Structures",
			path: "#",
			icon: <DataArrayIcon sx={{ fontSize: 20 }} />,
			nested: true,
			items: [
				{ label: "Array", path: "/dsaviz/array" },
				{ label: "Queue", path: "/dsaviz/queue" },
				{ label: "Stack", path: "/dsaviz/stack" },
				{ label: "Hash Table", path: "/dsaviz/hash-table" },
				{ label: "Linked List", path: "/dsaviz/linked-list" },
			],
			menuToggle: () => handleDsMenu(),
			open: dsMenuOpen,
		},
		{
			label: "Algorithms ",
			path: "#",
			icon: <AccountTreeIcon sx={{ fontSize: 20 }} />,
			nested: true,
			items: [
				{ label: "Quick Sort", path: "/dsaviz/quick-sort" },
				{ label: "Bubble Sort", path: "/dsaviz/bubble-sort" },
				{ label: "Selection Sort", path: "/dsaviz/selection-sort" },
				{ label: "Insertion Sort", path: "/dsaviz/insertion-sort" },
				{ label: "Merge Sort", path: "/dsaviz/merge-sort" },
			],
			menuToggle: () => handleAlgoMenu(),
			open: algoMenuOpen,
		},
	];

	return (
		<>
			<Box onMouseEnter={handleMenu} sx={styles.sideMenuBox}>
				<List sx={styles.sideMenuList}>
					{sideMenuItems.map(({ label, icon }) => (
						<React.Fragment key={label}>
							<ListItem sx={styles.sideMenuListItem}>
								{icon}
							</ListItem>
							<Divider />
						</React.Fragment>
					))}
				</List>
			</Box>
			<Drawer anchor="left" open={menuOpen}>
				<Box onMouseLeave={handleMenu} sx={styles.drawerBox}>
					<NestedList
						handleMenu={handleMenu}
						menuItems={sideMenuItems}
					/>
				</Box>
			</Drawer>
		</>
	);
}

const styles = {
	sideMenuBox: {
		position: "fixed",
		left: 0,
		top: 0,
		bottom: 0,
		width: 46,
		backgroundColor: "primary.main",
		zIndex: 9,
	},
	sideMenuList: {
		display: "flex",
		flexDirection: "column",
		marginTop: 1,
		gap: 1,
	},
	sideMenuListItem: {
		justifyContent: "center",
	},
	drawerBox: {
		backgroundColor: "primary.main",
		justifyContent: "center",
		width: 250,
		height: "100%",
	},
};
