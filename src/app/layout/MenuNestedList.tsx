import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
	List,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Collapse,
	Divider,
} from "@mui/material";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

interface MenuItem {
	label: string;
	path: string;
	icon: React.ReactNode;
	nested: boolean;
	items?: SubMenuItem[];
	menuToggle?: () => void;

	open?: boolean;
}

interface SubMenuItem {
	label: string;
	path: string;
}

interface Props {
	menuItems: MenuItem[];
	handleMenu: () => void;
}

export default function NestedList(props: Props) {
	const navigate = useNavigate();

	function handleListItemButtonClick(path: string) {
		props.handleMenu();
		navigate(path);
	}

	return (
		<List sx={styles.list}>
			{props.menuItems.map((item) =>
				item.nested ? (
					<Fragment key={item.label}>
						<ListItemButton
							sx={styles.listItemButton}
							onClick={item.menuToggle}>
							<ListItemIcon>{item.icon}</ListItemIcon>
							<ListItemText
								primaryTypographyProps={styles.listItemText}
								primary={item.label}
							/>
							{item.open ? <ExpandLess /> : <ExpandMore />}
						</ListItemButton>
						<Collapse in={item.open} timeout={"auto"} unmountOnExit>
							<List sx={styles.collapseList} disablePadding>
								{item.items?.map((item) => (
									<ListItemButton
										onClick={() =>
											handleListItemButtonClick(item.path)
										}
										sx={styles.collapseListItemButton}
										key={item.label}>
										{item.label}
									</ListItemButton>
								))}
							</List>
						</Collapse>
						<Divider />
					</Fragment>
				) : (
					<Fragment key={item.label}>
						<ListItemButton
							onClick={() => handleListItemButtonClick(item.path)}
							sx={styles.listItemButton}
							key={item.label}>
							<ListItemIcon>{item.icon}</ListItemIcon>
							<ListItemText
								primaryTypographyProps={styles.listItemText}
								primary={item.label}
							/>
						</ListItemButton>
						<Divider />
					</Fragment>
				)
			)}
		</List>
	);
}

const styles = {
	list: {
		zIndex: 10,
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		marginTop: 1,
		gap: 1,
	},
	listItemButton: {
		paddingY: 0.5,
	},
	listItemText: {
		fontSize: "20px",
	},
	collapseList: {
		display: "flex",
		flexDirection: "column",
		marginTop: -0.5,
	},
	collapseListItemButton: {
		fontSize: 18,
		justifyContent: "center",
		paddingY: 0.5,
	},
};
