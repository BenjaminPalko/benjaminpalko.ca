import { env } from '$env/dynamic/private';
import type { PageServerLoad } from './$types';

type Dates = {
	createdAt: string;
	updateAt: string;
	publishedAt: string;
};

interface BlogPost extends Dates {
	id: number;
	documentId: string;
	Title: string;
	Header: Image;
	Body: string;
	Topics: Topic[];
}

interface Topic {
	id: number;
	Topic: string;
}

interface ImageFormat {
	ext: string;
	url: string;
	hash: string;
	mime: string;
	name: string;
	path: unknown;
	size: number;
	width: number;
	height: number;
	sizeInBytes: number;
}

interface Image extends Dates {
	id: number;
	documentId: string;
	name: string;
	alternativeText: string | null;
	caption: string | null;
	width: string;
	height: string;
	formats: {
		large: ImageFormat;
		medium: ImageFormat;
		small: ImageFormat;
		thumbnail: ImageFormat;
	};
	hash: string;
	ext: string;
	mime: string;
	size: number;
	url: string;
	previewUrl: string | null;
	provider: string;
	provider_metadata: unknown | null;
}

interface Meta {
	pagingation: {
		page: number;
		pageSize: number;
		pageCount: number;
		total: number;
	};
}

export const load: PageServerLoad = async () => {
	const response = await fetch(
		`http://${env.STRAPI_HOST}:${env.STRAPI_PORT}/api/blogs?populate=Header&populate=Topics`,
		{
			method: 'GET',
			headers: {
				Authorization: `bearer ${env.STRAPI_TOKEN}`
			}
		}
	);

	const { data, meta }: { data: BlogPost[]; meta: Meta } = await response.json();

	console.log(JSON.stringify(data, null, 2));

	return {
		posts: data,
		meta
	};
};
