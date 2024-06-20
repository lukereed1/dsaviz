import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import MenuPage from "../../pages/menu/MenuPage";
import ArrayPage from "../../pages/data-structures/array/ArrayPage";
import HashTablePage from "../../pages/data-structures/hash-table/HashTablePage";
import StackPage from "../../pages/data-structures/stack/StackPage";
import QueuePage from "../../pages/data-structures/queue/QueuePage";
import LinkedListPage from "../../pages/data-structures/linked-list/LinkedListPage";
import QuickSortPage from "../../pages/algorithms/quick-sort/QuickSortPage";
import BubbleSortPage from "../../pages/algorithms/bubble-sort/BubbleSortPage";
import SelectionSortPage from "../../pages/algorithms/selection-sort/SelectionSort";
import InsertionSortPage from "../../pages/algorithms/insertion-sort/InsertionSort";
import MergeSortPage from "../../pages/algorithms/merge-sort/MergeSortPage";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{ path: "menu", element: <MenuPage /> },
			{ path: "array", element: <ArrayPage /> },
			{ path: "queue", element: <QueuePage /> },
			{ path: "stack", element: <StackPage /> },
			{ path: "hash-table", element: <HashTablePage /> },
			{ path: "linked-list", element: <LinkedListPage /> },
			{ path: "quick-sort", element: <QuickSortPage /> },
			{ path: "bubble-sort", element: <BubbleSortPage /> },
			{ path: "selection-sort", element: <SelectionSortPage /> },
			{ path: "insertion-sort", element: <InsertionSortPage /> },
			{ path: "merge-sort", element: <MergeSortPage /> },
		],
	},
]);
