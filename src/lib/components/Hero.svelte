<script lang="ts">
	interface Props {
		photo: string;
		titles: string[];
		name: string;
		description: string;
	}

	let { photo, titles, name, description }: Props = $props();
</script>

<div class="flex flex-col">
	<div class="hero bg-base-200 py-48">
		<div class="hero-content">
			<div class="flex max-w-5xl gap-12">
				<div class="flex-0">
					<div class="avatar">
						<div
							class="ring-offset-base-100 ring-base-100 w-56 rounded-full shadow-2xl ring-8 ring-offset-2 dark:shadow-none"
						>
							<img src={photo} alt="Its me!" />
						</div>
					</div>
				</div>
				<div class="flex flex-1 flex-col">
					<p>{titles.join(', ')}</p>
					<h1 class="text-5xl font-bold">{name}</h1>
					<p class="block py-6">
						{description}
					</p>
					<div class="flex justify-end gap-4">
						<a href="/portfolio" class="btn btn-outline btn-primary btn-wide">Portfolio</a>
						<a href="/contact" class="btn btn-primary btn-wide">Contact</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
