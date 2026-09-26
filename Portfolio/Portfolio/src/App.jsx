import { motion } from "framer-motion";
import gamifiedEducationalImg from './assets/projects/GamifiedEducationalApplication.png';
import refineryImg from './assets/projects/refinery.png';
import metaverseImg from './assets/projects/metaverse.png';
import VRDrum from './assets/projects/VRDrum.png';
import postCrashAnnalysis from './assets/projects/PostCrashAnnalysis.png';
import PromotionalMarketingGameImg from './assets/projects/promotionMarketingGame.png';
import parkinsonsImg from './assets/projects/parkinsonsImg.png';

import CosmicChaoseBanner from './assets/CosmicChaose/_banner.png';
import cosmicChaoseShot1 from './assets/CosmicChaose/shot1.png';
import cosmicChaoseShot2 from './assets/CosmicChaose/shot2.png';
import cosmicChaoseShot3 from './assets/CosmicChaose/shot3.png';
import cosmicChaoseVideo1 from './assets/CosmicChaose/video1.mp4';
import cosmicChaoseVideo2 from './assets/CosmicChaose/video2.mp4';
import cosmicChaoseVideo3 from './assets/CosmicChaose/video3.mp4';

import oinkdokuBanner from './assets/OinkDoku/shot1.png';
import oinkdokuLogo from './assets/OinkDoku/Shot2.png';
import oinkdokuVideo from './assets/OinkDoku/Video.webm';

import animeverseShot1 from './assets/AnimeVerse/shot1.jpg';
import animeverseShot2 from './assets/AnimeVerse/shot2.jpg';
import animeverseVideo from './assets/AnimeVerse/Video1.mp4';
import { image } from "framer-motion/client";  
export default function App() {
const cosmicChaoseVideos = [
  cosmicChaoseVideo1,
  cosmicChaoseVideo2,
  cosmicChaoseVideo3,
];

const randomVideo =
  cosmicChaoseVideos[Math.floor(Math.random() * cosmicChaoseVideos.length)];

  const skills = [  
"Unity 3D", "C#", "VR / XR", "AR / MR", "Meta Quest", "WebGL", "Performance Optimization", "XR Interaction", "AI / ML Integration", "3D Mathematics", "Backend & API Integration"
];
  const projects = [
  {
    title: 'Gamified Educational Application',
    image: gamifiedEducationalImg,
    description:
      'An interactive educational platform focused on abacus learning, designed to help students develop mental arithmetic, number sense, concentration, and calculation skills. The application combines structured abacus lessons with engaging activities such as coloring, mazes, Sudoku, and interactive exercises, while supporting progressive learning and performance tracking.',
   tech: [
  "Unity",
  "C#",
  "Android",
  "iOS",
  "Multi-User Architecture",
  "Data Encryption",
  "Advanced UI Systems"
],
  },

  {
    title: 'Oil & Gas Refinery Training Simulation',
    image:refineryImg,
    description: 
      'Immersive VR training platform developed for refinery operations, industrial safety training, workflow simulations, emergency handling, and interactive plant operation learning experiences.',
    tech: [
      'Unity',
      'VR Training',
      'Industrial Simulation',
      'Safety Training',
      'Interactive Learning',
    ],
  },

  {
    title: 'VR Drum',
    image:VRDrum,
    description:
      'An immersive VR music learning application designed to teach users the fundamentals of drumming and musical notes through interactive, lesson-based experiences. The application combines virtual drum interactions, guided lessons, and real-time gameplay to provide an engaging and hands-on learning environment on Oculus Quest.',
    tech: [
  "Unity",
  "C#",
  "VR",
  "Oculus Quest",
  "Meta XR SDK",
  "Interactive Gameplay",
  "Lesson-Based Learning",
  "3D Interaction",
  "Audio Integration",'FMod',
  "Android"
],
  },

  {
    title: 'Metaverse Marketplace',
    image:metaverseImg,
    description:
      'A multi-platform Multiplayer VR metaverse marketplace focused on immersive experiences, avatar systems, and seamless backend communication. Worked on GraphQL API integration, avatar functionality, and cart integration with Firebase, enabling communication between the Unity application and backend services across multiple platforms.',
    tech: [
  "Unity",
  "C#",
  "VR",
  "GraphQL",
  "Firebase",
  "API Integration",
  "Avatar System",
  "Multi-Platform","Multiplayer"
],
  },

  {
    title: '3D Vehicle Visualization & Post Crash Analysis',
    image:postCrashAnnalysis,
    description:
      'An industrial XR application developed for Mercedes-Benz that overlays a detailed 3D vehicle model onto a physical vehicle using Microsoft HoloLens. The application uses camera-based marker tracking to accurately align the virtual model with the real vehicle, enabling users to visualize and analyze vehicle components for post-crash studies.',
    tech: [
  "Unity",
  "C#",
  "Microsoft HoloLens",
  "XR",
  "Marker Tracking",
  "3D Visualization",
  "Spatial Alignment",
  "AR Interaction"
],
  },

  {
    title: 'Promotional Marketing 2D Web Game',
    image:PromotionalMarketingGameImg,
    description:
      'A browser-based 2D promotional game developed with PlayCanvas, designed to engage customers through interactive gameplay. The game features a points-based scoring system where players can earn points and redeem them for promotional coupon codes.',
    tech: [
  "PlayCanvas",
  "JavaScript",
  "WebGL",
  "2D Game Development",
  "Game UI",
  "Points & Scoring System",
],
  },  {
    title: 'Parkinson’s FOG Assistance — XR Application',
    image:parkinsonsImg,
    description:
      'An XR-based assistive application designed to help Parkinson’s patients overcome Freezing of Gait (FOG) using real-time environment understanding, machine learning, and visual stepping cues.',
    tech: [
  "Unity",
  "Snapdragon Spaces",
  "C#",
  "DigiLens ARGO",
  "XR",
  "Machine Learning",
  "ONNX Runtime",
  "Environment Meshing",
  "Motion Tracking",
  "Voice Interaction"
],
  }
];
 return (
  <div className="min-h-screen bg-[#050816] text-white">
    
    {/* Navbar */}
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/20 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        <h1 className="text-2xl font-black text-cyan-400">
           ASHISH RANA
        </h1>

        <div className="hidden gap-8 md:flex">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>

      </div>
    </nav>

    {/* Hero */}
    <section className="flex min-h-screen items-center px-6">

      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p className="mb-4 uppercase tracking-[0.4em] text-cyan-400">
            Unity Developer Portfolio
          </p>

          <h1 className="text-6xl font-black leading-tight">
            Creating
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {" "}Immersive
            </span>
            <br />
            Digital Experiences
          </h1>

          <p className="mt-8 max-w-3xl text-lg text-slate-400">
Unity Developer specializing in VR/AR, XR applications, gameplay programming, AI/ML integration, optimization, 3D mathematics, and immersive experiences.
Experienced in developing cross-platform applications for Meta Quest, HoloLens, DigiLens ARGO, Android, iOS, and WebGL, with a strong focus on interactive and real-time 3D experiences.
          </p>

          <div className="mt-10 flex gap-4">

           <a
  href="#projects"
  className="rounded-2xl bg-cyan-400 px-6 py-3 font-bold text-black transition hover:scale-105"
>
  View Projects
</a>

           <a
  href="/resume.pdf"
  download
  className="rounded-2xl border border-white/20 px-6 py-3 transition hover:border-cyan-400"
>
  Download Resume
</a>

          </div>

        </motion.div>

      </div>

    </section>
    {/* About */}
<section id="about" className="px-6 py-24">

  <div className="mx-auto max-w-7xl">

    <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">

      <h2 className="text-4xl font-black">
        About Me
      </h2>

      <p className="mt-8 max-w-4xl text-lg leading-relaxed text-slate-400">
        I am a Unity Developer specializing in real-time 3D, XR, and interactive application development across VR, AR, mobile, and WebGL platforms.




      </p>

      <p className="mt-6 max-w-4xl text-lg leading-relaxed text-slate-400">
        My technical expertise includes XR interaction systems, performance optimization, AI/ML integration, AR tracking, procedural systems, cross-platform development, and a strong foundation in 3D mathematics and spatial transformations. I have experience working with platforms such as Meta Quest, HoloLens, DigiLens ARGO AR glasses, Android, iOS, and WebGL.
      </p>

      <p className="mt-6 max-w-4xl text-lg leading-relaxed text-slate-400">
I enjoy working on technically challenging applications where real-time 3D, intelligent systems, and immersive interaction come together to create meaningful user experiences.
      </p>

    </div>

  </div>
<section className="px-6 py-24">

  <div className="mx-auto max-w-7xl">

    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur">

      {/* Banner */}
      <div className="relative">

        <img
          src={CosmicChaoseBanner}
          alt="Mechanaconda"
          className="h-[500px] w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

        <div className="absolute bottom-0 left-0 p-10">

          <p className="mb-8 text-cyan-400">
            Developed Mobile Game
          </p>

          <h2 className="mb-16 text-6xl font-black">
            COSMIC CHAOSE
          </h2>
         
          <p className="max-w-2xl text-lg text-gray-300">


            Can you survive the chaos? Cosmic Chaos throws you into a relentless space chase where homing missiles are always on your tail. Drift through planets and asteroids, dodge incoming threats, and push your reflexes to the limit as you fight to stay alive.
          </p>

          {/* <div className="mt-16 flex gap-4">

            <a
              href="https://play.google.com/store/apps/details?id=com.Nforge"
              target="_blank"
              className="rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-black transition hover:scale-105"
            >
              Soon in Play Store
            </a>

           
          </div> */}

                  <div className="mt-16 flex gap-4">
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="cursor-not-allowed rounded-2xl bg-gray-500/40 px-6 py-3 font-semibold text-gray-400 opacity-70"
          >
            Soon in Play Store
          </a>
        </div>

        </div>

      </div>
{/* Gameplay Video */}

<div className="p-6">

  <div className="overflow-hidden rounded-[2rem] border border-white/10">

    <video
  src={randomVideo}
      controls
      autoPlay
      muted
      loop
      className="w-full"
    />

  </div>

</div>
      {/* Screenshots */}
      <div className="grid gap-4 p-6 md:grid-cols-3">

        {[cosmicChaoseShot1, cosmicChaoseShot2, cosmicChaoseShot3].map((img, index) => (

          <div
            key={index}
            className="overflow-hidden rounded-2xl"
          >

            <img
              src={img}
              alt=""
              className="h-64 w-full object-cover transition duration-500 hover:scale-110"
            />

          </div>

        ))}

      </div>

    </div>

  </div>

</section>
</section>
 {/* About Cosmic Chaose */}
<section className="px-6 py-24">

  <div className="mx-auto max-w-7xl">

    <div className="rounded-[2rem] border border-cyan-400/20 bg-white/5 p-10 backdrop-blur-xl">

      <p className="mb-4 uppercase tracking-[0.3em] text-cyan-400">
        About The Game
      </p>

      <h2 className="text-5xl font-black">
        Cosmic Chaose
      </h2>

      <p className="mt-8 max-w-4xl text-lg leading-relaxed text-slate-400">
            Cosmic Chaos is a fast-paced space survival game developed in Unity.
            Players navigate through a dynamic cosmic environment, 
            skillfully drifting between planets and asteroids while evading 
            relentless homing missiles. The game emphasizes precise movement, 
            quick reflexes, and strategic navigation to survive the chaos of deep space.
      </p>

      <div className="mt-14 grid gap-8 md:grid-cols-2">

        {/* Gameplay Systems */}
        <div className="rounded-2xl border border-white/10 bg-black/20 p-8">

          <h3 className="text-2xl font-bold text-cyan-300">
            Gameplay Systems
          </h3>

          <ul className="mt-6 space-y-4 text-slate-400">

            <li>• Dynamic enemy AI and combat interactions</li>
            <li>• Projectile and missile systems</li>
            <li>• Upgrade and progression mechanics</li>
            <li>• Fast-paced survival gameplay loop</li>
            <li>• Interactive gameplay feedback systems</li>

          </ul>

        </div>

        {/* Technical Features */}
        <div className="rounded-2xl border border-white/10 bg-black/20 p-8">

          <h3 className="text-2xl font-bold text-cyan-300">
            Technical Features
          </h3>

          <ul className="mt-6 space-y-4 text-slate-400">

            <li>• Android optimization workflows</li>
            <li>• UI and gameplay integration systems</li>
            <li>• Particle effects and visual feedback</li>
            <li>• Performance optimization techniques</li>
            <li>• Modular gameplay architecture</li>

          </ul>

        </div>

      </div>

      {/* Tech Stack */}
      <div className="mt-12 flex flex-wrap gap-3">

        {[
          'Unity',
          'C#',
          'Android',
          'Gameplay Programming',
          'Optimization',
          'Enemy AI',
          'UI Systems',
          'Particle Systems',
        ].map((tag) => (

          <div
            key={tag}
            className="rounded-xl bg-white/10 px-4 py-2"
          >
            {tag}
          </div>

        ))}

      </div>

      {/* Buttons */}
      {/* <div className="mt-12 flex flex-wrap gap-4">

        <a
          href="https://play.google.com/store/apps/details?id=com.Nforge.&hl=en_IN"
          target="_blank"
          className="rounded-2xl bg-cyan-400 px-6 py-4 font-bold text-black transition hover:scale-105"
        >
          View On Google Play
        </a>

      </div> */}

    </div>

  </div>

</section>










{/* Mobile Games Section */}
<section className="mx-auto mt-32 max-w-6xl px-6">

  {/* Section Heading */}
  <div className="mb-12">
    <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
      MOBILE & AR EXPERIENCES
    </p>

    <h2 className="mt-3 text-5xl font-black">
      MORE OF MY WORK AND ONGOING PROJECTS
    </h2>
  </div>


  {/* ================= OINKDOKU ================= */}
  <div className="mb-32 overflow-hidden rounded-3xl border border-cyan-400/30 bg-[#11131f]">

    <div className="grid items-center gap-10 p-6 md:grid-cols-2 md:p-10">

      {/* Video */}
      <div className="flex justify-center">
        <video
          src={oinkdokuVideo}
          autoPlay
          muted
          loop
          playsInline
          controls
          className="max-h-[650px] w-auto max-w-full rounded-2xl object-contain"
        />
      </div>


      {/* Information */}
      <div>

        <p className="mb-3 text-LG font-bold uppercase tracking-[0.3em] text-cyan-400">
          MOBILE GAME
        </p>

        <img
          src={oinkdokuLogo}
          alt="Oinkdoku"
          className="mb-6 h-auto max-w-[280px]"
        />

        <p className="mb-6 text-gray-300">
          Oinkdoku is a playful puzzle game that combines the familiar
          mechanics of Sudoku with a colorful pig-themed experience.
          Players solve increasingly challenging puzzles while interacting
          with a fun and engaging visual style.
        </p>

        <div className="mb-6 flex flex-wrap gap-2">

          <span className="rounded-full bg-white/10 px-3 py-1 text-xs">
            Unity
          </span>

          <span className="rounded-full bg-white/10 px-3 py-1 text-xs">
            C#
          </span>

          <span className="rounded-full bg-white/10 px-3 py-1 text-xs">
            Mobile
          </span>

          <span className="rounded-full bg-white/10 px-3 py-1 text-xs">
            Puzzle Game
          </span>

        </div>

      </div>

    </div>


    {/* Banner */}
    <div className="px-6 pb-6 md:px-10 md:pb-10">

      <img
        src={oinkdokuBanner}
        alt="Oinkdoku gameplay"
        className="w-full rounded-2xl object-cover"
      />

    </div>

  </div>



  {/* ================= ANIMEVERSE ================= */}
  <div className="overflow-hidden rounded-3xl border border-cyan-400/30 bg-[#11131f]">

    <div className="grid items-center gap-10 p-6 md:grid-cols-2 md:p-10">

      {/* Information */}
      <div className="order-2 md:order-1">

        <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
          AR EXPERIENCE
        </p>

        <h2 className="mb-6 text-5xl font-black">
          ANIMEVERSE
        </h2>

        <p className="mb-6 text-gray-300">
  Animeverse is a web-based AR experience built with PlayCanvas,
  bringing interactive 3D characters and immersive environments
  into the real world. The application uses image recognition
  and mobile camera interaction to detect and augment real-world
  visuals with interactive digital content, delivering an
  immersive anime-inspired experience directly through the browser.
        </p>

        <div className="mb-6 flex flex-wrap gap-2">

          <span className="rounded-full bg-white/10 px-3 py-1 text-xs">
            AR
          </span>

          <span className="rounded-full bg-white/10 px-3 py-1 text-xs">
            PlayCanvas
          </span>

          <span className="rounded-full bg-white/10 px-3 py-1 text-xs">
            3D
          </span>

          <span className="rounded-full bg-white/10 px-3 py-1 text-xs">
            Mobile
          </span>

        </div>

      </div>


      {/* Video */}
      <div className="order-1 flex justify-center md:order-2">

        <video
          src={animeverseVideo}
          autoPlay
          muted
          loop
          playsInline
          controls
          className="max-h-[650px] w-auto max-w-full rounded-2xl object-contain"
        />

      </div>

    </div>


    {/* Real-world AR screenshots */}
    <div className="grid gap-6 px-6 pb-6 md:grid-cols-2 md:px-10 md:pb-10">

      <img
        src={animeverseShot1}
        alt="Animeverse AR experience"
        className="w-full rounded-2xl object-cover"
      />

      <img
        src={animeverseShot2}
        alt="Animeverse AR experience on mobile"
        className="w-full rounded-2xl object-cover"
      />

    </div>

  </div>

</section>

























{/* Projects */}
<section id="projects" className="px-6 py-24">

  <div className="mx-auto max-w-7xl">

    <h2 className="text-4xl font-black">
      Projects
    </h2>

    <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">

      {projects.map((project) => (

        <motion.div
          whileHover={{ y: -10 }}
          key={project.title}
          className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition"
        >

         <div className="mb-6 overflow-hidden rounded-[1.5rem]">

  <img
    src={project.image}
    alt={project.title}
    className="h-56 w-full object-cover transition duration-500 hover:scale-110"
  />

</div>

          <h3 className="text-3xl font-bold">
            {project.title}
          </h3>

          <p className="mt-5 leading-relaxed text-slate-400">
            {project.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">

            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-xl bg-black/20 px-4 py-2 text-cyan-300"
              >
                {tech}
              </span>
            ))}

          </div>

        </motion.div>

      ))}

    </div>

  </div>

</section>
{/* Skills */}
<section id="skills" className="px-6 py-24">

  <div className="mx-auto max-w-7xl">

    <h2 className="text-4xl font-black">
      Skills & Expertise
    </h2>

    <p className="mt-6 max-w-3xl text-lg text-slate-400 leading-relaxed">
      Specialized in immersive VR/AR systems,
      industrial simulations, gameplay engineering, runtime systems,
      optimization, and AI-integrated applications.
    </p>

    <div className="mt-14 flex flex-wrap gap-4">

      {skills.map((skill) => (

        <motion.div
          whileHover={{ scale: 1.05 }}
          key={skill}
          className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl"
        >

          <span className="font-semibold text-cyan-300">
            {skill}
          </span>

        </motion.div>

      ))}

    </div>

  </div>

</section>
{/* Experience */}
<section className="px-6 py-24">

  <div className="mx-auto max-w-7xl">

    <h2 className="text-4xl font-black">
      Experience
    </h2>

    <div className="mt-14 space-y-8">

{/* DevDen Solutions */}
<motion.div
  whileHover={{ y: -5 }}
  className="rounded-[2rem] border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
>

  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

    <div>
      <h3 className="text-3xl font-bold">
        Unity Developer
      </h3>

      <p className="mt-2 text-cyan-400">
        DevDen Solutions
      </p>
    </div>

    <div className="text-slate-400">
      2020 - Present
    </div>

  </div>

  <div className="mt-8 space-y-5 text-slate-400 leading-relaxed">

    <p>
      6+ years of experience developing immersive VR, AR, and XR
      applications using Unity across Meta Quest, HoloLens,
      DigiLens ARGO, Android, iOS, and WebGL platforms.
    </p>

    <p>
      Specialized in real-time 3D development, XR interaction,
      performance optimization, AI/ML integration, spatial systems,
      and cross-platform application development.
    </p>

    <p>
      Led a small team of 3–4 developers across multiple projects,
      contributing to technical planning, implementation, problem
      solving, and successful project delivery.
    </p>

  </div>

</motion.div>
    </div>

  </div>

</section>
{/* Contact */}
<section id="contact" className="px-6 py-24">

  <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/5 p-12 text-center backdrop-blur-xl">

    <h2 className="text-5xl font-black">
      Let’s Build Something Amazing
    </h2>

    <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-400">
      Open to Unity, VR/AR,XR, industrial simulation,
      gameplay programming.
    </p>

    <div className="mt-12 flex flex-wrap justify-center gap-5">

      {/* Email */}
      <a
        href="mailto:ashish100rana123@gmail.com"
        className="rounded-2xl bg-cyan-400 px-6 py-4 font-bold text-black transition hover:scale-105"
      >
        Email Me
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/ashish-rana-b936041b3/"
        target="_blank"
        className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 font-bold backdrop-blur-xl transition hover:border-cyan-400"
      >
        LinkedIn
      </a>

      {/* Portfolio */}
      {/* <a
        href="https://play.google.com/store/apps/details?id=com.Nforge.&hl=en_IN"
        target="_blank"
        className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 font-bold backdrop-blur-xl transition hover:border-cyan-400"
      >
        Google Play
      </a> */}

    </div>

  </div>

</section>

{/* Footer */}
<footer className="border-t border-white/10 px-6 py-8">

  <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-slate-500 md:flex-row">

    <p>
      © 2026 Ashish Rana. All rights reserved.
    </p>

    <p>
      Unity Developer • XR Engineer • Game Developer • Simulation Developer
    </p>

  </div>

</footer>
  </div>
);
}