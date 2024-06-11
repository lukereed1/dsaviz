import { Box, Divider, InputBase, Typography, useTheme } from "@mui/material";
import {
	ChangeEvent,
	useEffect,
	useRef,
	useState,
	KeyboardEvent,
	Dispatch,
	SetStateAction,
} from "react";
import { getTerminalCommand } from "./TerminalCommands";
import TerminalOutput from "./TerminalOutput";

interface Props {
	header: string;
	terminalOutputs: string[];
	setTerminalOutputs: Dispatch<SetStateAction<string[]>>;
}

export default function Terminal({
	header,
	terminalOutputs,
	setTerminalOutputs,
}: Props) {
	const theme = useTheme();
	const inputRef = useRef<HTMLInputElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const [inputValue, setInputValue] = useState("");
	const [caretPosition, setCaretPosition] = useState(0);
	const beforeCaret = inputValue.slice(0, caretPosition);
	const afterCaret = inputValue.slice(caretPosition);
	const caretChar = afterCaret.charAt(0) || " ";
	const inputPrefix = "guest@dsaviz.com~$ ";

	useEffect(() => {
		focusTerminal();
	}, []);

	useEffect(() => {
		if (containerRef.current) {
			// Auto scrolls terminal when filled with outputs
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
			if (!inputValue || inputValue.trim() === "") {
				const input = inputPrefix + inputValue;
				setTerminalOutputs((prevArray) => [...prevArray, input]);
			} else if (inputValue === "clear") {
				clearTerminal();
			} else {
				const input = inputPrefix + inputValue;
				const terminalCommand = getTerminalCommand(inputValue);

				setTerminalOutputs((prevArray) => [
					...prevArray,
					input,
					terminalCommand,
				]);
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
		<Box onClick={handleClick} sx={styles.window}>
			<Typography sx={styles.headerText}>~/dsaviz/{header}</Typography>
			<Divider sx={styles.divider} />
			<Box sx={styles.ioBox} ref={containerRef}>
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
						{inputPrefix}
						{beforeCaret}
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
		height: "100%",
		maxHeight: 342,
		minWidth: 450,
	},
	headerText: {
		fontFamily: "menlo",
		fontSize: 16,
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
		overflow: "auto",
	},
	hidden: {
		position: "absolute",
		left: "-9999px",
	},
	output: {},
	caret: {
		width: 7,
		height: 15,
		marginBottom: 2,
	},
};
