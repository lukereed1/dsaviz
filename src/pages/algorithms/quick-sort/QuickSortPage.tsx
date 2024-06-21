import { useRef, useState } from "react";
import AlgoPageTemplate from "../AlgoPageTemplate";
import BarGraph from "../d3/BarGraph";
import Terminal from "../../../app/components/terminal/TerminalWindow";
import ControlBox from "../../../app/components/control-box/ControlBox";
import { delay, generateRandomArray } from "../../../app/util/util";
import CodeEditor from "../../../app/components/code-editor/CodeEditor";
import { quickSortFiles } from "./quickSortFiles";

export default function QuickSortPage() {
	const [terminalOutputs, setTerminalOutputs] = useState<string[]>([
		"QuickSort is a sorting algorithm based on the Divide and Conquer algorithm that picks an element as a pivot and partitions the given array around the picked pivot by placing the pivot in its correct position in the sorted array. [www.geeksforgeeks.org/quick-sort/]\n\nType 'help' for a list of commands",
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

	async function handleQuickSort() {
		if (!data || dataSorted || sortingRef.current) return;
		sortingRef.current = true;
		isPlayingRef.current = true;
		await quickSort([...data], 0, data.length - 1);
		setDataSorted(true);
		sortingRef.current = false;
		isPlayingRef.current = false;
	}

	function stopSorting() {
		sortingRef.current = false;
		isPlayingRef.current = false;
		setDataSorted(false);
		setIndexComparison(undefined);
		setSortedIndices([]);
		stepResolveRef.current = undefined;
	}

	async function partition(
		arr: number[],
		low: number,
		high: number
	): Promise<number> {
		const pivot = arr[high];
		let i = low - 1;

		for (let j = low; j <= high - 1; j++) {
			if (!sortingRef.current) return Promise.reject(); // Stops if sort interupted

			// If current element is smaller than the pivot
			printToTerminal(`Comparing ${arr[j]} and pivot ${pivot}`);
			setIndexComparison([j, high]);
			await delay(delayTimeRef.current);

			await stepThrough();

			if (arr[j] < pivot) {
				i++;
				// Swap elements
				if (i !== j) {
					[arr[i], arr[j]] = [arr[j], arr[i]];
					setData([...arr]);
					printToTerminal(`Swapping ${arr[i]} and ${arr[j]}`);
					setIndexComparison([j, high, i]);
					await delay(delayTimeRef.current);
					await stepThrough();
				}
			}
		}
		// Swap pivot to its correct position
		[arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
		setData([...arr]);
		printToTerminal(`Moving pivot ${pivot} to correct position`);
		setIndexComparison([i + 1, high]); // Setting the swap indices for pivot
		await delay(delayTimeRef.current);
		await stepThrough();
		setIndexComparison(undefined);
		return i + 1; // Return the partition index
	}

	async function quickSort(
		arr: number[],
		low: number,
		high: number
	): Promise<void> {
		if (low < high) {
			const partitionIndex = await partition(arr, low, high);

			await quickSort(arr, low, partitionIndex - 1);
			setSortedIndices((prev) => [...prev, partitionIndex]);

			await quickSort(arr, partitionIndex + 1, high);
		} else if (low === high) {
			setSortedIndices((prev) => [...prev, low]);
		}
	}

	function stepThrough() {
		if (isPlayingRef.current) return; // If not being stepped through algorithm doesn't pause
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
			header={"Quick Sort"}
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
					algo={handleQuickSort}
					setSortedIndices={setSortedIndices}
				/>
			}
			terminal={
				<Terminal
					terminalOutputs={terminalOutputs}
					setTerminalOutputs={setTerminalOutputs}
					header="quick-sort"
				/>
			}
			codeEditor={
				<CodeEditor files={quickSortFiles} />
			}></AlgoPageTemplate>
	);
}
