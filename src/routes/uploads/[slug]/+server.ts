import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ locals, params }) => {
	const { slug } = params;

	const response = await fetch(`${locals.strapi.uploads}/${slug}`);
	return response;
};
