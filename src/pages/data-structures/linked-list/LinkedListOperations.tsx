import { Dispatch, SetStateAction } from "react";
import { LinkedList } from "./linkedList";
import { Box } from "@mui/material";
import ValueTextInput from "../../../app/components/ValueTextInput";
import OperationButton from "../../../app/components/operations-box/OperationButton";
import OperationBox from "../../../app/components/operations-box/OperationBox";
import IndexTextInput from "../../../app/components/IndexTextInput";

interface Props {
	value: number | undefined;
	index: number | undefined;
	linkedList: LinkedList | undefined;
	setValue: (value: number | undefined) => void;
	setIndex: (index: number | undefined) => void;
	setLinkedList: (updatedList: LinkedList) => void;
	setTerminalOutputs: Dispatch<SetStateAction<string[]>>;
	setHighlightedIndex: (value: number | undefined) => void;
}

export default function LinkedListOperations(props: Props) {
	const {
		value,
		index,
		linkedList,
		setValue,
		setIndex,
		setTerminalOutputs,
		setLinkedList,
		setHighlightedIndex,
	} = props;

	function handleAppend() {
		if (checkInvalidValue()) return;
		const updatedLinkedList = new LinkedList();
		Object.assign(updatedLinkedList, linkedList);
		updatedLinkedList.append(value!);
		setLinkedList(updatedLinkedList);
	}

	function handlePrepend() {}

	function handleInsert() {}

	function handleDelete() {}

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
		if (!linkedList) return;
		if (index === undefined || Math.abs(index) >= linkedList.getLength()) {
			printToTerminal("  Enter a valid index");
			return true;
		}
	}

	const linkedListOperations = [
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
			label: "Prepend",
			inputs: (
				<Box sx={styles.box}>
					<ValueTextInput setValue={setValue} />
					<OperationButton
						label="Prepend"
						operation={handlePrepend}
					/>
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
			label: "Delete",
			inputs: (
				<Box sx={styles.box}>
					<ValueTextInput setValue={setValue} />
					<IndexTextInput setIndex={setIndex} marginTop={2} />
					<OperationButton label="Delete" operation={handleDelete} />
				</Box>
			),
		},
	];
	return (
		<OperationBox
			setValue={setValue}
			setIndex={setIndex}
			operations={linkedListOperations}
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
