import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { logger } from '$lib/server/logger';

export const load: PageServerLoad = async ({ locals }) => {
	const { strapi } = locals;

	try {
		const { data: experiences, meta: experiencesMeta } = await strapi.Experiences();
		const { data: education, meta: educationMeta } = await strapi.Education();

		return {
			experiences: experiences.map((item) => {
				return {
					title: item.Title,
					company: item.Company,
					description: item.Description,
					startDate: item.StartDate,
					endDate: item.EndDate,
					logo: item.Logo
				};
			}),
			education: education.map((item) => {
				return {
					institute: item.Institute,
					field: item.Field,
					description: item.Description,
					startDate: item.StartDate,
					endDate: item.EndDate
				};
			}),
			meta: {
				experiences: experiencesMeta,
				education: educationMeta
			}
		};
	} catch (err) {
		logger.error('Uh-oh!', err);
		if (err instanceof Error) {
			error(500, err);
		}
	}
};
