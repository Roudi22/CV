import { star } from "../assets/icons"
import { Link } from "react-router-dom"
const PopularProductCard = ({imgURL, name, tag, uri}) => {
  return (
    <div className="flex flex-1 flex-col justify-between items-center w-full max-sm:w-full">
        <img src={imgURL} alt={name} className="object-cover aspect-square mx-auto"/>
        <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">{name}</h3>
        <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">{tag}</p>
      <Link to={uri} target="_blank" className="border text-center py-4 rounded-lg w-full text-[20px] mt-3 hover:bg-coral-red hover:text-white transition delay-100">Demo</Link>
    </div>
  )
}

export default PopularProductCard