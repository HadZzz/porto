<svelte:head>
  <title>Hadzi - Frontend Developer Portfolio</title>
  <meta name="description" content="Frontend Developer specializing in building modern web applications with SvelteKit, React, and other cutting-edge technologies." />
  <meta name="keywords" content="frontend developer, web development, SvelteKit, React, portfolio" />
  <meta name="author" content="Hadzi" />
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://hadzi.dev/" />
  <meta property="og:title" content="Hadzi - Frontend Developer Portfolio" />
  <meta property="og:description" content="Frontend Developer specializing in building modern web applications with SvelteKit, React, and other cutting-edge technologies." />
  <meta property="og:image" content="https://hadzi.dev/og-image.jpg" />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://hadzi.dev/" />
  <meta property="twitter:title" content="Hadzi - Frontend Developer Portfolio" />
  <meta property="twitter:description" content="Frontend Developer specializing in building modern web applications with SvelteKit, React, and other cutting-edge technologies." />
  <meta property="twitter:image" content="https://hadzi.dev/twitter-image.jpg" />
  
  <!-- Favicon -->
  <link rel="icon" type="image/png" href="/favicon.png" />
  
  <!-- Theme Color -->
  <meta name="theme-color" content="#1a0f2e" />
  
  <!-- Preload critical fonts -->
  <link 
    rel="preload" 
    href="/fonts/inter-var.woff2" 
    as="font" 
    type="font/woff2" 
    crossorigin="anonymous"
  />
  
  <!-- Preload critical images -->
  <link 
    rel="preload" 
    href="https://images.unsplash.com/photo-1607743386760-88ac62b89b8a?q=80&w=2940&auto=format&fit=crop" 
    as="image"
  />
</svelte:head>

<script lang="ts">
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import { Github, Linkedin, Layout, Code, Palette, Check, Quote, Calendar, Clock, ArrowRight, FileText, Download } from 'lucide-svelte';

  // Hero section variables
  let isVisible = false;
  let mouseX = 0;
  let mouseY = 0;
  let rotateX = 0;
  let rotateY = 0;
  
  // Typewriter effect variables
  let displayedText1 = '';
  let displayedText2 = '';
  let displayedRole = '';
  const fullText1 = 'Hadzi';
  const fullText2 = 'Pamuji';
  const roleText = 'Frontend Developer';
  let currentIndex1 = 0;
  let currentIndex2 = 0;
  let roleIndex = 0;
  let isDeleting = false;
  let showCursor = true;

  function typeText() {
    const typeInterval = setInterval(() => {
      if (!isDeleting) {
        if (currentIndex1 < fullText1.length) {
          displayedText1 += fullText1[currentIndex1];
          currentIndex1++;
        } else if (currentIndex2 < fullText2.length) {
          displayedText2 += fullText2[currentIndex2];
          currentIndex2++;
        } else if (roleIndex < roleText.length) {
          displayedRole += roleText[roleIndex];
          roleIndex++;
        } else {
          setTimeout(() => {
            isDeleting = true;
          }, 2000);
        }
      } else {
        if (roleIndex > 0) {
          displayedRole = roleText.substring(0, roleIndex - 1);
          roleIndex--;
        } else if (currentIndex2 > 0) {
          displayedText2 = fullText2.substring(0, currentIndex2 - 1);
          currentIndex2--;
        } else if (currentIndex1 > 0) {
          displayedText1 = fullText1.substring(0, currentIndex1 - 1);
          currentIndex1--;
        } else {
          isDeleting = false;
        }
      }
    }, isDeleting ? 50 : 150);
    
    const cursorInterval = setInterval(() => {
      showCursor = !showCursor;
    }, 500);
    
    return () => {
      clearInterval(typeInterval);
      clearInterval(cursorInterval);
    };
  }

  function handleMouseMove(event: MouseEvent) {
    mouseX = event.clientX;
    mouseY = event.clientY;
    
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    rotateX = (mouseY - centerY) * 0.01;
    rotateY = (mouseX - centerX) * 0.01;
  }

  onMount(() => {
    isVisible = true;
    return typeText();
  });

  // Lazy load images
  const loadImage = (src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = src;
    });
  };

  // Preload critical images
  onMount(async () => {
    try {
      await Promise.all([
        loadImage("https://images.unsplash.com/photo-1607743386760-88ac62b89b8a?q=80&w=2940&auto=format&fit=crop"),
        loadImage("https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2832&auto=format&fit=crop"),
        loadImage("https://images.unsplash.com/photo-1540350394557-8d14678e7f91?q=80&w=2832&auto=format&fit=crop"),
        loadImage("https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=2940&auto=format&fit=crop")
      ]);
    } catch (error) {
      console.error('Failed to preload images:', error);
    }
  });

  // Use optimized local images instead of external URLs
  const heroImage = "https://images.unsplash.com/photo-1607743386760-88ac62b89b8a?q=80&w=2940&auto=format&fit=crop";
  
  const projects = [
    {
      title: "E-Commerce Website",
      description: "A full-featured e-commerce platform built with SvelteKit and Tailwind CSS. Features include product catalog, shopping cart, user authentication, and payment integration.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2832&auto=format&fit=crop",
      technologies: ["SvelteKit", "Tailwind CSS", "Stripe", "Supabase"],
      demoUrl: "https://ecommerce-demo.com",
      githubUrl: "https://github.com/username/ecommerce"
    },
    {
      title: "Task Management App",
      description: "A productivity app for managing tasks and projects. Includes features like drag-and-drop task organization, due dates, and team collaboration.",
      image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?q=80&w=2832&auto=format&fit=crop",
      technologies: ["React", "TypeScript", "Firebase", "Material-UI"],
      demoUrl: "https://taskapp-demo.com",
      githubUrl: "https://github.com/username/taskapp"
    },
    {
      title: "Weather Dashboard",
      description: "A weather application that provides real-time weather data and forecasts. Uses OpenWeather API and features a clean, modern interface.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=2940&auto=format&fit=crop",
      technologies: ["JavaScript", "API Integration", "CSS3", "HTML5"],
      demoUrl: "https://weather-demo.com",
      githubUrl: "https://github.com/username/weather"
    }
  ];

  const services = [
    {
      title: "Web Development",
      description: "Building modern, responsive websites and web applications using the latest technologies.",
      icon: Code,
      features: [
        "Custom Website Development",
        "Frontend Development",
        "Responsive Design",
        "Performance Optimization"
      ]
    },
    {
      title: "UI/UX Design",
      description: "Creating beautiful and intuitive user interfaces with great user experience.",
      icon: Layout,
      features: [
        "User Interface Design",
        "User Experience Design",
        "Wireframing & Prototyping",
        "Design Systems"
      ]
    },
    {
      title: "Creative Design",
      description: "Designing visually appealing graphics and branding materials.",
      icon: Palette,
      features: [
        "Brand Identity Design",
        "Logo Design",
        "Social Media Graphics",
        "Marketing Materials"
      ]
    }
  ];

  const experiences = [
    {
      title: "Frontend Developer",
      company: "Freelance",
      period: "2023 - Present",
      description: "Working on various web development projects, focusing on creating responsive and user-friendly interfaces using modern technologies.",
      skills: ["React", "SvelteKit", "Tailwind CSS", "TypeScript"]
    },
    {
      title: "Web Developer Intern",
      company: "Tech Company",
      period: "2022 - 2023",
      description: "Developed and maintained web applications, collaborated with senior developers, and learned industry best practices.",
      skills: ["JavaScript", "HTML", "CSS", "Git"]
    },
    {
      title: "Student Developer",
      company: "University Projects",
      period: "2021 - 2022",
      description: "Worked on various academic projects, developing fundamental programming and problem-solving skills.",
      skills: ["Java", "Python", "Web Development"]
    }
  ];

  const education = [
    {
      degree: "Computer Science",
      school: "Politeknik Pratama Mulia",
      period: "2021 - Present",
      description: "Studying computer science with a focus on web development and software engineering.",
      achievements: [
        "Dean's List for Academic Excellence",
        "Lead Developer for University Project",
        "Winner of Campus Coding Competition"
      ]
    }
  ];

  const certifications = [
    {
      title: "Frontend Web Development",
      issuer: "Udemy",
      date: "2023",
      description: "Comprehensive course covering modern frontend development technologies and best practices.",
      skills: ["HTML5", "CSS3", "JavaScript", "React"],
      credentialUrl: "https://udemy.com/certificate/123"
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "2022",
      description: "Certification in responsive web design principles and implementation.",
      skills: ["HTML", "CSS", "Responsive Design", "Flexbox", "Grid"],
      credentialUrl: "https://freecodecamp.org/certification/123"
    },
    {
      title: "JavaScript Algorithms",
      issuer: "HackerRank",
      date: "2022",
      description: "Advanced certification in JavaScript algorithms and data structures.",
      skills: ["JavaScript", "Algorithms", "Data Structures"],
      credentialUrl: "https://hackerrank.com/certificates/123"
    }
  ];

  const testimonials = [
    {
      content: "Working with Hadzi was a great experience. His attention to detail and creative solutions helped bring our project to life.",
      name: "John Doe",
      position: "Project Manager",
      avatar: "https://i.pravatar.cc/150?img=1"
    },
    {
      content: "Hadzi's technical skills and problem-solving abilities are impressive. He delivered our website ahead of schedule.",
      name: "Jane Smith",
      position: "CEO",
      avatar: "https://i.pravatar.cc/150?img=2"
    },
    {
      content: "A talented developer who brings both technical expertise and creative flair to every project.",
      name: "Mike Johnson",
      position: "Tech Lead",
      avatar: "https://i.pravatar.cc/150?img=3"
    }
  ];

  const blogPosts = [
    {
      title: "Membangun Website Modern dengan SvelteKit dan TailwindCSS",
      excerpt: "Panduan lengkap tentang cara membangun website modern menggunakan SvelteKit dan TailwindCSS. Dari setup awal hingga deployment, termasuk best practices dan optimasi performa.",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=2874&auto=format&fit=crop",
      category: "Tutorial",
      date: "Jan 15, 2024",
      readTime: "10 min read",
      tags: ["SvelteKit", "TailwindCSS", "Web Development"],
      url: "/blog/membangun-website-dengan-sveltekit",
      content: `
        SvelteKit adalah framework yang sangat powerful untuk membangun website modern. Dalam artikel ini, kita akan membahas:

        1. Kenapa memilih SvelteKit?
        - Performa yang sangat cepat
        - Bundle size yang kecil
        - Developer experience yang luar biasa
        - Server-side rendering built-in

        2. Setup Project
        - Instalasi SvelteKit
        - Konfigurasi TailwindCSS
        - Struktur folder yang optimal

        3. Fitur-fitur Utama
        - Routing
        - Data fetching
        - State management
        - Animations

        4. Best Practices
        - Code splitting
        - Image optimization
        - SEO optimization
        - Performance optimization
      `
    },
    {
      title: "Tips dan Trik Menjadi Frontend Developer yang Handal",
      excerpt: "Kumpulan tips dan trik penting yang perlu dikuasai untuk menjadi frontend developer yang handal. Dari fundamental hingga advanced techniques.",
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?q=80&w=2940&auto=format&fit=crop",
      category: "Career",
      date: "Jan 10, 2024",
      readTime: "8 min read",
      tags: ["Career", "Frontend", "Web Development"],
      url: "/blog/tips-frontend-developer",
      content: `
        Menjadi frontend developer yang handal membutuhkan lebih dari sekadar coding skills. Artikel ini akan membahas:

        1. Technical Skills
        - HTML, CSS, dan JavaScript fundamental
        - Modern frameworks (React, Vue, Svelte)
        - Version control dengan Git
        - Build tools dan bundlers

        2. Soft Skills
        - Problem solving
        - Time management
        - Communication skills
        - Team collaboration

        3. Best Practices
        - Clean code principles
        - Responsive design
        - Cross-browser compatibility
        - Performance optimization

        4. Learning Path
        - Resources terbaik untuk belajar
        - Project portfolio
        - Interview preparation
        - Career growth
      `
    },
    {
      title: "Optimasi Performa Website Modern",
      excerpt: "Panduan lengkap tentang cara mengoptimasi performa website modern untuk pengalaman pengguna yang lebih baik dan SEO yang optimal.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2815&auto=format&fit=crop",
      category: "Performance",
      date: "Jan 5, 2024",
      readTime: "12 min read",
      tags: ["Performance", "Optimization", "Web Development"],
      url: "/blog/optimasi-performa-website",
      content: `
        Performa website adalah kunci utama kesuksesan sebuah project. Mari kita bahas cara mengoptimalkannya:

        1. Core Web Vitals
        - Largest Contentful Paint (LCP)
        - First Input Delay (FID)
        - Cumulative Layout Shift (CLS)

        2. Image Optimization
        - Format selection (WebP, AVIF)
        - Lazy loading
        - Responsive images
        - Image CDN

        3. Code Optimization
        - Code splitting
        - Tree shaking
        - Bundle size optimization
        - Minification

        4. Caching Strategies
        - Browser caching
        - Service workers
        - CDN caching
        - API caching

        5. Performance Monitoring
        - Tools untuk monitoring
        - Metrics yang penting
        - Continuous optimization
        - User experience metrics
      `
    },
    {
      title: "UI/UX Design Principles untuk Developers",
      excerpt: "Prinsip-prinsip dasar UI/UX design yang perlu diketahui oleh developers untuk membuat interface yang lebih baik dan user-friendly.",
      image: "https://images.unsplash.com/photo-1545235617-7a424c1a60cc?q=80&w=2880&auto=format&fit=crop",
      category: "Design",
      date: "Jan 1, 2024",
      readTime: "15 min read",
      tags: ["UI/UX", "Design", "Frontend"],
      url: "/blog/ui-ux-untuk-developers",
      content: `
        UI/UX design adalah aspek penting dalam pengembangan website. Mari pelajari prinsip-prinsip dasarnya:

        1. Design Principles
        - Hierarchy
        - Contrast
        - Balance
        - Unity
        - Emphasis

        2. User Experience
        - User research
        - Usability testing
        - Information architecture
        - User flow

        3. Design Systems
        - Component libraries
        - Style guides
        - Design tokens
        - Documentation

        4. Accessibility
        - WCAG guidelines
        - Keyboard navigation
        - Screen readers
        - Color contrast

        5. Responsive Design
        - Mobile-first approach
        - Breakpoints
        - Fluid typography
        - Flexible layouts
      `
    }
  ];

  const resumeFeatures = [
    "Detailed work experience",
    "Technical skills overview",
    "Educational background",
    "Professional certifications",
    "Project highlights"
  ];

  // Add modal state variables
  let selectedPost: any = null;
  let isModalOpen = false;

  function openModal(post: any) {
    selectedPost = post;
    isModalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    selectedPost = null;
    isModalOpen = false;
    document.body.style.overflow = 'auto';
  }

  // Handle escape key to close modal
  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape' && isModalOpen) {
      closeModal();
    }
  }

  // Custom cursor variables
  let cursorX = 0;
  let cursorY = 0;
  let cursorVisible = false;
  let isHovering = false;

  function updateCursor(event: MouseEvent) {
    cursorX = event.clientX;
    cursorY = event.clientY;
    if (!cursorVisible) cursorVisible = true;
  }

  function handleMouseEnter(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (target.matches('a, button, [role="button"]')) {
      isHovering = true;
    }
  }

  function handleMouseLeave() {
    isHovering = false;
  }

  function handleMouseOut() {
    cursorVisible = false;
  }
</script>

<svelte:window 
  on:mousemove={updateCursor} 
  on:mouseout={handleMouseOut}
  on:mouseover={() => cursorVisible = true}
/>

<!-- Custom Cursor -->
{#if cursorVisible}
  <div 
    class="custom-cursor fixed pointer-events-none z-[9999] mix-blend-difference transition-transform duration-100"
    class:cursor-hover={isHovering}
    style="left: {cursorX}px; top: {cursorY}px;"
  >
    <div class="cursor-dot"></div>
    <div class="cursor-ring"></div>
  </div>
{/if}

<div 
  class="cursor-wrapper"
  on:mouseenter={handleMouseEnter}
  on:mouseleave={handleMouseLeave}
>
  <!-- Hero Section -->
  <section class="min-h-screen relative overflow-hidden bg-[#1a0f2e] pt-24">
    <div class="mesh-gradient"></div>
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-[radial-gradient(circle_at_center,rgba(244,114,182,0.15)_0%,transparent_70%)]"></div>
      <div class="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5"></div>
      {#each Array(20) as _, i}
        <div
          class="absolute rounded-full mix-blend-screen"
          style="
            width: {Math.random() * 10 + 5}px;
            height: {Math.random() * 10 + 5}px;
            background: rgba(244, 114, 182, 0.3);
            left: {Math.random() * 100}%;
            top: {Math.random() * 100}%;
            animation: float {Math.random() * 10 + 5}s ease-in-out infinite;
            animation-delay: -{Math.random() * 5}s;
          "
        ></div>
      {/each}
    </div>
    
    <div class="container mx-auto px-6 relative z-10 flex min-h-screen items-center">
      {#if isVisible}
        <div class="w-full" in:fade={{ duration: 1000 }}>
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div class="space-y-8 relative">
              <div class="absolute -left-20 -top-20 w-64 h-64 bg-pink-500/20 rounded-full filter blur-3xl"></div>
              <div class="absolute -right-20 -bottom-20 w-64 h-64 bg-purple-500/20 rounded-full filter blur-3xl"></div>
              
              <h1 
                class="text-7xl md:text-8xl font-bold leading-tight relative"
                in:fly={{ x: -100, duration: 1000 }}
                style="transform: perspective(1000px) rotateX({rotateX}deg) rotateY({rotateY}deg)"
              >
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-500 to-purple-500 inline-block relative glitch-effect">
                  {displayedText1}
                  {#if currentIndex1 === fullText1.length && !isDeleting}
                    <span class="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-pink-400 to-purple-500"></span>
                  {/if}
                </span>
                <br />
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-rose-500 inline-block relative glitch-effect">
                  {displayedText2}
                  {#if currentIndex2 === fullText2.length && !isDeleting}
                    <span class="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-500"></span>
                  {/if}
                  {#if showCursor}
                    <span class="animate-pulse text-pink-400">|</span>
                  {/if}
                </span>
                <div class="text-4xl md:text-5xl mt-4 font-light text-violet-200 relative shine-effect">
                  {displayedRole}
                  {#if roleIndex === roleText.length && !isDeleting}
                    <span class="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-violet-400 to-violet-200"></span>
                  {/if}
                </div>
              </h1>
              
              <p 
                class="text-xl text-violet-200 max-w-xl relative"
                in:fly={{ x: -100, duration: 1000, delay: 200 }}
              >
                Student at Politeknik Pratama Mulia, passionate about creating beautiful web experiences
                and pushing the boundaries of web development.
              </p>
              
              <div 
                class="flex items-center gap-4"
                in:fly={{ y: 50, duration: 1000, delay: 400 }}
              >
                <a 
                  href="https://github.com/HadZzz"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="group relative w-12 h-12 flex items-center justify-center"
                  aria-label="Visit my GitHub profile"
                >
                  <div class="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500 rounded-xl opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div class="relative w-full h-full bg-[#1a0f2e] rounded-xl border border-gray-800/50 flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
                    <Github class="w-6 h-6 text-gray-300 group-hover:text-white transition-colors duration-300" />
                  </div>
                </a>
                <a 
                  href="https://id.linkedin.com/in/hadzi-pamuji-438104215"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="group relative w-12 h-12 flex items-center justify-center"
                  aria-label="Visit my LinkedIn profile"
                >
                  <div class="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500 rounded-xl opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div class="relative w-full h-full bg-[#1a0f2e] rounded-xl border border-gray-800/50 flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
                    <Linkedin class="w-6 h-6 text-gray-300 group-hover:text-white transition-colors duration-300" />
                  </div>
                </a>
              </div>
            </div>
            
            <div 
              class="relative"
              in:fly={{ x: 100, duration: 1000, delay: 600 }}
              style="transform: perspective(1000px) rotateX({rotateX}deg) rotateY({rotateY}deg)"
            >
              <div class="relative w-full aspect-square">
                <div class="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-2xl"></div>
                <div class="absolute inset-[2px] bg-[#1a0f2e] rounded-2xl p-4 overflow-hidden">
                  <div class="relative h-full w-full">
                    <div class="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full filter blur-2xl"></div>
                    <div class="absolute bottom-0 left-0 w-32 h-32 bg-pink-500/20 rounded-full filter blur-2xl"></div>
                    
                    <div class="relative h-full w-full rounded-xl overflow-hidden">
                      <img 
                        src={heroImage}
                        alt="Anime Developer"
                        class="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div class="absolute inset-0 bg-gradient-to-t from-[#1a0f2e] via-transparent to-transparent opacity-50"></div>
                    </div>
                    
                    <div class="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 rounded-xl opacity-20 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/if}
    </div>
  </section>

  <!-- Projects Section -->
  <section id="projects" class="min-h-screen relative overflow-hidden bg-[#1a0f2e] py-24">
    <div class="mesh-gradient"></div>
    
    <div class="container mx-auto px-6 relative z-10">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-8">
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">
            My Projects
          </span>
        </h2>
        <p class="text-lg text-violet-200 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills and experience.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each projects as project, index}
          <div 
            class="group relative transform transition-all duration-500 hover:scale-105"
            in:fly={{ 
              x: index % 2 === 0 ? -100 : 100,
              y: index % 3 === 0 ? -50 : 50,
              duration: 1000,
              delay: 200 * index
            }}
          >
            <div class="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl opacity-75 group-hover:opacity-100 transition-all duration-300 blur"></div>
            <div class="relative bg-[#1a0f2e]/90 backdrop-blur-xl rounded-xl h-full border border-gray-800/30 overflow-hidden">
              <div class="relative h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  class="w-full h-full object-cover transform transition-all duration-700 group-hover:scale-110"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-[#1a0f2e] via-[#1a0f2e]/50 to-transparent opacity-60"></div>
                
                <div class="absolute top-4 right-4">
                  <div class="relative">
                    <div class="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full blur opacity-75"></div>
                    <span class="relative px-4 py-1 bg-[#1a0f2e]/90 rounded-full text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500 font-bold border border-gray-800/30">
                      Project {index + 1}
                    </span>
                  </div>
                </div>
              </div>
              
              <div class="p-6 space-y-4">
                <h3 class="text-xl font-bold">
                  <span class="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">
                    {project.title}
                  </span>
                </h3>
                <p class="text-gray-300 line-clamp-3">
                  {project.description}
                </p>
                <div class="flex flex-wrap gap-2">
                  {#each project.technologies as tech}
                    <span class="px-3 py-1 text-sm bg-gray-800/50 text-pink-400 rounded-full">
                      {tech}
                    </span>
                  {/each}
                </div>
                
                <div class="pt-4 flex gap-4">
                  {#if project.demoUrl}
                    <a 
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="inline-flex items-center gap-2 text-pink-400 hover:text-white transition-colors duration-300"
                    >
                      <span>Live Demo</span>
                      <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  {/if}
                  {#if project.githubUrl}
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="inline-flex items-center gap-2 text-pink-400 hover:text-white transition-colors duration-300"
                    >
                      <span>Source Code</span>
                      <Github class="w-4 h-4" />
                    </a>
                  {/if}
                </div>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Services Section -->
  <section id="services" class="min-h-screen relative overflow-hidden bg-[#1a0f2e] py-24">
    <div class="mesh-gradient"></div>
    
    <div class="container mx-auto px-6 relative z-10">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-8">
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">
            My Services
          </span>
        </h2>
        <p class="text-lg text-violet-200 max-w-2xl mx-auto">
          Here are the services I offer to help bring your ideas to life.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each services as service, index}
          <div 
            class="group relative transform transition-all duration-500 hover:scale-105"
            in:fly={{ 
              x: index % 2 === 0 ? -100 : 100,
              y: index % 3 === 0 ? -50 : 50,
              duration: 1000,
              delay: 200 * index
            }}
          >
            <div class="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl opacity-75 group-hover:opacity-100 transition-all duration-300 blur"></div>
            <div class="relative bg-[#1a0f2e]/90 backdrop-blur-xl rounded-xl h-full border border-gray-800/30 p-8">
              <div class="relative w-16 h-16 mb-6">
                <div class="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-xl"></div>
                <div class="relative w-full h-full flex items-center justify-center">
                  <svelte:component 
                    this={service.icon}
                    class="w-8 h-8 text-gray-300 group-hover:text-white transition-colors duration-300"
                  />
                </div>
              </div>
              
              <h3 class="text-xl font-bold mb-4">
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">
                  {service.title}
                </span>
              </h3>
              
              <p class="text-gray-300 mb-6">
                {service.description}
              </p>
              
              <ul class="space-y-3">
                {#each service.features as feature}
                  <li class="flex items-center gap-3 text-violet-200">
                    <div class="relative w-6 h-6">
                      <div class="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full"></div>
                      <div class="relative w-full h-full flex items-center justify-center">
                        <Check class="w-4 h-4 text-pink-400" />
                      </div>
                    </div>
                    {feature}
                  </li>
                {/each}
              </ul>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Experience Section -->
  <section id="experience" class="min-h-screen relative overflow-hidden bg-[#1a0f2e] py-24">
    <div class="mesh-gradient"></div>
    
    <div class="container mx-auto px-6 relative z-10">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-8">
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">
            Experience
          </span>
        </h2>
        <p class="text-lg text-violet-200 max-w-2xl mx-auto">
          My professional journey and work experience.
        </p>
      </div>

      <div class="max-w-4xl mx-auto">
        <div class="relative">
          <!-- Timeline Line -->
          <div class="absolute left-0 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-pink-500 via-fuchsia-500 to-purple-500"></div>
          
          <!-- Timeline Items -->
          {#each experiences as exp, index}
            <div 
              class="relative flex flex-col md:flex-row gap-8 mb-12"
              in:fly={{ 
                x: index % 2 === 0 ? -100 : 100,
                duration: 1000,
                delay: 200 * index
              }}
            >
              <!-- Timeline Dot -->
              <div class="absolute left-[-8px] md:left-1/2 md:ml-[-8px] w-4 h-4">
                <div class="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full animate-pulse"></div>
                <div class="absolute inset-[2px] bg-[#1a0f2e] rounded-full"></div>
              </div>
              
              <!-- Content -->
              <div class="md:w-1/2 {index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:ml-auto'}">
                <div class="relative">
                  <div class="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl opacity-75 group-hover:opacity-100 transition-all duration-300 blur"></div>
                  <div class="relative bg-[#1a0f2e]/90 backdrop-blur-xl rounded-xl border border-gray-800/30 p-6">
                    <div class="flex items-center justify-between mb-4">
                      <div>
                        <h3 class="text-xl font-bold">
                          <span class="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">
                            {exp.title}
                          </span>
                        </h3>
                        <p class="text-violet-200">{exp.company}</p>
                      </div>
                      <span class="px-4 py-1 text-sm bg-gray-800/50 text-pink-400 rounded-full">
                        {exp.period}
                      </span>
                    </div>
                    
                    <p class="text-gray-300 mb-4">{exp.description}</p>
                    
                    <div class="flex flex-wrap gap-2">
                      {#each exp.skills as skill}
                        <span class="px-3 py-1 text-sm bg-gray-800/50 text-pink-400 rounded-full">
                          {skill}
                        </span>
                      {/each}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </section>

  <!-- Education Section -->
  <section id="education" class="min-h-screen relative overflow-hidden bg-[#1a0f2e] py-24">
    <div class="mesh-gradient"></div>
    
    <div class="container mx-auto px-6 relative z-10">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-8">
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">
            Education
          </span>
        </h2>
        <p class="text-lg text-violet-200 max-w-2xl mx-auto">
          My academic background and certifications.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12">
        <!-- Formal Education -->
        <div 
          class="space-y-8"
          in:fly={{ x: -100, duration: 1000 }}
        >
          <h3 class="text-2xl font-bold">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">
              Formal Education
            </span>
          </h3>
          
          <div class="space-y-6">
            {#each education as edu}
              <div class="relative">
                <div class="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl opacity-75 group-hover:opacity-100 transition-all duration-300 blur"></div>
                <div class="relative bg-[#1a0f2e]/90 backdrop-blur-xl rounded-xl border border-gray-800/30 p-6">
                  <div class="flex items-center justify-between mb-4">
                    <div>
                      <h4 class="text-xl font-bold">
                        <span class="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">
                          {edu.degree}
                        </span>
                      </h4>
                      <p class="text-violet-200">{edu.school}</p>
                    </div>
                    <span class="px-4 py-1 text-sm bg-gray-800/50 text-pink-400 rounded-full">
                      {edu.period}
                    </span>
                  </div>
                  
                  <p class="text-gray-300 mb-4">{edu.description}</p>
                  
                  {#if edu.achievements}
                    <div class="space-y-2">
                      <h5 class="font-semibold text-violet-200">Key Achievements:</h5>
                      <ul class="list-disc list-inside space-y-1 text-gray-300">
                        {#each edu.achievements as achievement}
                          <li>{achievement}</li>
                        {/each}
                      </ul>
                    </div>
                  {/if}
                </div>
              </div>
            {/each}
          </div>
        </div>

        <!-- Certifications -->
        <div 
          class="space-y-8"
          in:fly={{ x: 100, duration: 1000, delay: 200 }}
        >
          <h3 class="text-2xl font-bold">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">
              Certifications
            </span>
          </h3>
          
          <div class="space-y-6">
            {#each certifications as cert}
              <div class="relative group">
                <div class="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl opacity-75 group-hover:opacity-100 transition-all duration-300 blur"></div>
                <div class="relative bg-[#1a0f2e]/90 backdrop-blur-xl rounded-xl border border-gray-800/30 p-6">
                  <div class="flex items-center justify-between mb-4">
                    <div>
                      <h4 class="text-xl font-bold">
                        <span class="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">
                          {cert.title}
                        </span>
                      </h4>
                      <p class="text-violet-200">{cert.issuer}</p>
                    </div>
                    <span class="px-4 py-1 text-sm bg-gray-800/50 text-pink-400 rounded-full">
                      {cert.date}
                    </span>
                  </div>
                  
                  <p class="text-gray-300 mb-4">{cert.description}</p>
                  
                  {#if cert.skills}
                    <div class="flex flex-wrap gap-2">
                      {#each cert.skills as skill}
                        <span class="px-3 py-1 text-sm bg-gray-800/50 text-pink-400 rounded-full">
                          {skill}
                        </span>
                      {/each}
                    </div>
                  {/if}
                  
                  {#if cert.credentialUrl}
                    <a 
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="inline-flex items-center gap-2 mt-4 text-pink-400 hover:text-white transition-colors duration-300"
                    >
                      <span>View Credential</span>
                      <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  {/if}
                </div>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Blog Section -->
  <section id="blog" class="min-h-screen relative overflow-hidden bg-[#1a0f2e] py-24">
    <div class="mesh-gradient"></div>
    
    <div class="container mx-auto px-6 relative z-10">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-8">
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">
            Blog & Articles
          </span>
        </h2>
        <p class="text-lg text-violet-200 max-w-2xl mx-auto">
          Sharing my thoughts and experiences in web development.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each blogPosts as post, index}
          <div 
            class="group relative transform transition-all duration-500 hover:scale-105"
            in:fly={{ 
              x: index % 2 === 0 ? -100 : 100,
              y: index % 3 === 0 ? -50 : 50,
              duration: 1000,
              delay: 200 * index
            }}
          >
            <div class="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl opacity-75 group-hover:opacity-100 transition-all duration-300 blur"></div>
            <div class="relative bg-[#1a0f2e]/90 backdrop-blur-xl rounded-xl h-full border border-gray-800/30 overflow-hidden">
              <!-- Blog Image -->
              <div class="relative h-48">
                <img 
                  src={post.image} 
                  alt={post.title}
                  loading="lazy"
                  decoding="async"
                  class="w-full h-full object-cover transform transition-all duration-700 group-hover:scale-110"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-[#1a0f2e] via-[#1a0f2e]/50 to-transparent opacity-60"></div>
                
                <!-- Category Badge -->
                <div class="absolute top-4 right-4">
                  <div class="relative">
                    <div class="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full blur opacity-75"></div>
                    <span class="relative px-4 py-1 bg-[#1a0f2e]/90 rounded-full text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500 font-bold border border-gray-800/30">
                      {post.category}
                    </span>
                  </div>
                </div>
              </div>
              
              <!-- Blog Content -->
              <div class="p-6 space-y-4">
                <div class="flex items-center gap-4 text-sm text-gray-400">
                  <span class="flex items-center gap-2">
                    <Calendar class="w-4 h-4" />
                    {post.date}
                  </span>
                  <span class="flex items-center gap-2">
                    <Clock class="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>
                
                <h3 class="text-xl font-bold">
                  <span class="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">
                    {post.title}
                  </span>
                </h3>
                
                <p class="text-gray-300 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div class="flex flex-wrap gap-2">
                  {#each post.tags as tag}
                    <span class="px-3 py-1 text-sm bg-gray-800/50 text-pink-400 rounded-full">
                      {tag}
                    </span>
                  {/each}
                </div>
                
                <button 
                  on:click={() => openModal(post)}
                  class="inline-flex items-center gap-2 text-pink-400 hover:text-white transition-colors duration-300"
                >
                  <span>Read More</span>
                  <ArrowRight class="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Resume Section -->
  <section id="resume" class="min-h-screen relative overflow-hidden bg-[#1a0f2e] py-24">
    <div class="mesh-gradient"></div>
    
    <div class="container mx-auto px-6 relative z-10">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-8">
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">
            Resume
          </span>
        </h2>
        <p class="text-lg text-violet-200 max-w-2xl mx-auto">
          Download my resume to learn more about my skills and experience.
        </p>
      </div>

      <div class="max-w-4xl mx-auto">
        <div 
          class="relative group transform transition-all duration-500 hover:scale-105"
          in:fly={{ y: 50, duration: 1000 }}
        >
          <div class="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl opacity-75 group-hover:opacity-100 transition-all duration-300 blur"></div>
          <div class="relative bg-[#1a0f2e]/90 backdrop-blur-xl rounded-xl border border-gray-800/30 p-8">
            <div class="grid md:grid-cols-2 gap-8 items-center">
              <!-- Resume Info -->
              <div class="space-y-6">
                <h3 class="text-2xl font-bold">
                  <span class="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">
                    Professional Resume
                  </span>
                </h3>
                
                <p class="text-gray-300">
                  Get a comprehensive overview of my professional background, skills, and achievements in a downloadable format.
                </p>
                
                <ul class="space-y-3">
                  {#each resumeFeatures as feature}
                    <li class="flex items-center gap-3 text-violet-200">
                      <div class="relative w-6 h-6">
                        <div class="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full"></div>
                        <div class="relative w-full h-full flex items-center justify-center">
                          <Check class="w-4 h-4 text-pink-400" />
                        </div>
                      </div>
                      {feature}
                    </li>
                  {/each}
                </ul>
              </div>
              
              <!-- Download Button -->
              <div class="flex flex-col items-center justify-center space-y-6">
                <div class="relative w-24 h-24">
                  <div class="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-xl"></div>
                  <div class="relative w-full h-full flex items-center justify-center">
                    <FileText class="w-12 h-12 text-gray-300" />
                  </div>
                </div>
                
                <a 
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="relative inline-flex group/button"
                >
                  <div class="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full opacity-75 group-hover/button:opacity-100 transition-all duration-300 blur"></div>
                  <button class="relative px-8 py-3 bg-[#1a0f2e] rounded-full border border-gray-800/30 text-white font-semibold flex items-center gap-2 transition-all duration-300 group-hover/button:bg-[#1a0f2e]/80">
                    <Download class="w-5 h-5" />
                    Download Resume
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

<style lang="postcss">
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
    transform: translateZ(0);
    will-change: transform;
    pointer-events: none;
  }

  .bg-grid-pattern {
    background-image: 
      radial-gradient(circle at center, rgba(244,114,182,0.1) 0%, transparent 8px),
      linear-gradient(to right, rgba(244,114,182,0.05) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(244,114,182,0.05) 1px, transparent 1px);
    background-size: 40px 40px, 30px 30px, 30px 30px;
    background-position: 0 0, 15px 15px, 15px 15px;
    transform: translateZ(0);
    will-change: transform;
    pointer-events: none;
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0) scale(1);
    }
    50% {
      transform: translateY(-20px) scale(1.05);
    }
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

  /* Optimize card transitions */
  .card-hover {
    transition: border-color 300ms ease;
  }

  /* Optimize image transitions */
  .image-hover {
    transition: transform 700ms ease;
  }

  /* Use more efficient transform */
  .scale-on-hover:hover {
    transform: scale(1.05);
    will-change: transform;
  }

  /* Remove transition-all */
  .btn-hover {
    transition: background-color 300ms ease,
                color 300ms ease,
                border-color 300ms ease;
  }

  /* Optimize text animations */
  .text-hover {
    transition: color 300ms ease;
  }
</style>
