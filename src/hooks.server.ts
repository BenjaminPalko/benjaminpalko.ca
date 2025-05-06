import { env } from '$env/dynamic/private';
import { Strapi } from '$lib/server/strapi';
import type { Handle, HandleServerError } from '@sveltejs/kit';
import { randomUUID } from 'crypto';

export const handleError: HandleServerError = async ({ error, event, message, status }) => {
	const errorId = randomUUID();

	console.error(error, { errorId, event, message, status });

	return {
		message: 'An Internal Error Occurred',
		errorId
	};
};

export const handle: Handle = async ({ event, resolve }) => {
	event.locals = {
		strapi: new Strapi(`http://${env.STRAPI_HOST}:${env.STRAPI_PORT}`, env.STRAPI_TOKEN)
	};

	const response = await resolve(event);
	return response;
};
