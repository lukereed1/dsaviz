import { useRef, useState } from "react";
import AlgoPageTemplate from "../AlgoPageTemplate";
import BarGraph from "../d3/BarGraph";
import Terminal from "../../../app/components/terminal/TerminalWindow";
import ControlBox from "../../../app/components/control-box/ControlBox";
import { delay, generateRandomArray } from "../../../app/util/util";
import CodeEditor from "../../../app/components/code-editor/CodeEditor";

export default function InsertionSortPage() {
	const [terminalOutputs, setTerminalOutputs] = useState<string[]>([
		"Insertion sort is a simple sorting algorithm that works by iteratively inserting each element of an unsorted list into its correct position in a sorted portion of the list. It is a stable sorting algorithm, meaning that elements with equal values maintain their relative order in the sorted output. [www.geeksforgeeks.org/insertion-sort/]\n\nType 'help' for a list of commands",
	]);
	const initDataRef = useRef<number[]>(generateRandomArray(20));
	const [data, setData] = useState<number[]>(initDataRef.current);
	const [dataSorted, setDataSorted] = useState<boolean>(false);
	const [showValues, setShowValues] = useState<boolean>(false);
	const [sortedIndices, setSortedIndices] = useState<number[]>([]);
	const [indexComparison, setIndexComparison] = useState<
		[number, number?, number?] | undefined
	>(undefined);
	const sortingRef = useRef<boolean>(false);
	const delayTimeRef = useRef<number>(0);
	const stepResolveRef = useRef<() => void>();
	const isPlayingRef = useRef<boolean>(false);

	async function handleInsertionSort() {
		if (!data || dataSorted || sortingRef.current) return;
		sortingRef.current = true;
		isPlayingRef.current = true;
		await insertionSort([...data]);
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

	async function insertionSort(arr: number[]) {
		printToTerminal(`Index 0 assumed to be sorted (value: ${arr[0]})`);
		setIndexComparison([0]);
		await delay(delayTimeRef.current);
		await stepThrough();
		for (let i = 1; i < arr.length; i++) {
			const key = arr[i];
			let j = i - 1;
			printToTerminal(
				`Comparing index ${j} and ${i} (values: ${arr[j]} and ${arr[i]})`
			);
			setIndexComparison([j, i]);
			await delay(delayTimeRef.current);
			await stepThrough();

			while (j >= 0 && arr[j] > key) {
				printToTerminal(
					`Moving value ${arr[j]} from index ${j} to index ${j + 1}`
				);
				setIndexComparison([j, j + 1]);
				arr[j + 1] = arr[j];
				setData([...arr]);
				await delay(delayTimeRef.current);
				await stepThrough();
				j--;
			}
			if (i !== j + 1)
				printToTerminal(
					`Moved value ${key} from index ${i} to index ${j + 1}`
				);
			setIndexComparison([i, j + 1]);
			arr[j + 1] = key;
			setData([...arr]);
			if (i !== j + 1) {
				await delay(delayTimeRef.current);
				await stepThrough();
			}
			setIndexComparison(undefined);
		}
		arr.forEach((_, i) => setSortedIndices((prev) => [...prev, i]));
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
			header={"Insertion Sort"}
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
					algo={handleInsertionSort}
					setSortedIndices={setSortedIndices}
				/>
			}
			terminal={
				<Terminal
					terminalOutputs={terminalOutputs}
					setTerminalOutputs={setTerminalOutputs}
					header="insertion-sort"
				/>
			}
			codeEditor={undefined}
		/>
	);
}
