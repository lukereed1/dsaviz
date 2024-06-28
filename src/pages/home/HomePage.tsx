import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
	const navigate = useNavigate();
	return (
		<Box sx={styles.mainBox}>
			<Box sx={styles.innerBox}>
				<Typography sx={styles.headerText} variant="h1">
					Learn by Visualisation
				</Typography>
				<Typography sx={styles.subHeaderText} variant="h4">
					A Visual Approach to Learning
					<Typography
						sx={styles.highlightedText}
						variant="h4"
						component="span">
						{" "}
						Data Structures{" "}
					</Typography>
					and{" "}
					<Typography
						color={"secondary.main"}
						variant="h4"
						component="span">
						{" "}
						Algorithms
					</Typography>
				</Typography>
				<Button
					onClick={() => navigate("menu")}
					variant="contained"
					sx={styles.button}>
					Get Started
				</Button>
			</Box>
		</Box>
	);
}

const styles = {
	mainBox: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column",
		textAlign: "center",
		marginTop: "5vh",
	},
	innerBox: {
		maxWidth: 650,
	},
	headerText: {
		lineHeight: 0.9,
	},
	subHeaderText: {
		marginTop: 2,
	},
	highlightedText: {
		color: "secondary.main",
	},
	button: {
		marginTop: 3,
		color: "text.secondary",
		fontSize: "26px",
		bgcolor: "secondary.main",
		borderRadius: "10px",
		paddingX: 5.5,
		"&:hover": {
			backgroundColor: "primary.main",
			color: "text.primary",
			boxShadow: 8,
		},
	},
};
