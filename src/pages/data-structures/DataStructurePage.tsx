import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";

interface Props {
	header: string;
	operations?: ReactNode;
}

export default function DataStructurePage(props: Props) {
	return (
		<Box
			paddingLeft={10}
			paddingRight={5}
			display={"flex"}
			flexDirection={"column"}
			textAlign={"center"}>
			<Typography variant="h2">{props.header}</Typography>
			<Box height={680} display={"flex"} gap={5} marginTop={3}>
				<Box
					flex={1.75}
					gap={5}
					height={"100%"}
					display={"flex"}
					flexDirection={"column"}
					justifyContent={"center"}
					alignItems={"center"}>
					<Box
						width={"100%"}
						display={"flex"}
						flex={1}
						bgcolor={"primary.main"}
						borderRadius={"10px"}>
						test
					</Box>
					<Box width={"100%"} flex={1} display={"flex"} gap={5}>
						<Box
							borderRadius={"10px"}
							flex={1}
							bgcolor={"primary.main"}>
							{props.operations}
						</Box>
						<Box
							borderRadius={"10px"}
							flex={1.5}
							bgcolor={"primary.main"}></Box>
					</Box>
				</Box>
				<Box
					flex={1}
					bgcolor={"primary.main"}
					display={"flex"}
					justifyContent={"center"}
					alignItems={"center"}
					borderRadius={"10px"}>
					test
				</Box>
			</Box>
		</Box>
	);
}
