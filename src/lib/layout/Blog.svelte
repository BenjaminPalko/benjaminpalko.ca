<script lang="ts" context="module">
	import a from '$lib/components/markdown/Link.svelte';
	import blockquote from '$lib/components/markdown/BlockQuote.svelte';
	import code from '$lib/components/markdown/Code.svelte';
	import h1 from '$lib/components/markdown/Heading1.svelte';
	import h2 from '$lib/components/markdown/Heading2.svelte';
	import h3 from '$lib/components/markdown/Heading3.svelte';
	import h4 from '$lib/components/markdown/Heading4.svelte';
	import h5 from '$lib/components/markdown/Heading5.svelte';
	import p from '$lib/components/markdown/Paragraph.svelte';
	import pre from '$lib/components/markdown/Pre.svelte';
	import ol from '$lib/components/markdown/OrderedListItem.svelte';
	import ul from '$lib/components/markdown/UnorderedList.svelte';

	export { a, blockquote, code, h1, h2, h3, h4, h5, p, pre, ol, ul };
</script>

<slot />
