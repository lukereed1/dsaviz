import { useState } from "react";
import DataStructurePageTemplate from "../DataStructurePageTemplate";
import Terminal from "../../../app/components/terminal/Terminal";

export default function LinkedListPage() {
	const [value, setValue] = useState<number | undefined>();
	const [index, setIndex] = useState<number | undefined>();
	const [terminalOutputs, setTerminalOutputs] = useState<string[]>([
		"A linked list is a fundamental data structure in computer science. It consists of nodes where each node contains data and a reference (link) to the next node in the sequence. This allows for dynamic memory allocation and efficient insertion and deletion operations compared to arrays. [//www.geeksforgeeks.org/linked-list-data-structure/].\n\nType 'help' for a list of commands",
	]);
	return (
		<DataStructurePageTemplate
			header={"Linked List"}
			dataStructure={undefined}
			operations={undefined}
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
