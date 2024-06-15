import { useState } from "react";
import DataStructurePageTemplate from "../DataStructurePageTemplate";
import Array from "../d3/Array";
import StackOperations from "./StackOperations";
import Terminal from "../../../app/components/terminal/TerminalWindow";
import { stackFiles } from "./stackFiles";
import CodeEditor from "../../../app/components/code-editor/CodeEditor";

export default function StackPage() {
	const [value, setValue] = useState<number | undefined>();
	const [stack, setStack] = useState<number[]>([1, 2, 3, 4, 5]);
	const [highlightIndex, setHighlightIndex] = useState<number | undefined>();
	const [terminalOutputs, setTerminalOutputs] = useState<string[]>([
		"A Stack is a linear data structure that follows a particular order in which the operations are performed. The order may be LIFO (Last In First Out) or FILO (First In Last Out). LIFO implies that the element that is inserted last, comes out first and FILO implies that the element that is inserted first, comes out last. [www.geeksforgeeks.org/stack-data-structure/]\n\nType 'help' for a list of commands",
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
					header="menu/stack"
				/>
			}
			codeEditor={<CodeEditor files={stackFiles} />}
		/>
	);
}
