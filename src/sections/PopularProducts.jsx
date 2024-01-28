import PopularProductCard from "../components/PopularProductCard";
import { projects } from "../constants";
const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12 scroll-mt-[130px]">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">My <span className="text-coral-red">Featured</span> Projects</h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value.
        </p>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {
          projects.map((project) => (
            <PopularProductCard key={project.name} {...project}/>
          ))
        }
      </div>
    </section>
  );
};

export default PopularProducts;
