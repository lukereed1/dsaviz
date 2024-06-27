import { useRef, useState } from "react";
import AlgoPageTemplate from "../AlgoPageTemplate";
import BarGraph from "../d3/BarGraph";
import Terminal from "../../../app/components/terminal/TerminalWindow";
import ControlBox from "../../../app/components/control-box/ControlBox";
import { delay, generateRandomArray } from "../../../app/util/util";
import CodeEditor from "../../../app/components/code-editor/CodeEditor";
import { mergeSortFiles } from "./mergeSortFiles";

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

	async function mergeSort(arr: number[]) {
		await mergeSortHelper(arr, 0, arr.length - 1);
		arr.forEach((_, i) => setSortedIndices((prev) => [...prev, i]));
	}

	async function mergeSortHelper(arr: number[], left: number, right: number) {
		if (left >= right) {
			return;
		}
		const mid = Math.floor((left + right) / 2);
		await mergeSortHelper(arr, left, mid);
		await mergeSortHelper(arr, mid + 1, right);
		await merge(arr, left, mid, right);
	}

	async function merge(
		arr: number[],
		left: number,
		mid: number,
		right: number
	) {
		const L = arr.slice(left, mid + 1);
		const R = arr.slice(mid + 1, right + 1);

		let i = 0,
			j = 0,
			k = left;
		while (i < L.length && j < R.length) {
			printToTerminal(`Comparing ${L[i]} and ${R[j]}`);
			setIndexComparison([left + i, mid + 1 + j]);
			await delay(delayTimeRef.current);
			await stepThrough();

			if (L[i] <= R[j]) {
				printToTerminal(`Setting index ${k} to ${L[i]}`);
				arr[k] = L[i];
				setIndexComparison([k]);
				setData([...arr]);
				await delay(delayTimeRef.current);
				await stepThrough();
				i++;
			} else {
				printToTerminal(`Setting index ${k} to ${R[j]}`);
				arr[k] = R[j];
				setIndexComparison([k]);
				setData([...arr]);
				await delay(delayTimeRef.current);
				await stepThrough();
				j++;
			}
			k++;
		}

		while (i < L.length) {
			printToTerminal(`Moving remaining ${L[i]} to index ${k}`);
			setIndexComparison([k]);
			arr[k] = L[i];
			setData([...arr]);
			await delay(delayTimeRef.current);
			await stepThrough();
			i++;
			k++;
		}

		while (j < R.length) {
			printToTerminal(`Moving remaining ${R[j]} to index ${k}`);
			setIndexComparison([k]);
			arr[k] = R[j];
			setData([...arr]);
			await delay(delayTimeRef.current);
			await stepThrough();
			j++;
			k++;
		}

		setIndexComparison(undefined);
		printToTerminal(
			`Merged subarray from index ${left} to ${right}: ${arr
				.slice(left, right + 1)
				.join(", ")}`
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
			codeEditor={<CodeEditor files={mergeSortFiles} />}
		/>
	);
}
