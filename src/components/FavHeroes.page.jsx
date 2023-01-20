import axios from 'axios';
import { useEffect, useState } from 'react';

const FavHeroes = () => {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:4000/myheroes').then(res => {
			setData(res.data);
			setLoading(false);
		});
	}, []);

	if (loading) {
		return <h2>Loading...</h2>;
	}

	return (
		<>
			<h2>Traditional - My Favorite Heroes:</h2>
			{data.map(hero => (
				<div key={hero.name} className="heroName">
					{hero.name}
				</div>
			))}
		</>
	);
};

export default FavHeroes;
