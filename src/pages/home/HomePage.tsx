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
					{" "}
					A Visual Approach to Learning
					<Typography
						color={"secondary.main"}
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
					variant="contained"
					sx={{
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
					}}>
					Get Started
				</Button>
			</Box>
		</Box>
	);
}
