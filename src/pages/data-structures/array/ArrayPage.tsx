import DataStructurePageTemplate from "../DataStructurePageTemplate";
import { useState } from "react";
import Array2D from "./Array2D";
import VerticalTabs from "../../../app/components/VerticalTabs";
import ArrayOperations from "./ArrayOperations";
import { Typography } from "@mui/material";

export default function ArrayPage() {
	const [valueInput, setValueInput] = useState("");
	const [indexInput, setIndexInput] = useState("");
	const [array, setArray] = useState([]);

	const arrayOperations = [
		{
			label: "Append",
			children: (
				<ArrayOperations
					operation="Append"
					setValue={setValueInput}
					value={valueInput}
				/>
			),
		},
		{
			label: "Pop",
			children: (
				<ArrayOperations operation="Pop" setValue={setValueInput} />
			),
		},
		{
			label: "Insert",
			children: (
				<ArrayOperations
					operation="Insert"
					setValue={setValueInput}
					setIndex={setIndexInput}
				/>
			),
		},
		{
			label: "Remove",
			children: (
				<ArrayOperations
					operation="Remove"
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
				dataStructure={<Array2D data={[1, 1, 2, 2, 2, 2, 2, 2]} />}
			/>
			<Typography variant="h1">{valueInput}</Typography>
			<Typography variant="h1">{indexInput}</Typography>
		</>
	);
}
