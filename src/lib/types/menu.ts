export interface Menu {
	id: string;
	status: 'published' | 'draft' | 'archived';
	items: MenuItem[];
}

interface MenuItem {
	label: string;
	url: string;
	submenu?: MenuItem[];
}
