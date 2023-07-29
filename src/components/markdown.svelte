<script lang="ts">
  import { afterUpdate } from 'svelte';
  import Showdown from 'showdown';
  import hljs from 'highlight.js';
  import 'highlight.js/styles/a11y-dark.css';

  const converter = new Showdown.Converter();
  export let source: string;

  let parsedMarkdown = '';
  
  function highlightCodeBlocks() {
    const codeBlocks = Array.from(document.querySelectorAll('pre code'));
    codeBlocks.forEach((block) => {
      hljs.highlightElement(block as HTMLElement);
      console.log('blcok!')
    });
  }

  $: {
    parsedMarkdown = converter.makeHtml(source)
  }
  afterUpdate(() => {
    highlightCodeBlocks()
  })
</script>

<div class='markdownDiv'>
  {@html parsedMarkdown}
</div>

<style>
  div {
    width: 95%;
    max-width: 1000px;
    margin: 0 auto;
  }
  :global(.markdownDiv pre) {
    margin: 20px 0;
  }
  :global(.markdownDiv pre code) {
    border-radius: 8px;
  }
  :global(.markdownDiv h1, .markdownDiv h2) {
    margin: 16px 0;
  }
</style>