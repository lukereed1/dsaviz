import { useState } from "react";
import DataStructurePageTemplate from "../DataStructurePageTemplate";
import Array from "../d3/Array";
import StackOperations from "./StackOperations";
import Terminal from "../../../app/components/terminal/Terminal";

export default function StackPage() {
	const [value, setValue] = useState<number | undefined>();
	const [stack, setStack] = useState<number[]>([1, 2, 3, 4, 5]);
	const [highlightIndex, setHighlightIndex] = useState<number | undefined>();
	const [terminalOutputs, setTerminalOutputs] = useState<string[]>([
		"Type 'help' for a list of commands",
	]);

	return (
		<DataStructurePageTemplate
			header={"Stack"}
			dataStructure={
				<Array
					data={stack}
					highlightIndex={highlightIndex}
					setHighlightedIndex={setHighlightIndex}
				/>
			}
			operations={
				<StackOperations
					value={value}
					stack={stack}
					setValue={setValue}
					setStack={setStack}
					setTerminalOutputs={setTerminalOutputs}
					setHighlightIndex={setHighlightIndex}
				/>
			}
			terminal={
				<Terminal
					terminalOutputs={terminalOutputs}
					setTerminalOutputs={setTerminalOutputs}
					header="data-structure/stack"
				/>
			}
			codeEditor={undefined}
		/>
	);
}
