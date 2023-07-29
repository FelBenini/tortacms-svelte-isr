<script>
	import Header from "../components/header.svelte";

</script>
<Header />
<slot />

<style global >
  @import url('https://fonts.googleapis.com/css2?family=REM:wght@300;500;700&display=swap');
  :global(*) {
    font-family: 'REM', sans-serif;
  }
  :global(p) {
    font-weight: 300;
  }
  :global(h1) {
    font-weight: 500;
  }
</style>