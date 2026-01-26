import { sendContactMessage } from '$lib/server/discord';
import { logger } from '$lib/server/logger';
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
	default: async ({ request }) => {
		const form = await request.formData();

		if (!form.has('name')) {
			return fail(400, { name: null, missing: true });
		}

		if (!form.has('email')) {
			return fail(400, { email: null, missing: true });
		}

		if (!form.has('subject')) {
			return fail(400, { subject: null, missing: true });
		}

		if (!form.has('message')) {
			return fail(400, { message: null, missing: true });
		}

		const name = form.get('name');
		if (typeof name !== 'string') {
			return fail(400, { name, incorrect: true });
		}

		const email = form.get('email');
		if (typeof email !== 'string') {
			return fail(400, { email, incorrect: true });
		}

		const subject = form.get('subject');
		if (typeof subject !== 'string') {
			return fail(400, { subject, incorrect: true });
		}

		const message = form.get('message');
		if (typeof message !== 'string') {
			return fail(400, { message, incorrect: true });
		}

		try {
			const response = await sendContactMessage(name, email, subject, message);

			return {
				response: {
					ok: response.ok
				}
			};
		} catch (error) {
			logger.error(error);
			fail(400, { incorrect: true });
		}
	}
} satisfies Actions;
