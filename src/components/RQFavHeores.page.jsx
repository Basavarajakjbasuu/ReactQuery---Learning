import { useQuery } from 'react-query';

import axios from 'axios';
const RQFavHeores = () => {
	// const { isLoading, data } = useQuery('favroite-hero', () => {
	// 	return axios.get('http://localhost:4000/myheroes');
	// });

	const queryFunction = () => {
		return axios.get('http://localhost:4000/myheroes');
	};

	// destructering only required data
	// useQuery('query unique key', function return a promise)
	const { isLoading, data } = useQuery('favroite-hero', queryFunction);

	if (isLoading) {
		return <h2>Loading...</h2>;
	}

	return (
		<>
			<h2>React Query - My Favroite heroes</h2>
			{data?.data?.map(hero => (
				<div key={hero.name} className="heroName">
					{hero.name}
				</div>
			))}
		</>
	);
};

export default RQFavHeores;
