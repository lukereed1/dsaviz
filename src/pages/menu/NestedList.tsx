import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
	Collapse,
	Divider,
	List,
	ListItemButton,
	ListItemText,
} from "@mui/material";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

interface MenuItem {
	label: string;
	items: SubMenuItem[];
	open: boolean;
	toggleMenu: () => void;
}

interface SubMenuItem {
	label: string;
	path: string;
}

interface Props {
	menuItems: MenuItem[];
}

export default function NestedList(props: Props) {
	const navigate = useNavigate();
	return (
		<List sx={styles.list}>
			{props.menuItems.map((item) => (
				<Fragment key={item.label}>
					<ListItemButton
						sx={styles.listItemButton}
						onClick={item.toggleMenu}>
						<ListItemText
							primaryTypographyProps={styles.listItemText}
							primary={item.label}
						/>
						{item.open ? <ExpandLess /> : <ExpandMore />}
					</ListItemButton>
					<Collapse in={item.open} timeout={"auto"} unmountOnExit>
						<List
							sx={styles.collapseList}
							component={"div"}
							disablePadding>
							{item.items?.map((item) => (
								<ListItemButton
									onClick={() => navigate(item.path)}
									sx={styles.collapseListItemButton}
									key={item.label}>
									{item.label}
								</ListItemButton>
							))}
						</List>
					</Collapse>
					<Divider />
				</Fragment>
			))}
		</List>
	);
}

const styles = {
	list: {
		minWidth: 750,
	},
	listItemButton: {
		paddingX: 5,
	},
	listItemText: {
		fontSize: "72px",
	},
	collapseList: {
		display: "flex",
		flexDirection: "column",
		marginTop: -1,
		marginBottom: 2,
	},
	collapseListItemButton: {
		fontSize: 32,
		justifyContent: "center",
		paddingY: 0.5,
	},
};
