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
		<List sx={{ minWidth: 750 }}>
			{props.menuItems.map((item) => (
				<Fragment key={item.label}>
					<ListItemButton
						sx={{ paddingX: 5 }}
						onClick={item.toggleMenu}>
						<ListItemText
							primaryTypographyProps={{
								fontSize: "72px",
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
								marginTop: -1,
								marginBottom: 2,
							}}
							component={"div"}
							disablePadding>
							{item.items?.map((item) => (
								<ListItemButton
									onClick={() => navigate(item.path)}
									sx={{
										fontSize: 32,
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
				</Fragment>
			))}
		</List>
	);
}
