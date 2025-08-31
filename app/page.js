
"use client";

import { useState, useEffect, useRef } from "react";
import {
  ChevronDown,
  GitGraphIcon as Git,
  Linkedin,
  Mail,
  Download,
  ExternalLink,
  Code,
  Briefcase,
  GraduationCap,
  Menu,
  X,
  Star,
  Zap,
  Heart,
  Github,
  CloudIcon as Firebase,
  DatabaseIcon, 
  Server,
  Network,
  Atom,
  User,
  Lightbulb,
  Figma,
  Laptop,
  Brackets,
  Wind,
  MousePointer2,
} from "lucide-react";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const testimonialsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "projects",
        "skills",
        "testimonials",
        "experience",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  

  useEffect(() => {
    const carousel = testimonialsRef.current;
    if (!carousel) return;

    const scrollInterval = setInterval(() => {
      const cardWidth = carousel.querySelector(".snap-center").clientWidth;
      const currentScroll = carousel.scrollLeft;
      const maxScroll = carousel.scrollWidth - carousel.clientWidth;

      if (currentScroll + cardWidth >= maxScroll) {
        carousel.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        carousel.scrollBy({
          left: cardWidth,
          behavior: "smooth",
        });
      }
    }, 4000); // Scrolls every 4 seconds

    return () => clearInterval(scrollInterval);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const projects = [
    {
      title: "Cruise-Ease",
      description:
        "Developed CruiseEase, a role-based cruise ship management platform featuring live data dashboards, booking management, and admin controls.",
      technologies: ["Next.js", "Node.js", "MongoDB", "NextAuth"],
      liveDemo: "https://cruise-ease-8un892wuc-udit23122004-3240s-projects.vercel.app/",
      github: "https://github.com/Udi2312/Cruise-Ease",
      image: "/Cruise-ease.png",
    },
    {
      title: "Safe-Radius",
      description:
        "SafeRadius is a privacy-first POI discovery platform that allows users to find nearby hospitals, gyms, restaurants, and banks without sharing their location data, using end-to-end encryption and secure role-based access.",
      technologies: ["Next.js", "Node.js", "MongoDB", "Firebase Auth", "CryptoJs", "Geocoding API"],
      liveDemo: "https://safe-radius-hgp93zdqh-udit23122004-3240s-projects.vercel.app/",
      github: "https://github.com/Udi2312/Safe-Radius",
      image: "/safe-radius.png",
    },
    {
      title: "Chatty",
      description:
       "Developed a real-time one-on-one chat application inspired by WhatsApp using the MERN stack with Socket.IO for instant messaging and secure user authentication.",
      technologies: ["JavaScript", "React.js", "Socket.IO", "Axios" , "bcrypt"],
      liveDemo: "https://chat-app-8qrc.onrender.com/login",
      github: "https://github.com/Udi2312/Chat-App",
      image: "/Chatty.png",
    },
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive personal portfolio website showcasing my projects, skills, and achievements with an elegant and minimal UI.",
      technologies: ["Next.js", "Tailwind CSS", "Lucide React"],
      liveDemo: "#",
      github: "https://github.com/Udi2312/Portfolio",
      image: "/Portfolio.png",
    },
  ];

  const skills = {
    Frontend: [
      { name: "HTML5", icon: Code },
      { name: "CSS3", icon: Code },
      { name: "JavaScript", icon: Brackets },
      { name: "React.js", icon: Atom },
      { name: "Next.js", icon: Code },
      { name: "Tailwind CSS", icon: Wind },
      { name: "Redux", icon: Atom },
      { name: "Framer Motion", icon: MousePointer2 },
    ],
    Backend: [
      { name: "Node.js", icon: Server },
      { name: "Express.js", icon: Server },
      { name: "REST APIs", icon: Network },
      { name: "GraphQL", icon: Server },
    ],
    Databases: [
      { name: "MongoDB", icon: DatabaseIcon },
      { name: "PostgreSQL", icon: DatabaseIcon },
      { name: "Firebase", icon: Firebase },
    ],
    Tools: [
      { name: "Git", icon: Git },
      { name: "GitHub", icon: Github },
      { name: "VS Code", icon: Laptop },
      { name: "Figma", icon: Figma },
    ],
  };

  const testimonials = [
    {
      quote:
        "For udit i would say he is really motivated to learn new things, gives time to every concept and never give up which is the best part of him , his work in google hackathon was great 😃👍🏻 love to work with him",
      name: "Gaurav Dhall",
      role: "Classmate & Peer Developer",
      image: "/Gaurav.jpg",
    },
    {
      quote:
        "Cool, creative, and hardworking — that’s what defines him best.",
      name: "Shankar Jangid",
      role: "Classmate & Peer Developer",
      image: "/Shankar.jpg",
    },
    {
      quote:
        "He is really passionate about what he does.",
      name: "Yogesh",
      role: "Project Collaborator",
      image: "./Yogesh.jpg",
    },
    {
      quote:
        "Udit's ability to quickly grasp new concepts and contribute to our team's success was outstanding. A pleasure to work with.",
      name: "Vansh Gupta",
      role: "Classmate & Peer Developer",
      image: "./Vansh.jpg",
    },
    // {
    //   quote:
    //     "Highly skilled and always eager to take on new challenges. His work ethic and passion for coding are a huge asset to any team.",
    //   name: "Jessica Miller",
    //   role: "Senior Developer",
    //   image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    // },
  ];

  const experiences = [
    {
      title: "Web Development Learner",
      company: "Maharaja Agarsen Institute of Technology, Delhi",
      dates: "Jun 2024 - Sep 2024",
      description:
        "Started my web dev journey after my 2nd year of engineering. Learned the basics of HTML, CSS, and JavaScript.",
    },
    {
      title: "Hackathon Participant – Code4Cause",
      company: "NSUT Hackathon",
      dates: "Sept 2024",
      description:
        "Built 'BuddyFi' – a friend-finder app inspired by Tinder's UX Gained hands-on experience with Tailwind CSS and UI libraries",
    },
    {
      title: "Winner of Hackathon- MindOverData",
      company: "Bharti Vidyapeeth College of Engineering",
      dates: "Oct 2024",
      description:
        "Led a team of four students to victory in a data science hackathon by implementing machine learning algorithms and performing data analysis using Python libraries such as NumPy and pandas.",
    },
    {
      title: "MERN Stack Developer – Personal Projects",
      company: "Self Projects",
      dates: "Dec 2024 - May 2025",
      description:
        "Developed and deployed full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js) and other frameworks like Next.js. Gained experience in building RESTful APIs and integrating third-party services."
    },
    {
      title: "Full Stack Web Developer Intern",
      company: "Unified Mentor",
      dates: "June 2025 - Aug 2025",
      description:
        "Completed an internship focused on full-stack web development, working extensively with Next.js, Node.js, Express.js, and MongoDB. Built and optimized dynamic web applications, implemented responsive UIs, and integrated RESTful APIs to enhance functionality and performance."
    },
    
  ];

  return (
    <div className="bg-gray-950 text-gray-100 font-sans leading-relaxed">
      {/* Background with subtle glow effect */}
      <div className="fixed inset-0 z-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-0 w-80 h-80 bg-green-500 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-lime-500 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-950/80 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold font-mono">
              <a
                href="#home"
                className="bg-gradient-to-r from-emerald-400 via-lime-400 to-green-400 bg-clip-text text-transparent"
              >
                Udit B.
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Projects", "Skills", "Experience", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`relative text-gray-300 font-medium transition-colors hover:text-white group
                      ${activeSection === item.toLowerCase() ? "text-white" : ""}`}
                  >
                    {item}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-400 via-lime-400 to-green-400 transform transition-all duration-300
                      ${activeSection === item.toLowerCase() ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                    ></span>
                  </button>
                )
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-800">
              {["Home", "About", "Projects", "Skills", "Experience", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block w-full text-left py-2 text-gray-300 hover:text-white transition-colors border-b border-gray-800 last:border-b-0"
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          )}
        </div>
      </nav>

      <main className="relative z-10">
        {/* Hero Section */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center px-4 pt-20 relative"
        >
          <div className="text-center max-w-4xl mx-auto py-20">
            <h1 className="text-4xl md:text-7xl font-extrabold mb-6 animate-fade-in">
              Hi, I'm <br className="md:hidden" />
              <span className="bg-gradient-to-r from-emerald-400 via-lime-400 to-green-400 bg-clip-text text-transparent">
                Udit Bansal
              </span>
            </h1>
            <p className="text-xl md:text-3xl text-gray-300 mb-8 font-light animate-fade-in animation-delay-500">
              A Web Developer & IT Student.
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in animation-delay-1000">
              I'm a passionate 3rd-year IT student with a love for creating{" "}
              <span className="text-green-300">innovative web solutions</span>
              . I combine creativity with technical expertise to build
              applications that make a difference.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12 animate-fade-in animation-delay-1500">
              <a
                href="/Udit Bansal Resume.pdf"
                download
                className="bg-gradient-to-r from-emerald-500 to-lime-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-transform hover:scale-105 shadow-lg shadow-emerald-500/25 inline-flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>
              <button
                onClick={() => scrollToSection("contact")}
                className="border border-gray-700 text-gray-300 px-8 py-4 rounded-full text-lg font-semibold transition-colors hover:border-white hover:text-white inline-flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Get in Touch
              </button>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="py-20 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="rounded-lg overflow-hidden shadow-lg border border-gray-800">
              <img
                src="/Udit.jpeg"
                alt="Profile Picture"
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-left mb-8 relative">
                <span className="bg-gradient-to-r from-emerald-400 via-lime-400 to-green-400 bg-clip-text text-transparent">
                  About Me
                </span>
                <span className="absolute left-0 -bottom-2 w-16 h-1 bg-green-500 rounded-full"></span>
              </h2>
              <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-800 space-y-6">
                <div className="flex items-center gap-4">
                  <User className="w-8 h-8 text-emerald-400" />
                  <p className="text-lg text-gray-300">
                    I’m a creator at heart, passionate about building real-world projects that make an impact.
                    For me, web development is more than code — it’s the art of transforming ideas into experiences.
                    My journey began with a spark of inspiration from friends, and that spark has grown into a relentless drive to create.
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <GraduationCap className="w-8 h-8 text-lime-400" />
                  <p className="text-lg text-gray-300">
                    Currently in my 3rd year of IT at{" "}
                    <span className="text-green-400">Maharaja Agrasen Institute of Technology</span>,
                    I’ve already made my mark — winning a Data Science Hackathon at Bharti Vidyapeeth College of Engineering
                    and securing 2nd place at the national-level Code Clash 2.0 hosted at Google.
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <Lightbulb className="w-8 h-8 text-green-400" />
                  <p className="text-lg text-gray-300">
                    My toolkit includes <span className="text-emerald-400">React.js</span>,{" "}
                    <span className="text-lime-400">Node.js</span>,{" "}
                    <span className="text-green-400">Next.js</span>, Java for DSA, and now Python with a focus on Data Science & AI.
                    My goal? To thrive as a full-stack developer in the corporate world before venturing into my own startup journey.
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <Heart className="w-8 h-8 text-emerald-400" />
                  <p className="text-lg text-gray-300">
                    Outside the screen, I’m dedicated to fitness — hitting the gym regularly and embracing a healthy lifestyle
                    that fuels both my creativity and productivity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative">
              <span className="bg-gradient-to-r from-emerald-400 via-lime-400 to-green-400 bg-clip-text text-transparent">
                Featured Projects
              </span>
              <span className="absolute left-1/2 -bottom-2 w-16 h-1 bg-green-500 rounded-full transform -translate-x-1/2"></span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-gray-950 rounded-xl p-6 border border-gray-800 transition-all duration-300 hover:border-emerald-500 hover:shadow-xl hover:shadow-emerald-500/10 group"
                >
                  <div className="h-48 overflow-hidden rounded-t-lg mb-6">
                    <img
                      src={project.image}
                      alt={`${project.title} dashboard`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-lime-400 bg-clip-text text-transparent mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.liveDemo}
                      className="inline-flex items-center gap-2 text-sm font-medium text-lime-400 hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      className="inline-flex items-center gap-2 text-sm font-medium text-green-400 hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative">
              <span className="bg-gradient-to-r from-emerald-400 via-lime-400 to-green-400 bg-clip-text text-transparent">
                Skills & Technologies
              </span>
              <span className="absolute left-1/2 -bottom-2 w-16 h-1 bg-green-500 rounded-full transform -translate-x-1/2"></span>
            </h2>
            <div className="space-y-12">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category} className="text-center">
                  <h3 className="text-2xl font-bold mb-6 text-gray-200">
                    {category}
                  </h3>
                  <div className="flex flex-wrap justify-center gap-4">
                    {skillList.map((skill, index) => {
                      const IconComponent = skill.icon;
                      return (
                        <div
                          key={index}
                          className="flex items-center gap-2 bg-gray-900 rounded-full px-5 py-2 border border-gray-700 transition-all hover:bg-gray-800 hover:border-emerald-500 group"
                        >
                          <IconComponent className="w-5 h-5 text-emerald-400 group-hover:text-white" />
                          <span className="text-gray-300 font-medium group-hover:text-white">
                            {skill.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 px-4 bg-gray-900">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative">
              <span className="bg-gradient-to-r from-emerald-400 via-lime-400 to-green-400 bg-clip-text text-transparent">
                Experience & Education
              </span>
              <span className="absolute left-1/2 -bottom-2 w-16 h-1 bg-green-500 rounded-full transform -translate-x-1/2"></span>
            </h2>
            <div className="relative space-y-8 pl-8 md:pl-0 before:absolute before:left-4 md:before:left-1/2 before:top-0 before:w-0.5 before:h-full before:bg-gray-800 before:z-0">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative md:flex md:items-center md:even:flex-row-reverse"
                >
                  <div className="absolute -left-2 top-1 md:left-1/2 md:-translate-x-1/2 z-10 w-4 h-4 bg-emerald-500 rounded-full border-2 border-gray-900"></div>
                  <div className="md:w-1/2 md:pr-10 md:even:pr-0 md:even:pl-10">
                    <div className="bg-gray-950 rounded-xl p-6 border border-gray-800 transition-all duration-300 hover:shadow-lg hover:shadow-lime-500/10">
                      <div className="flex items-start gap-4 mb-2">
                        <Briefcase className="w-6 h-6 text-lime-400 mt-1 flex-shrink-0" />
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-200">
                            {exp.title}
                          </h3>
                          <div className="text-gray-300 font-medium">
                            {exp.company}
                          </div>
                          <div className="text-gray-400 text-sm">
                            {exp.dates}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm">{exp.description}</p>
                    </div>
                  </div>
                </div>
              ))}
              {/* <div className="relative md:flex md:items-center">
                <div className="absolute -left-2 top-1 md:left-1/2 md:-translate-x-1/2 z-10 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-900"></div>
                <div className="md:w-1/2 md:pr-10">
                  <div className="bg-gray-950 rounded-xl p-6 border border-gray-800 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10">
                    <div className="flex items-start gap-4 mb-2">
                      <GraduationCap className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-200">
                          Maharaja Agrasen Institute of Technology
                        </h3>
                        <div className="text-gray-300 font-medium">
                          Bachelor of Technology in Information Technology
                        </div>
                        <div className="text-gray-400 text-sm">
                          Expected Graduation: 2025
                        </div> */}
                      {/* </div> */}
                    {/* </div> */}
                  {/* </div> */}
                {/* </div> */}
              {/* </div> */}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative">
              <span className="bg-gradient-to-r from-emerald-400 via-lime-400 to-green-400 bg-clip-text text-transparent">
                What People Say
              </span>
              <span className="absolute left-1/2 -bottom-2 w-16 h-1 bg-green-500 rounded-full transform -translate-x-1/2"></span>
            </h2>
            <div className="relative overflow-hidden">
              <div
                ref={testimonialsRef}
                className="flex overflow-x-auto whitespace-nowrap snap-x snap-mandatory scroll-smooth pb-4 space-x-6"
                style={{
                  scrollbarWidth: "none", // For Firefox
                  MsOverflowStyle: "none", // For IE and Edge
                }}
              >
                {testimonials.map((testimonial, index) => {
                  return (
                    <div
                      key={index}
                      className="flex-shrink-0 snap-center w-full"
                    >
                      <div className="bg-gray-900 rounded-xl py-8 px-6 border border-gray-800 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 whitespace-normal">
                        <div className="flex items-center gap-6 mb-6">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-20 h-20 rounded-full object-cover border-2 border-emerald-400"
                          />
                          <div>
                            <p className="font-semibold text-xl text-white">
                              {testimonial.name}
                            </p>
                            <p className="text-gray-500 text-lg">{testimonial.role}</p>
                          </div>
                        </div>
                        <blockquote className="text-gray-400 text-lg italic mb-4">
                          "{testimonial.quote}"
                        </blockquote>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 bg-gray-900">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative">
      <span className="bg-gradient-to-r from-emerald-400 via-lime-400 to-green-400 bg-clip-text text-transparent">
        Contact Me
      </span>
      <span className="absolute left-1/2 -bottom-2 w-16 h-1 bg-green-500 rounded-full transform -translate-x-1/2"></span>
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="flex flex-col justify-center text-center md:text-left">
        <p className="text-xl text-gray-300 mb-6">
          I'm always open to new opportunities and collaborations. Feel
          free to reach out!
        </p>
        <div className="space-y-4 mb-8">
          <div className="flex items-center justify-center md:justify-start gap-3">
            {/* Mail icon from lucide-react */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail w-6 h-6 text-emerald-400"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            <a
              href="mailto:udit.ban2312@gmail.com"
              className="text-gray-300 hover:text-white transition-colors"
            >
              udit.ban2312@gmail.com
            </a>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-3">
            {/* Linkedin icon from lucide-react */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin w-6 h-6 text-lime-400"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/udit-bansal-4515712b2/"
              className="text-gray-300 hover:text-white transition-colors"
              rel="noopener noreferrer" // Added for security best practice
            >
              linkedin.com/in/uditbansal
            </a>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-3">
            {/* Github icon from lucide-react */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github w-6 h-6 text-green-400"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.44-.78-3.46 0 0-1.09 0-3.44 1.39-1-.27-2-.38-3.08-.38-.94 0-1.92.09-3 .38C6.5 2 5.5 2 5.5 2c-.55 1.06-.92 2.23-.78 3.46 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/></svg>
            <a
              target="_blank"
              href="https://github.com/Udi2312"
              className="text-gray-300 hover:text-white transition-colors"
              rel="noopener noreferrer" // Added for security best practice
            >
              github.com/uditbansal
            </a>
          </div>
        </div>
      </div>
      <form action="https://formspree.io/f/mldlqbzw" method="POST" className="bg-gray-950 p-8 rounded-xl border border-gray-800 space-y-6">
        <div>
          <label htmlFor="name" className="block text-gray-300 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name" 
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-gray-100 placeholder-gray-500 focus:border-emerald-500 focus:outline-none transition-colors"
            placeholder="Your Name"
            required // Added for basic validation
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-300 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email" 
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-gray-100 placeholder-gray-500 focus:border-lime-500 focus:outline-none transition-colors"
            placeholder="your.email@example.com"
            required // Added for basic validation
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-300 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message" 
            rows={5}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-gray-100 placeholder-gray-500 focus:border-green-500 focus:outline-none transition-colors resize-none"
            placeholder="Your message..."
            required // Added for basic validation
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-emerald-500 to-lime-500 text-white py-3 rounded-lg transition-transform hover:scale-105 font-semibold shadow-lg shadow-emerald-500/25"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
  
</section>
        {/* Footer */}
        <footer className="bg-gray-950 border-t border-gray-800 py-8 px-4 text-center">
          <div className="max-w-7xl mx-auto">
            <p className="text-gray-400 text-sm mb-4">
              © {new Date().getFullYear()}{" "}
              <span className="text-emerald-400 font-bold">Udit Bansal</span>.
              All Rights Reserved.
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/Udi2312"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/udit-bansal-4515712b2/"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:udit.ban2312@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email Udit"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </footer>
        
      </main>
    </div>
  );
}