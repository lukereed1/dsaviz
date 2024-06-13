import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import MenuPage from "../../pages/menu/MenuPage";
import ArrayPage from "../../pages/data-structures/array/ArrayPage";
import HashTablePage from "../../pages/data-structures/hash-table/HashTablePage";
import StackPage from "../../pages/data-structures/stack/StackPage";
import QueuePage from "../../pages/data-structures/queue/QueuePage";

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
		],
	},
]);
