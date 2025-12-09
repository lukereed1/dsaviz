import Editor, { OnMount, useMonaco } from "@monaco-editor/react";
import { Divider, Tab, Tabs, useTheme } from "@mui/material";

import {
	SyntheticEvent,
	useCallback,
	useEffect,
	useRef,
	useState,
} from "react";
import * as monacoEditor from "monaco-editor";

interface Props {
	files: File[];
}

interface File {
	file: string;
	code: string;
	language: string;
	icon: string;
}

export default function CodeEditor({ files }: Props) {
	const theme = useTheme();
	const monaco = useMonaco();
	const editorRef = useRef<monacoEditor.editor.IStandaloneCodeEditor | null>(
		null
	);
	const monacoRef = useRef<typeof monacoEditor | null>(null);
	const [currentTab, setCurrentTab] = useState(0);

	const handleEditorDidMount: OnMount = (editor, monaco) => {
		editorRef.current = editor;
		monacoRef.current = monaco;
		defineCustomTheme(monaco);
		monaco!.editor.setTheme("custom");
	};

	const defineCustomTheme = useCallback(
		(monaco: typeof monacoEditor) => {
			monaco.editor.defineTheme("custom", {
				base: theme.palette.mode === "dark" ? "vs-dark" : "vs",
				inherit: true,
				rules: [],
				colors: {
					"editorWhitespace.foreground": theme.palette.primary.main,
					"editor.background": theme.palette.primary.main,
					"editor.foreground": theme.palette.text.primary,
					"editorLineNumber.foreground": theme.palette.text.primary,
					"editorGutter.background": theme.palette.primary.main,
					"editorCursor.foreground": theme.palette.text.primary,
					"editor.lineHighlightBackground":
						theme.palette.primary.main,
				},
			});
		},
		[theme]
	);

	useEffect(() => {
		if (monacoRef.current) {
			defineCustomTheme(monaco!);

			monaco!.editor.setTheme("custom");
		}
	}, [defineCustomTheme, monaco]);

	const handleTabChange = (_event: SyntheticEvent, newValue: number) => {
		setCurrentTab(newValue);
		if (editorRef.current) {
			editorRef.current.setValue(files[newValue].code);
			monaco!.editor.setModelLanguage(
				editorRef.current.getModel()!,
				files[newValue].language
			);
		}
	};

	const styles = {
		tab: (tabIndex: number, index: number) => ({
			borderTopLeftRadius: "7px",
			borderTopRightRadius: "7px",
			borderTop: tabIndex === index ? 3 : 0,
			borderTopColor: "secondary.main",
			boxShadow: 1,
			marginRight: index !== files.length - 1 ? 0.5 : 0,
			backgroundColor: "primary.main",
			   fontFamily: "'Fira Mono', 'Menlo', 'Consolas', 'Liberation Mono', 'Courier New', monospace",
			fontSize: 12,
			fontWeight: tabIndex === index ? "bold" : null,
			color: "text.primary",
			textTransform: "none",
			"&.Mui-selected": {
				color: "text.primary",
			},
			minHeight: 60,
			paddingY: 0,
		}),
		divider: {
			borderBottomWidth: 3,
		},
		img: {
			width: 17,
		},
	};

	return (
		<>
			<Tabs
				variant="fullWidth"
				sx={{ backgroundColor: "background.default" }}
				value={currentTab}
				onChange={handleTabChange}>
				{files.map((file, index) => (
					<Tab
						icon={<img src={file.icon} style={styles.img} />}
						sx={styles.tab(currentTab, index)}
						label={file.file}
						key={index}
					/>
				))}
			</Tabs>
			<Divider sx={styles.divider} />

			<Editor
				height="100%"
				defaultLanguage={files[currentTab].language}
				defaultValue={files[currentTab].code}
				options={{
					padding: {
						top: 12,
					},
					lineNumbersMinChars: 4,
					minimap: {
						enabled: false,
					},
				}}
				onMount={handleEditorDidMount}
			/>
		</>
	);
}
