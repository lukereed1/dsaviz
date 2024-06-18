import { Box } from "@mui/material";
import OperationButton from "../../../app/components/operations-box/OperationButton";
import ValueTextInput from "../../../app/components/operations-box/ValueTextInput";
import IndexTextInput from "../../../app/components/operations-box/IndexTextInput";
import OperationBox from "../../../app/components/operations-box/OperationBox";
import { Dispatch, SetStateAction } from "react";
import { inputPrefix } from "../../../app/components/terminal/TerminalWindow";

interface Props {
	value: number | undefined;
	index: number | undefined;
	array: number[];
	setValue: (value: number | undefined) => void;
	setIndex: (value: number | undefined) => void;
	setArray: (nums: number[]) => void;
	setTerminalOutputs: Dispatch<SetStateAction<string[]>>;
	setHighlightedIndex: (value: number | undefined) => void;
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
		setHighlightedIndex,
	} = props;

	function handleAppend() {
		if (checkInvalidValue()) return;
		setArray([...array, value!]);
		const output = `${inputPrefix}${"append"} ${value}\n  Operation: Append\n  Value: ${value}\n  Index: ${
			array.length
		}\n  Time Complexity: Constant - O(1)`;
		printToTerminal(output);
		setHighlightedIndex(array.length);
	}

	function handlePop() {
		// Pop button auto removes last element unless index specified
		if (index === undefined) {
			if (array.length === 0) return;
			// Ensures pop button works even if no index specified
			const output = `${inputPrefix}${"pop"} -1\n  Operation: Pop\n  Value Removed: ${
				array[array.length - 1]
			}\n  Index: -1\n  Time Complexity: Constant - O(1)`;
			setArray(array.slice(0, -1));
			printToTerminal(output);
			return;
		}
		if (checkInvalidIndex()) return;

		const valueRemoved =
			index < 0 ? array.length + 1 - Math.abs(index) : array[index];
		const output = `${inputPrefix}"pop" ${index}\n  Operation: Pop\n  Value Removed: ${valueRemoved}\n  Index: ${index}\n  Time Complexity: ${
			array.length === 1 || index === array.length - 1 || index === -1
				? "Constant - O(1)"
				: "Linear O(n)"
		}`;
		printToTerminal(output);
		const newArray = [...array];
		newArray.splice(index, 1);
		setArray(newArray);
	}

	function handleInsert() {
		if (checkInvalidIndex() || checkInvalidValue()) return;

		const output = `${inputPrefix}insert ${value} at index ${index}\n  Operation: Insert\n  Value Added: ${value}\n  Index: ${index}\n  Time Complexity: Linear - O(n)`;
		printToTerminal(output);
		const newArray = [...array];
		newArray.splice(index!, 0, value!);
		setArray(newArray);
		setHighlightedIndex(index);
	}

	function handleRemove() {
		if (checkInvalidValue()) return;
		const indexToRemove = array.indexOf(value!);
		if (indexToRemove === -1) {
			printToTerminal(`  Value: '${value}' not found`);
			return;
		}

		const output = `${inputPrefix}remove ${value}\n  Operation: Remove\n  Value Removed: ${value}\n  Index: ${indexToRemove}\n  Time Complexity: ${
			indexToRemove === array.length - 1
				? "Constant - O(1)"
				: "Linear O(n)"
		}`;
		printToTerminal(output);
		const newArray = [...array];
		newArray.splice(indexToRemove, 1);
		setArray(newArray);
	}

	function handleSearch() {
		if (checkInvalidValue()) return;
		const valueIndex = array.indexOf(value!);
		if (valueIndex === -1) {
			printToTerminal(
				`${inputPrefix}search ${value}\n  Value: '${value}' not found\n  Time Complexity: Linear O(n)`
			);
			return;
		}
		const output = `${inputPrefix}search ${value}\n  Operation: Search\n  Value: ${value}\n  Index: ${valueIndex}\n  Time Complexity: Linear O(n)`;
		printToTerminal(output);
		setHighlightedIndex(valueIndex);
	}

	function printToTerminal(output: string) {
		setTerminalOutputs((prevArray) => [...prevArray, output]);
	}

	function checkInvalidValue() {
		if (value === undefined || isNaN(value)) return true;
		if (value < -99 || value > 999) {
			printToTerminal("  Enter a value between -99 and 999");
			return true;
		}
	}

	function checkInvalidIndex() {
		// Ensures index input within available index range, allows neg index
		if (index === undefined || Math.abs(index) >= array.length) {
			printToTerminal("  Enter a valid index");
			return true;
		}
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
