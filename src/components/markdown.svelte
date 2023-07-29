<script lang='ts'>
  import { afterUpdate } from 'svelte';
  import Prism from 'prismjs';
  import Showdown from 'showdown';
  import 'prismjs/components/prism-javascript';
  import 'prismjs/components/prism-jsx';
  import 'prismjs/components/prism-sql';
  import 'prismjs/components/prism-typescript';
  import './syntaxhighlight.css'

  const converter = new Showdown.Converter();
  export let source: string;

  let parsedMarkdown = '';

  $: {
    parsedMarkdown = converter.makeHtml(source)
  }
  afterUpdate(() => {
    Prism.highlightAll()
  })
</script>

<div class='markdownDiv'>
  {@html parsedMarkdown}
</div>

<style>
  div {
    width: 100%;
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