import DataStructurePageTemplate from "../DataStructurePageTemplate";
import { useState } from "react";
import Array from "../d3/Array";

import ArrayOperations from "./ArrayOperations";
import Terminal from "../../../app/components/terminal/Terminal";
import CodeEditor from "../../../app/components/code-editor/CodeEditor";
import { arrayFiles } from "./arrayFiles";

export default function ArrayPage() {
	const [valueInput, setValueInput] = useState<number | undefined>();
	const [indexInput, setIndexInput] = useState<number | undefined>();
	const [terminalOutputs, setTerminalOutputs] = useState<string[]>([
		"Type 'help' for a list of commands",
	]);
	const [array, setArray] = useState<number[]>([1, 2, 3, 4, 5]);
	const [highlightIndex, setHighlightIndex] = useState<number | undefined>();
	return (
		<>
			<DataStructurePageTemplate
				header="Array"
				operations={
					<ArrayOperations
						value={valueInput}
						index={indexInput}
						array={array}
						setValue={setValueInput}
						setIndex={setIndexInput}
						setArray={setArray}
						setHighlightedIndex={setHighlightIndex}
						setTerminalOutputs={setTerminalOutputs}
					/>
				}
				dataStructure={
					<Array
						data={array}
						highlightIndex={highlightIndex}
						setHighlightedIndex={setHighlightIndex}
					/>
				}
				terminal={
					<Terminal
						terminalOutputs={terminalOutputs}
						setTerminalOutputs={setTerminalOutputs}
						header="menu/array"
					/>
				}
				codeEditor={<CodeEditor files={arrayFiles} />}
			/>
		</>
	);
}
