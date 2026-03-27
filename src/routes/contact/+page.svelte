<script lang="ts">
	import { enhance } from '$app/forms';
	import { CircleCheck, CircleX, Mail, Send, TriangleAlert, UserRound } from '@lucide/svelte';
	import type { PageProps } from './$types';

	let loading = $state(false);

	let { form }: PageProps = $props();
</script>

<form
	id="contact"
	method="post"
	use:enhance={() => {
		loading = true;
		return async ({ update }) => {
			loading = false;
			update();
		};
	}}
>
	<div class="mx-auto flex max-w-lg flex-col gap-8 py-8">
		<h2 class="text-center text-4xl font-light">Reach out! 🤝</h2>

		<div>
			{#if form?.incorrect}
				<div role="alert" class="alert alert-warning w-full">
					<TriangleAlert />
					<span>Ruh roh raggy!</span>
				</div>
			{:else if form?.response?.ok}
				<div role="alert" class="alert alert-success w-full">
					<CircleCheck />
					<span>Your message has been sent successfully!</span>
				</div>
			{:else if form?.response?.ok === false}
				<div role="alert" class="alert alert-error w-full">
					<CircleX />
					<span>Ruh roh raggy!</span>
				</div>
			{/if}
		</div>

		<label class="input input-bordered flex w-full items-center">
			<UserRound />
			<input required name="name" type="text" class="grow" placeholder="Full Name" />
		</label>
		<label class="input input-bordered col-span-full flex w-full items-center gap-2 sm:col-span-1">
			<Mail />
			<input required name="email" type="email" class="grow" placeholder="Your Email" />
		</label>

		<div>
			<textarea
				required
				name="message"
				form="contact"
				class="textarea textarea-bordered h-full min-h-48 w-full resize-none"
				placeholder="Message"
			></textarea>
		</div>

		<button disabled={loading} type="submit" class="btn btn-primary transition-colors duration-400">
			<div class="w-6">
				{#if loading}
					<span class="loading loading-spinner"></span>
				{:else}
					<Send size={20} />
				{/if}
			</div>
			Send Message
		</button>
	</div>
</form>
