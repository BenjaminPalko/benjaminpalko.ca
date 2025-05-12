import { env } from '$env/dynamic/private';
import { logger } from '$lib/server/logger';
import { Strapi } from '$lib/server/strapi';
import type { Handle, HandleServerError } from '@sveltejs/kit';
import { randomUUID } from 'crypto';

export const handleError: HandleServerError = async ({ error, event, message, status }) => {
	const errorId = randomUUID();

	logger.error({ error, errorId, event, message, status }, 'Blyat');

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
