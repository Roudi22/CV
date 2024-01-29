import { clearAllListeners } from "@reduxjs/toolkit";
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
  reduxLogo,
  javascriptLogo,

  christmasWebsite,
  sanityPortfolio,
  multibleHomePageProject,
  classicPortfolio,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
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

export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
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
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Morich Brown",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: customer2,
    customerName: "Lota Mongeskar",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
  {
    imgURL: customer2,
    customerName: "Lota Mongeskar",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
  {
    imgURL: customer2,
    customerName: "Lota Mongeskar",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
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
