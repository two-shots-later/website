<script>
	import "../app.css";

//////////////////////////////////////////////////////////////////////////////////////////////////////
// NAV BAR SCRIPT STUFF
//////////////////////////////////////////////////////////////////////////////////////////////////////
	import {page} from '$app/stores';
	export let black = "text-black";
	export let selectedOrange = "text-orange-700";

	export let navGamesColor;
	export let navAboutColor;
	export let navBlogColor;
	export let navContactColor;
	export const urls = new Map([["/games", "text-black"], ["/about", "text-black"], ["/blog", "text-black"], ["/contact", "text-black"]])

	$: {
		let currentPath = $page.url.pathname
		
		urls.forEach(function(_color, url) {
			if (currentPath.startsWith(url)) {
				urls.set(url, selectedOrange)
			} else {
				urls.set(url, black)
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
<div class="flex place-content-center">
	<img
		src="branding/text_clear_tsl_gun.png"
		alt="two shots later logo"
		width="225"
		height="225"
		class="child"
	/>
</div>
<div class="flex place-content-center mt-4">
	<ul>
		<li class="mr-6 inline">
			<a href="/games" class="color: {navGamesColor} hover:text-orange-500">Games</a>
		</li>
		<li class="mr-6 inline">
			<a href="/about" class="color: {navAboutColor} hover:text-orange-500">About</a>
		</li>
		<li class="mr-6 inline">
			<a href="/blog" class="color: {navBlogColor} hover:text-orange-500">Blog</a>
		</li>
		<li class="mr-6 inline">
			<a href="/contact" class="color: {navContactColor} hover:text-orange-500">Contact</a>
		</li>
	</ul>
</div>

<main>
	<slot />
</main>
