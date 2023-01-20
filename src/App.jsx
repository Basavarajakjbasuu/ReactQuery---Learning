import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import FavHeroes from './components/FavHeroes.page';
import Home from './components/Home.page';
import RQFavHeores from './components/RQFavHeores.page';
import './App.css';

import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient();

const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/FavHeroes">Traditional Query</Link>
						</li>
						<li>
							<Link to="/RQFavHeroes">React Query</Link>
						</li>
					</ul>
				</nav>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/FavHeroes" element={<FavHeroes />} />
					<Route path="/RQFavHeroes" element={<RQFavHeores />} />
				</Routes>
			</BrowserRouter>
		</QueryClientProvider>
	);
};

export default App;
