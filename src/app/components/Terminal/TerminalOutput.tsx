import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

export default function TerminalOutput({ children }: Props) {
	return (
		<pre
			style={{
				margin: 0,
				fontFamily: "menlo",
				wordWrap: "break-word",
				whiteSpace: "pre-wrap",
			}}>
			{children}
		</pre>
	);
}
