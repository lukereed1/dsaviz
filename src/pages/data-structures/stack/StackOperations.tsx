import { Box } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import ValueTextInput from "../../../app/components/operations-box/ValueTextInput";
import OperationButton from "../../../app/components/operations-box/OperationButton";
import OperationBox from "../../../app/components/operations-box/OperationBox";
import { inputPrefix } from "../../../app/components/terminal/TerminalWindow";

interface Props {
	value: number | undefined;
	stack: number[];
	setHighlightIndex: (value: number | undefined) => void;
	setValue: (value: number | undefined) => void;
	setStack: (nums: number[]) => void;
	setTerminalOutputs: Dispatch<SetStateAction<string[]>>;
}

export default function StackOperations(props: Props) {
	const {
		value,
		stack,
		setValue,
		setStack,
		setHighlightIndex,
		setTerminalOutputs,
	} = props;

	function handlePush() {
		if (checkInvalidValue()) return;
		setStack([...stack, value!]);
		const output = `${inputPrefix}push ${value}\n  Operation: Enqueue\n  Value: ${value}\n  Index: ${stack.length}\n  Time Complexity: Constant - O(1)`;
		printToTerminal(output);
		setHighlightIndex(stack.length);
	}

	function handlePop() {
		if (stack.length === 0) return;
		const updatedStack = [...stack];
		const valueRemoved = stack[stack.length - 1];
		updatedStack.pop();
		const output = `${inputPrefix}pop\n  Operation: Pop\n  Value Removed: ${valueRemoved}\n  Index: ${
			stack.length - 1
		}\n  Time Complexity: Constant - O(1)`;
		setStack(updatedStack);

		printToTerminal(output);
	}

	function handlePeek() {
		if (stack.length === 0) return;
		const lastIndex = stack.length - 1;
		const peekValue = stack[lastIndex];
		const output = `${inputPrefix}peek\n  Operation: Peek\n  Value: ${peekValue}\n  Index: ${lastIndex}\n  Time Complexity: Constant - O(1)`;
		setHighlightIndex(lastIndex);
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

	const stackOperations = [
		{
			label: "Push",
			inputs: (
				<Box sx={styles.box}>
					<ValueTextInput setValue={setValue} />
					<OperationButton label="Push" operation={handlePush} />
				</Box>
			),
		},
		{
			label: "Pop",
			inputs: (
				<Box sx={styles.box}>
					<OperationButton
						label="Pop"
						operation={handlePop}
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

	return <OperationBox setValue={setValue} operations={stackOperations} />;
}

const styles = {
	box: {
		display: "flex",
		flexDirection: "column",
		padding: 2,
		marginTop: 0,
	},
};
