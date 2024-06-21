import { useRef, useState } from "react";
import AlgoPageTemplate from "../AlgoPageTemplate";
import BarGraph from "../d3/BarGraph";
import Terminal from "../../../app/components/terminal/TerminalWindow";
import ControlBox from "../../../app/components/control-box/ControlBox";
import { delay, generateRandomArray } from "../../../app/util/util";
import CodeEditor from "../../../app/components/code-editor/CodeEditor";
import { bubbleSortFiles } from "./bubbleSortFiles";

export default function BubbleSortPage() {
	const [terminalOutputs, setTerminalOutputs] = useState<string[]>([
		"Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. This algorithm is not suitable for large data sets as its average and worst-case time complexity is quite high. [www.geeksforgeeks.org/bubble-sort/]\n\nType 'help' for a list of commands",
	]);
	const initDataRef = useRef<number[]>(generateRandomArray(20));
	const [data, setData] = useState<number[]>(initDataRef.current);
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

	async function handleBubbleSort() {
		if (!data || dataSorted || sortingRef.current) return;
		sortingRef.current = true;
		isPlayingRef.current = true;
		await bubbleSort([...data]);
		setDataSorted(true);
		sortingRef.current = true;
		isPlayingRef.current = true;
	}

	function stopSorting() {
		sortingRef.current = false;
		isPlayingRef.current = false;
		setDataSorted(false);
		setIndexComparison(undefined);
		setSortedIndices([]);
		stepResolveRef.current = undefined;
	}

	async function bubbleSort(arr: number[]) {
		const n = arr.length - 1;
		const sorted = [];
		for (let i = 0; i < n; i++) {
			for (let j = 0; j < n - i; j++) {
				printToTerminal(`Comparing ${arr[j]} and ${arr[j + 1]}`);
				setIndexComparison([j, j + 1]);
				await delay(delayTimeRef.current);
				await stepThrough();
				if (arr[j] > arr[j + 1]) {
					printToTerminal(`Swapping ${arr[j]} and ${arr[j + 1]}`);
					const temp = arr[j];
					arr[j] = arr[j + 1];
					arr[j + 1] = temp;
					setData([...arr]);
					await delay(delayTimeRef.current);
					await stepThrough();
				}
			}
			setIndexComparison(undefined);
			sorted.push(n - i);
			setSortedIndices([...sorted]);
		}
		setSortedIndices([...sorted, 0]);
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
			header={"Bubble Sort"}
			visualisation={
				<BarGraph
					data={data}
					indexComparison={indexComparison}
					sortedIndices={sortedIndices}
					showValues={showValues}
				/>
			}
			controls={
				<ControlBox
					initDataRef={initDataRef}
					arrayLength={data ? data.length : 4}
					isPlayingRef={isPlayingRef}
					sortingRef={sortingRef}
					delayTimeRef={delayTimeRef}
					setData={setData}
					nextStep={nextStep}
					stopSorting={stopSorting}
					showValues={displayValues}
					algo={handleBubbleSort}
					setSortedIndices={setSortedIndices}
				/>
			}
			terminal={
				<Terminal
					terminalOutputs={terminalOutputs}
					setTerminalOutputs={setTerminalOutputs}
					header="bubble-sort"
				/>
			}
			codeEditor={<CodeEditor files={bubbleSortFiles} />}
		/>
	);
}
