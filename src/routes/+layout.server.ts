import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
	const response = await fetch(`http://0.0.0.0:8055/items/menus`);
	const { data } = await response.json();

	return {
		menus: data
	};
};
