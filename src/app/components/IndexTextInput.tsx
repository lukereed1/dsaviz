import { TextField, useTheme } from "@mui/material";
import { ChangeEvent } from "react";

interface Props {
	setIndex: (index: string) => void;
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
		setIndex(event.target.value);
	};

	return (
		<TextField
			sx={{ marginTop: marginTop }}
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
			label="Index"
			variant="outlined"
			defaultValue={defaultValue === undefined ? "" : defaultValue}>
			Index
		</TextField>
	);
}
