import { Box } from "@mui/material";
import NestedList from "./NestedList";
import { useState } from "react";
import Terminal from "../../app/components/terminal/Terminal";

export default function MenuPage() {
	const [dsMenuOpen, setDsMenuOpen] = useState(false);
	const [algoMenuOpen, setAlgoMenuOpen] = useState(false);
	const [terminalOutputs, setTerminalOutputs] = useState<string[]>([
		"Type 'help' for a list of commands",
	]);
	function handleDsMenu() {
		setDsMenuOpen(!dsMenuOpen);
	}

	function handleAlgoMenu() {
		setAlgoMenuOpen(!algoMenuOpen);
	}

	const menuItems = [
		{
			label: "Data Structures",
			items: [
				{ label: "Arrays", path: "/array" },
				{ label: "Queue", path: "/queue" },
				{ label: "Stack", path: "/stack" },
				{ label: "Hash Table", path: "/hash-table" },
			],
			open: dsMenuOpen,
			toggleMenu: () => handleDsMenu(),
		},
		{
			label: "Algorithms",
			items: [
				{ label: "Quick Sort", path: "#" },
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
