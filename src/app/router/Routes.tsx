import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import MenuPage from "../../pages/menu/MenuPage";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [{ path: "menu", element: <MenuPage /> }],
	},
]);
