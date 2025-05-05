import { env } from '$env/dynamic/private';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const { slug } = params;
	const response = await fetch(
		`http://${env.STRAPI_HOST}:${env.STRAPI_PORT}/api/blogs/${slug}?populate=Header&populate=Topics`,
		{
			method: 'GET',
			headers: {
				Authorization: `bearer ${env.STRAPI_TOKEN}`
			}
		}
	);

	const { data, meta } = await response.json();

	console.log(JSON.stringify(data, null, 2));

	return {
		post: data,
		meta
	};
};
