import { logger } from '$lib/server/logger';
import { error } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals }) => {
	const { strapi } = locals;

	try {
		const result = await strapi.SiteBackground();
		return {
			background: {
				url: result.data.Background.url
			}
		};
	} catch (err) {
		logger.error('Uh-oh!', err);
		if (err instanceof Error) {
			error(500, err);
		}
	}
};
