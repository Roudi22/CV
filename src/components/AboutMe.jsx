import React from "react";
import { motion, useScroll } from "framer-motion";
import { useSelector } from "react-redux";
const AboutMe = () => {
  const darkMode = useSelector(state => state.theme.darkMode);
  console.log(darkMode)
  return (
    <section className={`relative gap-7 flex max-small:flex-col justify-evenly items-center w-full min-h-screen max-xl:padding-x pt-28 ${darkMode ? 'dark' : 'bg-white text-slate-gray'}`}>
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className={`border flex flex-col gap-5 justify-between leading-10 w-full max-w-[45%] max-small:max-w-full py-8 px-6 font-montserrat`}
  >
    <h2 className="titles-font-size text-center font-palanquin text-coral-red font-bold">
      Web Developer
    </h2>
    <p className="desc-font-size">
      I love to create design which speaks, Keep it clean, minimal and simple.
    </p>
    <p className="desc-font-size">
      Embarking on my journey in the tech realm, I've honed my skills in HTML, CSS, and JavaScript, transforming lines of code into visually compelling and user-friendly interfaces. From the inception of a project to its pixel-perfect execution, I thrive on turning concepts into reality.
    </p>
    <p className="desc-font-size">
      <strong>I like to Design</strong> <br />
      <ul>
        <li>Web Design</li>
        <li>Mobile Apps</li>
      </ul>
    </p>
  </motion.div>

  <motion.div 
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.3,
      ease: [0, 0.71, 0.2, 1.01],
      scale: {
        type: "spring",
        damping: 5,
        stiffness: 100,
        restDelta: 0.001
      }
    }}
    className="border flex flex-col gap-5 leading-10 py-8 px-6 w-full max-w-[45%] max-small:max-w-full font-montserrat"
  >
    <h2 className="titles-font-size text-center font-palanquin text-coral-red font-bold">
      Web Designer
    </h2>
    <p className="desc-font-size">Design is not just about making things look good; it's about creating meaningful and intuitive experiences.</p>
    <p className="desc-font-size">
      As a designer, I believe in the power of aesthetics to enhance user engagement. Each project is an opportunity to blend form and function seamlessly, ensuring that not only does it work flawlessly, but it looks exceptional too.
    </p>
    <p className="desc-font-size">
      <strong>Favourite Design Tools</strong> <br />
      <ul>
        <li>Figma</li>
        <li>Adobe Photoshop</li>
      </ul>
    </p>
  </motion.div>
</section>

  );
};

export default AboutMe;
