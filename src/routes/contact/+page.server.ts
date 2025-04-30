import {
	MAIL_TRANSPORT_HOST,
	MAIL_TRANSPORT_PASS,
	MAIL_TRANSPORT_PORT,
	MAIL_TRANSPORT_USER
} from '$env/static/private';
import { fail } from '@sveltejs/kit';
import { createTransport } from 'nodemailer';
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

		const transport = createTransport({
			host: MAIL_TRANSPORT_HOST,
			port: isNaN(Number(MAIL_TRANSPORT_PORT)) ? 587 : Number(MAIL_TRANSPORT_PORT),
			auth: {
				user: MAIL_TRANSPORT_USER,
				pass: MAIL_TRANSPORT_PASS
			}
		});

		try {
			const info1 = await transport.sendMail({
				from: 'no-reply@benjaminpalko.ca',
				to: email,
				subject: `Thank you for reaching out`,
				text: `Hello ${name}!\n\nThank you for reaching out! I will be sure to get back to you ASAP.\n\nCheers,\nBenjamin`
			});

			const info2 = await transport.sendMail({
				from: email,
				to: 'contact@benjaminpalko.ca',
				subject: subject,
				text: message
			});

			return {
				response: {
					accepted: [...info1.accepted, ...info2.accepted],
					rejected: [...info1.rejected, ...info2.rejected]
				}
			};
		} catch (error) {
			console.error(error);
		}
	}
} satisfies Actions;
