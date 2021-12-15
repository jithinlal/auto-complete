import React from 'react';
import { screen, render, cleanup, fireEvent } from '@testing-library/react';
import Input from './Input';

describe('Input component', () => {
	const { debug, container } = render(
		<Input
			handleSearch={() => {
				console.log('hi');
			}}
		/>,
	);
	const input = container.querySelector('input');

	it('should contain a placeholder', () => {
		expect(input).toHaveAttribute('placeholder', 'Search color...');
	});
});
