import type { HandleServerError } from '@sveltejs/kit';
import { randomUUID } from 'crypto';

export const handleError: HandleServerError = async ({ error, event, message, status }) => {
	const errorId = randomUUID();

	console.error(error, { errorId, event, message, status });

	return {
		message: 'An Internal Error Occurred',
		errorId
	};
};
