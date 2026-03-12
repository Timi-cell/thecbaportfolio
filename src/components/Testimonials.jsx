import Aluko from "../assets/aluko.jpg";
import Adeosun from "../assets/adeosun.jpg";
import Mmesoma from "../assets/mmesoma.jpg";
import Eze from "../assets/eze.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Mmesoma Evidence Chidozie",
      photo: Mmesoma,
      role: "Brand Designer",
      line: "Booking a one-on-one consultation with Chinwendu Bolaji has been one of the best decisions I have made this year. She took her time in telling me all that she knows about LinkedIn and how I can grow, even as a small LinkedIn creator. Applying what I learned from her brought about some massive results in a short while. Chinwendu Bolaji is really a great mentor and a coach.",
    },
    {
      name: "Eze Nwakuba",
      photo: Eze,
      role: "Debate Coach & Founder, Royal Rhetorics",
      line: "Working with you, I'm almost tempted to say efficiency runs in the surname, but that would be an unfair summary of your incredible work ethic and professionalism. You embody everything I dream of all my teams to resemble - independence, dexterity, problem-solving, discipline, and superb communication.",
    },
    {
      name: "Samuel Aluko (THE CRACK DEV.)",
      photo: Aluko,
      role: "Software Developer",
      line: "Chinwendu Bolaji Ayodele is really the best when it comes to scaling your brand beyond your imagination. She's hardworking, smart, patient and full of energy. I call her 'The Chinwendu Bolaji Ayodele'. Trust me, your brand will be getting the best from a top brand (HER)",
    },
    {
      name: "Oluwatumilara Adeosun",
      photo: Adeosun,
      role: "Social Media Manager",
      line: "Thanks for the content and engagement strategy. I did my highest engagement ever. God bless you!",
    },
  ];

  const scrollToSlide = (idx) => {
    const element = document.getElementById(`slide${idx + 1}`);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "nearest", // Key: prevents the page from jumping vertically
        inline: "start",
      });
    }
  };

  return (
    <div className="pt-20 px-6.5 md:px-10 pb-10" id="testimonials">
      <h2 className="her-style font-extrabold text-3xl wrap-break-word">
        TESTIMONIALS
      </h2>
      <div className="carousel w-full mt-10">
        {testimonials.map((testimonial, idx) => (
          <div
            key={idx}
            id={`slide${idx + 1}`}
            className="carousel-item relative w-full max-[335px]:h-145 h-125 sm:h-95"
          >
            <div className="card bg-[#A56E06] text-neutral-content w-full">
              <div className="card-body items-center text-center">
                <div className="avatar">
                  <div className="ring-primary ring-offset-base-content w-30 rounded-full ring-2 ring-offset-2">
                    <img src={testimonial.photo} />
                  </div>
                </div>
                <h3 className="mt-3 text-base md:text-lg font-bold her-style text-white">
                  {testimonial.name}
                </h3>
                <h4 className="text-sm">{testimonial.role}</h4>
                <p className="mt-2 text-sm md:text-base w-full md:w-3/4 leading-6 text-black/90 font-medium">
                  <i>"{testimonial.line}"</i>
                </p>
              </div>
            </div>
            <div className="hidden absolute left-5 right-5 top-1/2 md:flex -translate-y-1/2 transform justify-between">
              <button
                onClick={() => scrollToSlide(idx === 0 ? 3 : idx - 1)}
                className="btn btn-circle"
              >
                ❮
              </button>
              <button
                onClick={() => scrollToSlide(idx === 3 ? 0 : idx + 1)}
                className="btn btn-circle"
              >
                ❯
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
