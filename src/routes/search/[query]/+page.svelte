<script lang="ts">
	import Pagination from "../../../components/pagination.svelte";
  import Postcard from "../../../components/postcard.svelte";
	export let data;
</script>

<section>
  <h1>Searching for {data.query} <img src='/timeicon.svg' alt='Clock icon' /></h1>
  <div>
  {#if data.posts.length < 1}
    <h1 style="text-align: center;">Search returned no Results</h1>
  {/if}
  {#each data.posts as post}
	  <Postcard url={post.postUrl} title={post.title} img={post.backgroundImage} />
  {/each}
</div>
<Pagination numOfPages={data.pages}/>
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
