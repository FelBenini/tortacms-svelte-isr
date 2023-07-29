<script lang="ts">
	import Postcard from "../components/postcard.svelte";

	export let data;
</script>

<section>
  <h1>Latest Posts <img src='/timeicon.svg' alt='Clock icon' /></h1>
  <div>
  {#each data.posts as post}
	  <Postcard url={post.postUrl} title={post.title} img={post.backgroundImage} />
  {/each}
</div>
</section>

<style lang='scss'>
	section {
    & h1 {
      width: 100%;
      font-weight: 300;
      font-size: 2.3rem;
      & img {
        margin-bottom: -8px;
      }
    }
		width: 92%;
		max-width: 1150px;
		margin: 0 auto;
		box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
		min-height: calc(100dvh - 96px);
		margin-top: -56px;
		padding: 0px 2%;
		padding-top: 80px;
		padding-bottom: 16px;
		background-color: white;
    & div {
      gap: 14px;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-wrap: wrap;
      width: 100%;
    }
	}
</style>
