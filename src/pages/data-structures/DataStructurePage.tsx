import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";

interface Props {
	header: string;
	dataStructure?: ReactNode;
	operations?: ReactNode;
}

export default function DataStructurePage(props: Props) {
	return (
		<Box textAlign={"center"} paddingLeft={10} paddingRight={5}>
			<Typography variant="h2">{props.header}</Typography>
			<Box display={"flex"} textAlign={"center"} gap={3} height={700}>
				<Box
					alignContent={"center"}
					display={"flex"}
					flexDirection={"column"}
					textAlign={"center"}
					flex={1}
					overflow={"auto"}>
					<Box alignContent={"center"} flex={1} overflow={"auto"}>
						{props.dataStructure}
					</Box>
					<Box flex={1}>test</Box>
				</Box>

				<Box flex={1} bgcolor={"primary.main"} borderRadius={"10px"}>
					test
				</Box>
			</Box>
			<Box flex={1} gap={5} height={400}>
				<Box borderRadius={"10px"} flex={1} bgcolor={"primary.main"}>
					{props.operations}
				</Box>
				<Box
					borderRadius={"10px"}
					flex={1.5}
					bgcolor={"primary.main"}></Box>
			</Box>
		</Box>
	);
}
