import { Button } from "@mui/material";

interface Props {
	label: string;
	operation: () => void;
	marginTop?: number;
}

export default function OperationButton({
	label,
	operation,
	marginTop,
}: Props) {
	return (
		<Button
			variant="contained"
			onClick={operation}
			sx={{
				minWidth: 130,
				marginTop: marginTop ? marginTop : 2,
				color: "text.secondary",
				bgcolor: "secondary.main",
				borderRadius: "5px",
				paddingX: 3,
				fontSize: 16,
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
