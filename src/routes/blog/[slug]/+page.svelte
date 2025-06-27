<script lang="ts">
	import BlockQuote from '$lib/markdown/renderers/BlockQuote.svelte';
	import Code from '$lib/markdown/renderers/Code.svelte';
	import Heading from '$lib/markdown/renderers/Heading.svelte';
	import Link from '$lib/markdown/renderers/Link.svelte';
	import List from '$lib/markdown/renderers/List.svelte';
	import OrderedListItem from '$lib/markdown/renderers/OrderedListItem.svelte';
	import Paragraph from '$lib/markdown/renderers/Paragraph.svelte';
	import UnorderedListItem from '$lib/markdown/renderers/UnorderedListItem.svelte';
	import SvelteMarkdown from '@humanspeak/svelte-markdown';
	import dayjs from 'dayjs';
	import type { PageProps } from './$types';
	import Image from '$lib/components/Image.svelte';

	let { data }: PageProps = $props();

	let post = $derived(data.post);
</script>

<div class="flex flex-col items-center gap-4">
	<div class="w-full max-w-5xl px-4">
		<p class="text-gray-500">{dayjs(post.published).format('DD MMMM YYYY')}</p>
		<h1 class="text-4xl font-light">{post.title}</h1>
	</div>
	<Image src={post.image.url} alt={post.image.alt} caption={post.image.caption} />
	<div class="w-full max-w-5xl px-4">
		<SvelteMarkdown
			source={data.post.body}
			renderers={{
				link: Link,
				list: List,
				orderedlistitem: OrderedListItem,
				unorderedlistitem: UnorderedListItem,
				code: Code,
				blockquote: BlockQuote,
				heading: Heading,
				paragraph: Paragraph
			}}
		/>
	</div>
</div>
