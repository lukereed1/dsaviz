import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
	Box,
	Collapse,
	Divider,
	List,
	ListItemButton,
	ListItemText,
} from "@mui/material";
import { Fragment, ReactNode } from "react";
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
	terminal: ReactNode;
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
			<Box
				display={"flex"}
				justifyContent={"center"}
				textAlign={"center"}
				height={300}
				marginTop={4}
				width={"100%"}
				maxWidth={500}
				paddingX={0}>
				{props.terminal}
			</Box>
		</List>
	);
}

const styles = {
	list: {
		minWidth: 500,
	},
	listItemButton: {
		paddingX: 5,
		borderRadius: "7px",
	},
	listItemText: {
		fontSize: 52,
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
