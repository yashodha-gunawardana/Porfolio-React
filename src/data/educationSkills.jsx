export const D = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";


export const Icons = {
    Html5:      { src: `${D}/html5/html5-original.svg`,              name: "HTML",         color: "#E34F26", glow: "rgba(227,79,38,0.35)"   },
    Css3:       { src: `${D}/css3/css3-original.svg`,                name: "CSS",          color: "#1572B6", glow: "rgba(21,114,182,0.35)"  },
    JavaScript: { src: `${D}/javascript/javascript-original.svg`,    name: "JavaScript",   color: "#F7DF1E", glow: "rgba(247,223,30,0.35)"  },
    TypeScript: { src: `${D}/typescript/typescript-original.svg`,    name: "TypeScript",   color: "#3178C6", glow: "rgba(49,120,198,0.35)"  },
    React:      { src: `${D}/react/react-original.svg`,              name: "React",        color: "#61DAFB", glow: "rgba(97,218,251,0.35)"  },
    Tailwind:   { src: `${D}/tailwindcss/tailwindcss-original.svg`,  name: "Tailwind",     color: "#38BDF8", glow: "rgba(56,189,248,0.35)"  },
    Bootstrap:  { src: `${D}/bootstrap/bootstrap-original.svg`,      name: "Bootstrap",    color: "#7952B3", glow: "rgba(121,82,179,0.35)"  },
    Responsive: { src: `${D}/chrome/chrome-original.svg`,            name: "Responsive",   color: "#4285F4", glow: "rgba(66,133,244,0.35)"  },
    ReactNative:{ src: `${D}/react/react-original.svg`,              name: "React Native", color: "#61DAFB", glow: "rgba(97,218,251,0.35)"  },
    Expo:       { src: `${D}/expo/expo-original.svg`,                name: "Expo",         color: "#e2e8f0", glow: "rgba(226,232,240,0.2)"  },
    NodeJS:     { src: `${D}/nodejs/nodejs-original.svg`,            name: "Node.js",      color: "#3C873A", glow: "rgba(60,135,58,0.35)"   },
    Express:    { src: `${D}/express/express-original.svg`,          name: "Express.js",   color: "#aaaaaa", glow: "rgba(200,200,200,0.2)"  },
    SpringBoot: { src: `${D}/spring/spring-original.svg`,            name: "Spring Boot",  color: "#6DB33F", glow: "rgba(109,179,63,0.35)"  },
    Java:       { src: `${D}/java/java-original.svg`,                name: "Java",         color: "#f89820", glow: "rgba(248,152,32,0.35)"  },
    Python:     { src: `${D}/python/python-original.svg`,            name: "Python",       color: "#3776AB", glow: "rgba(55,118,171,0.35)"  },
    MySQL:      { src: `${D}/mysql/mysql-original.svg`,              name: "MySQL",        color: "#00758F", glow: "rgba(0,117,143,0.35)"   },
    MongoDB:    { src: `${D}/mongodb/mongodb-original.svg`,          name: "MongoDB",      color: "#47A248", glow: "rgba(71,162,72,0.35)"   },
    Figma:      { src: `${D}/figma/figma-original.svg`,              name: "Figma",        color: "#F24E1E", glow: "rgba(242,78,30,0.35)"   },
    Wireframe:  { src: `${D}/sketch/sketch-original.svg`,            name: "Wireframing",  color: "#F7B500", glow: "rgba(247,181,0,0.35)"   },
    Prototype:  { src: `${D}/xd/xd-original.svg`,                   name: "Prototyping",  color: "#FF2BC2", glow: "rgba(255,43,194,0.35)"  },
};

export const EduIcons = {
    University: ({ size = 20, color = "currentColor" }) => (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 512 512" fill={color}>
            <path d="M243.4 2.6l-224 96c-14 6-21.8 21-18.7 35.8S16.8 160 32 160l0 8c0 13.3 10.7 24 24 24l400 0c13.3 0 24-10.7 24-24l0-8c15.2 0 28.3-10.7 31.3-25.6s-4.8-29.9-18.7-35.8l-224-96c-10.3-4.4-22.1-4.4-32.4 0zM128 224l-64 0 0 196.3c-11.6 6.9-20.4 18.2-23.6 32.1L36 464c-3.3 14.4 7.3 28 22.1 28l395.8 0c14.8 0 25.4-13.6 22.1-28l-4.4-11.6c-3.2-13.9-12-25.2-23.6-32.1L448 224l-64 0 0 192-40 0 0-192-64 0 0 192-48 0 0-192-64 0 0 192-40 0 0-192zM256 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/>
        </svg>
    ),
    School: ({ size = 20, color = "currentColor" }) => (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 640 512" fill={color}>
            <path d="M0 224v272c0 8.8 7.2 16 16 16l608 0c8.8 0 16-7.2 16-16l0-272c0-8.8-7.2-16-16-16L480 208l0 80-48 0 0-80-160 0 0 80-48 0 0-80L16 208c-8.8 0-16 7.2-16 16zM208 0c-8.8 0-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16l80 0 0 48-48 0c-8.8 0-16 7.2-16 16l0 32 192 0 0-32c0-8.8-7.2-16-16-16l-48 0 0-48 80 0c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16L208 0zM96 384a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm288 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64z"/>
        </svg>
    ),
    GradCap: ({ size = 20, color = "currentColor" }) => (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 640 512" fill={color}>
            <path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l280.6 101.3c7.5 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496 262.6l-166.9 60.3c-2.7 1-5.5 1.8-8.3 2.4c-11.5 2.6-23.5 2.6-35 0c-2.8-.6-5.6-1.4-8.3-2.4L112 262.6 128 408z"/>
        </svg>
    ),
};

export const educations = [
    { iconKey: "University", name: "IJSE",                       degree: "Software Engineering", year: "2024 – Present", color: "#38bdf8" },
    { iconKey: "School",     name: "R/Vidyakara Maha Vidyalaya", degree: "Advanced Level",        year: "2019 – 2021",   color: "#818cf8" },
    { iconKey: "GradCap",    name: "R/Vidyakara Maha Vidyalaya", degree: "Ordinary Level",        year: "2015 – 2019",   color: "#61DAFB" },
];

export const skills = [
    { category: "Frontend", accent: "#0084FF",  techs: ["Html5","Css3","JavaScript","TypeScript","React","Tailwind","Bootstrap","Responsive"] },
    { category: "Mobile",   accent: "#38bdf8",  techs: ["ReactNative","Expo"] },
    { category: "Backend",  accent: "#6DB33F",  techs: ["NodeJS","Express","SpringBoot","Java","Python"] },
    { category: "Database", accent: "#47A248",  techs: ["MySQL","MongoDB"] },
    { category: "Design",   accent: "#F24E1E",  techs: ["Figma","Wireframe","Prototype"] },
];



