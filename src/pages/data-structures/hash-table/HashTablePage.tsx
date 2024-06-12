import { useState } from "react";
import DataStructurePageTemplate from "../DataStructurePageTemplate";
import HashTable from "../d3/HashTable";

export default function HashTablePage() {
	const data: number[][] = [[0], [], [22], [], [], [], [], [], [], []];
	const [value, setValue] = useState<number | undefined>();
	const [hashTable, setHashTable] = useState<number[][]>(data);

	return (
		<DataStructurePageTemplate
			header={"Hash Table"}
			dataStructure={<HashTable data={hashTable} />}
			operations={undefined}
			terminal={undefined}
			codeEditor={undefined}
		/>
	);
}
