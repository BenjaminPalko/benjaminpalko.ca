import { strapi, type StrapiClient } from '@strapi/client';

export class Strapi {
	public readonly api: string;
	public readonly uploads: string;

	private readonly client: StrapiClient;

	constructor(url: string, auth: string) {
		this.api = `${url}/api`;
		this.uploads = `${url}/uploads`;
		this.client = strapi({
			baseURL: this.api,
			auth: auth
		});
	}

	async Blogs() {
		const blogs = this.client.collection('blogs');

		return await blogs.find({
			populate: ['Header', 'Topics']
		});
	}

	async Blog(id: string) {
		const blogs = this.client.collection('blogs');

		return await blogs.findOne(id, {
			populate: ['Header', 'Topics']
		});
	}
}
