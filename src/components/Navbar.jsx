import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/linkedin";
import "react-social-icons/mailto";
import { FaPhoneAlt } from "react-icons/fa";

const Navbar = () => (
  <div className="navbar bg-base-100 shadow-sm fixed z-999 px-2 md:px-10">
    <div className="navbar-start">
      <div className="dropdown text-base">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {" "}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />{" "}
          </svg>
        </div>
        <ul
          tabIndex="-1"
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-1 max-[330px]:w-70 w-80 md:w-100 py-10 shadow"
        >
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#results">Analytics/Results</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#partnerships">Partnerships & Events</a>
          </li>
        </ul>
      </div>
      <h1 className="max-[350px]:text-3xl text-4xl her-style font-black text-white">
        the<span className="text-base-content">CBA</span>
      </h1>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="text-base menu menu-horizontal px-1 gap-4">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#results">Analytics/Results</a>
        </li>
        <li>
          <details>
            <summary>More</summary>
            <ul className="p-2 bg-base-100 w-60 z-1">
              <li>
                <a href="#testimonials">Testimonials</a>
              </li>
              <li>
                <a href="#partnerships">Partnerships & Events</a>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
    <div className="navbar-end flex items-center gap-2.5">
      {/* LinkedIn Icon */}
      <SocialIcon
        url="https://www.linkedin.com/in/chinwendu-socialmediastrategist"
        target="_blank"
        style={{ height: 40, width: 40 }} // Adjust size as needed
      />

      {/* Gmail-style Email Icon */}
      <SocialIcon
        network="mailto"
        url="mailto:ayodelechinwedu@gmail.com"
        bgColor="#EA4335"
        fgColor="#ffffff"
        style={{ height: 40, width: 40 }}
      />

      {/* Phone Icon with Gray Background and Green Icon */}
      <a
        href="tel:+2348155104981"
        className="flex items-center justify-center bg-white rounded-full"
        style={{ height: 40, width: 40 }} // Matches SocialIcon size exactly
      >
        <FaPhoneAlt className="text-green-500" size={18} />
      </a>
    </div>
  </div>
);

export default Navbar;
