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
import SelectionSortPage from "../../pages/algorithms/selection-sort/SelectionSortPage";
import InsertionSortPage from "../../pages/algorithms/insertion-sort/InsertionSortPage";
import MergeSortPage from "../../pages/algorithms/merge-sort/MergeSortPage";

export const router = createBrowserRouter([
	{
		path: "/dsaviz/",
		element: <App />,
		children: [
			{ path: "/dsaviz/menu", element: <MenuPage /> },
			{ path: "/dsaviz/array", element: <ArrayPage /> },
			{ path: "/dsaviz/queue", element: <QueuePage /> },
			{ path: "/dsaviz/stack", element: <StackPage /> },
			{ path: "/dsaviz/hash-table", element: <HashTablePage /> },
			{ path: "/dsaviz/linked-list", element: <LinkedListPage /> },
			{ path: "/dsaviz/quick-sort", element: <QuickSortPage /> },
			{ path: "/dsaviz/bubble-sort", element: <BubbleSortPage /> },
			{ path: "/dsaviz/selection-sort", element: <SelectionSortPage /> },
			{ path: "/dsaviz/insertion-sort", element: <InsertionSortPage /> },
			{ path: "/dsaviz/merge-sort", element: <MergeSortPage /> },
		],
	},
]);
