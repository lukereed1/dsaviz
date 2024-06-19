import { Tooltip } from "@mui/material";
import { ReactNode } from "react";

interface Props {
	title: string;
	children: ReactNode;
	top?: boolean;
}

export default function ToolTipMessage({ title, children, top }: Props) {
	return (
		<>
			<Tooltip
				placement={top ? "top" : "bottom"}
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
							color: "secondary.main",
						},
					},
				}}
				arrow>
				<div>{children}</div>
			</Tooltip>
		</>
	);
}
