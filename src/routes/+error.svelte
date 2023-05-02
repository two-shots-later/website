<script>
    import { page } from "$app/stores";
    import "../app.css";
</script>


<div class="flex flex-col gap-24 h-[100vh] justify-center">
    <a href="/games">
		<div class="flex place-content-center ">
			<img
				src="/branding/tsl_logo.png"
				alt="two shots later logo"
				width="450"
				height="450"
				class="mt-6"
			/>
		</div>
	</a>
    <div class="flex justify-center items-center h-screen bg-blue-600">
        <h1 class="text-6xl font-titillium text-logger dark:text-silver-dollar font-bold text-white lg:text-6xl">
            <span class="text-fiery-orange">Oops!</span> {$page.error.message}.
        </h1>
    </div>
    <a href="/games">
        <p class="text-center font-titillium text-3xl text-logger dark:text-silver-dollar hover:text-fiery-orange mt-6">
            Back to site
        </p>
    </a>
</div>