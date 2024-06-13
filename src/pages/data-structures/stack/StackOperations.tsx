import { Dispatch, SetStateAction } from "react";

interface Props {
	value: number | undefined;
	highlightedIndex: number | undefined;
	stack: number[];
	setValue: (value: number | undefined) => void;
	setStack: (nums: number[]) => void;
	setTerminalOutputs: Dispatch<SetStateAction<string[]>>;
}

export default function StackOperations(props: Props) {
	const {
		value,
		highlightedIndex,
		stack,
		setValue,
		setStack,
		setTerminalOutputs,
	} = props;

	function handlePush() {
		setStack([...stack, value!]);
	}

	function handlePop() {
		const updatedStack = [...stack];
		updatedStack.pop();
		setStack(updatedStack);
	}
}
