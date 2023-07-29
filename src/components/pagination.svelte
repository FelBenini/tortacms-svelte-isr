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
    margin-top: 12px;
    align-self: flex-end;
    gap: 12px;
    & p {
      background-color: rgb(211, 77, 0);
      aspect-ratio: 1/1;
      width: 28px;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 4px;
      border-radius: 4px;
      color: white;
      font-weight: 800;
    }
    & a {
      color: rgb(172, 63, 0);
      background-color: rgba(211, 77, 0, 0.158);
      aspect-ratio: 1/1;
      width: 28px;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 4px;
      font-weight: 800;
      text-decoration: none;
      border: 1px solid rgba(172, 63, 0, 0.288);
      border-radius: 4px;
    }
  }
</style>