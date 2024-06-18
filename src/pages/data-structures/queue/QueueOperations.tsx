import { Box } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import ValueTextInput from "../../../app/components/operations-box/ValueTextInput";
import OperationButton from "../../../app/components/operations-box/OperationButton";
import OperationBox from "../../../app/components/operations-box/OperationBox";
import { inputPrefix } from "../../../app/components/terminal/TerminalWindow";

interface Props {
	value: number | undefined;
	queue: number[];
	setHighlightIndex: (value: number | undefined) => void;
	setValue: (value: number | undefined) => void;
	setQueue: (nums: number[]) => void;
	setTerminalOutputs: Dispatch<SetStateAction<string[]>>;
}

export default function QueueOperations(props: Props) {
	const {
		value,
		queue,
		setValue,
		setQueue,
		setHighlightIndex,
		setTerminalOutputs,
	} = props;

	function handleEnqueue() {
		if (checkInvalidValue()) return;
		setQueue([...queue, value!]);
		const output = `${inputPrefix}enqueue ${value}\n  Operation: Enqueue\n  Value: ${value}\n  Index: ${queue.length}\n  Time Complexity: Constant - O(1)`;
		printToTerminal(output);
		setHighlightIndex(queue.length);
	}

	function handleDequeue() {
		if (queue.length === 0) return;
		const updatedQueue = [...queue];
		const valueRemoved = updatedQueue.shift();
		const output = `${inputPrefix}dequeue\n  Operation: Dequeue\n  Value Removed: ${valueRemoved}\n  Index: 0\n  Time Complexity: ${
			queue.length === 1 ? "Constant - O(1)" : "Linear - O(n)"
		}`;
		setQueue(updatedQueue);
		printToTerminal(output);
	}

	function handlePeek() {
		if (queue.length === 0) return;
		const peekValue = queue[0];
		const output = `${inputPrefix}peek\n  Operation: Peek\n  Value: ${peekValue}\n  Index: 0\n  Time Complexity: Constant - O(1)`;
		setHighlightIndex(0);
		printToTerminal(output);
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
	const queueOperations = [
		{
			label: "Enqueue",
			inputs: (
				<Box sx={styles.box}>
					<ValueTextInput setValue={setValue} />
					<OperationButton
						label="Enqueue"
						operation={handleEnqueue}
					/>
				</Box>
			),
		},
		{
			label: "Dequeue",
			inputs: (
				<Box sx={styles.box}>
					<OperationButton
						label="Dequeue"
						operation={handleDequeue}
						marginTop={0.1}
					/>
				</Box>
			),
		},
		{
			label: "Peek",
			inputs: (
				<Box sx={styles.box}>
					<OperationButton
						label="Peek"
						operation={handlePeek}
						marginTop={0.1}
					/>
				</Box>
			),
		},
	];

	return <OperationBox setValue={setValue} operations={queueOperations} />;
}

const styles = {
	box: {
		display: "flex",
		flexDirection: "column",
		padding: 2,
		marginTop: 0,
	},
};
