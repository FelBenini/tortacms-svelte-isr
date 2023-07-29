<script lang="ts">
	import { goto } from '$app/navigation';
	let query = '';
	function redirect(e: Event) {
    e.preventDefault()
    goto(`/search/${query}`)
  }
</script>

<header>
	<nav>
		<h3>
			<a href="/">
				<img alt="Svelte + tortaCMS" src="/svelteplustorta.svg" />
			</a>
		</h3>
		<span>
      <form on:submit={redirect}>
        <input type="search" placeholder="Search here..." on:input={(e) => query = e.currentTarget.value} />
      </form>
			<h3>
				<a href="/About">About</a>
			</h3>
		</span>
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
    & span {
      display: flex;
      height: 100%;
      align-items: center;
      & form {
        margin: 20px;
        & input {
          padding: 12px;
          border-radius: 8px;
          border: 1px solid rgb(31, 31, 31);
          &:focus {
            outline: 1px solid orange;
          }
        }
      }
    }
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
