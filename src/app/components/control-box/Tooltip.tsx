import { Tooltip } from "@mui/material";
import { ReactNode } from "react";

interface Props {
	title: string;
	children: ReactNode;
}

export default function ToolTip({ title, children }: Props) {
	return (
		<>
			<Tooltip
				title={title}
				componentsProps={{
					tooltip: {
						sx: {
							fontSize: "16px",
							fontFamily: "menlo",
							backgroundColor: "secondary.main",
							color: "text.secondary",
							borderRadius: "4px",
						},
					},
					arrow: {
						sx: {
							color: "blue",
						},
					},
				}}
				arrow>
				<div>{children}</div>
			</Tooltip>
		</>
	);
}
