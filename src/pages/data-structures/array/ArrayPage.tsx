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
	const welcomeString = "Type 'help' for a list of commands";
	const [terminalOutputs, setTerminalOutputs] = useState<string[]>([
		welcomeString,
	]);
	const [array, setArray] = useState<number[]>([1, 2, 3, 4, 5]);
	const [highlightedIndex, setHighlightedIndex] = useState<
		number | undefined
	>();
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
						setHighlightedIndex={setHighlightedIndex}
						setTerminalOutputs={setTerminalOutputs}
					/>
				}
				dataStructure={
					<Array data={array} highlightIndex={highlightedIndex} />
				}
				terminal={
					<Terminal
						terminalOutputs={terminalOutputs}
						setTerminalOutputs={setTerminalOutputs}
						header="data-structure/array"
					/>
				}
				codeEditor={<CodeEditor arrayFiles={arrayFiles} />}
			/>
		</>
	);
}
