import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals, params }) => {
	const { slug } = params;
	const { strapi } = locals;

	const { data: post, meta } = await strapi.Blog(slug);

	return {
		post: {
			id: post.documentId,
			image: {
				url: post.Header.url,
				alt: post.Header.alternativeText,
				caption: post.Header.caption,
			},
			title: post.Title,
			body: post.Body,
			topics: post.Topics.map((topic: { id: string; Topic: string }) => ({
				id: topic.id,
				name: topic.Topic,
			})),
			published: post.publishedAt,
		},
		meta,
	};
};
