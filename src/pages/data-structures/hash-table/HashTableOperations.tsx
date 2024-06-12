import { Box } from "@mui/material";
import ValueTextInput from "../../../app/components/ValueTextInput";
import OperationButton from "../../../app/components/operations-box/OperationButton";
import OperationBox from "../../../app/components/operations-box/OperationBox";

interface Props {
	value: number | undefined;
	index: number | undefined;
	setValue: (value: number | undefined) => void;
	setIndex: (value: number | undefined) => void;
	hashTable: number[][];
	setHashTable: (ht: number[][]) => void;
}

export default function HashTableOperations(props: Props) {
	const { value, index, hashTable, setValue, setIndex, setHashTable } = props;

	function hashFunction(value: number) {
		// Returns index/bucket to append value to
		return value % hashTable.length;
	}

	function handleInsert() {
		if (checkInvalidValue()) return;
		const bucketIndex = hashFunction(value!);
		const updatedHashTable = [...hashTable];
		updatedHashTable[bucketIndex].push(value!);
		setHashTable(updatedHashTable);
	}

	function handleDelete() {
		if (checkInvalidValue()) return;
		const bucketIndex = hashFunction(value!);
		const updatedHashTable = [...hashTable];
		const indexToRemove = updatedHashTable[bucketIndex].indexOf(value!);
		updatedHashTable[bucketIndex].slice(indexToRemove, 1);
		setHashTable(updatedHashTable);
	}

	function handleSearch() {
		if (checkInvalidValue()) return;
		const bucketIndex = hashFunction(value!);
		const valueIndex = hashTable[bucketIndex].indexOf(value!);
	}

	function checkInvalidValue() {
		return (
			value === undefined || isNaN(value) || value < -99 || value > 999
		);
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
		<OperationBox
			operations={hashTableOperations}
			setValue={setValue}
			setIndex={setIndex}
		/>
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
