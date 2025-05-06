import { env } from '$env/dynamic/private';
import { strapi } from '@strapi/client';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const { Strapi } = locals;

	const client = strapi({
		baseURL: Strapi.url,
		auth: env.STRAPI_TOKEN
	});

	const blogs = client.collection('blogs');

	const { data, meta } = await blogs.find({
		populate: ['Header', 'Topics']
	});

	return {
		strapi: {
			url: Strapi.url
		},
		posts: data.map((post) => ({
			id: post.documentId,
			image: {
				url: `${Strapi.url}${post.Header.formats.medium.url}`,
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
};
