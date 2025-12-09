import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

export default function TerminalOutput({ children }: Props) {
	return (
		<pre
			style={{
				margin: 0,
				   fontFamily: "'Fira Mono', 'Menlo', 'Consolas', 'Liberation Mono', 'Courier New', monospace",
				wordWrap: "break-word",
				whiteSpace: "pre-wrap",
			}}>
			{children}
		</pre>
	);
}
