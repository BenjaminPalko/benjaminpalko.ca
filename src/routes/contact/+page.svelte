<script>
	import { enhance } from '$app/forms';
	import { Croissant, Mail, UserRound } from 'lucide-svelte';
</script>

<div class="flex flex-col">
	<div class="flex flex-col items-center">
		<span class="animate-bounce text-2xl">😁</span>
		<h2 class="text-2xl">Hello there friend</h2>
	</div>

	<form id="contact" use:enhance>
		<div class="bg-base-200 flex flex-col gap-4">
			<h1 class="text-4xl">Want to chat?</h1>
			<h5 class="text-lg">Reach out! 🤝</h5>
			<label class="input input-bordered flex items-center gap-2">
				<UserRound />
				<input name="name" type="text" class="grow" placeholder="What is your name?" />
			</label>
			<label class="input input-bordered flex items-center gap-2">
				<Mail />
				<input name="email" type="text" class="grow" placeholder="I'm going to need your email." />
			</label>
			<label class="input input-bordered flex items-center gap-2">
				<Croissant />
				<input name="name" type="text" class="grow" placeholder="Subject" />
			</label>
			<label class="form-control">
				<div class="label">
					<span class="label-text">What do you want to say?</span>
				</div>
				<textarea
					name="message"
					form="contact"
					class="textarea textarea-bordered h-24"
					placeholder="Hello friend..."
				></textarea>
			</label>
		</div>
	</form>
</div>
