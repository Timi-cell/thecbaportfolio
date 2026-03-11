import HER from "../assets/her.jpeg";

const Hero = () => {
  return (
    <div className="hero bg-base-200 min-h-screen lg:pt-10 md:pt-20 pt-30 px-2 md:px-10">
      {/* 1. Added 'text-center md:text-left' to the container below */}
      <div className="hero-content items-center flex-col lg:flex-row-reverse text-center md:text-left">
        <div className="avatar">
          <div className="ring-primary ring-offset-base-100 w-96 rounded-full ring-2 ring-offset-2">
            <img src={HER} />
          </div>
        </div>
        {/* 2. Added 'flex flex-col items-center md:items-start' to center the button/text group */}
        <div className="flex flex-col items-center md:items-start lg:mt-0 md:mt-10 mt-10">
          <h1 className="text-5xl font-bold text-white her-style">
            I Don’t Just <em className="text-base-content">Manage Socials.</em>{" "}
            <br /> <span className="text-base-content">I</span> Scale Brands.
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
          <button className="btn btn-outline btn-base-content hover:bg-base-content hover:text-base-100 her-style text-base">
            Check out my Analytics/Results
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
