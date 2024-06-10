import { Box, Divider, InputBase, Typography, useTheme } from "@mui/material";
import { ChangeEvent, useEffect, useRef, useState, KeyboardEvent } from "react";
import TerminalOutput from "./TerminalOutput";

interface Props {
	header: string;
}

export default function Terminal({ header }: Props) {
	const theme = useTheme();
	const inputRef = useRef<HTMLInputElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const [inputValue, setInputValue] = useState("");
	const [caretPosition, setCaretPosition] = useState(0);
	const welcomeString = "Type 'help' for a list of commands";
	const [terminalOutputs, setTerminalOutputs] = useState<string[]>([
		welcomeString,
	]);
	const beforeCaret = inputValue.slice(0, caretPosition);
	const afterCaret = inputValue.slice(caretPosition);
	const caretChar = afterCaret.charAt(0) || " ";

	useEffect(() => {
		focusTerminal();
	}, []);

	useEffect(() => {
		if (containerRef.current) {
			containerRef.current.scrollTop = containerRef.current?.scrollHeight;
		}
	}, [terminalOutputs]);

	function handleClick() {
		focusTerminal();
	}

	function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
		setInputValue(event.target.value);
		setCaretPosition(inputRef.current?.selectionStart || 0);
	}

	function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
		if (event.key === "Enter") {
			if (inputValue === "clear") {
				clearTerminal();
				return;
			}
			if (inputValue) {
				console.log(inputValue.length);
				setTerminalOutputs((prevArray) => [...prevArray, inputValue]);
			}
			inputRef.current!.value = "";
			setInputValue("");
		} else if (event.key === "ArrowLeft") {
			// Ensures caret doesn't go out of bounds
			setCaretPosition((prev) => Math.max(prev - 1, 0));
		} else if (event.key === "ArrowRight") {
			setCaretPosition((prev) => Math.min(prev + 1, inputValue.length));
		}
	}

	function focusTerminal() {
		if (inputRef.current) {
			inputRef.current.focus();
		}
	}

	function clearTerminal() {
		let arrCopy = [...terminalOutputs];
		arrCopy = [];
		setTerminalOutputs(arrCopy);
	}

	return (
		<Box onClick={handleClick} sx={styles.window} ref={containerRef}>
			<Typography sx={styles.headerText}>~/dsaviz/{header}</Typography>
			<Divider sx={styles.divider} />
			<Box sx={styles.ioBox}>
				{terminalOutputs.map((output, index) => (
					<TerminalOutput key={index}>{output}</TerminalOutput>
				))}
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
						<span
							style={
								(styles.caret,
								{
									backgroundColor: theme.palette.text.primary,
									color: theme.palette.text.secondary,
								})
							}>
							{caretChar}
						</span>
					</span>
					<span>{afterCaret.slice(1)}</span>
				</pre>
			</Box>
			<InputBase
				onChange={handleInputChange}
				onKeyDown={handleKeyDown}
				inputRef={inputRef}
				sx={styles.hidden}
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
		maxHeight: 312,
		overflow: "auto",
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
	hidden: {
		position: "absolute",
		left: "-9999px",
	},
	adornment: {
		fontFamily: "menlo",
		fontSize: 13,
	},
	caret: {
		width: 7,
		height: 15,
		marginBottom: 2,
	},
};
