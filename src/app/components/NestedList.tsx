import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
	List,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Collapse,
	Divider,
} from "@mui/material";
import React from "react";

interface MenuItem {
	label: string;
	path: string;
	icon: React.ReactNode;
	nested: boolean;
	items?: SubMenuItem[];
	function?: () => void;
	open?: boolean;
}

interface SubMenuItem {
	label: string;
	path: string;
}

interface Props {
	menuItems: MenuItem[];
}

export default function NestedList(props: Props) {
	return (
		<List
			sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
				marginTop: 1,
				gap: 1,
			}}>
			{props.menuItems.map((item) =>
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
							{item.open ? <ExpandLess /> : <ExpandMore />}
						</ListItemButton>
						<Collapse in={item.open} timeout={"auto"} unmountOnExit>
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
											justifyContent: "center",
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
						<ListItemButton sx={{ paddingY: 0.5 }} key={item.label}>
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
	);
}
