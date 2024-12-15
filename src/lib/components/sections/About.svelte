<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import { inview } from 'svelte-inview';
  
  let isVisible = false;
  
  const handleChange = ({ detail }) => {
    if (detail.inView) {
      isVisible = true;
    }
  };

  const aboutImage = "https://i.pinimg.com/originals/f3/d9/4c/f3d94ce409e91117dde4de2ad697f4d9.jpg";

  const experiences = [
    {
      year: '2023',
      title: 'Frontend Developer',
      company: 'Freelance',
      description: 'Working on various web development projects using modern technologies.'
    },
    {
      year: '2022',
      title: 'Web Developer Intern',
      company: 'Tech Company',
      description: 'Developed and maintained web applications using React and Node.js.'
    }
  ];

  const education = [
    {
      year: '2021 - Present',
      degree: 'Computer Science',
      school: 'Politeknik Pratama Mulia',
      description: 'Focusing on web development and software engineering.'
    }
  ];
</script>

<section 
  id="about" 
  class="min-h-screen relative overflow-hidden bg-[#1a0f2e] py-24"
  use:inview={{ unobserveOnEnter: true }}
  on:change={handleChange}
>
  <div class="mesh-gradient"></div>
  
  <div class="container mx-auto px-6 relative z-10">
    {#if isVisible}
      <div class="w-full" in:fade={{ duration: 1000 }}>
        <div class="text-center mb-16">
          <h2 
            class="text-4xl md:text-5xl font-bold mb-8"
            in:fly={{ y: -50, duration: 1000 }}
          >
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">
              About Me
            </span>
          </h2>
        </div>

        <div class="grid lg:grid-cols-2 gap-12 items-start">
          <!-- Image Section -->
          <div 
            class="relative order-2 lg:order-1"
            in:fly={{ x: -100, duration: 1000 }}
          >
            <div class="relative w-full aspect-square">
              <div class="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-2xl"></div>
              <div class="absolute inset-[2px] bg-[#1a0f2e] rounded-2xl p-4 overflow-hidden">
                <div class="relative h-full w-full">
                  <!-- Glowing orbs -->
                  <div class="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full filter blur-2xl"></div>
                  <div class="absolute bottom-0 left-0 w-32 h-32 bg-pink-500/20 rounded-full filter blur-2xl"></div>
                  
                  <!-- About Image -->
                  <div class="relative h-full w-full rounded-xl overflow-hidden">
                    <img 
                      src={aboutImage}
                      alt="About Me"
                      class="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-[#1a0f2e] via-transparent to-transparent opacity-50"></div>
                  </div>
                  
                  <!-- Animated border -->
                  <div class="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 rounded-xl opacity-20 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Content Section -->
          <div class="space-y-8 order-1 lg:order-2">
            <div 
              class="relative"
              in:fly={{ x: 100, duration: 1000 }}
            >
              <div class="space-y-6 text-violet-200">
                <p class="text-lg leading-relaxed">
                  Hi! I'm Hadzi Pamuji, a passionate Frontend Developer and student at Politeknik Pratama Mulia. 
                  I love creating beautiful and functional web experiences that push the boundaries of what's possible on the web.
                </p>
                
                <p class="text-lg leading-relaxed">
                  My journey in web development started with a curiosity about how websites work, and it has evolved into a deep passion 
                  for creating immersive digital experiences. I specialize in modern frontend technologies and always strive to learn 
                  and implement the latest web development trends.
                </p>

                <!-- Experience Timeline -->
                <div class="mt-12">
                  <h3 class="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">
                    Experience
                  </h3>
                  <div class="space-y-6">
                    {#each experiences as exp}
                      <div class="relative pl-8 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-gradient-to-r before:from-pink-400 before:to-purple-500 before:rounded-full">
                        <div class="text-sm text-pink-400">{exp.year}</div>
                        <div class="font-semibold text-white">{exp.title}</div>
                        <div class="text-violet-300">{exp.company}</div>
                        <div class="text-sm text-violet-200 mt-1">{exp.description}</div>
                      </div>
                    {/each}
                  </div>
                </div>

                <!-- Education Timeline -->
                <div class="mt-12">
                  <h3 class="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">
                    Education
                  </h3>
                  <div class="space-y-6">
                    {#each education as edu}
                      <div class="relative pl-8 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-gradient-to-r before:from-pink-400 before:to-purple-500 before:rounded-full">
                        <div class="text-sm text-pink-400">{edu.year}</div>
                        <div class="font-semibold text-white">{edu.degree}</div>
                        <div class="text-violet-300">{edu.school}</div>
                        <div class="text-sm text-violet-200 mt-1">{edu.description}</div>
                      </div>
                    {/each}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    {/if}
  </div>
</section>

<style>
  .mesh-gradient {
    position: absolute;
    inset: 0;
    background: 
      radial-gradient(circle at 0% 0%, rgba(244,114,182,0.15) 0%, transparent 50%),
      radial-gradient(circle at 100% 0%, rgba(168,85,247,0.15) 0%, transparent 50%),
      radial-gradient(circle at 100% 100%, rgba(244,114,182,0.15) 0%, transparent 50%),
      radial-gradient(circle at 0% 100%, rgba(168,85,247,0.15) 0%, transparent 50%);
    filter: blur(60px);
    mix-blend-mode: screen;
    animation: meshMove 20s ease infinite;
  }

  @keyframes meshMove {
    0%, 100% {
      transform: translate(0, 0) scale(1);
    }
    25% {
      transform: translate(2%, -2%) scale(1.1);
    }
    50% {
      transform: translate(0, 0) scale(1);
    }
    75% {
      transform: translate(-2%, 2%) scale(1.1);
    }
  }
</style> 