import { useState, useEffect } from "react";
import { motion } from "motion/react";
import HER from "../assets/her.jpeg";

const Hero = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  const imageUrl = isOnline
    ? "https://res.cloudinary.com/dzqaqbrng/image/upload/v1773280122/her_vulygd.jpg"
    : HER;

  return (
    <div className="hero bg-base-200 min-h-screen lg:pt-10 md:pt-20 pt-30 px-6.5 md:px-10 ">
      {/* 1. Added 'text-center md:text-left' to the container below */}
      <div className="hero-content items-center flex-col lg:flex-row-reverse text-left">
        <motion.div
          className="avatar"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="ring-primary ring-offset-base-content w-full md:w-96 rounded-full ring-2 ring-offset-2">
            <img src={imageUrl} alt="HER" />
          </div>
        </motion.div>
        {/* 2. Added 'flex flex-col items-center md:items-start' to center the button/text group */}
        <div className="flex flex-col items-center md:items-start lg:mt-0 md:mt-10 mt-10">
          <h1 className="text-5xl font-bold text-white her-style leading-15">
            <span>
              I Don’t Just{" "}
              <em className="text-base-content">Manage Socials.</em>
            </span>
            <br className="hidden min-[330px]:block" />{" "}
            <span className="text-base-content">I</span> Scale Brands.
          </h1>
          <p className="py-6 text-[#dcdcdc] lg:w-4/5 w-full text-base">
            In a world of 3-second attention spans, "good enough" is invisible.{" "}
            <br className="md:block hidden" />
            I’m Chinwendu, a Digital Marketer who lives at the intersection of
            psychology and analytics. I don't just post for the sake of the
            algorithm; I create narratives that build communities and drive
            conversions.
            <br /> My mission is simple: Make your brand impossible to ignore.
          </p>
          <a href="#results">
            <button className="btn btn-outline btn-base-content hover:bg-base-content hover:text-white her-style text-base py-5 max-[330px]:py-8">
              Check out my Analytics/Results
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
