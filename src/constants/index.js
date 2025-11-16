export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Experience',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Timur Kaldybayev Nurlanovich',
    position: 'MBA | CEO at Qaldy AI',
    img: 'assets/timur-kaldybayev.png',
    review:
      'Tair’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our consulting webtools. He’s a true professional! Fantastic work.',
  },
  {
    id: 2,
    name: 'John Doe',
    position: 'Founder of "Company Name" Company',
    img: 'assets/placeholder-image.png', //added placeholder image instead of review2.png
    review:
      'Tair’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Principal of "Name" School ',
    img: 'assets/placeholder-image.png', //added placeholder image instead of review3.png
    review:
      'I can’t say enough good things about Tair. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'John Doeas',
    position: 'CEO of "NAME" Enterprises',
    img: 'assets/placeholder-image.png', //added placeholder image instead of review4.png
    review:
      'Tair was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'CodeArchitect MCP - AI with System Design Intelligence',
    desc: 'CodeArchitect MCP is a Model Context Protocol (MCP) server that solves critical problems developers face: losing valuable AI conversations and dealing with AI hallucinations that ruin codebases. It empowers coding agents with deep system design intelligence by combining structured conversation storage, curated design principles & patterns, and enhanced context retrieval.',
    subdesc:
      'Built with TypeScript, Node.js, and MCP SDK. Features session storage with proprietary TOON format optimization (~40% token reduction), improving coding agents\' capabilities by at least 40%. Published on npm with 350+ downloads. Includes complete MCP server implementation, landing page, comprehensive documentation, and npm package distribution.',
    href: 'https://codearchitect-mcp.vercel.app/',
    texture: '/textures/project/project9.mp4',
    logo: '/assets/codearchitect-mcp-logo.png',
    logoStyle: {
      backgroundColor: '#000000',
      border: '0.2px solidrgb(24, 130, 27)',
      boxShadow: '0px 0px 60px 0px rgba(45, 139, 28, 0.53)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 2,
        name: 'JavaScript',
        path: '/assets/javascript.svg',
      },
      {
        id: 4,
        name: 'GitHub',
        path: '/assets/github.svg',
      },
      {
        id: 5,
        name: 'MCP',
        path: '/assets/mcp.jpg',
      },
    ],
  },
  {
    title: 'BizDev.kz - AI-powered change management consulting product',
    desc: 'BizDev.kz is an AI-powered project developed under the Qaldy AI initiative. This platform focuses on improving organizational change management for businesses in Kazakhstan through intelligent tools and streamlined workflows.',
    subdesc:
      'Build with web technologies: HTML/CSS/JS with a touch of AI: Gemini API for generating content using context-aware prompts, hosted on the Qaldy AI infrastructure and secured by login/password access to control usage during client sessions.',
    href: 'https://www.youtube.com/watch?v=ONpNwltVMeQ&t=1107s',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/logoqai.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'javascript',
        path: '/assets/javascript.svg',
      },
      {
        id: 2,
        name: 'css',
        path: 'assets/css.svg',
      },
      {
        id: 3,
        name: 'google',
        path: '/assets/google.svg',
      },
      {
        id: 4,
        name: 'Tilda',
        path: '/assets/tilda.svg',
      },
      {
        id: 5,
        name: 'Hoster',
        path: '/assets/hoster.svg',
      },
    ],
  },
  {
    title: 'Prompt Battle - Multiplayer Web Game',
    desc: 'Multiplayer Web Game that challenges players to reverse-engineer AI image generation prompts. The game combines competitive gameplay with educational elements, helping players understand how AI interprets and generates visual content. It uses curated dataset of prompt and images, fontend-backend API WebSocket communication, ngrok for local-to-public domain access and modes for single and multiplayer.',
    subdesc:
      'As a Software Engineering student at Fontys ICT, I developed this project to explore the intersection of artificial intelligence, game development, infrasctructure and cloud basics, media concepts, and modern software design & engineering (web technologies).',
    href: 'https://www.youtube.com/watch?v=j7SLrSRv9DM',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/prompt-text.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'SQL',
        path: '/assets/sql.svg',
      },
      {
        id: 2,
        name: 'JavaScript',
        path: 'assets/javascript.svg',
      },
      {
        id: 3,
        name: 'Ngrok',
        path: '/assets/ngrok.png',
      },
      {
        id: 4,
        name: 'WebSocket',
        path: '/assets/websocket.svg',
      },
      {
        id: 5,
        name: 'CSS',
        path: '/assets/css.svg',
      },
      {
        id: 6,
        name: 'Cursor',
        path: '/assets/cursor.png',
      },
    ],
  },
  {
    title: 'GPA Calculator - AI-powered review and calculation tool',
    desc: 'A modern, responsive, and user-friendly GPA Calculator built with HTML, CSS, and JavaScript. User can calculate and transform GPA to 4.0 scale from 5.0 and 100% grade systems and vice versa.',
    subdesc:
      'This open-source project includes a fully functional GPA calculation system, template management, PDF export, and an integrated AI Assistant for helping students optimize their academic plans.',
    href: 'https://github.com/tairqaldy/AI-GPA-Calculator',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/AI-GPA-Calculator-logo.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'JavaScript',
        path: '/assets/javascript.svg',
      },
      {
        id: 2,
        name: 'CSS',
        path: 'assets/css.svg',
      },
      {
        id: 3,
        name: 'Google',
        path: '/assets/google.svg',
      },
      {
        id: 4,
        name: 'PDF',
        path: '/assets/pdf.svg',
      },
      {
        id: 5,
        name: 'Math.js',
        path: '/assets/function-math.svg',
      },
    ],
  },
  {
    title: 'TEMK AI - Expertise Automation platform',
    desc: 'TEMK AI is a dual-sided marketplace that transforms expert knowledge into accessible, interactive AI tools. It provides users with instant, actionable solutions crafted by real-world professionals, while empowering experts to digitize, scale, and monetize their unique skills without writing a single line of code.',
    subdesc:
      'Built with Next.js, Firebase, and Google Genkit, TEMK AI offers a robust and scalable environment for creating and consuming expert-driven AI agents, bridging the gap between specialized knowledge and everyday problem-solving.',
    href: 'https://temk-ai-46303.web.app',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/temk-ai-logo.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'Firebase Studio',
        path: '/assets/firebase.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'javascript',
        path: '/assets/javascript.svg',
      },
      {
        id: 5,
        name: 'google',
        path: '/assets/google.svg',
      },
    ],
  },
  {
    title: 'n8n Automations - AI Agents, APIs, and Tools',
    desc: 'This repository contains multiple n8n automation projects. Each workflow demonstrates a unique use case of AI agents, APIs, and automation tools.',
    subdesc:
      'Built with OpenAI, SerpAI, Google Sheets, Wikipedia, Perplexity Sonar Deep Research, NewsAPI & GNews, Telegram bot API and SupadataAPI for real-time data fetching and processing.',
    href: 'https://github.com/tairqaldy/n8n-automations',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'n8n',
        path: '/assets/n8n.svg',
      },
      {
        id: 2,
        name: 'Google',
        path: 'assets/google.svg',
      },
      {
        id: 3,
        name: 'telegram',
        path: '/assets/telegram.svg',
      },
      {
        id: 4,
        name: 'SupadataAPI',
        path: '/assets/supadata-api.png',
      },
      ,
      {
        id: 5,
        name: 'chatgpt',
        path: '/assets/chatgpt.svg',
      },
    ],
  },
  {
    title: 'WRO2025 - Autonomous Car "Double-decker" ',
    desc: 'Project is an autonomous LEGO-based vehicle built for the World Robot Olympiad (WRO) 2025 Future Engineers challenge. This challenge focuses on creating a self-driving car that can navigate a dynamic course without human control',
    subdesc:
      'The robots primary goals are to drive autonomously while accurately detecting turns in the road, avoiding unexpected obstacles, and performing a parallel parking maneuver at the end of its run The final robot is built on a LEGO Technic chassis controlled by a Raspberry Pi 4 computer. By using open-source hardware and software, we embraced the spirit of the Future Engineers category—leveraging sensor fusion, computer vision, and a steering mechanism akin to a real car (rather than simple differential drive).',
    href: 'https://github.com/tairqaldy/wro2025-autonomous-car',
    texture: '/textures/project/project6.mp4',
    logo: '/assets/wro2025-logo.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'Limelight Camera',
        path: '/assets/limelight-camera.png',
      },
      {
        id: 2,
        name: 'Raspberry Pi',
        path: 'assets/raspberry-pi.svg',
      },
      {
        id: 3,
        name: 'OpenCV',
        path: '/assets/opencv.svg',
      },
      {
        id: 4,
        name: 'LEGO',
        path: '/assets/lego.svg',
      },
      {
        id: 5,
        name: 'Python',
        path: '/assets/python.svg',
      },
    ],
  },
  {
    title: 'AntiBullying QSS - Compliance Management System',
    desc: 'Developed Antibullying Compliance Management System For Quantum STEM School with low-code platform Make.com and Google infrastructure.',
    subdesc:
      'This system is used to track and manage antibullying compliance requests students submitted to the school administration, resolving registration of incidents and managing the status of the requests.',
    href: 'https://www.youtube.com/@tairqaldy',
    texture: '/textures/project/project7.mp4',
    logo: '/assets/quantum-logo.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'google',
        path: '/assets/google.svg',
      },
      {
        id: 2,
        name: 'telegram',
        path: '/assets/telegram.svg',
      },
      {
        id: 3,
        name: 'make.com',
        path: '/assets/make.svg',
      },
      {
        id: 4,
        name: 'chatgpt',
        path: '/assets/chatgpt.svg',
      },
    ],
  },
  {
    title: 'kap.atomicqai.kz - Strategic Session Facilitation Tool',
    desc: 'Atomic AI is an advanced AI-driven coaching tool developed under the Qaldy AI initiative. Designed for strategic session facilitation, it analyzes visual group outputs—such as flipcharts, maps, and idea models—to generate structured insights, synthesize team visions, and accelerate decision-making processes',
    subdesc:
      'Built with modern web technologies including Next.js, HTML/CSS/JS, and powered by Gemini API for multimodal (text + image) analysis. Atomic AI uses expert-crafted prompts and fine-tuned LLM configurations to interpret visuals, extract strategic patterns, and provide actionable summaries—all secured and hosted on Qaldy AI’s infrastructure for enterprise-level usage during client workshops.',
    href: 'https://www.youtube.com/@tairqaldy', // add video link
    texture: '/textures/project/project8.mp4',
    logo: '/assets/logoqai.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'javascript',
        path: '/assets/javascript.svg',
      },
      {
        id: 2,
        name: 'css',
        path: 'assets/css.svg',
      },
      {
        id: 3,
        name: 'google',
        path: '/assets/google.svg',
      },
      {
        id: 4,
        name: 'Tilda',
        path: '/assets/tilda.svg',
      },
      {
        id: 5,
        name: 'Hoster',
        path: '/assets/hoster.svg',
      },
      {
        id: 6,
        name: 'react',
        path: '/assets/react.svg',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.08 : isMobile ? 0.08 : 0.09,
    deskPosition: isMobile ? [0.5, -7, 0] : [0.80, -9.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -3.5, 0] : isTablet ? [5, -7, 0] : [9, -7.5, 0],
    reactLogoPosition: isSmall ? [5, 6, 0] : isMobile ? [6, 5, 0] : isTablet ? [5, 6, 0] : [12, 5, 0],
    ringPosition: isSmall ? [-3, 4, 0] : isMobile ? [-6, 5, 0] : isTablet ? [-6, 5, 0] : [-8, 6, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -9, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Fontys University of Applied Sciences',
    position: 'HBO-Bachelor Student (Software Engineering)',
    duration: '2025 sept — Present',
    title: "ICT Student in Eindhoven, Netherlands. Project-based learning. Here I develop software engineering projects in collaboration with peers, focusing on problem-solving, professional product development standards, and building production-ready solutions.",
    icon: '/assets/fontys.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Qaldy AI Startup',
    position: 'CTO | Full-Stack Developer',
    duration: '2023 — 2025',
    title: "Developed: bizdev.kz, govdev.kz, kap.atomicqai.kz, temk-ai, and other projects integrating AI, fullstack web development, and other soft skills.",
    icon: '/assets/logoqai.png',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Nazarbayev University "Alumni Association" Internship',
    position: 'Web Developer & Data Analyst Intern',
    duration: '2024 june — 2024 july',
    title: "During the Internship I finished the in-scope goals, updated information in alumni association database with 5000+ records and worked on nualumni.kz website design",
    icon: '/assets/nu-alumni-logo.png',
    animation: 'salute',
  },
  {
    id: 4,
    name: 'Quantum STEM',
    position: 'President and Graduate',
    duration: '2021 sept — 2025 jun',
    title: "First President (2022-2023). Leader of Antibullying committee. Studied the Advanced Placement (AP) and Cambridge International AS & A-level program, receiving exact grades: Calculus BC (5), Statistics (4)",
    icon: '/assets/quantum-logo.png',
    animation: 'clapping',
  },
  {
    id: 5,
    name: '"QUANT | FTC 21062" Robotics Team',
    position: 'Programmer, Driver & Builder',
    duration: '2022 sept - 2024 june',
    title: "Programmer, Driver & Builder. Developed the robot's software and hardware, including the autonomous driving system, the robot's movement system, and the robot's hardware & cable management design with FIRST Robotics Components, winning 2023 Nurorda FTC Championship in a team of 7 people. Hours spent: 300+ (2-5h/day).",
    icon: '/assets/quant-logo.png',
    animation: 'salute',
  },
  {
    id: 6,
    name: '"STEP" Computer Academy',
    position: 'Graduate & Assistant',
    duration: '2018 aug — 2021 may',
    title: "Graduated from the 'STEP' Computing Academy in 2021. After graduation, I worked as an assistant for the introduction to programming course, where I helped students with their projects and assignments.",
    icon: '/assets/step-logo.png',
    animation: 'clapping',
  },
];

export const essays = [
  {
    id: 1,
    slug: "obsessed-with-coding",
    title: "obsessed with coding",
    date: "october 2025",
    category: "thoughts",
    coverImage: "/assets/project-logo2.png",
    excerpt: "how i became obsessed with the process.",
    content: 
`
>It's 6:47am and I've been typing for the past hour and a half. 
Not because I set an alarm, not because I have a deadline — I woke up with a solution to yesterday's problem and couldn't not try it. 
My coffee's gone cold. I haven't checked my phone. This is what obsession looks like.
              
Two years ago, I couldn't even finish a youtube web development course.

I'd watch the first video, maybe the second. 
Bookmark it in my "watch later" playlist with 47 other tutorials. 
Tell myself "I'll continue tomorrow." But tomorrow I'd just find a different course — one that looked easier, more beginner-friendly, more... something. 

The idea of coding felt like homework — something I was supposed to want to do, but the "supposed to" killed any actual desire. 
I'd sit there following along, typing what the instructor typed, and feel nothing. No pull, no curiosity, just the weight of "I should learn this."

At some point I felt like I had no control over my own life. I burned out. Not because I did too much, but because I did f*cking nothing. 
I was stuck in this loop of consuming content, convincing myself I was "learning," but never actually building anything.

Eventually I just gave up. 

"You're too dumb for this," I told myself.

---

Later — I don't even remember how much later — I was in a bookstore, looking at the section where all the technical literature was displayed. 
Rows of programming books, web development guides, framework documentation. And instead of feeling inspired, I felt this wave of frustration.

WHY? Why did I need to absorb all of this before I could start? 
Why did learning feel like I needed to download an entire library into my brain before writing a single line of code?

I looked away from the tech section, and that's when I saw it. 
"The 80/20 Principle" by Richard Koch. Picked it up, read the first few pages right there in the aisle:

---

>"..Roughly 80% of outcomes result from 20% of efforts."

---

Something broke inside me in that moment.

I didn't need to know everything to start. I could do it right away. 
I just needed to know what to start with. The 20% that would actually matter.

After all those useless tutorials that never helped but just confused and bloated my mind, I finally started DOING.

Now I can't stop. Not in the "I'm forcing myself to build discipline" way, but in the "wait it's 3am?" way. 

---

###Last week I rebuilt my entire portfolio with three.js 

because flat design suddenly felt wrong. 
Not for a grade, not for a client, just because I saw how it could be better and had to see if I could make it real.

The difference isn't skill or knowledge. It's that I stopped trying to "learn coding" and started trying to solve problems that actually mattered to me. 
The youtube tutorial wanted to teach me loops and functions. My projects needed those things to work. One felt like studying. The other felt like building.

These days I'm the person who wakes up at 6am not because of discipline, but because my brain solved something while I slept and I need to see if it actually works.
I'll start fixing a small bug and emerge four hours later having refactored the entire codebase because one console.log revealed how it should have been built all along.

---

###People ask "how do you stay motivated?" 

Honestly, I think they're asking the wrong question. It's not about motivation anymore. 
When you're actually building things that matter to you, you don't need to force yourself. 
You just... do it. The work stops feeling like work. The pull becomes natural. 
The question changes from "how do I make myself do this?" to "how do I make myself stop?"

I didn't fall in love with coding. 
I fell in love with making ideas real, and coding happened to be the fastest path from 
"what if..." to "holy sh*t it works!"

That youtube course is still in my watch later playlist. I never finished it. But I've shipped more than twenty projects since then.

---

### Here's what I'd tell someone just starting: 

The gap between watching and doing is the hardest gap to cross, but it's also the smallest. 

It's not about knowledge or skill or time. 
It's about permission. Allow yourself to build something before you're "ready," before it's "right," before you "really understand."

If you're still collecting courses, still waiting to feel "ready," still looking for the perfect tutorial — stop.
You're not protecting yourself from failure. You're protecting yourself from starting. I wasted a year doing that. Don't be me.

No one is coming to tell you you're ready. You have to decide that for yourself.

The thing that finally worked wasn't the right course or the right book. 
It was deciding that building something broken was better than building nothing at all. 
Your first project will be messy. That's the point. Messy and real beats perfect and imaginary every time.

Pick something. Build it. It will be bad. Build it anyway. 

I wish I could tell my past self this.
`
  },
];

{/* {
    id: 1,
    slug: "young-but-rational",
    title: "young but rational",
    date: "october 2025",
    category: "reflection",
    coverImage: "/assets/project-logo1.png",
    excerpt: "i always cheated on my school essays, but this is my attempt to write something meaningful.",
    content: `last week i flew to kazakhstan for a tech conference. i was there to talk about ai, automation, and the future of work — but what i found was something else entirely.

i met high-school kids who were building apps, students who were running startups, and teachers who were pushing boundaries i didn't even know existed. the talent density in schools like nis, fizmat, and nspm (рфмш) is incredible. these aren't just students — they're builders, creators, problem-solvers.

but here's what struck me most: they're not just technically skilled. they're thinking about real problems. they're asking questions about how technology can serve people, not the other way around. they're building things that matter.

i've been thinking about this a lot since i got back. we spend so much time talking about the future of work, about automation, about ai replacing jobs. but what if we're asking the wrong questions? what if the real question isn't about what technology can do, but about what we want it to do?

these students are showing us something important. they're not just learning to code — they're learning to think. they're learning to ask why, not just how. they're learning that technology is a tool, not an end.

i think that's what we need more of. not just technical skills, but the wisdom to use them well. not just innovation, but innovation that serves human flourishing.

maybe that's what being "young but rational" really means. it's not about being naive or overly optimistic. it's about having the energy to build and the wisdom to build the right things.

these students are showing us the way forward. they're not just preparing for the future — they're creating it. and they're doing it with both ambition and humility, with both passion and reason.

that's something worth learning from.`
  }, */}