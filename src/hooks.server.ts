import { env } from '$env/dynamic/private';
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
	event.locals.Strapi.url = `http://${env.STRAPI_HOST}:${env.STRAPI_PORT}`;

	const response = await resolve(event);
	return response;
};
