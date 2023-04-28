<script>
	import "../../app.css";

//////////////////////////////////////////////////////////////////////////////////////////////////////
// NAV BAR SCRIPT STUFF
//////////////////////////////////////////////////////////////////////////////////////////////////////
	import {page} from '$app/stores';

	let headerClasses = "font-titillium text-3xl";
	let navGamesClasses = '';
	let navBlogClasses = '';
	let navAboutClasses = '';

	$: {
		let currentPath = $page.url.pathname;

		navGamesClasses = currentPath.startsWith('/games') ? 'text-fiery-orange' : 'text-logger dark:text-silverDollar hover:text-fiery-orange'
		navBlogClasses = currentPath.startsWith('/blog') ? 'text-fiery-orange' : 'text-logger dark:text-silverDollar hover:text-fiery-orange'
		navAboutClasses = currentPath.startsWith('/about') ? 'text-fiery-orange' : 'text-logger dark:text-silverDollar hover:text-fiery-orange'
	}

	console.log(navGamesClasses)
//////////////////////////////////////////////////////////////////////////////////////////////////////
</script>

<!-- logo and navigation bar, applied to every page -->
<a href="/games">
	<div class="flex place-content-center ">
		<img
			src="branding/tsl_logo.png"
			alt="two shots later logo"
			width="450"
			height="450"
			class="mt-6"
		/>
	</div>
</a>

<div class="flex place-content-center my-8 gap-10">
	<a href="/games" class="{navGamesClasses} {headerClasses}">Games</a>
	<a href="/blog" class="{headerClasses} {navBlogClasses}">Dev Logs</a>
	<a href="/about" class="{headerClasses} {navAboutClasses}">About</a>
</div>

<style scoped>
	.aura {
		box-shadow: 0px 0px 250px 13px rgba(177, 69, 21, 0.25);
	}
  </style>

<main>
	<slot />
</main>
