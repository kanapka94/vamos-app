import type { BlogPost, Page } from '$lib/types/api';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

const getSearchQuery = () => ({
	query: {
		filter: {
			_and: [
				{
					slug: {
						_eq: 'blog'
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
		},
		fields: '*,images.directus_files_id'
	}
});

const getAllPostsSearchQuery = () => ({
	query: {
		filter: {
			_and: [
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
		},
		fields: '*,image.id,image.description'
	}
});

export const load: PageServerLoad = async () => {
	const blogPageResponse = await fetch(`${import.meta.env.VITE_API_URL}/items/pages`, {
		method: 'SEARCH',
		headers: {
			'Content-Type': 'application/json;charset=utf-8'
		},
		body: JSON.stringify(getSearchQuery())
	});

	const { data: blogData } = await blogPageResponse.json();

	if (!blogData[0]) {
		throw error(404, 'Nie odnaleziono strony');
	}

	const postsResponse = await fetch(`${import.meta.env.VITE_API_URL}/items/posts`, {
		method: 'SEARCH',
		headers: {
			'Content-Type': 'application/json;charset=utf-8'
		},
		body: JSON.stringify(getAllPostsSearchQuery())
	});

	const { data: postsData } = await postsResponse.json();

	return {
		page: blogData[0] as Page,
		posts: postsData as BlogPost[]
	};
};
