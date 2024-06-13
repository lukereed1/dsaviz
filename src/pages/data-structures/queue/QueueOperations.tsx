import { Dispatch, SetStateAction } from "react";

interface Props {
	value: number | undefined;
	highlightedIndex: number | undefined;
	queue: number[];
	setValue: (value: number | undefined) => void;
	setQueue: (nums: number[]) => void;
	setTerminalOutputs: Dispatch<SetStateAction<string[]>>;
}

export default function QueueOperations(props: Props) {
	const {
		value,
		highlightedIndex,
		queue,
		setValue,
		setQueue,
		setTerminalOutputs,
	} = props;

	function handleEnqueue() {
		setQueue([...queue, value!]);
	}

	function handleDequeue() {
		const updatedQueue = [...queue];
		updatedQueue.shift();
		setQueue(updatedQueue);
	}
}
