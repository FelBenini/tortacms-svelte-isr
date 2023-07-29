<header>
  <nav>
	<h3>
    <a href="/">
      <img alt="Svelte + tortaCMS" src="/svelteplustorta.svg" />
    </a>
  </h3>
  <h3>
    <a href="/about">About</a>
  </h3>
</nav>
</header>

<style lang="scss">
	header {
		width: calc(100% - 24px);
		box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
		margin: 0px;
		height: 56px;
		position: fixed;
		display: flex;
		background-color: white;
		z-index: 99;
		padding: 6px 12px;
    & nav {
      align-items: center;
      justify-content: space-between;
      width: 100%;
      max-width: 1150px;
      margin: 0 auto;
      height: 56px;
      display: flex;
    }
    & a {
      color: rgb(31, 31, 31);
      font-weight: 300;
    }
		& img {
			height: 56px;
			filter: grayscale(1);
			transition: all ease 400ms;
			&:hover {
				filter: grayscale(0) saturate(1);
			}
		}
	}
</style>
