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
				minWidth: 150,
				marginTop: 2,
				color: "text.secondary",
				bgcolor: "secondary.main",
				borderRadius: "5px",
				paddingX: 6,
				fontSize: 22,
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
