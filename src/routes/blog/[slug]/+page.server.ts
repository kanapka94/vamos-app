import type { BlogPost } from '$lib/types/api';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

const getSearchQuery = (slug: string) => ({
	query: {
		filter: {
			_and: [
				{
					slug: {
						_eq: slug
					}
				},
				{
					status: {
						_in: ['published']
					}
				},
				{
					date_published: {
						_lte: new Date().toISOString()
					}
				}
			]
		}
	}
});

export const load: PageServerLoad = async ({ params }) => {
	const response = await fetch(`${import.meta.env.VITE_API_URL}/items/posts`, {
		method: 'SEARCH',
		headers: {
			'Content-Type': 'application/json;charset=utf-8'
		},
		body: JSON.stringify(getSearchQuery(params.slug))
	});

	const { data } = await response.json();

	if (!data[0]) {
		throw error(404, 'Nie odnaleziono wpisu');
	}

	return {
		page: data[0] as BlogPost
	};
};
