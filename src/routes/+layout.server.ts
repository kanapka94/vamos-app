import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
	const response = await fetch(`${import.meta.env.VITE_API_URL}/items/menus`);
	const { data } = await response.json();

	return {
		menus: data
	};
};
