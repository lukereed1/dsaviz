import { Box, Divider, Typography } from "@mui/material";
import { ReactNode } from "react";

interface Props {
	header: string;
	visualisation: ReactNode;
	controls: ReactNode;
	terminal: ReactNode;
	codeEditor: ReactNode;
}

export default function AlgoPageTemplate(props: Props) {
	const { header, visualisation, controls, terminal, codeEditor } = props;

	return (
		<>
			<Typography sx={{ fontSize: 64, textAlign: "center" }}>
				{header}
			</Typography>
			<Box sx={styles.mainBox}>
				<Box sx={styles.contentBox}>
					<Box sx={styles.leftColBox}>
						<Box sx={styles.visualisationBox}>
							<Typography sx={styles.subHeaderText}>
								Visualisation
							</Typography>
							<Divider sx={styles.divider} />

							<Box sx={styles.innerVisBox}>{visualisation}</Box>
						</Box>
						<Box sx={styles.lowerBox}>
							<Box sx={styles.controlBox}>{controls}</Box>
							{terminal}
						</Box>
					</Box>

					<Box sx={styles.codeEditorBox}>{codeEditor}</Box>
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
		height: 770,
		width: 1280,
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
		height: "100%",
	},
	visualisationBox: {
		display: "flex",
		flexDirection: "column",
		flex: 1,
		overflow: "auto",
		backgroundColor: "primary.main",
		borderRadius: "7px",
		height: "60%",
		paddingBottom: 0.5,
		boxShadow: 1,
	},
	innerVisBox: {
		alignContent: "center",
		flex: 1,
		paddingX: 5,
	},
	lowerBox: {
		display: "flex",
		gap: 4,
		height: "40.5%",
		paddingBottom: 0.5,
	},
	controlBox: {
		flex: 1,
		height: "100%",
	},
	subHeaderText: {
		fontFamily: "menlo",
		fontSize: 16,
		fontWeight: "bold",
		paddingTop: 2.4,
		paddingBottom: 2.15,
		textAlign: "center",
	},
	divider: { borderBottomWidth: 3, width: "100%" },
	codeEditorBox: {
		flex: 1,
		bgcolor: "primary.main",
		borderRadius: "7px",
		overflow: "hidden",
		maxWidth: "35%",
		boxShadow: 1,
		marginBottom: 0.5,
	},
};
