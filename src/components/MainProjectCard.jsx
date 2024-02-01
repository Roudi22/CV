import React from 'react'
import { multibleHomePageProject } from '../assets/images'
import { Link } from 'react-router-dom'
import { githubSVG } from '../assets/icons'
import Button from './Button'

const MainProjectCard = ({ imgURL, desc, uri, github, name}) => {
    
  return (
    <div className="max-w-3xl max-small:flex max-small:flex-col border rounded-2xl p-4 grid grid-cols-2 gap-5 place-items-center">
        <div className="rounded-2xl ">
          <img className="object-cover rounded-2xl aspect-[16/12] " src={imgURL} width={700} alt="" />
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="text-3xl font-bold font-montserrat">{name}</h3>
          <p>
          {desc}
          </p>
          <div className="flex justify-between max-small:justify-around max-xsmall:flex-col gap-5 items-center">
            { github && 
            <Link to={github} className="flex items-center gap-3">
            <img src={githubSVG} width={30} alt="github Logo" />
            <span>Github Repo</span>
            </Link>
            }
            
            <Link to={uri}>
            <Button label="learn more" />
            </Link>
          </div>
        </div>
      </div>
  )
}

export default MainProjectCard