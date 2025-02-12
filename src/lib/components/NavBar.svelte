<script lang="ts">
  const { pathname }: { pathname: string } = $props();

  const pages = [
    { path: '/', name: 'Home' },
    { path: '/products', name: 'Products' },
    { path: '/contact', name: 'Contato' }
  ];
</script>

<nav class="flex items-center justify-between border-b-2">
  <div class="px-4">
    <enhanced:img src="$lib/assets/coffee.png" alt="Logo" class="w-12" />
  </div>
  <ul class="flex text-3xl">
    {#each pages as page (page.path)}
      {@const active = page.path === pathname}
      <li>
        <a
          class={[
            'relative flex cursor-pointer items-center justify-center px-6 py-6 font-bold',
            active && 'clip bg-amber-700 text-white'
          ]}
          href={page.path}
          aria-current={active}
        >
          {page.name}
        </a>
      </li>
    {/each}
  </ul>
</nav>

<style>
  .clip {
    clip-path: polygon(20% 0, 100% 0%, 80% 100%, 0% 100%);
  }
</style>
