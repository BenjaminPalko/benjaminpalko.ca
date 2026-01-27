<script lang="ts">
	import clsx from 'clsx';
	import type { SvelteHTMLElements } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	type Props = SvelteHTMLElements['code'];

	const { children, class: className, ...props }: Props = $props();
</script>

<code {...props} class={twMerge('text-pink-500', clsx(className))}>
	{@render children?.()}
</code>

<style scoped>
	@reference "../../../app.css";

	blockquote {
		@apply alert my-3 text-xs leading-loose italic;
	}

	/**
** code block styling
**/
	code[class*='language-'],
	pre[class*='language-'] {
		color: #ebdbb2;
		/* fg1 / fg */
		font-family: 'JetBrains Mono', monospace;
		direction: ltr;
		text-align: left;
		white-space: pre;
		word-spacing: normal;
		word-break: normal;
		line-height: 1.5;

		-moz-tab-size: 4;
		-o-tab-size: 4;
		tab-size: 4;

		-webkit-hyphens: none;
		-moz-hyphens: none;
		-ms-hyphens: none;
		hyphens: none;
		@apply text-neutral-content;
	}

	pre[class*='language-']::-moz-selection,
	pre[class*='language-'] ::-moz-selection,
	code[class*='language-']::-moz-selection,
	code[class*='language-'] ::-moz-selection {
		color: #fbf1c7;
		/* fg0 */
		background: #7c6f64;
		/* bg4 */
		@apply bg-accent/80 text-accent-content/80;
	}

	pre[class*='language-']::selection,
	pre[class*='language-'] ::selection,
	code[class*='language-']::selection,
	code[class*='language-'] ::selection {
		color: #fbf1c7;
		/* fg0 */
		background: #7c6f64;
		/* bg4 */
		@apply bg-accent text-accent-content;
	}

	/* Code blocks */
	pre[class*='language-'] {
		padding: 1em;
		margin: 0.5em 0;
		overflow: auto;
	}

	:not(pre) > code[class*='language-'],
	pre[class*='language-'] {
		@apply rounded-box bg-neutral;
		/* bg0_h */
	}

	/* Inline code */
	:not(pre) > code[class*='language-'] {
		padding: 0.1em;
		border-radius: 0.3em;
	}

	.token.comment,
	.token.prolog,
	.token.cdata {
		color: #a89984;
		/* fg4 / gray1 */
		@apply text-neutral-content/60;
	}

	.token.delimiter,
	.token.boolean,
	.token.keyword,
	.token.selector,
	.token.important,
	.token.atrule {
		color: #fb4934;
		/* red2 */
		@apply text-error/80;
	}

	.token.operator,
	.token.punctuation,
	.token.attr-name {
		color: #a89984;
		/* fg4 / gray1 */
		@apply text-neutral-content/60;
	}

	.token.tag,
	.token.tag .punctuation,
	.token.doctype,
	.token.builtin {
		color: #fabd2f;
		/* yellow2 */
		@apply text-warning/80;
	}

	.token.entity,
	.token.number,
	.token.symbol {
		color: #d3869b;
		/* purple2 */
		@apply text-secondary;
	}

	.token.property,
	.token.constant,
	.token.variable {
		color: #fb4934;
		/* red2 */
		@apply text-error/80;
	}

	.token.string,
	.token.char {
		color: #b8bb26;
		/* green2 */
		@apply text-primary;
	}

	.token.attr-value,
	.token.attr-value .punctuation {
		color: #a89984;
		/* fg4 / gray1 */
		@apply text-neutral-content/60;
	}

	.token.url {
		color: #b8bb26;
		/* green2 */
		text-decoration: underline;
		@apply text-secondary/80;
	}

	.token.function {
		color: #fabd2f;
		/* yellow2 */
		@apply text-accent/90;
	}

	.token.regex {
		background: #b8bb26;
		/* green2 */
		@apply bg-secondary/40;
	}

	.token.bold {
		font-weight: bold;
	}

	.token.italic {
		font-style: italic;
	}

	.token.inserted {
		background: #a89984;
		/* fg4 / gray1 */
		@apply text-neutral-content/60;
	}

	.token.deleted {
		background: #fb4934;
		/* red2 */
		@apply text-error;
	}
</style>
