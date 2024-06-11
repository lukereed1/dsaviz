import { TextField, useTheme } from "@mui/material";
import { ChangeEvent } from "react";

interface Props {
	setIndex: (index: number) => void;
	marginTop: number;
	defaultValue?: number;
}

export default function IndexTextInput({
	setIndex,
	marginTop,
	defaultValue,
}: Props) {
	const theme = useTheme();
	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setIndex(parseInt(event.target.value));
	};

	return (
		<TextField
			type="number"
			sx={{
				marginTop: marginTop,
				"& input[type=number]": {
					MozAppearance: "textfield",
				},
				"& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button":
					{
						WebkitAppearance: "none",
						margin: 0,
					},
			}}
			onChange={handleChange}
			inputProps={{
				style: {
					color: theme.palette.text.primary,
					fontSize: 16,
					fontFamily: "menlo",
				},
			}}
			InputLabelProps={{
				style: {
					color: theme.palette.text.primary,
					fontSize: 16,
					fontFamily: "menlo",
				},
			}}
			id="outlined-basic"
			label="Index"
			variant="outlined"
			defaultValue={defaultValue === undefined ? "" : defaultValue}>
			Index
		</TextField>
	);
}
