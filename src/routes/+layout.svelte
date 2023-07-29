<script>
	import Header from '../components/header.svelte';
	import NProgress from 'nprogress';
	import { navigating } from '$app/stores';

	import 'nprogress/nprogress.css';

	NProgress.configure({
		minimum: 0.16,
    showSpinner: false
	});

	$: {
		if ($navigating) {
			NProgress.start();
		}
		if (!$navigating) {
			NProgress.done();
		}
	}
</script>

<body>
	<Header />
	<main>
		<slot />
	</main>
</body>

<style global>
	@import url('https://fonts.googleapis.com/css2?family=REM:wght@300;500;700&display=swap');

	main {
		padding-top: 56px;
	}
	:global(*) {
		font-family: 'REM', sans-serif;
		scrollbar-width: thin;
	}
	:global(p) {
		font-weight: 300;
	}
	:global(h1) {
		font-weight: 500;
	}

  :global(li) {
    margin: 16px 0px;
  }
  :global(a) {
    color: #c04600;
  }
	:global(body) {
		margin: 0;
		min-height: 100%;
	}
	:global(html) {
		min-height: 100%;
    font-size: 112.5%;
	}

  :global(#nprogress .bar) {
    background: rgb(224, 90, 13) !important;
  }

</style>
