import {
	Box,
	Divider,
	InputBase,
	List,
	ListItem,
	Typography,
} from "@mui/material";
import { ChangeEvent, useEffect, useRef, useState, KeyboardEvent } from "react";

interface Props {
	header: string;
}

export default function Terminal({ header }: Props) {
	const inputRef = useRef<HTMLInputElement>(null);
	const [inputValue, setInputValue] = useState("");
	const [valueAfterCaret, setValueAfterCaret] = useState("");
	const [caretPosition, setCaretPosition] = useState(0);

	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.focus(); // Focuses terminal input upon page loading
		}
	}, []);

	function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
		setInputValue(event.target.value);
	}

	function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
		if (event.key === "Enter") {
			// handle enter key
			console.log(`Command entered: ${inputValue}`);
			inputRef.current!.value = "";
			setInputValue("");
		}
	}

	function handleClick() {
		if (inputRef.current) {
			inputRef.current.focus();
		}
	}

	return (
		<Box onClick={handleClick} sx={styles.window}>
			<Typography sx={styles.headerText}>/dsaviz/{header}</Typography>
			<Divider sx={styles.divider} />
			<Box sx={styles.ioBox}>
				<List disablePadding>
					<ListItem disablePadding sx={{ fontSize: 12 }}>
						Type 'help' for a list of commands
					</ListItem>
					<ListItem disablePadding sx={{ fontSize: 12 }}>
						guest@dsaviz.com~${" "}
						<span style={{ marginLeft: 5 }}>{inputValue}</span>
						<span style={styles.caret}></span>
						<span>{valueAfterCaret}</span>
						<InputBase
							fullWidth
							onChange={handleInputChange}
							onKeyDown={handleKeyDown}
							inputRef={inputRef}
							sx={styles.input}
							autoFocus
						/>
					</ListItem>
				</List>
			</Box>
		</Box>
	);
}

const styles = {
	window: {
		display: "flex",
		flexDirection: "column",
		boxShadow: 2,
		bgcolor: "primary.main",
		flex: 2,
		borderRadius: "7px",
		width: 400,
		height: "100%",
	},
	headerText: {
		fontFamily: "menlo",
		fontSize: 15,
		paddingTop: 2,
		paddingBottom: 1.75,
	},
	divider: { borderBottomWidth: 3 },
	ioBox: {
		flex: 1,
		textAlign: "left",
		paddingX: 2,
		paddingY: 1.5,
		fontFamily: "menlo",
		fontSize: 13,
	},
	input: {
		color: "transparent",
		fontFamily: "menlo",
		fontSize: "12px",
		"& .MuiInputBase-input": {
			padding: 0,
		},
	},
	adornment: {
		fontFamily: "menlo",
		fontSize: 13,
	},
	caret: {
		width: 7,
		height: 15,
		backgroundColor: "white",
		marginBottom: 2,
	},
};
