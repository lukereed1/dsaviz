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
	const [caretPosition, setCaretPosition] = useState(0);
	const beforeCaret = inputValue.slice(0, caretPosition);
	const afterCaret = inputValue.slice(caretPosition);
	const caretChar = afterCaret.charAt(0) || " ";

	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.focus(); // Focuses terminal input upon page loading
		}
	}, []);

	function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
		setInputValue(event.target.value);
		setCaretPosition(inputRef.current?.selectionStart || 0);
	}

	function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
		if (event.key === "Enter") {
			console.log(inputValue);
			inputRef.current!.value = "";
			setInputValue("");
		} else if (event.key === "ArrowLeft") {
			setCaretPosition((prev) => Math.max(prev - 1, 0));
		} else if (event.key === "ArrowRight") {
			setCaretPosition((prev) => Math.min(prev + 1, inputValue.length));
		}
	}

	// If user clicks inside terminal
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
				<pre style={{ margin: 0, fontFamily: "menlo" }}>
					Type 'help' for a list of commands
				</pre>
				<pre
					style={{
						fontFamily: "menlo",
						fontSize: 13,
						wordWrap: "break-word",
						whiteSpace: "pre-wrap",
						margin: 0,
					}}>
					<span
						style={{
							width: "100%",
						}}>
						guest@dsaviz.com~$ {beforeCaret}
						<span style={styles.caret}>{caretChar}</span>
					</span>
					<span>{afterCaret.slice(1)}</span>
				</pre>
			</Box>
			<InputBase
				hidden
				onChange={handleInputChange}
				onKeyDown={handleKeyDown}
				inputRef={inputRef}
				sx={styles.input}
				autoFocus
				spellCheck={false}
				autoCorrect="off"
			/>
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
		color: "black",
		width: 7,
		backgroundColor: "white",
		height: 15,
		marginBottom: 2,
	},
};
