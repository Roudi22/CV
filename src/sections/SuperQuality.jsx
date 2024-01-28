import { arrowRight } from "../assets/icons";
import { mainIcons, mainIconsDark } from "../assets/images";
import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = ({ darkMode }) => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container scroll-mt-8"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin capitalize text-4xl font-bold lg:max-w-lg">
          I provide you
          <span className="text-coral-red"> Super</span>
          <span className="text-coral-red"> Quality</span> Projects
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          In the ever-evolving world of web development, I thrive on staying
          up-to-date with the latest technologies and trends. I've
          been dedicated to creating visually stunning and highly functional
          websites.
        </p>

        <p className="mt-6 lg:max-w-lg info-text">
          My dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img
          src={darkMode ? mainIconsDark : mainIcons}
          alt="shoe-8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
