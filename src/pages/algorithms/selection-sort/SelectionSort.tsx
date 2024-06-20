import { useRef, useState } from "react";
import AlgoPageTemplate from "../AlgoPageTemplate";
import BarGraph from "../d3/BarGraph";
import Terminal from "../../../app/components/terminal/TerminalWindow";
import ControlBox from "../../../app/components/control-box/ControlBox";
import { delay, generateRandomArray } from "../../../app/util/util";
import CodeEditor from "../../../app/components/code-editor/CodeEditor";

export default function SelectionSortPage() {
	const [terminalOutputs, setTerminalOutputs] = useState<string[]>([
		"Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. This algorithm is not suitable for large data sets as its average and worst-case time complexity is quite high. [www.geeksforgeeks.org/selection-sort/]\n\nType 'help' for a list of commands",
	]);
	const [data, setData] = useState<number[]>(generateRandomArray(20));
	const [dataSorted, setDataSorted] = useState<boolean>(false);
	const [showValues, setShowValues] = useState<boolean>(false);
	const [sortedIndices, setSortedIndices] = useState<number[]>([]);
	const [indexComparison, setIndexComparison] = useState<
		[number, number, number?] | undefined
	>(undefined);
	const sortingRef = useRef<boolean>(false);
	const delayTimeRef = useRef<number>(0);
	const stepResolveRef = useRef<() => void>();
	const isPlayingRef = useRef<boolean>(false);

	function stopSorting() {
		sortingRef.current = false;
		isPlayingRef.current = false;
		setDataSorted(false);
		setIndexComparison(undefined);
		setSortedIndices([]);
		stepResolveRef.current = undefined;
	}

	function stepThrough() {
		if (isPlayingRef.current) return;
		return new Promise<void>((resolve) => {
			stepResolveRef.current = resolve;
		});
	}

	function nextStep() {
		if (stepResolveRef.current) {
			stepResolveRef.current();
		}
	}

	function displayValues() {
		setShowValues(!showValues);
	}

	function printToTerminal(output: string) {
		setTerminalOutputs((prevArray) => [...prevArray, output]);
	}

	return (
		<AlgoPageTemplate
			header={"Selection Sort"}
			visualisation={<BarGraph data={data} showValues={showValues} />}
			controls={
				<ControlBox
					data={data}
					arrayLength={data ? data.length : 4}
					isPlayingRef={isPlayingRef}
					sortingRef={sortingRef}
					delayTimeRef={delayTimeRef}
					setData={setData}
					nextStep={nextStep}
					stopSorting={stopSorting}
					showValues={displayValues}
					algo={undefined}
					setSortedIndices={setSortedIndices}
				/>
			}
			terminal={
				<Terminal
					terminalOutputs={terminalOutputs}
					setTerminalOutputs={setTerminalOutputs}
					header="selection-sort"
				/>
			}
			codeEditor={undefined}
		/>
	);
}
