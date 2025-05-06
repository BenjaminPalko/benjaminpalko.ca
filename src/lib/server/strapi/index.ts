import { strapi, type StrapiClient } from "@strapi/client";

export class Strapi {
	private readonly client: StrapiClient;

	constructor(
		public readonly url: string,
		auth: string,
	) {
		this.client = strapi({
			baseURL: `${url}/api`,
			auth: auth,
		});
	}

	async Blogs() {
		const blogs = this.client.collection("blogs");

		return await blogs.find({
			populate: ["Header", "Topics"],
		});
	}

	async Blog(id: string) {
		const blogs = this.client.collection("blogs");

		return await blogs.findOne(id, {
			populate: ["Header", "Topics"],
		});
	}
}
