<script lang='ts'>
  import Markdown from '../../../../../components/markdown.svelte';
  export let data;
  const source = data.content
</script>

<svelte:head>
  <title>{data.title}</title>
  <meta name="description" content={data.summary} />
  <meta
  name="robots"
  content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
  />
</svelte:head>

<section>
<h1 class="bigTitle">{data.title}</h1>

{#if data.backgroundImage}
  <img id='bgImg' src={data.backgroundImage} alt=''/>
{/if}

<Markdown {source}/>
</section>

<style>
  .bigTitle {
    margin: 2.3rem auto;
    width: 100%;
    font-size: 2.5rem;
  }

  #bgImg {
    max-width: 100%;
    margin: 0 auto;
    margin-top: -0.6rem;
    display: block;
    margin-bottom: 2.3rem;
  }

  section {
    width: 92%;
    max-width: 1150px;
    margin: 0 auto;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    min-height: calc(100dvh - 72px);
    margin-top: -56px;
    padding: 0px 2%;
    padding-top: 56px;
    padding-bottom: 16px;
    background-color: white;
  }
</style>