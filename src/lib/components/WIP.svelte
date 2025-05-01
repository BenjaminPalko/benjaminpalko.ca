<script lang="ts">
	import { TriangleAlertIcon } from 'lucide-svelte';

	const messages = ['Under Construction', 'Caution', 'Work In Progress', 'Hard-hats required!'];
</script>

{#snippet Banner(messages: string[], backwards: boolean)}
	<div
		class="bg-hazard flex h-fit w-[110%] flex-col bg-black py-3 text-xs font-semibold text-nowrap text-black lg:py-6 lg:text-lg"
		class:rotate-5={!backwards}
		class:-rotate-5={backwards}
	>
		<div class="scroll-parent h-4 w-full overflow-x-hidden bg-amber-400 px-8 lg:h-6">
			<div
				class="scroll-element flex justify-around"
				class:primary={!backwards}
				class:-primary={backwards}
			>
				{#each messages.sort(() => {
					const val = Math.random();
					if (val > 0.66) return 1;
					else if (val > 0.33) return 0;
					else return -1;
				}) as message (message)}
					<TriangleAlertIcon />
					<p>{message}</p>
				{/each}
			</div>
			<div
				class="scroll-element flex justify-around"
				class:secondary={!backwards}
				class:-secondary={backwards}
			>
				{#each messages as message (message)}
					<TriangleAlertIcon />
					<p>{message}</p>
				{/each}
			</div>
		</div>
	</div>
{/snippet}

<div class="bg-hazard rounded-box h-full w-full border border-amber-400 p-4 lg:p-6">
	<div
		class="bg-base-200 rounded-box flex h-full flex-col items-center justify-center gap-32 overflow-hidden border border-amber-400 lg:gap-48"
	>
		{@render Banner(messages, false)}
		{@render Banner(messages, true)}
	</div>
</div>

<style>
	.scroll-parent {
		position: relative;
	}

	.scroll-element {
		position: absolute;
		width: inherit;
		height: inherit;
		left: 0%;
		top: 0%;
	}

	.primary {
		animation: primary 10s linear infinite;
	}

	.secondary {
		animation: secondary 10s linear infinite;
	}

	.-primary {
		animation: -primary 10s linear infinite;
	}

	.-secondary {
		animation: -secondary 10s linear infinite;
	}

	@keyframes primary {
		from {
			left: 0%;
		}
		to {
			left: -100%;
		}
	}

	@keyframes secondary {
		from {
			left: 100%;
		}
		to {
			left: 0%;
		}
	}

	@keyframes -primary {
		from {
			left: -100%;
		}
		to {
			left: 0%;
		}
	}

	@keyframes -secondary {
		from {
			left: 0%;
		}
		to {
			left: 100%;
		}
	}

	.bg-hazard {
		background-image: repeating-linear-gradient(
			-55deg,
			var(--color-amber-400),
			var(--color-amber-400) 10px,
			black 10px,
			black 20px
		);
	}
</style>
