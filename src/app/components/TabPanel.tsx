import { Box } from "@mui/material";
import { ReactNode } from "react";

interface Props {
	children?: ReactNode;
	index: number;
	value: number;
}

export default function TabPanel({ value, index, children, ...other }: Props) {
	return (
		<div
			style={{ flex: 1 }}
			role="tabpanel"
			hidden={value !== index}
			id={`vertical-tabpabel-${index}`}
			{...other}>
			{value === index && <Box sx={{ p: 1 }}>{children}</Box>}
		</div>
	);
}
