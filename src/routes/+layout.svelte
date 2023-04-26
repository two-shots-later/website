<script>
	import "../app.css";

//////////////////////////////////////////////////////////////////////////////////////////////////////
// NAV BAR SCRIPT STUFF
//////////////////////////////////////////////////////////////////////////////////////////////////////
	import {page} from '$app/stores';

	export let navGamesColor;
	export let navAboutColor;
	export let navBlogColor;
	export let navContactColor;
	export const urls = new Map([["/games", ""], ["/blog", ""], ["/about", ""]])

	$: {
		let currentPath = $page.url.pathname
		
		urls.forEach(function(_color, url) {
			if (currentPath.startsWith(url)) {
				urls.set(url, "text-feiryOrange")
			} else {
				urls.set(url, "text-espresso")
			}
		})

		navGamesColor = urls.get("/games")
		navAboutColor = urls.get("/about")
		navBlogColor = urls.get("/blog")
		navContactColor = urls.get("/contact")
	}
//////////////////////////////////////////////////////////////////////////////////////////////////////
</script>

<!-- logo and navigation bar, applied to every page -->
<a href="/games">
	<div class="flex place-content-center">
		<img
			src="branding/transparent_dark_text_tsl_gun.png"
			alt="two shots later logo"
			width="225"
			height="225"
			class="child mt-6"
		/>
	</div>
</a>

<div class="flex place-content-center my-5">
	<ul>
		<li class="mr-6 inline">
			<a href="/games" class="color: {navGamesColor} hover:text-feiryOrange text-2xl">Games</a>
		</li>
		<li class="mr-6 inline">
			<a href="/blog" class="color: {navBlogColor} hover:text-feiryOrange text-2xl">Blog</a>
		</li>
		<li class="mr-6 inline">
			<a href="/about" class="color: {navAboutColor} hover:text-feiryOrange text-2xl">About</a>
		</li>
	</ul>
</div>

<main>
	<slot />
</main>
