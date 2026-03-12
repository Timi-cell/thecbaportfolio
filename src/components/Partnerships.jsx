import EP1 from "../assets/EP1.jpg";
import EP2 from "../assets/EP2.jpg";
import EP3 from "../assets/EP3.jpg";
import EP4 from "../assets/EP4.jpg";
import EP5 from "../assets/EP5.jpg";
import EP6 from "../assets/EP6.jpg";
import EP7 from "../assets/EP7.jpg";
import EP8 from "../assets/EP8.jpg";
import EP9 from "../assets/EP9.jpg";
import EP10 from "../assets/EP10.jpg";

const Partnerships = () => {
  const partnershipsandevents = [
    {
      src: EP1,
      alt: "Partnership 1",
    },
    {
      src: EP2,
      alt: "Partnership 2",
    },
    {
      src: EP3,
      alt: "Partnership 3",
    },
    {
      src: EP4,
      alt: "Partnership 4",
    },
    {
      src: EP5,
      alt: "Partnership 5",
    },
    {
      src: EP6,
      alt: "Partnership 6",
    },
    {
      src: EP7,
      alt: "Partnership 7",
    },
    {
      src: EP8,
      alt: "Partnership 8",
    },
    {
      src: EP9,
      alt: "Partnership 9",
    },
    {
      src: EP10,
      alt: "Partnership 10",
    },
  ];
  return (
    <div className="pt-20 px-6.5 md:px-10 pb-10" id="partnerships">
      <h2 className="her-style font-extrabold text-3xl wrap-break-word">
        PARTNERSHIPS & EVENTS
      </h2>

      <div className="carousel carousel-center mt-10 w-full space-x-4 p-4 bg-base-300 rounded-box h-150 md:h-125">
        {partnershipsandevents.map((p, idx) => (
          <div key={idx} className="carousel-item w-full md:w-3/4 lg:w-1/2">
            <div className="relative w-full aspect-3/2 overflow-hidden rounded-lg bg-black/20">
              <img
                src={p.src}
                alt={p.alt}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partnerships;
