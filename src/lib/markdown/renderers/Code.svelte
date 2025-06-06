<script lang="ts">
	interface Props {
		lang?: string;
		text?: string;
	}

	const { text = '' }: Props = $props();
</script>

<div class="mockup-code w-full">
	{#each text.split('\n') as line, index (index)}
		<pre data-prefix={index + 1}><code>{line}</code></pre>
	{/each}
</div>
