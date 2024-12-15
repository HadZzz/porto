<script>
	import '../app.css';
	import Navbar from '$lib/components/layout/Navbar.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
</script>

<div class="min-h-screen bg-[#1a0f2e] text-white">
	<Navbar />
	<main>
		<slot />
	</main>
	<Footer />
</div>

<style>
	:global(html) {
		scroll-behavior: smooth;
		scroll-padding-top: 5rem;
	}
	
	:global(body) {
		background-color: #1a0f2e;
	}
</style>
