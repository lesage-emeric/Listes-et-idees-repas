import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Recipes from "./pages/Recipes.tsx";
import ShoppingList from "./pages/ShoppingList.tsx";
import Planning from "./pages/Planning.tsx";
import DishesList from "./pages/DishesList.tsx";

const rootElement = document.getElementById("root");

const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/recipes",
				element: <Recipes />,
			},
			{
				path: "/shoppinglist",
				element: <ShoppingList />,
			},
			{
				path: "/planning",
				element: <Planning />,
			},
			{
				path: "/disheslist",
				element: <DishesList />,
			},
		],
	},
]);

if (rootElement == null) {
	throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

createRoot(rootElement).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
