import { Box, Divider, Tab, Tabs, Typography } from "@mui/material";
import { ReactNode, SyntheticEvent, useState } from "react";

interface TabPanelProps {
	children?: ReactNode;
	index: number;
	value: number;
}

function TabPanel({ children, index, value, ...other }: TabPanelProps) {
	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`vertical-tabpabel-${index}`}
			{...other}>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography variant="h6" color={"text.primary"}>
						{children}
					</Typography>
				</Box>
			)}
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
		console.log(newValue);
	};

	return (
		<Box
			sx={{
				flexGrow: 1,
				bgcolor: "primary.main",
				display: "flex",
				height: "100%",
				borderRadius: "12px",
			}}>
			<Tabs
				orientation="vertical"
				variant="scrollable"
				value={value}
				onChange={handleChange}
				aria-label="Operations"
				sx={{
					borderRight: 2,
					borderColor: "divider",
				}}>
				{operations.map((operation, index) => (
					<Tab
						sx={{
							fontSize: 32,
							color: "text.primary",
							...(value === index && {
								backgroundColor: "secondary.main",
							}),
						}}
						label={operation.label}
						{...allyProps(index)}></Tab>
				))}
			</Tabs>
			{operations.map((operation, index) => (
				<TabPanel value={value} index={index}>
					{operation.children}
				</TabPanel>
			))}

			{/* <TabPanel value={value} index={0}>
				234234234
			</TabPanel>
			<TabPanel value={value} index={1}>
				2
			</TabPanel>
			<TabPanel value={value} index={2}>
				3
			</TabPanel>
			<TabPanel value={value} index={3}>
				4
			</TabPanel>
			<TabPanel value={value} index={4}>
				5
			</TabPanel> */}
		</Box>
	);
}
