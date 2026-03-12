import { motion } from "motion/react";
import R1 from "../assets/r1.png";
import R2 from "../assets/r2.png";
import R3 from "../assets/r3.jpg";
import R4 from "../assets/r4.jpg";

const Results = () => {
  const results = [
    {
      src: R1,
      alt: "Result 1",
      title:
        "Orchestrated an organic sales campaign that generated over $1,072 in a single week, marking a 4x increase in growth velocity compared to previous periods.",
    },
    {
      src: R2,
      alt: "Result 2",
      title:
        "Engineered an email marketing campaign that yielded a 21.34% open rate and a 13.65% click-through rate, outperforming industry engagement benchmarks.",
    },
    {
      src: R3,
      alt: "Result 3",
      title:
        "Executed a high-conversion paid social campaign that secured 856 link clicks at an ultra-efficient CPC of ₦14.47 (well below platform averages).",
    },
    {
      src: R4,
      alt: "Result 4",
      title:
        "Engineered a content strategy that drove a 44x increase in reach and a 100x increase in engagement within a single week of implementation.",
    },
  ];

  return (
    <div className="bg-base-200 px-6.5 md:px-10 pt-20 pb-10" id="results">
      <h2 className="her-style font-extrabold text-3xl wrap-break-word">
        ANALYTICS/RESULTS
      </h2>

      <div className="flex w-full flex-col! lg:flex-row! mt-10 flex-wrap gap-10">
        {results.map((p, idx) => (
          <motion.div
            key={idx}
            // layout="position"
            className="flex flex-col grow lg:w-[45%]"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            {/* Image Container: Removed fixed h-80 to allow text to fit below */}
            <div className="card bg-base-300 rounded-box h-80 overflow-hidden border-2 border-base-content shadow-[0_0_20px_rgba(220,165,78,0.3)] scale-[1.02]">
              <img src={p.src} alt={p.alt} className="w-full h-full" />
            </div>

            {/* H3 Text: Now positioned under the image with a set width */}
            <h3
              className={` mt-3 text-base ${[R2, R4].includes(p.src) ? "text-base-content" : "text-white"} leading-snug`}
            >
              {p.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Results;
