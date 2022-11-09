export interface Page {
	id: number;
	status: Status;
}

export interface Page {
	id: number;
	status: Status;
	sort: number;
	user_created: string;
	date_created: string;
	user_updated: string;
	date_updated: string;
	title: string;
	content: Content;
	tags: string[];
	date_published: string;
	slug: string | null;
	images: PageImage[];
}

export interface PageImage {
	directus_files_id: string;
}

export interface Content {
	time: number;
	blocks: EditorBlock[];
	version: string;
}

export interface EditorBlock {
	id: string;
	type: string;
	data: DataClass;
	tunes?: Tunes;
}

export interface DataClass {
	text?: string;
	level?: number;
	file?: File;
	caption?: string;
	withBorder?: boolean;
	stretched?: boolean;
	withBackground?: boolean;
	style?: string;
	items?: Item[];
}

export interface File {
	width: number;
	height: number;
	size: string;
	name: string;
	title: string;
	extension: string;
	fileId: string;
	fileURL: string;
	url: string;
}

export interface Item {
	content: string;
	items: any[];
}

export interface Tunes {
	alignmentTune: Alignment;
}

export type Alignment = 'left' | 'right' | 'center';

export type Status = 'published' | 'draft' | 'archived';
