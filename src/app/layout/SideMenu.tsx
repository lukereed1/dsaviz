import DataArrayIcon from "@mui/icons-material/DataArray";
import HomeIcon from "@mui/icons-material/Home";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import {
	Box,
	Collapse,
	Divider,
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from "@mui/material";
import { useState } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import React from "react";

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

	const menuItems = [
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
				// onMouseEnter={handleMenu}
				sx={{
					position: "absolute",
					left: 0,
					minHeight: "100vh",
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
					{menuItems.map(({ label, icon }) => (
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
						justifyContent: "center",
						width: 250,
						height: "100%",
						backgroundColour: "primary.main",
					}}>
					<List
						sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-between",
							marginTop: 1,
							gap: 1,
						}}>
						{menuItems.map((item) =>
							item.nested ? (
								<React.Fragment key={item.label}>
									<ListItemButton
										sx={{ paddingY: 0.5 }}
										onClick={item.function}>
										<ListItemIcon>{item.icon}</ListItemIcon>
										<ListItemText
											primaryTypographyProps={{
												fontSize: "20px",
											}}
											primary={item.label}
										/>
										{item.open ? (
											<ExpandLess />
										) : (
											<ExpandMore />
										)}
									</ListItemButton>
									<Collapse
										in={item.open}
										timeout={"auto"}
										unmountOnExit>
										<List
											sx={{
												display: "flex",
												flexDirection: "column",
												marginTop: -0.5,
											}}
											component={"div"}
											disablePadding>
											{item.items?.map((item) => (
												<ListItemButton
													sx={{
														fontSize: 18,
														justifyContent:
															"center",
														paddingY: 0.5,
													}}
													key={item.label}>
													{item.label}
												</ListItemButton>
											))}
										</List>
									</Collapse>
									<Divider />
								</React.Fragment>
							) : (
								<React.Fragment key={item.label}>
									<ListItemButton
										sx={{ paddingY: 0.5 }}
										key={item.label}>
										<ListItemIcon>{item.icon}</ListItemIcon>
										<ListItemText
											primaryTypographyProps={{
												fontSize: "20px",
											}}
											primary={item.label}
										/>
									</ListItemButton>
									<Divider />
								</React.Fragment>
							)
						)}
					</List>
				</Box>
			</Drawer>
		</>
	);
}
