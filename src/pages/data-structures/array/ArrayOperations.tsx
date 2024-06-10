import { Box } from "@mui/material";
import OperationButton from "../../../app/components/operations-box/OperationButton";
import ValueTextInput from "../../../app/components/ValueTextInput";
import IndexTextInput from "../../../app/components/IndexTextInput";
import OperationBox from "../../../app/components/operations-box/OperationBox";
import { Dispatch, SetStateAction } from "react";

interface Props {
	value: number | undefined;
	index: number | undefined;
	array: number[];
	setValue: (value: number | undefined) => void;
	setIndex: (value: number | undefined) => void;
	setArray: (nums: number[]) => void;
	setTerminalOutputs: Dispatch<SetStateAction<string[]>>;
}

export default function ArrayOperations(props: Props) {
	const {
		value,
		array,
		index,
		setValue,
		setIndex,
		setArray,
		setTerminalOutputs,
	} = props;
	const inputPrefix = "guest@dsaviz.com~$";

	function checkInvalidValue() {
		return (
			value === undefined || isNaN(value) || value < -99 || value > 999
		);
	}

	function checkInvalidIndex() {
		// Ensures index input within available index range, allows neg index
		return index === undefined || Math.abs(index) > array.length;
	}

	function handleAppend() {
		if (checkInvalidValue()) return;

		setArray([...array, value!]);
		const output = getOutput("Append", "Constant - O(1)");
		printOperation(output);
	}

	function handlePop() {
		// Pop button auto removes last element unless index specified
		if (index === undefined) {
			// Ensures pop button works even if no index specified
			setArray(array.slice(0, -1));
			return;
		}
		if (checkInvalidIndex()) return;

		const newArray = [...array];
		newArray.splice(index, 1);
		setArray(newArray);
	}

	function handleInsert() {
		if (checkInvalidIndex() || checkInvalidValue()) return;
		const newArray = [...array];
		newArray.splice(index!, 0, value!);
		setArray(newArray);
	}

	function handleRemove() {
		if (checkInvalidValue()) return;
		const indexToRemove = array.indexOf(value!);
		if (indexToRemove === -1) return; // Value not found
		const newArray = [...array];
		newArray.splice(indexToRemove, 1);
		setArray(newArray);
	}

	function handleSearch() {
		console.log("test");
	}

	function printOperation(output: string) {
		setTerminalOutputs((prevArray) => [...prevArray, output]);
	}

	function getOutput(operation: string, timeComplexity: string) {
		return `${inputPrefix} ${operation} ${value}\n  Operation: ${operation}\n  Value: ${value}\n  Index: ${array.length}\n  Time Complexity: ${timeComplexity}`;
	}

	const arrayOperations = [
		{
			label: "Append",
			inputs: (
				<Box sx={styles.box}>
					<ValueTextInput setValue={setValue} />
					<OperationButton label="Append" operation={handleAppend} />
				</Box>
			),
		},
		{
			label: "Pop",
			inputs: (
				<Box sx={styles.box}>
					<IndexTextInput
						setIndex={setIndex}
						marginTop={0}
						defaultValue={-1}
					/>
					<OperationButton label="Pop" operation={handlePop} />
				</Box>
			),
		},
		{
			label: "Insert",
			inputs: (
				<Box sx={styles.box}>
					<ValueTextInput setValue={setValue} />
					<IndexTextInput setIndex={setIndex} marginTop={2} />
					<OperationButton label="Insert" operation={handleInsert} />
				</Box>
			),
		},
		{
			label: "Remove",
			inputs: (
				<Box sx={styles.box}>
					<ValueTextInput setValue={props.setValue} />
					<OperationButton label="Remove" operation={handleRemove} />
				</Box>
			),
		},
		{
			label: "Search",
			inputs: (
				<Box sx={styles.box}>
					<ValueTextInput setValue={props.setValue} />
					<OperationButton label="Search" operation={handleSearch} />
				</Box>
			),
		},
	];

	return (
		<OperationBox
			setValue={setValue}
			setIndex={setIndex}
			operations={arrayOperations}
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
