import { TextField, useTheme } from "@mui/material";
import { ChangeEvent } from "react";

interface Props {
	setValue: (value: number) => void;
}

export default function ValueTextInput({ setValue }: Props) {
	const theme = useTheme();

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setValue(parseInt(event.target.value));
	};

	return (
		<TextField
			onChange={handleChange}
			inputProps={{
				type: "number",
				style: {
					color: theme.palette.text.primary,
					fontSize: 16,
					   fontFamily: "'Fira Mono', 'Menlo', 'Consolas', 'Liberation Mono', 'Courier New', monospace",
				},
			}}
			InputLabelProps={{
				style: {
					color: theme.palette.text.primary,
					fontSize: 16,
					   fontFamily: "'Fira Mono', 'Menlo', 'Consolas', 'Liberation Mono', 'Courier New', monospace",
				},
			}}
			id="outlined-basic"
			label="Value"
			variant="outlined"
			sx={{
				"& input[type=number]": {
					MozAppearance: "textfield",
				},
				"& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button":
					{
						WebkitAppearance: "none",
						margin: 0,
					},
			}}>
			Value
		</TextField>
	);
}
