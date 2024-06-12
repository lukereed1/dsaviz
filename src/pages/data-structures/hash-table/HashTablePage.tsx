import DataStructurePageTemplate from "../DataStructurePageTemplate";
import HashTable from "../d3/HashTable";

export default function HashTablePage() {
	const sampleData: number[][] = [
		[23, 34],
		[45],
		[],
		[56, 67, 78],
		[],
		[89],
		[],
		[],
		[12],
		[9, 9, 9],
	];

	return (
		<DataStructurePageTemplate
			header={"Hash Table"}
			dataStructure={<HashTable data={sampleData} />}
			operations={undefined}
			terminal={undefined}
			codeEditor={undefined}
		/>
	);
}
