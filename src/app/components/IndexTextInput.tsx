import { TextField, useTheme } from "@mui/material";
import { ChangeEvent } from "react";

interface Props {
	setIndex: (index: string) => void;
}

export default function IndexTextInput({ setIndex }: Props) {
	const theme = useTheme();
	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setIndex(event.target.value);
	};

	return (
		<TextField
			sx={{ marginTop: 2 }}
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
			variant="outlined">
			Index
		</TextField>
	);
}
