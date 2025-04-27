<script lang="ts">
	import { page } from '$app/state';
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.css';

	let { children } = $props();

	const pages = [
		{ slug: '/about', name: 'About Me' },
		{ slug: '/portfolio', name: 'Portfolio' },
		{ slug: '/blog', name: 'Blog' },
		{ slug: '/projects', name: 'Projects' },
		{ slug: '/experience', name: 'Experience' },
		{ slug: '/contact', name: 'Contact' }
	];
</script>

<div class="h-screen w-screen p-12">
	<div class="bg-base-200 flex min-h-full flex-col gap-8 rounded-4xl p-8">
		<Navbar {pages} route={page.route} />
		<div class="px-8">{@render children()}</div>
	</div>
</div>
