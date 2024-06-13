import { useState } from "react";
import DataStructurePageTemplate from "../DataStructurePageTemplate";

export default function StackPage() {
	const [valueInput, setValueInput] = useState<number | undefined>();

	const [stack, setStack] = useState<number[]>([1, 2, 3, 4, 5]);
	const [highlightIndex, setHighlightIndex] = useState<number | undefined>();
	const [terminalOutputs, setTerminalOutputs] = useState<string[]>([
		"Type 'help' for a list of commands",
	]);

	return (
		<DataStructurePageTemplate
			header={"Queue"}
			dataStructure={undefined}
			operations={undefined}
			terminal={undefined}
			codeEditor={undefined}
		/>
	);
}
