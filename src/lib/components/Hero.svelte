<script lang="ts">
	interface Props {
		photo: string;
		titles: string[];
		name: string;
		description: string;
	}

	let { photo, titles, name, description }: Props = $props();

	let [first, rest] = $derived([name.split(' ')[0], name.split(' ').slice(1).join(' ')]);
</script>

<div class="hero bg-base-200">
	<div class="hero-content">
		<div class="flex flex-col items-center gap-12 lg:flex-row lg:items-start">
			<div class="flex-0">
				<div class="avatar">
					<div
						class="ring-offset-base-100 ring-base-100 dark:ring-primary w-48 rounded-full shadow-2xl ring-8 ring-offset-2 md:w-56 dark:shadow-none"
					>
						<img src={photo} alt="Its me!" />
					</div>
				</div>
			</div>
			<div class="flex flex-1 flex-col text-center lg:text-left">
				<p class="text-gray-500">{titles.join(', ')}</p>
				<h1 class="text-primary text-5xl font-light">
					<span class="text-base-content font-semibold">{first}</span>
					{rest}
				</h1>
				<p class="block py-6">
					{description}
				</p>
				<div class="flex flex-col gap-2 sm:flex-row lg:gap-4">
					<a href="/resume" class="btn btn-outline btn-primary btn-wide">Resume</a>
					<a href="/contact" class="btn btn-primary btn-wide">Contact</a>
				</div>
			</div>
		</div>
	</div>
</div>
