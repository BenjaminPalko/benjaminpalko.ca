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

	async SiteBackground() {
		const background = this.client.single('site-background');

		return await background.find({
			populate: ['Background']
		});
	}

	async About() {
		const about = this.client.single('about');

		return await about.find({
			populate: ['Titles', 'Photo', 'Activities']
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

	async Experiences() {
		const experiences = this.client.collection('experiences');

		return await experiences.find({
			populate: ['Logo']
		});
	}

	async Education() {
		const education = this.client.collection('educations');

		return await education.find({});
	}
}
