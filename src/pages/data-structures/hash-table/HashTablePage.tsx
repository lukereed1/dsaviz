import { useState } from "react";
import DataStructurePageTemplate from "../DataStructurePageTemplate";
import HashTable from "../d3/HashTable";
import HashTableOperations from "./HashTableOperations";
import Terminal from "../../../app/components/terminal/Terminal";

export default function HashTablePage() {
	const data: number[][] = [[], [], [], [], [], [], [], [], [], []];
	const [value, setValue] = useState<number | undefined>();
	const [index, setIndex] = useState<number | undefined>(); // for cell highlighting
	const [terminalOutputs, setTerminalOutputs] = useState<string[]>([
		"Type 'help' for a list of commands",
	]);
	const [hashTable, setHashTable] = useState<number[][]>(data);

	return (
		<DataStructurePageTemplate
			header={"Hash Table"}
			dataStructure={<HashTable data={hashTable} />}
			operations={
				<HashTableOperations
					value={value}
					index={index}
					hashTable={hashTable}
					setValue={setValue}
					setIndex={setIndex}
					setHashTable={setHashTable}
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
