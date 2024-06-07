import { Button } from "@mui/material";

interface Props {
	label: string;
}

export default function OperationButton({ label }: Props) {
	const handleClick = () => {
		console.log(label);
	};

	return (
		<Button
			variant="contained"
			onClick={handleClick}
			sx={{
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
