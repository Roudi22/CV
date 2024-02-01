import React, { useState, useEffect} from "react";
import { projects } from "../constants";
import MainProjectCard from "../components/MainProjectCard";
import { useSelector } from "react-redux";
const MyProjects = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  return (
    <section className={`relative flex flex-col gap-5 items-center justify-center w-full min-h-screen max-xl:padding-x pt-32 ${ darkMode ? "dark" : ""}`}>
      {projects.map( project => (
        <MainProjectCard {...project}/>

      ))}
    </section>
  );
};

export default MyProjects;
