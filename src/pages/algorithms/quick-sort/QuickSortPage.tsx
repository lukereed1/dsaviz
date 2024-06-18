import { useEffect, useState } from "react";
import AlgoPageTemplate from "../AlgoPageTemplate";
import BarGraph from "../d3/BarGraph";
import Terminal from "../../../app/components/terminal/TerminalWindow";
import ControlBox from "../../../app/components/control-box/ControlBox";

export default function QuickSortPage() {
	const [terminalOutputs, setTerminalOutputs] = useState<string[]>([
		"QuickSort is a sorting algorithm based on the Divide and Conquer algorithm that picks an element as a pivot and partitions the given array around the picked pivot by placing the pivot in its correct position in the sorted array. [www.geeksforgeeks.org/quick-sort/]\n\nType 'help' for a list of commands",
	]);

	const [data, setData] = useState<number[] | undefined>();

	useEffect(() => {
		generateRandomArray(20);
	}, []);

	function generateRandomArray(length: number) {
		const arr = [];
		for (let i = 0; i < length; i++) {
			const randomNum = Math.floor(Math.random() * (100 - 1));
			arr.push(randomNum);
		}
		setData(arr);
	}

	return (
		<>
			<AlgoPageTemplate
				header={"Quick Sort"}
				visualisation={<BarGraph data={data} />}
				controls={
					<ControlBox generateRandomArray={generateRandomArray} />
				}
				terminal={
					<Terminal
						terminalOutputs={terminalOutputs}
						setTerminalOutputs={setTerminalOutputs}
						header="menu/quick-sort"
					/>
				}
				codeEditor={undefined}></AlgoPageTemplate>
		</>
	);
}
