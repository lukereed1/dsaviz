import { Box, Tab, Tabs } from "@mui/material";
import { ReactNode, SyntheticEvent, useState } from "react";

interface TabPanelProps {
	children?: ReactNode;
	index: number;
	value: number;
}

function TabPanel({ children, index, value, ...other }: TabPanelProps) {
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

function allyProps(index: number) {
	return {
		id: `vertical-tabpanel-${index}`,
	};
}

interface VerticalTabsProps {
	operations: Operation[];
}

interface Operation {
	label: string;
	children?: ReactNode;
}

export default function VerticalTabs({ operations }: VerticalTabsProps) {
	const [value, setValue] = useState(0);

	const handleChange = (event: SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<Box
			sx={{
				flexGrow: 1,
				bgcolor: "primary.main",
				display: "flex",
				height: "100%",
				borderRadius: "7px",
			}}>
			<Tabs
				orientation="vertical"
				variant="scrollable"
				value={value}
				onChange={handleChange}
				aria-label="Operations"
				sx={{
					width: 130,
					borderRight: 2,
					borderColor: "divider",
				}}>
				{operations.map((operation, index) => (
					<Tab
						key={index}
						sx={{
							borderRadius: "7px",
							fontSize: 32,
							color: "text.primary",
							...(value === index && {
								backgroundColor: "secondary.main",
							}),
						}}
						label={operation.label}
						{...allyProps(index)}
					/>
				))}
			</Tabs>
			{operations.map((operation, index) => (
				<TabPanel key={index} value={value} index={index}>
					{operation.children}
				</TabPanel>
			))}
		</Box>
	);
}
