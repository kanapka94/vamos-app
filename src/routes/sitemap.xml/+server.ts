import type { BlogPost } from '$lib/types/api';
import type { Menu } from '$lib/types/menu';

export async function GET() {
	const response = await fetch(`${import.meta.env.VITE_API_URL}/items/menus`);
	const { data } = await response.json();

	const menu: Menu = data[0];

	const postsResponse = await fetch(`${import.meta.env.VITE_API_URL}/items/posts`, {
		method: 'SEARCH',
		headers: {
			'Content-Type': 'application/json;charset=utf-8'
		},
		body: JSON.stringify(getAllPostsSearchQuery())
	});

	const { data: posts } = (await postsResponse.json()) as { data: BlogPost[] };

	return new Response(
		`
    <?xml version="1.0" encoding="UTF-8" ?>
    <urlset
      xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xhtml="https://www.w3.org/1999/xhtml"
      xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
      xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
      xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
      xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
    >
      ${getPagesUrlStructure(menu.items)}
      ${getPostsStructure(posts)}
    </urlset>`.trim(),
		{
			headers: {
				'Content-Type': 'application/xml',
				'Cache-Control': 'max-age=0, s-maxage=3600'
			}
		}
	);
}

function getPagesUrlStructure(menuItems: Menu['items']): string {
	return menuItems
		.map((item) => {
			if (item.submenu?.length) {
				return getPagesUrlStructure(item.submenu).concat(getUrlEntry(item.url));
			}

			return getUrlEntry(item.url);
		})
		.join('');
}

function getPostsStructure(posts: BlogPost[]) {
	return posts.map((post) => getUrlEntry(post)).join('');
}

function getUrlEntry(url: string): string;
function getUrlEntry(post: BlogPost): string;

function getUrlEntry(entry: string | BlogPost) {
	if (typeof entry === 'string') {
		return `<url>
  <loc>https://vamos-wood.pl${entry}</loc>
  <changefreq>monthly</changefreq>
</url>`;
	}

	return `<url>
  <loc>https://vamos-wood.pl/blog/${entry.slug}</loc>
  <lastmod>${entry.date_updated}</lastmod>
  <changefreq>monthly</changefreq>
</url>`;
}

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
