import { Box, Button, Typography } from "@mui/material";

export default function HomePage() {
	return (
		<Box
			display={"flex"}
			justifyContent={"center"}
			alignItems={"center"}
			flexDirection={"column"}
			textAlign={"center"}
			marginTop={"5vh"}>
			<Box maxWidth={650}>
				<Typography lineHeight={0.9} variant="h1">
					Learn by Visualisation
				</Typography>
				<Typography marginTop={2} variant="h4">
					A Visual Approach to Learning{" "}
					<span style={{ color: "#FE971D" }}>Data Structures</span>{" "}
					and <span style={{ color: "#FE971D" }}>Algorithms</span>
				</Typography>
				<Button
					variant="contained"
					sx={{
						marginTop: 3,
						fontSize: "26px",
						fontWeight: "bold",
						bgcolor: "primary.main",
						color: "white",
						borderRadius: "10px",
						boxShadow: "none",
						paddingX: 5.5,
					}}>
					Get Started
				</Button>
			</Box>
		</Box>
	);
}
