import { useNavigate } from "react-router-dom";
import { openNewTab } from "../../util/util";

export function getTerminalCommand(
	dataStructure: string,
	input: string,
	navigate: ReturnType<typeof useNavigate>
) {
	switch (dataStructure) {
		case "data-structure/array": {
			return arrayCommands(input, navigate);
			break;
		}
		case "data-structure/hash-table":
			{
				return hashTableCommands(input, navigate);
			}
			break;
		default:
			return;
	}
}

function arrayCommands(
	input: string,
	navigate: ReturnType<typeof useNavigate>
) {
	switch (input) {
		case "help":
			return "  Available Commands:\n  - help: display available commands\n  - info: more information on arrays\n  - time: display time complexities for array operations\n  - clear: clear terminal\n  - pwd: print working directory\n  - ls: list all files \n  - code: show source code\n  - cd .. : return to main menu";
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
			return "  ArrayPage.tsx\n  DataStructurePageTemplate.tsx\n  OperationsBox.tsx\n  Terminal.tsx\n  Array.tsx\n  CodeEditor.tsx";
			break;
		case "code":
			{
				const url =
					"https://github.com/lukereed1/dsaviz/blob/main/src/pages/data-structures/array/ArrayPage.tsx";
				openNewTab(url);
			}
			break;
		case "cd ..":
			navigate("/menu");
			break;
		default:
			return `  "${input}" command not found`;
			break;
	}
}

function hashTableCommands(
	input: string,
	navigate: ReturnType<typeof useNavigate>
) {
	switch (input) {
		case "help":
			return "  Available Commands:\n  - help: display available commands\n  - info: more information on hash tables\n  - time: display time complexities for hash table operations\n  - clear: clear terminal\n  - pwd: print working directory\n  - ls: list all files \n  - code: show source code\n  - cd .. : return to main menu";
			break;
		case "info": {
			const url =
				"https://www.geeksforgeeks.org/hash-table-data-structure/";
			openNewTab(url);
			return "  Seperate chaining being used here for collisions";
			break;
		}
		case "time": {
			return "  Insertion: Constant - O(1)\n  Deletion: Constant - O(1)\n  Search: Constant - O(1)\n  * In worst case scenarios they operations may require O(n) time";
			break;
		}
		case "pwd":
			return `  /dsaviz/data-structures/hash-table`;
			break;
		case "ls":
			return "  HashTablePage.tsx\n  DataStructurePageTemplate.tsx\n  OperationsBox.tsx\n  Terminal.tsx\n  HashTable.tsx\n  CodeEditor.tsx";
			break;
		case "code":
			{
				const url =
					"https://github.com/lukereed1/dsaviz/blob/main/src/pages/data-structures/hash-table/HashTablePage.tsx";
				openNewTab(url);
			}
			break;
		case "cd ..":
			navigate("/menu");
			break;
		default:
			return `  "${input}" command not found`;
			break;
	}
}
