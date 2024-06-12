import { useState } from "react";
import DataStructurePageTemplate from "../DataStructurePageTemplate";
import HashTable from "../d3/HashTable";
import HashTableOperations from "./HashTableOperations";
import Terminal from "../../../app/components/terminal/Terminal";

export default function HashTablePage() {
	const data: number[][] = [[], [], [], [], [], [], [], [], [], []];
	const [value, setValue] = useState<number | undefined>();
	const [rectHighlight, setRectHighlight] = useState<number | undefined>();
	const [circleHighlight, setCircleHighlight] = useState<
		number | undefined
	>();
	const [terminalOutputs, setTerminalOutputs] = useState<string[]>([
		"Type 'help' for a list of commands",
	]);
	const [hashTable, setHashTable] = useState<number[][]>(data);

	return (
		<DataStructurePageTemplate
			header={"Hash Table"}
			dataStructure={
				<HashTable
					rectHighlight={rectHighlight}
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
					header="data-structure/hash-table"
				/>
			}
			codeEditor={undefined}
		/>
	);
}
