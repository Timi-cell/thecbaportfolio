import HER from "../assets/her.jpeg";
import { FaArrowDown } from "react-icons/fa";

const Hero = () => {

  return (
    <div className="hero bg-base-200 min-h-screen lg:pt-10 md:pt-20 pt-30 px-6.5 md:px-10">
      {/* 1. Added 'text-center md:text-left' to the container below */}
      <div className="hero-content flex flex-col lg:flex-row-reverse items-center text-left">
        {/* Circular avatar — wrapper enforces the circle, overflow-hidden clips the image */}
        <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-amber-400 shrink-0 flex-none">
          <img
            src={HER}
            alt="A picture of the digital marketer, Chinwendu Bolaji Ayodele"
            className="w-full h-full object-cover object-center"
          />
        </div>
        {/* 2. Added 'flex flex-col items-center md:items-start' to center the button/text group */}
        <div className="flex flex-col items-start mt-10">
          <h1 className="text-5xl font-bold text-white her-style leading-15">
            <span>
              I Don’t Just{" "}
              <em className="text-base-content">Manage Socials.</em>
            </span>
            <br className="hidden min-[330px]:block" />{" "}
            <span className="text-base-content">I</span> Scale Brands.
          </h1>
          <p className="py-6 text-[#dcdcdc] lg:w-4/5 w-full text-base leading-6.5">
            In a world of 3-second attention spans, "good enough" is invisible.{" "}
            <br className="md:block hidden" />
            I’m Chinwendu, a Digital Marketer who lives at the intersection of
            psychology and analytics. I don't just post for the sake of the
            algorithm; I create narratives that build communities and drive
            conversions.
            <br /> My mission is simple: Make your brand impossible to ignore.
          </p>
          <a href="#results">
            <button className="btn btn-outline btn-base-content hover:bg-base-content hover:text-white text-base py-5 max-[330px]:py-8">
              Check out my Results <FaArrowDown />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
