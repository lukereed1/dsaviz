import { Button } from "@mui/material";

interface Props {
	label: string;
	operation: () => void;
}

export default function OperationButton({ label, operation }: Props) {
	return (
		<Button
			variant="contained"
			onClick={operation}
			sx={{
				minWidth: 130,
				marginTop: 2,
				color: "text.secondary",
				bgcolor: "secondary.main",
				borderRadius: "5px",
				paddingX: 3,
				fontSize: 20,
				fontFamily: "menlo",
				"&:hover": {
					backgroundColor: "background.default",
					color: "text.primary",
					boxShadow: 2,
				},
			}}>
			{label}
		</Button>
	);
}
