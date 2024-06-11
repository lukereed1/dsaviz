import Editor, { OnMount, useMonaco } from "@monaco-editor/react";
import { Box, Divider, Tab, Tabs, useTheme } from "@mui/material";
import {
	SyntheticEvent,
	useCallback,
	useEffect,
	useRef,
	useState,
} from "react";
import * as monacoEditor from "monaco-editor";

interface Props {
	arrayFiles: ArrayFile[];
}

interface ArrayFile {
	file: string;
	code: string;
	language: string;
}

export default function CodeEditor({ arrayFiles }: Props) {
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

	const handleTabChange = (event: SyntheticEvent, newValue: number) => {
		setCurrentTab(newValue);
		if (editorRef.current) {
			editorRef.current.setValue(arrayFiles[newValue].code);
			monaco!.editor.setModelLanguage(
				editorRef.current.getModel()!,
				arrayFiles[newValue].language
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
			marginX: index !== 0 && index !== arrayFiles.length - 1 ? 0.5 : 0,
			backgroundColor: "primary.main",
			fontFamily: "menlo",
			fontSize: 12,
			fontWeight: tabIndex === index ? "bold" : null,
			color: "text.primary",
			textTransform: "none",
			"&.Mui-selected": {
				color: "text.primary",
			},
		}),
		divider: {
			borderBottomWidth: 3,
		},
		editorBox: {
			marginTop: 2,
			height: "100%",
		},
	};

	return (
		<>
			<Tabs
				variant="fullWidth"
				sx={{ backgroundColor: "background.default" }}
				value={currentTab}
				onChange={handleTabChange}>
				{arrayFiles.map((file, index) => (
					<Tab
						sx={styles.tab(currentTab, index)}
						label={file.file}
						key={index}
					/>
				))}
			</Tabs>
			<Divider sx={styles.divider} />
			<Box sx={styles.editorBox}>
				<Editor
					height="100%"
					defaultLanguage={arrayFiles[currentTab].language}
					defaultValue={"console.log(test)"}
					options={{
						lineNumbersMinChars: 4,
						minimap: {
							enabled: false,
						},
					}}
					onMount={handleEditorDidMount}
				/>
			</Box>
		</>
	);
}
