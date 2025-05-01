<script lang="ts">
	import { enhance } from '$app/forms';
	import {
		CircleCheck,
		CircleX,
		Croissant,
		Mail,
		Send,
		TriangleAlert,
		UserRound
	} from 'lucide-svelte';
	import type { PageProps } from './$types';

	let { form }: PageProps = $props();
</script>

<form id="contact" method="post" use:enhance>
	<div class="mx-auto grid max-w-3xl gap-4 py-8 sm:grid-flow-col sm:grid-cols-3 sm:grid-rows-6">
		<div class="col-span-full">
			{#if form?.response?.rejected.length ?? 0 > 0}
				<div role="alert" class="alert alert-error w-full">
					<CircleX />
					<span>Ruh roh raggy!</span>
				</div>
			{:else if form?.response?.accepted.length ?? 0 > 0}
				<div role="alert" class="alert alert-success w-full">
					<CircleCheck />
					<span>Your message has been sent successfully!</span>
				</div>
			{:else if form?.incorrect}
				<div role="alert" class="alert alert-warning w-full">
					<TriangleAlert />
					<span>Ruh roh raggy!</span>
				</div>
			{/if}
		</div>

		<h2 class="col-span-full text-3xl font-light">Reach out! 🤝</h2>

		<label class="input input-bordered col-span-full flex w-full items-center sm:col-span-1">
			<UserRound />
			<input name="name" type="text" class="grow" placeholder="Full Name" />
		</label>
		<label class="input input-bordered col-span-full flex w-full items-center gap-2 sm:col-span-1">
			<Mail />
			<input name="email" type="text" class="grow" placeholder="Your Email" />
		</label>
		<label class="input input-bordered col-span-full flex w-full items-center gap-2 sm:col-span-1">
			<Croissant />
			<input name="subject" type="text" class="grow" placeholder="Subject" />
		</label>

		<div class="row-span-3 sm:col-span-2">
			<textarea
				name="message"
				form="contact"
				class="textarea textarea-bordered h-full w-full resize-none"
				placeholder="Message"
			></textarea>
		</div>

		<button type="submit" class="btn btn-primary col-span0">Send Message <Send size={20} /></button>
	</div>
</form>
