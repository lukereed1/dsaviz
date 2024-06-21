import { useNavigate } from "react-router-dom";
import { openNewTab } from "../../util/util";

export function getTerminalCommand(
	location: string,
	input: string,
	navigate: ReturnType<typeof useNavigate>
) {
	switch (location) {
		case "menu": {
			return menuCommands(input, navigate);
			break;
		}
		case "array": {
			return arrayCommands(input, navigate);
			break;
		}
		case "queue":
			return queueCommands(input, navigate);
			break;
		case "stack":
			return stackCommands(input, navigate);
			break;
		case "hash-table":
			return hashTableCommands(input, navigate);
			break;
		case "linked-list":
			return linkedListCommands(input, navigate);
			break;
		case "quick-sort":
			return quickSortCommands(input, navigate);
			break;
		case "bubble-sort":
			return bubbleSortCommands(input, navigate);
			break;
		default:
			return;
	}
}

function menuCommands(input: string, navigate: ReturnType<typeof useNavigate>) {
	const DS = ["array", "queue", "stack", "hash-table", "linked-list"];
	const ALGO = ["quick-sort", "bubble-sort", "merge-sort"];
	if (input.startsWith("cd ")) {
		const path = input.slice(3).trim();

		if (path) {
			if (DS.includes(path) || ALGO.includes(path)) {
				navigate(`/${path}`);
			} else {
				return `  Directory: '${path}' does not exist`;
			}
		}
	}

	switch (input) {
		case "help":
			return "  Available Commands:\n  - help: display available commands\n  - info: general information\n  - clear: clear terminal\n  - pwd: print working directory\n  - ls: list all files \n  - code: show source code\n  - cd: change directory";
			break;
		case "info": {
			return "  Click on an item from one of the lists to get started. You can also use the terminal to navigate.";
			break;
		}
		case "pwd":
			return `  /dsaviz/menu`;
			break;
		case "ls": {
			let fileList = "";
			DS.forEach((ds) => (fileList += `  ${ds}\n`));
			ALGO.forEach((algo) => (fileList += `  ${algo}\n`));
			return fileList;
			break;
		}
		case "code":
			{
				const url =
					"https://github.com/lukereed1/dsaviz/blob/main/src/pages/menu/MenuPage.tsx";
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
			return `  /dsaviz/menu/array`;
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

function queueCommands(
	input: string,
	navigate: ReturnType<typeof useNavigate>
) {
	switch (input) {
		case "help":
			return "  Available Commands:\n  - help: display available commands\n  - info: more information on queues\n  - time: display time complexities for queue operations\n  - clear: clear terminal\n  - pwd: print working directory\n  - ls: list all files \n  - code: show source code\n  - cd .. : return to main menu";
			break;
		case "info": {
			const url = "https://www.geeksforgeeks.org/queue-data-structure/";
			openNewTab(url);
			break;
		}
		case "time": {
			return "  Enqueue: Constant - O(1)\n  Dequeue: Linear - O(n) - (Constant if LinkedList implementation)\n  Peek: Constant - O(1)";
			break;
		}
		case "pwd":
			return `  /dsaviz/menu/queue`;
			break;
		case "ls":
			return "  QueuePage.tsx\n  DataStructurePageTemplate.tsx\n  OperationsBox.tsx\n  Terminal.tsx\n  Array.tsx\n  CodeEditor.tsx";
			break;
		case "code":
			{
				const url =
					"https://github.com/lukereed1/dsaviz/blob/main/src/pages/data-structures/queue/QueuePage.tsx";
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

function stackCommands(
	input: string,
	navigate: ReturnType<typeof useNavigate>
) {
	switch (input) {
		case "help":
			return "  Available Commands:\n  - help: display available commands\n  - info: more information on arrays\n  - time: display time complexities for array operations\n  - clear: clear terminal\n  - pwd: print working directory\n  - ls: list all files \n  - code: show source code\n  - cd .. : return to main menu";
			break;
		case "info": {
			const url = "https://www.geeksforgeeks.org/stack-data-structure/";
			openNewTab(url);
			break;
		}
		case "time": {
			return "  Push: Constant - O(1)\n  Pop: Constant - O(1)\n  Peek: Constant - O(1)";
			break;
		}
		case "pwd":
			return `  /dsaviz/menu/stack`;
			break;
		case "ls":
			return "  StackPage.tsx\n  DataStructurePageTemplate.tsx\n  OperationsBox.tsx\n  Terminal.tsx\n  Array.tsx\n  CodeEditor.tsx";
			break;
		case "code":
			{
				const url =
					"https://github.com/lukereed1/dsaviz/blob/main/src/pages/data-structures/stack/StackPage.tsx";
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
			break;
		}
		case "time": {
			return "  Insertion: Constant - O(1)\n  Deletion: Constant - O(1)\n  Search: Constant - O(1)\n  * Linear - O(n) if collisions occur";
			break;
		}
		case "pwd":
			return `  /dsaviz/menu/hash-table`;
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

function linkedListCommands(
	input: string,
	navigate: ReturnType<typeof useNavigate>
) {
	switch (input) {
		case "help":
			return "  Available Commands:\n  - help: display available commands\n  - info: more information on linked lists\n  - time: display time complexities for linked list operations\n  - clear: clear terminal\n  - pwd: print working directory\n  - ls: list all files \n  - code: show source code\n  - cd .. : return to main menu";
			break;
		case "info": {
			const url =
				"https://www.geeksforgeeks.org/linked-list-data-structure/";
			openNewTab(url);
			break;
		}
		case "time": {
			return "  Append: Constant - O(1) * If tail implemented\n  Prepend: Constant - O(1)\n  Insert: Linear - O(n)\n  Delete: Linear - O(n)";
			break;
		}
		case "pwd":
			return `  /dsaviz/menu/linked-list`;
			break;
		case "ls":
			return "  LinkedListPage.tsx\n  DataStructurePageTemplate.tsx\n  OperationsBox.tsx\n  Terminal.tsx\n  LinkedList.tsx\n  CodeEditor.tsx";
			break;
		case "code":
			{
				const url =
					"https://github.com/lukereed1/dsaviz/blob/main/src/pages/data-structures/linked-list/LinkedListPage.tsx";
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

function quickSortCommands(
	input: string,
	navigate: ReturnType<typeof useNavigate>
) {
	switch (input) {
		case "help":
			return "  Available Commands:\n  - help: display available commands\n  - info: more information on the quick sort algorithm\n  - time: display time complexity for the quick sort algorithm\n  - clear: clear terminal\n  - pwd: print working directory\n  - ls: list all files \n  - code: show source code\n  - cd .. : return to main menu";
			break;
		case "info": {
			const url = "https://www.geeksforgeeks.org/quick-sort/";
			openNewTab(url);
			break;
		}
		case "time": {
			return "  Average: Linearithmic - O(nlogn)\n  Worst Case: Quadratic - O(n^2)";
			break;
		}
		case "pwd":
			return `  /dsaviz/menu/quick-sort`;
			break;
		case "ls":
			return "  QuickSortPage.tsx\n  AlgoPageTemplate.tsx\n  ControlBox.tsx\n  Terminal.tsx\n  BarGraph.tsx\n  CodeEditor.tsx";
			break;
		case "code":
			{
				const url =
					"https://github.com/lukereed1/dsaviz/blob/main/src/pages/algorithms/quick-sort/QuickSortPage.tsx";
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

function bubbleSortCommands(
	input: string,
	navigate: ReturnType<typeof useNavigate>
) {
	switch (input) {
		case "help":
			return "  Available Commands:\n  - help: display available commands\n  - info: more information on the bubble sort algorithm\n  - time: display time complexity for the bubble sort algorithm\n  - clear: clear terminal\n  - pwd: print working directory\n  - ls: list all files \n  - code: show source code\n  - cd .. : return to main menu";
			break;
		case "info": {
			const url = "https://www.geeksforgeeks.org/bubble-sort/";
			openNewTab(url);
			break;
		}
		case "time": {
			return "  Quadratic - O(n^2)";
			break;
		}
		case "pwd":
			return `  /dsaviz/menu/bubble-sort`;
			break;
		case "ls":
			return "  BubbleSortPage.tsx\n  AlgoPageTemplate.tsx\n  ControlBox.tsx\n  Terminal.tsx\n  BarGraph.tsx\n  CodeEditor.tsx";
			break;
		case "code":
			{
				const url =
					"https://github.com/lukereed1/dsaviz/blob/main/src/pages/algorithms/bubble-sort/BubbleSortPage.tsx";
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
