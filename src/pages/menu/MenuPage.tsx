import { Box } from "@mui/material";
import NestedList from "./NestedList";
import { useState } from "react";
import Terminal from "../../app/components/terminal/TerminalWindow";

export default function MenuPage() {
	const [dsMenuOpen, setDsMenuOpen] = useState(false);
	const [algoMenuOpen, setAlgoMenuOpen] = useState(false);
	const [terminalOutputs, setTerminalOutputs] = useState<string[]>([
		"Welcome to dsaViz! Type 'help' for a list of commands, or click something from the list to get started. You can also use the terminal for navigation.",
	]);
	function handleDsMenu() {
		setDsMenuOpen(!dsMenuOpen);
	}

	function handleAlgoMenu() {
		setAlgoMenuOpen(!algoMenuOpen);
	}

	const menuItems = [
		{
			label: "Data Structures", // Graph, trie, heap,
			items: [
				{ label: "Arrays", path: "/dsaviz/array" },
				{ label: "Queue", path: "/dsaviz/queue" },
				{ label: "Stack", path: "/dsaviz/stack" },
				{ label: "Hash Table", path: "/dsaviz/hash-table" },
				{ label: "Linked List", path: "/dsaviz/linked-list" },
			],
			open: dsMenuOpen,
			toggleMenu: () => handleDsMenu(),
		},
		{
			label: "Algorithms",
			items: [
				{ label: "Quick Sort", path: "/dsaviz/quick-sort" },
				{ label: "Bubble Sort", path: "/dsaviz/bubble-sort" },
				{ label: "Selection Sort", path: "/dsaviz/selection-sort" },
				{ label: "Insertion Sort", path: "/dsaviz/insertion-sort" },
				{ label: "Merge Sort", path: "/dsaviz/merge-sort" },
			],
			open: algoMenuOpen,
			toggleMenu: () => handleAlgoMenu(),
		},
	];

	return (
		<Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
			<NestedList
				terminal={
					<Terminal
						terminalOutputs={terminalOutputs}
						setTerminalOutputs={setTerminalOutputs}
						header="menu"
					/>
				}
				menuItems={menuItems}
			/>
		</Box>
	);
}
