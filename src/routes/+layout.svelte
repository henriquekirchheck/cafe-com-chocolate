<script lang="ts">
	import NavBar from '$lib/components/NavBar.svelte';
	import '../app.css';
	import type { LayoutProps } from './$types';
	let { children, data }: LayoutProps = $props();
</script>

<NavBar pathname={data.pathname}/>

{@render children()}
