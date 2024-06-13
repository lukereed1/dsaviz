import { useState } from "react";
import DataStructurePageTemplate from "../DataStructurePageTemplate";
import Array from "../d3/Array";
import QueueOperations from "./QueueOperations";
import Terminal from "../../../app/components/terminal/Terminal";
import CodeEditor from "../../../app/components/code-editor/CodeEditor";
import { queueFiles } from "./queueFiles";

export default function QueuePage() {
	const [value, setValue] = useState<number | undefined>();
	const [queue, setQueue] = useState<number[]>([1, 2, 3, 4, 5]);
	const [highlightIndex, setHighlightIndex] = useState<number | undefined>();
	const [terminalOutputs, setTerminalOutputs] = useState<string[]>([
		"Type 'help' for a list of commands",
	]);

	return (
		<DataStructurePageTemplate
			header={"Queue"}
			dataStructure={
				<Array
					data={queue}
					highlightIndex={highlightIndex}
					setHighlightedIndex={setHighlightIndex}
				/>
			}
			operations={
				<QueueOperations
					value={value}
					queue={queue}
					setValue={setValue}
					setQueue={setQueue}
					setHighlightIndex={setHighlightIndex}
					setTerminalOutputs={setTerminalOutputs}
				/>
			}
			terminal={
				<Terminal
					terminalOutputs={terminalOutputs}
					setTerminalOutputs={setTerminalOutputs}
					header="data-structure/queue"
				/>
			}
			codeEditor={<CodeEditor files={queueFiles} />}
		/>
	);
}
