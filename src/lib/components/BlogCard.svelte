<script lang="ts">
	import dayjs from 'dayjs';
	import { Link } from 'lucide-svelte';

	interface Props {
		id: string;
		img: string;
		'img-alt': string | null;
		title: string;
		published: string;
		topics: { id: number; name: string }[];
	}

	let { id, img, 'img-alt': alt, title, published, topics }: Props = $props();

	let blogLink = $derived(`/blog/${id}`);
</script>

<div class="card">
	<figure class="rounded-box group">
		<div class="absolute top-4 left-4 z-10 flex gap-2">
			{#each topics as topic (topic.id)}
				<div class="badge badge-soft badge-info">{topic.name}</div>
			{/each}
		</div>
		<div class="absolute z-10 opacity-0 transition-opacity group-hover:opacity-75">
			<Link size={32} />
		</div>
		<a href={blogLink}>
			<img
				class="z-0 aspect-4/2 w-full object-cover transition-transform group-hover:scale-110 group-hover:blur-xs"
				src={img}
				{alt}
			/>
		</a>
	</figure>
	<div class="card-body">
		<div class="card-actions justify-between">
			<div>
				<p class="text-xs font-light text-gray-500">
					Published {dayjs(published).format('DD MMMM YYYY')}
				</p>
				<h2 class="card-title text-xl">{title}</h2>
			</div>
			<a href={blogLink} class="btn btn-primary">Read Now</a>
		</div>
	</div>
</div>
