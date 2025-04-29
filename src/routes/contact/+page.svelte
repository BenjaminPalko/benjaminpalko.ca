<script lang="ts">
	import { enhance } from '$app/forms';
	import { CircleCheck, CircleX, Croissant, Mail, UserRound } from 'lucide-svelte';
	import type { PageProps } from './$types';

	let { form, data }: PageProps = $props();
</script>

<form class="w-full" id="contact" method="post" use:enhance>
	<div class="grid w-full max-w-xl grid-cols-2 gap-6">
		<div class="col-span-2 flex flex-col items-center">
			<span class="animate-bounce text-2xl">😁</span>
			<h2 class="text-2xl">Hello there friend</h2>
		</div>

		<h3 class="col-span-2 text-xl">Reach out! 🤝</h3>

		{#if form?.response.rejected.length ?? 0 > 0}
			<div role="alert" class="alert alert-error col-span-2">
				<CircleX />
				<span>Ruh roh raggy!</span>
			</div>
		{:else if form?.response.accepted.length ?? 0 > 0}
			<div role="alert" class="alert alert-success col-span-2">
				<CircleCheck />
				<span>Your message has been sent successfully!</span>
			</div>
		{/if}

		<div class="flex h-full flex-col gap-4">
			<label class="input input-bordered flex items-center gap-2">
				<UserRound />
				<input name="name" type="text" class="grow" placeholder="Name" />
			</label>
			<label class="input input-bordered flex items-center gap-2">
				<Mail />
				<input name="email" type="text" class="grow" placeholder="Your Email" />
			</label>
			<label class="input input-bordered flex items-center gap-2">
				<Croissant />
				<input name="subject" type="text" class="grow" placeholder="Subject" />
			</label>
		</div>

		<textarea
			name="message"
			form="contact"
			class="textarea textarea-bordered h-full min-w-xl resize-none"
			placeholder="Message"
		></textarea>

		<button type="submit" class="btn btn-primary">Send Message</button>
	</div>
</form>
