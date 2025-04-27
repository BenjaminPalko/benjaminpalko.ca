<script lang="ts">
	import { TriangleAlertIcon } from 'lucide-svelte';

	const messages = ['Under Construction', 'Caution', 'Work In Progress'];
</script>

{#snippet Banner(messages: string[], backwards: boolean)}
	<div
		class="bg-hazard flex h-fit w-full flex-col bg-black py-8 text-xl font-semibold text-black italic"
		class:skew-2={!backwards}
		class:-skew-2={backwards}
	>
		<div class="scroll-parent w-full overflow-x-hidden bg-amber-400 px-8">
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

<div class="bg-hazard rounded-box w-full p-6">
	<div class="bg-base-200 rounded-box flex h-full flex-col justify-around">
		{@render Banner(messages, false)}
		{@render Banner(messages, true)}
		{@render Banner(messages, false)}
	</div>
</div>

<style>
	.scroll-parent {
		position: relative;
		height: 2rem;
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

	.hazard-border {
		border: solid 20px;
		border-image: repeating-linear-gradient(
				-75deg,
				var(--color-amber-400),
				var(--color-amber-400) 10px,
				black 10px,
				black 20px
			)
			20;
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

	.hazard {
		color: black;
		background: #ffb101;
		border-top: solid 20px;
		border-bottom: solid 20px;
		border-image: repeating-linear-gradient(-75deg, #ffb101, #ffb101 10px, black 10px, black 20px)
			20;
	}
</style>
