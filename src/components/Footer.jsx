const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content text-sm md:text-base md:p-5 pb-10 pt-5 px-5">
      <aside>
        <p>
          ©{" "}
          <span className="her-style">
            <span className="text-white">the</span>CBA
          </span>{" "}
          <i>{new Date().getFullYear()}</i>
          <br />Developed by{" "}
          <a
            href="https://www.linkedin.com/in/samuelaluko/"
            className="underline text-white italic"
          >
            Samuel Aluko (THE CRACK DEV.)
          </a>
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
