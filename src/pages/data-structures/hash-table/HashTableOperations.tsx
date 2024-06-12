import { Box } from "@mui/material";
import ValueTextInput from "../../../app/components/ValueTextInput";
import OperationButton from "../../../app/components/operations-box/OperationButton";

interface Props {
	value: number;
	setValue: (value: number) => void;
	hashTable: number[][];
	setHashTable: (ht: number[][]) => void;
}

export default function HashTableOperations(props: Props) {
	const { value, hashTable, setValue, setHashTable } = props;

	function hashFunction(value: number) {
		// Returns index to append value to
		return value % hashTable.length;
	}

	function hashTableInsert() {
		const bucketIndex = hashFunction(value);
		const newHashTable = [...hashTable];
		newHashTable[bucketIndex].push(value);
		setHashTable(newHashTable);
	}

	const hashTableOperations = [
		{
			label: "Insert",
			inputs: (
				<Box sx={styles.box}>
					<ValueTextInput setValue={setValue} />
					<OperationButton
						label="Append"
						operation={hashTableInsert}
					/>
				</Box>
			),
		},
	];
}

const styles = {
	box: {
		display: "flex",
		flexDirection: "column",
		padding: 2,
		marginTop: 0,
	},
};
