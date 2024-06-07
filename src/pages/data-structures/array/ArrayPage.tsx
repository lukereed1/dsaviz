import DataStructurePageTemplate from "../DataStructurePageTemplate";
import { useState } from "react";
import Array2D from "./Array2D";
import VerticalTabs from "../../../app/components/VerticalTabs";
import ArrayOperations from "./ArrayOperations";

export default function ArrayPage() {
	const [valueInput, setValueInput] = useState<number>();
	const [indexInput, setIndexInput] = useState<number>();
	const [array, setArray] = useState([1, 77, 33, 888, 222]);

	const arrayOperations = [
		{
			label: "Append",
			children: (
				<ArrayOperations
					operation="Append"
					array={array}
					value={valueInput}
					setValue={setValueInput}
					setArray={setArray}
				/>
			),
		},
		{
			label: "Pop",
			children: (
				<ArrayOperations
					operation="Pop"
					array={array}
					index={indexInput}
					setIndex={setIndexInput}
					setArray={setArray}
				/>
			),
		},
		{
			label: "Insert",
			children: (
				<ArrayOperations
					operation="Insert"
					array={array}
					value={valueInput}
					index={indexInput}
					setValue={setValueInput}
					setIndex={setIndexInput}
					setArray={setArray}
				/>
			),
		},
		{
			label: "Remove",
			children: (
				<ArrayOperations
					operation="Remove"
					array={array}
					setArray={setArray}
					setValue={setValueInput}
					setIndex={setIndexInput}
				/>
			),
		},
		{
			label: "Search",
			children: (
				<ArrayOperations operation="Search" setValue={setValueInput} />
			),
		},
	];

	return (
		<>
			<DataStructurePageTemplate
				header="Array"
				operations={<VerticalTabs operations={arrayOperations} />}
				dataStructure={<Array2D data={array} />}
			/>
		</>
	);
}
