import DataStructurePageTemplate from "../DataStructurePageTemplate";
import { useState } from "react";
import Array2D from "./Array2D";

import ArrayOperations from "./ArrayOperations";
import Terminal from "../../../app/components/Terminal/Terminal";

export default function ArrayPage() {
	const [valueInput, setValueInput] = useState<number | undefined>();
	const [indexInput, setIndexInput] = useState<number | undefined>();
	const welcomeString = "Type 'help' for a list of commands";
	const [terminalOutputs, setTerminalOutputs] = useState<string[]>([
		welcomeString,
	]);
	const [array, setArray] = useState<number[]>([1, 2, 3, 4, 5]);

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
				terminal={
					<Terminal
						terminalOutputs={terminalOutputs}
						setTerminalOutputs={setTerminalOutputs}
						header="data-structure/array"
					/>
				}
			/>
		</>
	);
}
