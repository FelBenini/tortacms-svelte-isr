<script lang='ts'>
  import Markdown from '../../../../../components/markdown.svelte';
  export let data;
  const source = data.content
</script>

<h1 class="bigTitle">{data.title}</h1>
<Markdown {source}/>

<style>
  .bigTitle {
    max-width: 1000px;
    margin: 2.5rem auto;
    width: 95%;
    font-size: 3rem;
  }
</style>