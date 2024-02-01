import { useState, useEffect } from "react";

import { arrowRight } from "../assets/icons";

import Button from "../components/Button";

import { heroImages } from "../constants";
import ProjectCard from "../components/ProjectCard";
const Hero = () => {
  const [selectedCard, setSelectedCard] = useState(heroImages[0])

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-between items-start w-full max-xl:padding-x pt-28">
        
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className={`xl:bg-white xl:whitespace-nowrap relative z-[5] pr-10`}>
            {selectedCard.title}
          </span>
          <br />
          <span className="relative text-coral-red inline-block mt-3 z-[5]">{selectedCard.subtitle}</span> 
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-lg">
          {selectedCard.desc}
        </p>
        {selectedCard.uri && <Button label="Live Demo" uri={selectedCard.uri} iconURL={arrowRight} />}

        <div className="flex justify-start items-start flex-wrap w-full mt-10 gap-16">
            <div className="text-center flex gap-6">
              { selectedCard.technology.map((tech, index) => (
                <div className="flex flex-col justify-center gap-6">
                <img src={tech.logo} key={index} alt={tech.label} className="object-contain aspect-square" width={70} height={70}/>
              <p className="leading-7 font-montserrat text-slate-gray">
                {tech.label}
              </p>

                </div>
              ))}
            </div>
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={selectedCard.bigHeroImage}
          alt="big hero shoe"
          width={selectedCard.width}
          height={300}
          className="object-contain relative"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {heroImages.map((heroImage, index) => (
            <div key={index}>
              <ProjectCard
                project={heroImage}
                imgURL={heroImage.bigHeroImage}
                changeBigImage={() => {
                  console.log(heroImage)
                  setSelectedCard(heroImage);
                }}
                bigShoeImg={selectedCard.bigHeroImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
