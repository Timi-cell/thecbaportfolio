const Navbar = () => {
  return (
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-1 w-100 p-10 shadow"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Projects</a>
            </li>
            <li>
              <a>Analytics/Results</a>
            </li>
            <li>
              <a>Testimonials</a>
            </li>
            <li>
              <a>Partnerships & Events</a>
            </li>
          </ul>
        </div>
        <h1 className="text-4xl her-style font-black text-white">
          the<span className="text-base-content">CBA</span>
        </h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="text-base menu menu-horizontal px-1 ">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Projects</a>
          </li>
          <li>
            <a>Analytics/Results</a>
          </li>
          <li>
            <details>
              <summary>More</summary>
              <ul className="p-2 bg-base-100 w-40 z-1">
                <li>
                  <a>Testimonials</a>
                </li>
                <li>
                  <a>Partnerships & Events</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-base-content text-white text-base">
          Contact Me
        </button>
        {/* <a className="btn">Contact Me</a> */}
      </div>
    </div>
  );
};

export default Navbar;
