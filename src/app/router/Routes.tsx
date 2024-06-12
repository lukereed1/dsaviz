import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import MenuPage from "../../pages/menu/MenuPage";
import ArrayPage from "../../pages/data-structures/array/ArrayPage";
import HashTablePage from "../../pages/data-structures/hash-table/HashTablePage";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{ path: "menu", element: <MenuPage /> },
			{ path: "array", element: <ArrayPage /> },
			{ path: "hash-table", element: <HashTablePage /> },
		],
	},
]);
