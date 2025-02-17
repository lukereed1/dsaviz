import { Box, Divider, Tab, Tabs, Typography } from "@mui/material";
import { ReactNode, SyntheticEvent, useState } from "react";
import TabPanel from "./TabPanel";

interface Props {
	operations: Operation[];
	setValue: (value: number | undefined) => void;
	setIndex?: (value: number | undefined) => void;
}

interface Operation {
	label: string;
	inputs: ReactNode;
}

function allyProps(index: number) {
	return {
		id: `vertical-tabpanel-${index}`,
	};
}

export default function OperationBox({
	operations,
	setValue,
	setIndex,
}: Props) {
	const [tabIndex, setTabIndex] = useState(0);

	const handleChange = (_event: SyntheticEvent, newValue: number) => {
		setTabIndex(newValue);
		setValue(undefined);
		if (setIndex) {
			setIndex!(undefined);
		}
	};

	return (
		<Box sx={styles.box}>
			<Box>
				<Typography sx={styles.headerText}>Operations</Typography>
				<Divider sx={{ borderBottomWidth: 3 }} />
			</Box>

			<Box display={"flex"} overflow={"auto"} height={"100%"}>
				<Tabs
					orientation="vertical"
					variant="scrollable"
					value={tabIndex}
					onChange={handleChange}
					aria-label="Operations"
					sx={styles.tabs}
					scrollButtons={false}>
					{operations.map((operation, index) => (
						<Tab
							key={index}
							sx={styles.tab(tabIndex, index)}
							label={operation.label}
							{...allyProps(index)}
						/>
					))}
				</Tabs>

				{operations.map((operation, index) => (
					<TabPanel key={index} value={tabIndex} index={index}>
						{operation.inputs}
					</TabPanel>
				))}
			</Box>
		</Box>
	);
}

const styles = {
	box: {
		bgcolor: "primary.main",
		display: "flex",
		flexDirection: "column",
		borderRadius: "7px",
		boxShadow: 1,
		height: "100%",
	},
	tabs: {
		width: 100,
		borderRight: 2,
		borderColor: "divider",
	},
	headerText: {
		fontFamily: "menlo",
		fontWeight: "bold",
		fontSize: 16,
		paddingTop: 1.5,
		paddingBottom: 1.25,
	},
	tab: (tabIndex: number, index: number) => ({
		borderRadius: "7px",
		fontSize: 16,
		padding: 2,
		fontFamily: "menlo",

		color: "text.primary",
		...(tabIndex === index && {
			backgroundColor: "secondary.main",
		}),
	}),
};
