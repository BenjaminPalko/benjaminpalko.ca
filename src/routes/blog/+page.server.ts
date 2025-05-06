import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const { strapi } = locals;

	try {
		const { data, meta } = await strapi.Blogs();

		return {
			posts: data.map((post) => ({
				id: post.documentId,
				image: {
					url: post.Header.formats.medium.url,
					alt: post.Header.alternativeText
				},
				title: post.Title,
				body: post.Body,
				topics: post.Topics.map((topic: { id: string; Topic: string }) => ({
					id: topic.id,
					name: topic.Topic
				})),
				published: post.publishedAt
			})),
			meta
		};
	} catch (err) {
		console.log('Uh-oh!');
		error(500, err.message);
	}
};
