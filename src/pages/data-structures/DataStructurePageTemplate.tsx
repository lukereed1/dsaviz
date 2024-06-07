import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";

interface Props {
	header: string;
	dataStructure?: ReactNode;
	operations?: ReactNode;
}

export default function DataStructurePageTemplate(props: Props) {
	return (
		<Box textAlign={"center"} paddingLeft={10} paddingRight={6}>
			<Typography variant="h2">{props.header}</Typography>

			<Box
				flex={1}
				display={"flex"}
				textAlign={"center"}
				gap={3}
				height={700}
				marginTop={1}>
				<Box
					alignContent={"center"}
					display={"flex"}
					flexDirection={"column"}
					textAlign={"center"}
					flex={1}
					gap={3}
					overflow={"auto"}>
					<Box alignContent={"center"} flex={1.5} overflow={"auto"}>
						{props.dataStructure}
					</Box>
					<Box display={"flex"} flex={1} gap={3}>
						<Box flex={1}>{props.operations}</Box>
						<Box bgcolor={"red"} flex={1.5}></Box>
					</Box>
				</Box>

				<Box
					flex={1}
					bgcolor={"primary.main"}
					borderRadius={"10px"}
					maxWidth={"35%"}>
					test
				</Box>
			</Box>
		</Box>
	);
}
