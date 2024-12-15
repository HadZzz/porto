<script lang="ts">
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  
  let isScrolled = false;
  let isMobileMenuOpen = false;
  
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' }
  ];

  function handleScroll() {
    isScrolled = window.scrollY > 50;
  }

  function toggleMobileMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
  }

  onMount(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
</script>

<nav 
  class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {isScrolled ? 'bg-[#1a0f2e]/80 backdrop-blur-xl border-b border-gray-800/30' : ''}"
>
  <div class="container mx-auto px-6">
    <div class="flex items-center justify-between h-20">
      <!-- Logo -->
      <a href="#home" class="text-2xl font-bold">
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">
          Hadzi
        </span>
      </a>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center space-x-8">
        {#each navItems as item}
          <a 
            href={item.href} 
            class="relative group py-2"
          >
            <span class="relative text-gray-300 hover:text-white transition-colors duration-300">
              {item.label}
              <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
            </span>
          </a>
        {/each}
      </div>

      <!-- Mobile Menu Button -->
      <button 
        class="md:hidden relative w-10 h-10 flex items-center justify-center"
        on:click={toggleMobileMenu}
        aria-label="Toggle mobile menu"
      >
        <div class="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
        <div class="relative w-full h-full rounded-xl flex items-center justify-center">
          <svg 
            class="w-6 h-6 text-gray-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            {#if isMobileMenuOpen}
              <path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M6 18L18 6M6 6l12 12"
              />
            {:else}
              <path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M4 6h16M4 12h16m-7 6h7"
              />
            {/if}
          </svg>
        </div>
      </button>
    </div>
  </div>

  <!-- Mobile Menu -->
  {#if isMobileMenuOpen}
    <div 
      class="md:hidden absolute top-full left-0 right-0 bg-[#1a0f2e]/95 backdrop-blur-xl border-t border-gray-800/30"
      transition:fade={{ duration: 200 }}
    >
      <div class="container mx-auto px-6 py-4">
        <div class="flex flex-col space-y-4">
          {#each navItems as item}
            <a 
              href={item.href} 
              class="text-gray-300 hover:text-white transition-colors duration-300"
              on:click={() => isMobileMenuOpen = false}
            >
              {item.label}
            </a>
          {/each}
        </div>
      </div>
    </div>
  {/if}
</nav>

<style>
  nav {
    transition: all 0.3s ease;
  }
</style> 