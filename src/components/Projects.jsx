import P1 from "../assets/p1.png";
import P2 from "../assets/p2.png";
import P3 from "../assets/p3.png";
import P4 from "../assets/p4.png";
import P5 from "../assets/p5.jpg";

const Projects = () => {
  const projects = [
    {
      src: P1,
      alt: "Project 1",
      title:
        "High-converting Facebook ad copy that resulted in a CPL of $0.08 (99% below global benchmark)",
      link: "https://docs.google.com/document/d/1WPhm8s5zYjZJ6HqVQDN4nR7EJvttG2t6Q4cNZxr75A4/edit",
    },
    {
      src: P5,
      alt: "Project 5",
      title:
        "High-performing social media copy that drove over 2,000+ organic engagements (surpassing industry benchmarks for community interaction).",
      link: "https://docs.google.com/document/d/1945xHuEQZE1jd7GKmLseorfLJpOxGeqGrY5vrA8bkSQ/edit",
    },
    {
      src: P2,
      alt: "Project 2",
      title:
        "Editorial-style Fashion Blog Post with a focus on high-impact storytelling.",
      link: "https://docs.google.com/document/d/1PnK8IbgicyHdsYeDvBhpoPc-c4rTUxoUWLLFgGZ0SOQ/edit",
    },
    {
      src: P4,
      alt: "Project 4",
      title:
        "High-engagement static design that drove over 1,000+ interactions on LinkedIn (outperforming platform averages).",
      link: "https://drive.google.com/file/d/1h48WcdEbnIKwwONFPoriOMuS35egoXa0/view",
    },
    {
      src: P3,
      alt: "Project 3",
      title:
        "Conversion-focused landing page copy for an AI branding course that generated 1,400+ student enrollments.",
      link: "https://docs.google.com/document/d/1-mO234_i49s9V94eAxNWoZ-g00M6N29PokCZ4HuLOMA/edit",
    },
  ];

  return (
    <div className="pt-20 px-6.5 md:px-10 pb-10" id="projects">
      <h2 className="her-style font-extrabold text-3xl wrap-break-word">
        PROJECTS
      </h2>
      <div className="flex w-full flex-col lg:flex-row mt-10 flex-wrap gap-5">
        {projects.map((p, idx) => (
          <div
            key={idx}
            className="card bg-base-300 rounded-box h-80 overflow-hidden grow relative"
          >
            <img
              src={p.src}
              alt={p.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/80 flex flex-col justify-end items-start text-white p-4">
              <h3 className="text-base font-medium w-full md:w-4/5">
                {p.title}
              </h3>
              <a href={p.link} target="_blank" rel="noopener noreferrer">
                <button className="btn mt-2 px-4 py-2">Check it out</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
