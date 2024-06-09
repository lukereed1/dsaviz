import { Box, Divider, Typography } from "@mui/material";

export default function Terminal() {
	return (
		<Box sx={styles.window}>
			<Typography sx={styles.headerText}>dsaviz/array</Typography>
			<Divider sx={styles.divider} />
		</Box>
	);
}

const styles = {
	window: {
		display: "flex",
		flexDirection: "column",
		boxShadow: 2,
		bgcolor: "primary.main",
		flex: 2,
		borderRadius: "7px",
		height: "100%",
		width: 1000,
	},
	headerText: {
		fontFamily: "menlo",
		paddingTop: 2,
		paddingBottom: 1.75,
	},
	divider: { borderBottomWidth: 3 },
};
