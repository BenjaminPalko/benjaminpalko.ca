<script lang="ts">
	interface Props {
		text?: string;
	}

	const { text }: Props = $props();
</script>

<blockquote class="bg-base-200 border-base-300 text-base-content rounded-lg border-l-4 p-4">
	<p class="text-gray-700">{text}</p>
</blockquote>
