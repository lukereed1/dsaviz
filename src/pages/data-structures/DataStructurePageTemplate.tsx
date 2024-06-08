import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";

interface Props {
	header: string;
	dataStructure?: ReactNode;
	operations?: ReactNode;
}

export default function DataStructurePageTemplate(props: Props) {
	return (
		<Box sx={styles.mainBox}>
			<Typography variant="h2">{props.header}</Typography>

			<Box sx={styles.contentBox}>
				<Box sx={styles.leftColBox}>
					<Box sx={styles.dataStructureBox}>
						{props.dataStructure}
					</Box>
					<Box sx={styles.lowerBox}>
						<Box sx={styles.operationBox}>{props.operations}</Box>
						<Box sx={styles.terminalBox}></Box>
					</Box>
				</Box>

				<Box sx={styles.codeEditorBox}>test</Box>
			</Box>
		</Box>
	);
}

const styles = {
	mainBox: {
		textAlign: "center",
		paddingLeft: 10,
		paddingRight: 6,
	},

	contentBox: {
		flex: 1,
		display: "flex",
		textAlign: "center",
		gap: 3,
		height: 700,
		marginTop: 1,
	},
	leftColBox: {
		alignContent: "center",
		display: "flex",
		flexDirection: "column",
		textAlign: "center",
		flex: 1,
		gap: 3,
		overflow: "auto",
	},
	dataStructureBox: {
		alignContent: "center",
		flex: 1.5,
		overflow: "auto",
	},
	lowerBox: {
		display: "flex",
		flex: 1,
		gap: 3,
	},
	operationBox: {
		flex: 1,
	},
	terminalBox: {
		bgcolor: "red",
		flex: 1.5,
	},
	codeEditorBox: {
		flex: 1,
		bgcolor: "primary.main",
		borderRadius: "10px",
		maxWidth: "35%",
	},
};
