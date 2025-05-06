// See https://svelte.dev/docs/kit/types#app.d.ts

import type { Strapi } from "$lib/server/strapi";

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			strapi: Strapi;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
