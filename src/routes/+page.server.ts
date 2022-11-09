import type { Page } from '$lib/types/api';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

const getSearchQuery = () => ({
	query: {
		filter: {
			_and: [
				{
					status: {
						_in: ['published']
					}
				},
				{
					sort: {
						_eq: 1
					}
				}
			]
		}
	}
});

export const load: PageServerLoad = async () => {
	const response = await fetch(`${import.meta.env.VITE_API_URL}/items/pages`, {
		method: 'SEARCH',
		headers: {
			'Content-Type': 'application/json;charset=utf-8'
		},
		body: JSON.stringify(getSearchQuery())
	});

	const { data } = await response.json();

	if (!data[0]) {
		throw error(404, 'Nie odnaleziono strony');
	}

	return {
		page: data[0] as Page
	};
};
