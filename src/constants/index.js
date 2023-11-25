import {
    mobile,
    fullstack,
    web,
    java,
    c,
    python,
    javascript,
    typescript,
    kotlin,
    html,
    css,
    reactjs,
    tailwind,
    expressjs,
    nodejs,
    mongodb,
    sqlite,
    firebase,
    heroku,
    git,
    figma,
    starbucks,
    tesla,
    threejs,
    generator,
    fitness
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Fullstack Developer",
      icon: fullstack,
    },
    {
      title: "Kotlin Developer",
      icon: mobile,
    }
  ];
  
  const technologies = [
    {
      name: "Java",
      icon: java,
    },
    {
      name: "C++",
      icon: c,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "Kotlin",
      icon: kotlin,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Express JS",
      icon: expressjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Firebase",
      icon: firebase,
    },
    {
      name: "Heroku",
      icon: heroku,
    },
    {
      name: "SQLite",
      icon: sqlite,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "Figma",
      icon: figma,
    }
  ];
  
  const experiences = [
    {
      title: "Developer",
      company_name: "???",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Mon Yr - Mon Yr",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Developer",
      company_name: "???",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Mon Yr - Mon Yr",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Bryan proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Bryan does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Bryan optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "3D Environment Generator",
      description:
        "Web-based platform that allows users to generate and download customed 3D environment models.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "ThreeJS",
          color: "green-text-gradient",
        },
        {
          name: "MaterialUI",
          color: "pink-text-gradient",
        },
        {
          name: "MongDB",
          color: "blue-text-gradient",
        },
        {
          name: "Flask",
          color: "green-text-gradient",
        },
      ],
      image: generator,
      source_code_link: "https://github.com/ucsb-cs148-w23/project-t11-proceduralgeneration/",
    },
    {
      name: "FoodFitness",
      description:
        "Android application that enables users to track their daily water and calories intake, exercise, and set remainders.",
      tags: [
        {
          name: "Kotlin",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase_CloudStorage",
          color: "green-text-gradient",
        },
        {
          name: "Firebase",
          color: "pink-text-gradient",
        },
      ],
      image: fitness,
      source_code_link: "https://github.com/Bryanz2019/foodFitnessApp/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };