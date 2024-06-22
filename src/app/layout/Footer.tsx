import { Box, Typography } from "@mui/material";

export default function Footer() {
	return (
		<>
			<Box
				display={"flex"}
				bottom={0}
				marginBottom={1}
				marginTop={20}
				justifyContent={"center"}>
				<Typography sx={{ fontSize: 16 }}>Built by Luke</Typography>
			</Box>
		</>
	);
}
