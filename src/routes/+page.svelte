<nav class="flex border-b-2 px-2 items-center justify-between">
    <enhanced:img src="$lib/assets/coffee.png" alt="Logo" class="w-16" />
    <ul class="flex gap-1 text-3xl">
        <li><a class="px-4 py-12 flex justify-center items-center relative font-bold cursor-pointer link" href="/">Home</a></li>
        <li><a class="px-4 py-12 flex justify-center items-center relative font-bold cursor-pointer link" href="/products">Produtos</a></li>
        <li><a class="px-4 py-12 flex justify-center items-center relative font-bold cursor-pointer link" href="/contact">Contato</a></li>
    </ul>
</nav>

<style>
    @reference "../app.css";
    .link::before {
        @apply bg-gray-500 content-[''] w-0.5 h-full absolute transform skew-20 left-0 top-0 bottom-0;
    }
    .link::after {
        @apply bg-red-500 content-[''] h-0.5 w-0 absolute transform translate-x-[-50%] transition-[width] duration-500 left-[50%] mt-8;
    }

    .link:hover .link:focus {
        @apply outline-none;
    }
    .link:hover::after .link:focus::after {
        width: calc(100% - 60px);
    }
</style>