<script lang="ts">
  import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-svelte';
  
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/HadZzz',
      ariaLabel: 'Visit my GitHub profile'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://id.linkedin.com/in/hadzi-pamuji-438104215',
      ariaLabel: 'Visit my LinkedIn profile'
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hadzipamuji5@gmail.com',
      href: 'mailto:hadzipamuji5@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+62 858-7612-0167',
      href: 'tel:+6285876120167'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Karangasem,Bulu,Sukoharjo, Indonesia',
      href: 'https://maps.app.goo.gl/6wRVNhQpxSdLBgjn9'
    }
  ];
</script>

<footer class="relative bg-[#1a0f2e] border-t border-gray-800/30 overflow-hidden">
  <div class="mesh-gradient"></div>
  
  <div class="container mx-auto px-6 py-12 relative z-10">
    <div class="grid md:grid-cols-3 gap-12">
      <!-- Logo & Description -->
      <div class="space-y-6">
        <button class="text-2xl font-bold" aria-label="Logo">
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">
            Hadzi
          </span>
        </button>
        <p class="text-violet-200">
          Frontend Developer passionate about creating beautiful and functional web experiences.
        </p>
        <div class="flex gap-4">
          {#each socialLinks as link}
            <a 
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              class="group relative w-12 h-12 flex items-center justify-center"
              aria-label={link.ariaLabel}
            >
              <div class="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500 rounded-xl opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="relative w-full h-full bg-[#1a0f2e] rounded-xl border border-gray-800/50 flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
                <svelte:component 
                  this={link.icon}
                  class="w-6 h-6 text-gray-300 group-hover:text-white transition-colors duration-300"
                />
              </div>
            </a>
          {/each}
        </div>
      </div>
      
      <!-- Quick Links -->
      <div class="space-y-6">
        <h3 class="text-xl font-semibold text-gray-300">Quick Links</h3>
        <nav class="flex flex-col space-y-4">
          {#each quickLinks as link}
            <a 
              href={link.href}
              class="text-violet-200 hover:text-white transition-colors duration-300"
            >
              {link.label}
            </a>
          {/each}
        </nav>
      </div>
      
      <!-- Contact Info -->
      <div class="space-y-6">
        <h3 class="text-xl font-semibold text-gray-300">Contact Info</h3>
        <div class="space-y-4">
          {#each contactInfo as info}
            <a 
              href={info.href}
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-4 text-violet-200 hover:text-white transition-colors duration-300"
            >
              <div class="relative w-10 h-10">
                <div class="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-lg"></div>
                <div class="relative w-full h-full flex items-center justify-center">
                  <svelte:component 
                    this={info.icon}
                    class="w-5 h-5"
                  />
                </div>
              </div>
              <div>
                <p class="font-semibold">{info.label}</p>
                <p class="text-sm text-gray-400">{info.value}</p>
              </div>
            </a>
          {/each}
        </div>
      </div>
    </div>
    
    <!-- Copyright -->
    <div class="mt-12 pt-8 border-t border-gray-800/30 text-center text-violet-200">
      <p>&copy; {currentYear} Hadzi. All rights reserved.</p>
    </div>
  </div>
</footer>

<style>
  .mesh-gradient {
    position: absolute;
    inset: 0;
    background: 
      radial-gradient(circle at 0% 0%, rgba(244,114,182,0.15) 0%, transparent 70%),
      radial-gradient(circle at 100% 0%, rgba(168,85,247,0.15) 0%, transparent 50%),
      radial-gradient(circle at 100% 100%, rgba(244,114,182,0.15) 0%, transparent 50%),
      radial-gradient(circle at 0% 100%, rgba(168,85,247,0.15) 0%, transparent 50%);
    filter: blur(60px);
    mix-blend-mode: screen;
  }
</style> 