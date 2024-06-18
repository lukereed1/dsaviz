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
				{ label: "Arrays", path: "/array" },
				{ label: "Queue", path: "/queue" },
				{ label: "Stack", path: "/stack" },
				{ label: "Hash Table", path: "/hash-table" },
				{ label: "Linked List", path: "/linked-list" },
			],
			open: dsMenuOpen,
			toggleMenu: () => handleDsMenu(),
		},
		{
			label: "Algorithms",
			items: [
				{ label: "Quick Sort", path: "/quick-sort" },
				{ label: "Merge Sort", path: "#" },
				{ label: "Insertion Sort", path: "#" },
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
