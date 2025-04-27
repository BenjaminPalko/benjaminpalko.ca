<script lang="ts">
	interface Props {
		links: {
			name: string;
			href: string;
		}[];
	}

	let { links }: Props = $props();
</script>

<div class="flex justify-between">
	<div class="flex gap-8">
		{#each links as link (link.href)}
			<a href={link.href} class="hover:text-base-content text-slate-600 transition-colors"
				>{link.name}</a
			>
		{/each}
	</div>
	<p class="text-slate-600">© 2025 Benjamin Palko</p>
</div>
