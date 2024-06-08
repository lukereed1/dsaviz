import DataStructurePageTemplate from "../DataStructurePageTemplate";
import { useState } from "react";
import Array2D from "./Array2D";
import ArrayOperations from "./ArrayOperations";

export default function ArrayPage() {
	const [valueInput, setValueInput] = useState<number | undefined>();
	const [indexInput, setIndexInput] = useState<number | undefined>();
	const [array, setArray] = useState([1, 77, 33, 888, 222]);

	return (
		<>
			<DataStructurePageTemplate
				header="Array"
				operations={
					<ArrayOperations
						value={valueInput}
						index={indexInput}
						array={array}
						setValue={setValueInput}
						setIndex={setIndexInput}
						setArray={setArray}
					/>
				}
				dataStructure={<Array2D data={array} />}
			/>
		</>
	);
}
