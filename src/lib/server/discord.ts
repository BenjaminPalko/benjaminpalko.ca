import { DISCORD_CONTACT_WEBHOOK } from '$env/static/private';

export async function sendContactMessage(
	name: string,
	email: string,
	subject: string,
	message: string
) {
	const form = new FormData();

	//  We need a better way than this to format a string to markdown
	const content = `
  # Someone is reaching out!

  From: ${name} - [${email}](mailto:${email})
  > **Subject: ${subject}**
  > ${message}
`
		.split('\n')
		.map((str) => str.trim())
		.join('\n');

	form.append('content', content);

	return await fetch(DISCORD_CONTACT_WEBHOOK, { method: 'POST', body: form });
}
