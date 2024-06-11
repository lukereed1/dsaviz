import { openNewTab } from "../../util/util";

export function getTerminalCommand(dataStructure: string, input: string) {
	switch (dataStructure) {
		case "data-structure/array": {
			return arrayCommands(input);
			break;
		}
		default:
			return "test";
	}
}

function arrayCommands(input: string) {
	switch (input) {
		case "help":
			return "  Available Commands:\n  - help: display available commands\n  - info: more information on arrays\n  - time: display time complexities for array operations\n  - clear: clear terminal\n  - pwd: print working directory\n  - ls: list all files \n  - code: show source code";
			break;
		case "info": {
			const url =
				"https://www.geeksforgeeks.org/array-data-structure-guide/";
			openNewTab(url);
			break;
		}
		case "time": {
			return "  Read: Constant - O(1)\n  Append: Constant - O(1)\n  Pop: Constant - O(1)\n  Insertion: Linear - O(n)\n  Deletion: Linear - O(n)\n  Search: Linear - O(n)\n  Sort: Linear - O(n)";
			break;
		}
		case "pwd":
			return `  /dsaviz/data-structures/array`;
			break;
		case "ls":
			return "  ArrayPage.tsx\n  DataStructurePageTemplate.tsx\n  OperationsBox.tsx\n  Terminal.tsx\n  Array2D.tsx\n  CodeEditor.tsx";
			break;
		case "code":
			{
				const url =
					"https://github.com/lukereed1/dsaviz/blob/main/src/pages/data-structures/array/ArrayPage.tsx";
				openNewTab(url);
			}
			break;

		default: // Code . ??
			return `  "${input}" command not found`;
			break;
	}
}
