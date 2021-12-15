import React from 'react';

export default function Container({ children }) {
	return (
		<div className='grid'>
			<div>{children}</div>
		</div>
	);
}
