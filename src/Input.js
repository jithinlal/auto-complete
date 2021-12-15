import React from 'react';

export default function Input({ handleSearch }) {
	return (
		<input
			style={{ width: '40%' }}
			placeholder='Search color...'
			onChange={handleSearch}
		/>
	);
}
