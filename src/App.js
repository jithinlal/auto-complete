import React, { useEffect, useState } from 'react';
import Container from './Container';
import Input from './Input';
import { getColors } from './api';
import './styles.css';

export default function App() {
	const [color, setColor] = useState(null);
	const [results, setResults] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (color) {
			setLoading(true);
			getColors(color)
				.then((res) => {
					setResults(res);
					setLoading(false);
				})
				.catch((err) => {
					console.error({ err });
					setLoading(false);
				});
		} else {
			setResults([]);
		}
	}, [color]);

	function debounce(func, timer) {
		let timeout;
		return function () {
			let context = this;
			let args = arguments;
			clearTimeout(timeout);
			timeout = setTimeout(() => {
				func.apply(context, args);
			}, timer);
		};
	}

	const handleSearch = debounce((event) => {
		let searchTerm = event.target.value;
		setColor(searchTerm);
	}, 500);

	return (
		<div className='App container-fluid'>
			<Input handleSearch={handleSearch} />
			{loading ? (
				<Container>
					<span aria-busy='true'></span>
				</Container>
			) : (
				<Container>
					{results.map((result, index) => (
						<h6 key={index}>{result}</h6>
					))}
					{results.length === 0 && color && <h6>No colors found...</h6>}
				</Container>
			)}
		</div>
	);
}
