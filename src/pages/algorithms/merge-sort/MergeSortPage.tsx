import { useRef, useState } from "react";
import AlgoPageTemplate from "../AlgoPageTemplate";
import BarGraph from "../d3/BarGraph";
import Terminal from "../../../app/components/terminal/TerminalWindow";
import ControlBox from "../../../app/components/control-box/ControlBox";
import { delay, generateRandomArray } from "../../../app/util/util";
import CodeEditor from "../../../app/components/code-editor/CodeEditor";

export default function MergeSortPage() {
	const [terminalOutputs, setTerminalOutputs] = useState<string[]>([
		"Merge sort is a sorting algorithm that follows the divide-and-conquer approach. It works by recursively dividing the input array into smaller subarrays and sorting those subarrays then merging them back together to obtain the sorted array. [www.geeksforgeeks.org/merge-sort/]\n\nType 'help' for a list of commands",
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

	async function handleMergeSort() {
		if (!data || dataSorted || sortingRef.current) return;
		sortingRef.current = true;
		isPlayingRef.current = true;
		await mergeSort([...data]);
		data.forEach((_, i) => setSortedIndices((prev) => [...prev, i]));
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

	async function mergeSort(
		arr: number[],
		start = 0,
		end = arr.length
	): Promise<void> {
		if (end - start <= 1) {
			return;
		}

		const mid = Math.floor((start + end) / 2);

		await mergeSort(arr, start, mid);
		await mergeSort(arr, mid, end);
		await merge(arr, start, mid, end);
		printToTerminal(
			`Merged array from start=${start} to end=${end}: [${arr
				.slice(start, end)
				.join(", ")}]`
		);
	}

	async function merge(
		arr: number[],
		start: number,
		mid: number,
		end: number
	): Promise<void> {
		const leftArray = arr.slice(start, mid);
		const rightArray = arr.slice(mid, end);

		let leftIndex = 0;
		let rightIndex = 0;
		let sortedIndex = start;

		while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
			printToTerminal(
				`Comparing index ${start + leftIndex} and ${
					mid + rightIndex
				} (values: ${leftArray[leftIndex]} and ${
					rightArray[rightIndex]
				})`
			);
			setIndexComparison([start + leftIndex, mid + rightIndex]);
			await delay(delayTimeRef.current);
			await stepThrough();

			if (leftArray[leftIndex] < rightArray[rightIndex]) {
				printToTerminal(
					`Inserting ${leftArray[leftIndex]} into index ${sortedIndex}`
				);
				setIndexComparison([start + leftIndex, sortedIndex]);
				arr[sortedIndex] = leftArray[leftIndex];
				leftIndex++;
			} else {
				printToTerminal(
					`Inserting ${rightArray[rightIndex]} into index ${sortedIndex}`
				);
				setIndexComparison([mid + rightIndex, sortedIndex]);
				arr[sortedIndex] = rightArray[rightIndex];
				rightIndex++;
			}
			setData([...arr]);
			await delay(delayTimeRef.current);
			await stepThrough();
			sortedIndex++;
		}

		while (leftIndex < leftArray.length) {
			printToTerminal(
				`Inserting remaining ${leftArray[leftIndex]} into index ${sortedIndex}`
			);
			setIndexComparison([start + leftIndex, sortedIndex]);
			arr[sortedIndex] = leftArray[leftIndex];
			leftIndex++;
			sortedIndex++;
			setData([...arr]);
			await delay(delayTimeRef.current);
			await stepThrough();
		}

		while (rightIndex < rightArray.length) {
			printToTerminal(
				`Inserting remaining ${rightArray[rightIndex]} into index ${sortedIndex}`
			);
			setIndexComparison([mid + rightIndex, sortedIndex]);
			arr[sortedIndex] = rightArray[rightIndex];
			rightIndex++;
			sortedIndex++;
			setData([...arr]);
			await delay(delayTimeRef.current);
			await stepThrough();
		}

		printToTerminal(
			`Merged segment: [${arr.slice(start, end).join(", ")}]`
		);
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
			header={"Merge Sort"}
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
					algo={handleMergeSort}
					setSortedIndices={setSortedIndices}
				/>
			}
			terminal={
				<Terminal
					terminalOutputs={terminalOutputs}
					setTerminalOutputs={setTerminalOutputs}
					header="merge-sort"
				/>
			}
			codeEditor={undefined}
		/>
	);
}
