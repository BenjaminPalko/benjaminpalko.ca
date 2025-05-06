import { env } from '$env/dynamic/private';
import { strapi } from '@strapi/client';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals, params }) => {
	const { slug } = params;
	const { Strapi } = locals;

	const client = strapi({
		baseURL: Strapi.url,
		auth: env.STRAPI_TOKEN
	});

	const blogs = client.collection('blogs');

	const { data: post, meta } = await blogs.findOne(slug, {
		populate: ['Header', 'Topics']
	});

	return {
		post: {
			id: post.documentId,
			image: {
				url: `${Strapi.url}${post.Header.url}`,
				alt: post.Header.alternativeText
			},
			title: post.Title,
			body: post.Body,
			topics: post.Topics.map((topic: { id: string; Topic: string }) => ({
				id: topic.id,
				name: topic.Topic
			})),
			published: post.publishedAt
		},
		meta
	};
};
