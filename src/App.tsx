import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
	return (
		<>
			<nav>
				<Link to="/recipes">Recettes</Link>
				<Link to="/planning">Planning</Link>
				<Link to="/">Home Logo</Link>
				<Link to="/disheslist">Liste des repas</Link>
				<Link to="/shoppinglist">Liste de courses</Link>
			</nav>
			<main>
				<Outlet />
			</main>
		</>
	);
}

export default App;
