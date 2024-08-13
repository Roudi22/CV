
import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import {
  promptopia,
  pixton,
  blackHolePortfolio,
  reactLogo,
  javascriptLogo,

  christmasWebsite,
  sanityPortfolio,
  multibleHomePageProject,
  classicPortfolio,
  xClone,
  chatApp,
  nextLogo,
  mongodbLogo,
  googleLogo,
  framerMotionLogo,
} from "../assets/images";

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "about-me", label: "About Me" },
  { to: "my-projects", label: "Projects" },
  ];

export const heroImages = [
  {
    id: 1,
    title: "Hi There!",
    subtitle: "I'm Roudi",
    desc: "passionate frontend developer with a keen eye for design and a love for crafting seamless user experiences. With a strong foundation in HTML, CSS, and JavaScript, I bring creativity and technical expertise to every project I undertake.",
    technology: [],
    thumbnail: pixton,
    bigHeroImage: pixton,
    width: 410,
  },
  {
    id:2,
    uri: "https://next-js-prompt-j4nhr0lxk-roudi22.vercel.app/",
    title: "Fullstack Website",
    subtitle: "Promptopia",
    desc: "Share AI Prompts with the world with Promptopia. Log in, create your post and discover new prompts.",
    technology: [
        {
            logo: reactLogo,
            label: "React"
        },
        {
            logo: javascriptLogo,
            label: "Javascript"
        },
        {
            logo: nextLogo,
            label: "NextJs"
        },
        {
            logo: mongodbLogo,
            label: "MongoDB"
        },
        {
            logo: googleLogo,
            label: "Google Console"
        }
    ],
    thumbnail: promptopia,
    bigHeroImage: promptopia,
    width: 610,
  },
  {
    id: 3,
    title: "Modern Portfolio",
    subtitle: "The Black Hole",
    desc: "A modern portfolio built with animations, responsive and makes you feel that you are between the stars!",
    technology: [
        {
            logo: reactLogo,
            label: "React"
        },
        {
            logo: javascriptLogo,
            label: "Javascript"
        },
        {
            logo: nextLogo,
            label: "NextJs"
        },
        {
            logo: framerMotionLogo,
            label: "Framer Motion"
        }
    ],
    thumbnail: blackHolePortfolio,
    bigHeroImage: blackHolePortfolio,
    width: 610,
  },
];


export const projects = [
  {
    imgURL: chatApp,
    uri: "https://chat-app-by-roudi.vercel.app/",
    desc: "Experience the future of communication with the Chat App, a real-time messaging platform that connects users from around the world. Built with NextJs, Redis, Pusher and Kinde, this project is a testament to my skills in frontend development and user experience design.",
    name: "Chat App",
    tag: "#NextJs #NodeJs #Redis #Kinde #Pusher",
  },
  {
    imgURL: xClone,
    uri: "https://x-clone-hq1d.onrender.com/",
    desc: "A social media app that allows users to post, like, and comment on photos. Built with React, NodeJs, and Tailwind CSS, this project is a showcase of my skills in frontend development and user interface design.",
    name: "X-Clone",
    tag: "#React #NodeJs #TailwindCSS #ReactQuery",
  },
  {
    imgURL: christmasWebsite,
    uri: "https://christmas-parallax.netlify.app/",
    desc: "Celebrate the festive spirit with the enchanting Christmas Page, a delightful project that brings the magic of the holiday season to life. Crafted with a blend of HTML, CSS, and JavaScript, this interactive page is designed to immerse users in the joyous atmosphere of Christmas.",
    github: "https://github.com/Roudi22/responsive-christmas-website-2-main",
    name: "Christmas with parallel animation",
    tag: "#HTML #CSS #Javascript",
  },
  {
    imgURL: sanityPortfolio,
    uri:"https://roudi-profile.netlify.app/",
    desc:"Introducing my personal portfolio website, a dynamic showcase of my skills and projects. Built with React in the frontend and powered by Sanity CMS in the backend, this website seamlessly combines cutting-edge technology and a user-friendly content management system.",
    github: "https://github.com/Roudi22/Portfolio_3_sanity",
    name: "Dynamic Portfolio",
    tag: "#React #MUI #SANITY",
  },
  {
    imgURL: multibleHomePageProject,
    uri:"https://dulcet-choux-29a4c4.netlify.app/",
    desc:"Step into the diverse world of my portfolio website, offering not just one, but four unique homepages, each designed to reflect different aspects of my skills and personality. Built entirely with React, this portfolio is a showcase of versatility, allowing visitors to choose a personalized entry point into my digital space.",
    name: "Website with multible Home pages",
    tag: "#React #HTML #CSS",
  },
  {
    imgURL: classicPortfolio,
    uri:"https://rdevportfolio.netlify.app/",
    github:"https://github.com/Roudi22/React-Portfolio-Website",
    desc:"This React-based portfolio seamlessly integrates motion design elements, providing an immersive and visually dynamic experience. With added features like a loader animation and React Router DOM for seamless navigation, this portfolio is a showcase of creativity and technical prowess.",
    name: "Classic Portfolio with Styled Components",
    tag: "#React #Styled_component",
  },
  
];

export const services = [
  {
    imgURL: truckFast,
    label: "Rapid Deployment Maven",
    subtext: "As your Rapid Deployment Maven, I specialize in expediting project timelines without compromising quality.",
  },
  {
    imgURL: shieldTick,
    label: "Security Shield Guardian",
    subtext:
      "I implement robust security measures to protect your website and user data from potential threats.",
  },
  {
    imgURL: support,
    label: "User Interface Elegance",
    subtext: "I specialize in creating intuitive, user-friendly interfaces that leave a lasting impression.",
  },
];

export const footerLinks = [
  {
    title: "Get in touch",
    links: [
      { name: "customer@nike.com", link: "mailto:customer@nike.com" },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
