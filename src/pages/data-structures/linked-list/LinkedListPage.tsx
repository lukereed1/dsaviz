import { useState } from "react";
import DataStructurePageTemplate from "../DataStructurePageTemplate";
import Terminal from "../../../app/components/terminal/Terminal";
import { LinkedList } from "./linkedList";
import LinkedListOperations from "./LinkedListOperations";
import LinkedListVisual from "../d3/LinkedListVisual";

export default function LinkedListPage() {
	const [value, setValue] = useState<number | undefined>();
	const [index, setIndex] = useState<number | undefined>();
	const defaultList = new LinkedList();
	for (let i = 1; i < 6; i++) {
		defaultList.append(i);
	}
	const [linkedList, setLinkedList] = useState<LinkedList>(defaultList);
	const [highlightIndex, setHighlightIndex] = useState<number | undefined>();

	const [terminalOutputs, setTerminalOutputs] = useState<string[]>([
		"A linked list is a fundamental data structure in computer science. It consists of nodes where each node contains data and a reference (link) to the next node in the sequence. This allows for dynamic memory allocation and efficient insertion and deletion operations compared to arrays. [www.geeksforgeeks.org/linked-list-data-structure/]\n\nType 'help' for a list of commands",
	]);
	return (
		<DataStructurePageTemplate
			header={"Linked List"}
			dataStructure={
				<LinkedListVisual
					data={linkedList}
					highlightIndex={highlightIndex}
					setHighlightIndex={setHighlightIndex}
				/>
			}
			operations={
				<LinkedListOperations
					value={value}
					index={index}
					linkedList={linkedList}
					setValue={setValue}
					setIndex={setIndex}
					setLinkedList={setLinkedList}
					setHighlightedIndex={setHighlightIndex}
					setTerminalOutputs={setTerminalOutputs}
				/>
			}
			terminal={
				<Terminal
					terminalOutputs={terminalOutputs}
					setTerminalOutputs={setTerminalOutputs}
					header="menu/linked-list"
				/>
			}
			codeEditor={undefined}
		/>
	);
}
