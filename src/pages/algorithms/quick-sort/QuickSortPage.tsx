import { useState } from "react";
import AlgoPageTemplate from "../AlgoPageTemplate";
import BarGraph from "../d3/BarGraph";
import Terminal from "../../../app/components/terminal/TerminalWindow";
import ControlBox from "../../../app/components/control-box/ControlBox";

export default function QuickSortPage() {
	const [terminalOutputs, setTerminalOutputs] = useState<string[]>([
		"QuickSort is a sorting algorithm based on the Divide and Conquer algorithm that picks an element as a pivot and partitions the given array around the picked pivot by placing the pivot in its correct position in the sorted array. [www.geeksforgeeks.org/quick-sort/]",
	]);
	const [data, setData] = useState<number[] | undefined>([
		100, 1, 3, 50, 74, 21, 100, 23, 1, 12, 12, 19, 150, 100, 100, 1, 3, 50,
		74, 21, 100, 23, 1, 12, 12, 19, 150, 100, 100, 1, 3, 50, 74, 21, 100,
		23, 1, 12, 12, 19, 150, 100, 100, 1, 12, 12, 19, 150, 100, 100, 1, 12,
		12, 19, 150, 100, 100, 1, 12, 12, 19, 150, 100, 100, 1, 12, 12, 19, 150,
		100, 100, 1, 12, 12, 19, 150, 100, 100, 1, 12, 12, 19, 150, 100, 100, 1,
		12, 12, 19, 150, 100, 100, 1, 12, 12, 19, 150, 100, 100,
	]);
	return (
		<>
			<AlgoPageTemplate
				header={"Quick Sort"}
				visualisation={<BarGraph data={data} />}
				controls={<ControlBox />}
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
