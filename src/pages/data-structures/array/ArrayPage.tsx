import DataStructurePage from "../DataStructurePage";
import { useState } from "react";
import ArrayVisual from "./ArrayVisual";
import ArrayVisualizer from "./ArrayVisual";

export default function ArrayPage() {
	const [array, setArray] = useState([]);

	return (
		<DataStructurePage
			header="Array"
			dataStructure={
				<ArrayVisualizer
					data={[1, 1, 2, 2, 2, 2, 2, 4, 2, 2, 5, 4, 2, 4, 2, 1, 1]}
				/>
			}
		/>
	);
}
