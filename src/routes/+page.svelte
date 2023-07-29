<script lang="ts">
	export let data;
</script>

<section>
  <h1>Welcome to SvelteKit</h1>
  <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
  {#each data.posts as post}
	  <a href={post.postUrl}>{post.title}</a>
  {/each}
</section>

<style>
	section {
		width: 92%;
		max-width: 1050px;
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
