import { useState } from "react";
import DataStructurePageTemplate from "../DataStructurePageTemplate";
import HashTable from "../d3/HashTable";
import HashTableOperations from "./HashTableOperations";
import Terminal from "../../../app/components/terminal/TerminalWindow";
import CodeEditor from "../../../app/components/code-editor/CodeEditor";
import { hashTableFiles } from "./hashTableFiles";

export default function HashTablePage() {
	const [value, setValue] = useState<number | undefined>();
	const [rectHighlight, setRectHighlight] = useState<number | undefined>();
	const [circleHighlight, setCircleHighlight] = useState<
		number | undefined
	>();
	const [terminalOutputs, setTerminalOutputs] = useState<string[]>([
		"A Hash table is defined as a data structure used to insert, look up, and remove key-value pairs quickly. It operates on the hashing concept, where each key is translated by a hash function into a distinct index in an array. The index functions as a storage location for the matching value. In simple words, it maps the keys with the value. [www.geeksforgeeks.org/hash-table-data-structure/]\n\nType 'help' for a list of commands",
	]);
	const data: number[][] = [[], [], [], [], [], [], [], [], [], []];
	const [hashTable, setHashTable] = useState<number[][]>(data);

	return (
		<DataStructurePageTemplate
			header={"Hash Table"}
			dataStructure={
				<HashTable
					rectHighlight={rectHighlight}
					setRectHighlight={setRectHighlight}
					circleHighlight={circleHighlight}
					data={hashTable}
				/>
			}
			operations={
				<HashTableOperations
					value={value}
					hashTable={hashTable}
					setValue={setValue}
					setRectHighlight={setRectHighlight}
					setCircleHighlight={setCircleHighlight}
					setHashTable={setHashTable}
					setTerminalOutputs={setTerminalOutputs}
				/>
			}
			terminal={
				<Terminal
					terminalOutputs={terminalOutputs}
					setTerminalOutputs={setTerminalOutputs}
					header="hash-table"
				/>
			}
			codeEditor={<CodeEditor files={hashTableFiles} />}
		/>
	);
}
