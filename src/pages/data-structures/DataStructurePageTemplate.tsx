import { Box, Divider, Typography } from "@mui/material";
import { ReactNode } from "react";
import CodeEditor from "../../app/components/code-editor/CodeEditor";

interface Props {
	header: string;
	dataStructure: ReactNode;
	operations: ReactNode;
	terminal: ReactNode;
}

export default function DataStructurePageTemplate({
	header,
	dataStructure,
	operations,
	terminal,
}: Props) {
	return (
		<>
			<Typography sx={{ fontSize: 76, textAlign: "center" }}>
				{header}
			</Typography>
			<Box sx={styles.mainBox}>
				<Box sx={styles.contentBox}>
					<Box sx={styles.leftColBox}>
						<Box sx={styles.dataStructureBox}>
							<Typography sx={styles.subHeaderText}>
								Visualisation
							</Typography>
							<Divider sx={styles.divider} />

							<Box sx={{ marginTop: 8, flex: 3 }}>
								{dataStructure}
							</Box>
						</Box>
						<Box sx={styles.lowerBox}>
							<Box sx={styles.operationBox}>{operations}</Box>
							{terminal}
						</Box>
					</Box>

					<Box sx={styles.codeEditorBox}>
						<CodeEditor />
					</Box>
				</Box>
			</Box>
		</>
	);
}

const styles = {
	mainBox: {
		display: "flex",
		justifyContent: "center",
		textAlign: "center",
		paddingLeft: 10,
		paddingRight: 6,
	},

	contentBox: {
		display: "flex",
		textAlign: "center",
		gap: 4,
		height: 700,
		width: 1240,
		marginTop: 1,
	},
	leftColBox: {
		alignContent: "center",
		display: "flex",
		flexDirection: "column",
		textAlign: "center",
		flex: 1,
		gap: 4,
		overflow: "auto",
	},
	dataStructureBox: {
		display: "flex",
		flexDirection: "column",
		height: "100%",
		width: "100%",
		overflow: "auto",
		backgroundColor: "primary.main",
		borderRadius: "10px",
		padding: 0.5,
		boxShadow: 1,
	},
	lowerBox: {
		display: "flex",
		gap: 4,
		padding: 0.5,
		height: "50%",
	},
	operationBox: {
		flex: 1,
	},
	subHeaderText: {
		fontFamily: "menlo",
		fontWeight: "bold",
		fontSize: 16,
		paddingTop: 2,
		paddingBottom: 1.75,
	},
	divider: { borderBottomWidth: 3 },
	codeEditorBox: {
		flex: 1,
		bgcolor: "primary.main",
		borderRadius: "10px",
		overflow: "hidden",
		maxWidth: "35%",
		boxShadow: 1,
	},
};
