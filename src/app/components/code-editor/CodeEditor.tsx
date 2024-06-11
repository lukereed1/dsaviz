import Editor, { useMonaco } from "@monaco-editor/react";
import { useTheme } from "@mui/material";
import { useEffect } from "react";

export default function CodeEditor() {
	const theme = useTheme();
	const monaco = useMonaco();

	useEffect(() => {
		if (monaco) {
			monaco.editor.defineTheme("customDark", {
				base: "vs-dark",
				inherit: true,
				rules: [],
				colors: {
					"editor.background": theme.palette.primary.main,
					"editor.foreground": theme.palette.text.primary,
					"editorLineNumber.foreground": theme.palette.text.primary,
					"editorGutter.background": theme.palette.primary.main,
					"editorCursor.foreground": theme.palette.text.primary,
					"editor.lineHighlightBackground":
						theme.palette.primary.main,
				},
			});
			monaco.editor.defineTheme("customLight", {
				base: "vs",
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
			monaco.editor.setTheme(
				theme.palette.mode === "dark" ? "customDark" : "customLight"
			);
		}
	}, [
		monaco,
		theme.palette.mode,
		theme.palette.primary.main,
		theme.palette.text.primary,
	]);

	return (
		<Editor
			height={"100%"}
			defaultLanguage="javascript"
			defaultValue="console.log('Hello world!');"
			options={{
				minimap: {
					enabled: false,
				},
			}}
		/>
	);
}
