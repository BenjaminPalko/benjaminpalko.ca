<script lang="ts">
	import { page } from '$app/state';
	import Footer from '$lib/components/Footer.svelte';
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

	const socialLinks = [
		{ name: 'Github', href: 'https://github.com/BenjaminPalko' },
		{ name: 'LinkedIn', href: 'https://www.linkedin.com/in/benjaminpalko/' },
		{ name: 'Itch.io', href: 'https://baobeld.itch.io/' },
		{ name: 'Ko-fi', href: 'https://ko-fi.com/baobeld' }
	];
</script>

<div class="h-screen w-screen p-12">
	<div class="bg-base-200 flex min-h-full flex-col rounded-4xl p-8">
		<Navbar {pages} route={page.route} />
		<div class="flex flex-1 items-stretch p-8">{@render children()}</div>
		<div>
			<Footer links={socialLinks} />
		</div>
	</div>
</div>
