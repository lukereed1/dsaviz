import Editor, { OnMount, useMonaco } from "@monaco-editor/react";
import { useTheme } from "@mui/material";
import { useCallback, useEffect, useRef } from "react";
import * as monacoEditor from "monaco-editor";

export default function CodeEditor() {
	const theme = useTheme();
	const monaco = useMonaco();
	const editorRef = useRef<monacoEditor.editor.IStandaloneCodeEditor | null>(
		null
	);
	const monacoRef = useRef<typeof monacoEditor | null>(null);

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

	return (
		<Editor
			height="100%"
			defaultLanguage="javascript"
			defaultValue="console.log('Hello world!');"
			options={{
				minimap: {
					enabled: false,
				},
			}}
			onMount={handleEditorDidMount}
		/>
	);
}
