<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import { Braces, Gamepad2, HeartHandshake, MonitorCog } from 'lucide-svelte';

	const description =
		'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.';
</script>

<div class="flex flex-col items-center px-6 md:px-12">
	<div class="lg:py-48">
		<Hero
			photo="/waterfall-cropped.jpg"
			titles={[
				'Software Engineer',
				'Game Developer',
				'Linux Enjoyer',
				'Cyclist',
				'Goalie for Hire ⚽'
			]}
			name="Benjamin Palko"
			{description}
		/>
	</div>
	<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
		<div class="col-span-full">
			<h2 class="border-primary w-fit border-b text-2xl font-light">What I Do</h2>
		</div>
		<div class="flex flex-col gap-4 lg:flex-row">
			<Braces size={48} class="text-primary" />
			<div class="flex flex-col">
				<h3 class="text-xl">Web Development</h3>
				<p class="max-w-2xl">
					Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae
					pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.
				</p>
			</div>
		</div>
		<div class="flex flex-col gap-4 lg:flex-row">
			<Gamepad2 size={48} class="text-primary" />
			<div class="flex flex-col">
				<h3 class="text-xl">Video Game Development</h3>
				<p class="max-w-2xl">
					Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae
					pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.
				</p>
			</div>
		</div>
		<div class="flex flex-col gap-4 lg:flex-row">
			<MonitorCog size={48} class="text-primary" />
			<div class="flex flex-col">
				<h3 class="text-xl">Linux Ricing</h3>
				<p class="max-w-2xl">
					Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae
					pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.
				</p>
			</div>
		</div>
		<div class="flex flex-col gap-4 lg:flex-row">
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
