
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
    imgURL: christmasWebsite,
    uri: "https://christmas-parallax.netlify.app/",
    name: "Christmas with parallel animation",
    tag: "#HTML #CSS",
  },
  {
    imgURL: sanityPortfolio,
    uri:"https://roudi-profile.netlify.app/",
    name: "Dynamic Portfolio",
    tag: "#React #MUI #SANITY",
  },
  {
    imgURL: multibleHomePageProject,
    uri:"https://dulcet-choux-29a4c4.netlify.app/",
    name: "Website with multible Home pages",
    tag: "#React #HTML #CSS",
  },
  {
    imgURL: classicPortfolio,
    uri:"https://rdevportfolio.netlify.app/",
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
