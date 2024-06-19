import { useState } from "react";
import AlgoPageTemplate from "../AlgoPageTemplate";
import BarGraph from "../d3/BarGraph";
import Terminal from "../../../app/components/terminal/TerminalWindow";
import ControlBox from "../../../app/components/control-box/ControlBox";
import { delay } from "../../../app/util/util";

export default function QuickSortPage() {
	const [terminalOutputs, setTerminalOutputs] = useState<string[]>([
		"QuickSort is a sorting algorithm based on the Divide and Conquer algorithm that picks an element as a pivot and partitions the given array around the picked pivot by placing the pivot in its correct position in the sorted array. [www.geeksforgeeks.org/quick-sort/]\n\nType 'help' for a list of commands",
	]);

	const [data, setData] = useState<number[]>(generateRandomArray(20));
	const [delayMs, setDelayMs] = useState<number>(0);
	const [dataSorting, setDataSorting] = useState(false);
	const [dataSorted, setDataSorted] = useState(false);
	const [sortedIndices, setSortedIndices] = useState<number[]>([]);
	const [indexComparison, setIndexComparison] = useState<
		[number, number] | undefined
	>(undefined);

	function generateRandomArray(length: number) {
		const arr = [];
		for (let i = 0; i < length; i++) {
			const randomNum = Math.floor(Math.random() * 100 + 1);
			arr.push(randomNum);
		}
		return arr;
	}

	async function handleQuickSort() {
		if (!data || dataSorted || dataSorting) return;

		await quickSort([...data], 0, data.length - 1);
		setDataSorted(true);
	}

	async function partition(
		arr: number[],
		low: number,
		high: number
	): Promise<number> {
		const pivot = arr[high];
		let i = low - 1;

		printToTerminal(`Partitioning with pivot ${pivot} at index ${high}`);

		for (let j = low; j <= high - 1; j++) {
			setIndexComparison([i, j]);
			printToTerminal(
				`Comparing index ${j} (value ${arr[j]}) with pivot (value ${pivot})`
			);
			await delay(delayMs);
			// If current element is smaller than the pivot
			if (arr[j] < pivot) {
				// Increment index of smaller element
				i++;
				// Swap elements
				[arr[i], arr[j]] = [arr[j], arr[i]];
				setData([...arr]);
				printToTerminal(
					`Swapping index ${i} (value ${arr[i]}) with index ${j} (value ${arr[j]})`
				);
				await delay(delayMs);
			}
		}
		// Swap pivot to its correct position
		[arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
		setData([...arr]);
		printToTerminal(
			`Swapping pivot (value ${pivot}) with index ${i + 1} (value ${
				arr[i + 1]
			})`
		);
		await delay(delayMs);

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

			printToTerminal(
				`Sorting left partition [${low}, ${partitionIndex - 1}]`
			);
			await quickSort(arr, low, partitionIndex - 1);
			setSortedIndices((prev) => [...prev, partitionIndex]);

			printToTerminal(
				`Sorting right partition [${partitionIndex + 1}, ${high}]`
			);
			await quickSort(arr, partitionIndex + 1, high);
		} else if (low === high) {
			setSortedIndices((prev) => [...prev, low]);
		}
	}

	function printToTerminal(output: string) {
		setTerminalOutputs((prevArray) => [...prevArray, output]);
	}

	return (
		<>
			<AlgoPageTemplate
				header={"Quick Sort"}
				visualisation={
					<BarGraph
						data={data}
						indexComparison={indexComparison}
						sortedIndices={sortedIndices}
					/>
				}
				controls={
					<ControlBox
						data={data}
						arrayLength={data ? data.length : 4}
						setData={setData}
						setDataSorted={setDataSorted}
						setDataSorting={setDataSorting}
						setDelayTime={setDelayMs}
						algo={handleQuickSort}
						setSortedIndices={setSortedIndices}
						generateRandomArray={generateRandomArray}
					/>
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
