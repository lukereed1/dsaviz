import DataStructurePage from "../DataStructurePage";
import { useState } from "react";
import ArrayVisual from "./ArrayVisual";
import ArrayVisualizer from "./ArrayVisual";
import VerticalTabs from "../../../app/components/VerticalTabs";

export default function ArrayPage() {
	const [array, setArray] = useState([]);

	const arrayOperations = [
		{ label: "Append", children: "test123" },
		{ label: "Insert" },
		{ label: "Pop" },
		{ label: "Remove" },
		{ label: "Search" },
	];

	return (
		<DataStructurePage
			header="Array"
			operations={<VerticalTabs operations={arrayOperations} />}
			dataStructure={
				<ArrayVisualizer
					data={[
						1, 1, 2, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2,
						4, 2,
					]}
				/>
			}
		/>
	);
}
