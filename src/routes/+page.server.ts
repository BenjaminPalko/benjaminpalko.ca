import { logger } from '$lib/server/logger';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

interface Data {
	about: {
		name: string;
		bio: string;
		titles: string[];
		photo: {
			url: string;
		};
		activities: { title: string; description: string }[];
	};
}

export const load: PageServerLoad = async ({ locals }): Promise<Data | undefined> => {
	const { strapi } = locals;

	try {
		const { data: about } = await strapi.About();

		return {
			about: {
				name: about.Name,
				bio: about.Bio,
				titles: about.Titles.map((title: { value: string }) => title.value),
				photo: {
					url: about.Photo.url
				},
				activities: about.Activities.map((item: { Title: string; Description: string }) => {
					return { title: item.Title, description: item.Description };
				})
			}
		} satisfies Data;
	} catch (err) {
		if (err instanceof Error) {
			logger.error('Uh-oh!', err);
			if (err instanceof Error) {
				error(500, err);
			}
		}
	}
};
