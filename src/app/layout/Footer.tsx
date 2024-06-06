import { Box, Typography } from "@mui/material";

export default function Footer() {
	return (
		<>
			<Box
				display={"flex"}
				bottom={0}
				marginBottom={1}
				justifyContent={"center"}>
				<Typography variant="h6">Built by Luke Reed</Typography>
			</Box>
		</>
	);
}
