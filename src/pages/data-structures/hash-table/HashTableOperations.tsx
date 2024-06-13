import { Box } from "@mui/material";
import ValueTextInput from "../../../app/components/ValueTextInput";
import OperationButton from "../../../app/components/operations-box/OperationButton";
import OperationBox from "../../../app/components/operations-box/OperationBox";
import { inputPrefix } from "../../../app/components/terminal/Terminal";
import { Dispatch, SetStateAction } from "react";

interface Props {
	value: number | undefined;
	setValue: (value: number | undefined) => void;
	setRectHighlight: (value: number | undefined) => void;
	setCircleHighlight: (value: number | undefined) => void;
	hashTable: number[][];
	setHashTable: (ht: number[][]) => void;
	setTerminalOutputs: Dispatch<SetStateAction<string[]>>;
}

export default function HashTableOperations(props: Props) {
	const {
		value,
		hashTable,
		setValue,
		setRectHighlight,
		setCircleHighlight,
		setHashTable,
		setTerminalOutputs,
	} = props;

	function hashFunction(value: number) {
		// Returns index/bucket to append value to
		return value % hashTable.length;
	}

	function handleInsert() {
		if (checkInvalidValue()) return;
		const bucketIndex = hashFunction(value!);
		const updatedHashTable = [...hashTable];
		updatedHashTable[bucketIndex].push(value!);
		const output = `${inputPrefix}insert ${value} to doubly linked list ${bucketIndex}\n  Operation: Insert\n  Value Added: ${value}\n  Bucket: ${bucketIndex}\n  Time Complexity: Constant - O(1)`;
		printToTerminal(output);
		setHashTable(updatedHashTable);

		// Node highlighting
		setRectHighlight(bucketIndex);
		// setTimeout(() => setRectHighlight(undefined), 1000);
		setCircleHighlight(updatedHashTable[bucketIndex].length - 1);
	}

	function handleDelete() {
		if (checkInvalidValue()) return;

		const bucketIndex = hashFunction(value!);
		const updatedHashTable = [...hashTable];
		const indexToRemove = updatedHashTable[bucketIndex].indexOf(value!);
		if (indexToRemove === -1) {
			printToTerminal(`  Value: '${value}' not found`);
			return;
		}
		updatedHashTable[bucketIndex].splice(indexToRemove, 1);
		const output = `${inputPrefix}delete key: ${value} from bucket ${bucketIndex}\n  Operation: Delete\n  Value Deleted: ${value}\n  Bucket: ${bucketIndex}\n  Time Complexity: Constant - O(1)`;
		printToTerminal(output);
		setHashTable(updatedHashTable);
	}

	function handleSearch() {
		if (checkInvalidValue()) return;
		const bucketIndex = hashFunction(value!);
		const valueIndex = hashTable[bucketIndex].indexOf(value!);
		if (valueIndex === -1) {
			printToTerminal(
				`${inputPrefix}search ${value}\n  Value: '${value}' not found\n  Time Complexity: Linear O(n)`
			);
			return;
		}
		const output = `${inputPrefix}search ${value}\n  Operation: Search\n  Value: ${value}\n  Bucket: ${bucketIndex}\n  Time Complexity: Constant O(1)`;
		printToTerminal(output);

		setRectHighlight(bucketIndex);
		setTimeout(() => setRectHighlight(undefined), 1000);
		setCircleHighlight(valueIndex);
	}

	function printToTerminal(output: string) {
		setTerminalOutputs((prev) => [...prev, output]);
	}

	function checkInvalidValue() {
		if (value === undefined || isNaN(value)) return true;
		if (value < -99 || value > 999) {
			printToTerminal("  Enter a value between -99 and 999");
			return true;
		}
	}

	const hashTableOperations = [
		{
			label: "Insert",
			inputs: (
				<Box sx={styles.box}>
					<ValueTextInput setValue={setValue} />
					<OperationButton label="Insert" operation={handleInsert} />
				</Box>
			),
		},
		{
			label: "Delete",
			inputs: (
				<Box sx={styles.box}>
					<ValueTextInput setValue={setValue} />
					<OperationButton label="Delete" operation={handleDelete} />
				</Box>
			),
		},
		{
			label: "Search",
			inputs: (
				<Box sx={styles.box}>
					<ValueTextInput setValue={setValue} />
					<OperationButton label="Search" operation={handleSearch} />
				</Box>
			),
		},
	];

	return (
		<OperationBox operations={hashTableOperations} setValue={setValue} />
	);
}

const styles = {
	box: {
		display: "flex",
		flexDirection: "column",
		padding: 2,
		marginTop: 0,
	},
};
