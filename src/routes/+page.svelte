<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import { Braces, Gamepad2, HeartHandshake, MonitorCog } from 'lucide-svelte';

	const description =
		'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.';
</script>

<div class="flex flex-col px-12">
	<div class="py-48">
		<Hero
			photo="/yeet-winter.jpg"
			titles={['Software Engineer', 'Game Developer']}
			name="Benjamin Palko"
			{description}
		/>
	</div>
	<div>
		<h2 class="py-8 text-xl">What I Do</h2>
		<div class="grid grid-cols-2 gap-8">
			<div class="flex gap-4">
				<Braces size={48} class="text-primary" />
				<div class="flex flex-col">
					<h3 class="text-xl">Web Development</h3>
					<p class="max-w-2xl">
						Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae
						pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.
					</p>
				</div>
			</div>
			<div class="flex gap-4">
				<Gamepad2 size={48} class="text-primary" />
				<div class="flex flex-col">
					<h3 class="text-xl">Video Game Development</h3>
					<p class="max-w-2xl">
						Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae
						pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.
					</p>
				</div>
			</div>
			<div class="flex gap-4">
				<MonitorCog size={48} class="text-primary" />
				<div class="flex flex-col">
					<h3 class="text-xl">Linux Ricing</h3>
					<p class="max-w-2xl">
						Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae
						pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.
					</p>
				</div>
			</div>
			<div class="flex gap-4">
				<HeartHandshake size={48} class="text-primary" />
				<div class="flex flex-col">
					<h3 class="text-xl">Open-Source Development</h3>
					<p class="max-w-2xl">
						Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae
						pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
