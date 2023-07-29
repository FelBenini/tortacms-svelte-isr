<script lang='ts'>
  import { page } from '$app/stores'
  export let numOfPages: number;
  let actualPage = $page.url.searchParams.get('page') || 1

  function handlePageChange(num: number) {
    actualPage = num
  }
</script>

<div>
{#each {length: numOfPages} as _, i}
    {#if i + 1 == actualPage}
      <p>{i + 1}</p>
    {/if}
    {#if i + 1 != actualPage}
      <a on:click={() => handlePageChange(i + 1)} href={`./?page=${i + 1}`}>{i + 1}</a>
    {/if}
{/each}
</div>

<style lang='scss'>
  div {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 6px;
    & p {
      background-color: rgb(211, 77, 0);
      aspect-ratio: 1/1;
      width: 20px;
      text-align: center;
      padding: 4px;
      border-radius: 4px;
      color: white;
    }
    & a {
      color: rgb(211, 77, 0);
      background-color: rgba(211, 77, 0, 0.26);
      aspect-ratio: 1/1;
      width: 20px;
      text-align: center;
      padding: 4px;
      border-radius: 4px;
    }
  }
</style>