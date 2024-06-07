import { TextField, useTheme } from "@mui/material";
import { ChangeEvent } from "react";

interface Props {
	setValue: (value: string) => void;
}

export default function ValueTextInput({ setValue }: Props) {
	const theme = useTheme();

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	};

	return (
		<TextField
			onChange={handleChange}
			inputProps={{
				style: {
					color: theme.palette.text.primary,
					fontSize: 24,
				},
			}}
			InputLabelProps={{
				style: {
					color: theme.palette.text.primary,
					fontSize: 24,
				},
			}}
			id="outlined-basic"
			label="Value"
			variant="outlined">
			Value
		</TextField>
	);
}
