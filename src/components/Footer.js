import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    const social = document.querySelector("#social-footer");
    const name = document.querySelector("#my-name");
    const options = {
      threshold: 1,
    };
    const io = new IntersectionObserver((entries, io) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(`show-${entry.target.id}`);
        } else {
          entry.target.classList.remove(`show-${entry.target.id}`);
        }
      });
    }, options);

    io.observe(social);
    io.observe(name);
  }, []);

  return (
    <footer className="footer">
      <p id="my-name">Lennon Perez</p>
      <div className="social-media" id="social-footer">
        <a href="https://wa.me/584126736618" target="_blank" rel="noreferrer">
          <i className="fab fa-whatsapp-square"></i>
          whatsapp
        </a>
        <a
          href="https://www.linkedin.com/in/lennonperez/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin"></i>
          linkedin
        </a>
        <a
          href="https://github.com/LennonPerez"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-github-square"></i>
          github
        </a>
        <a
          href="https://m.me/lennon.perez.96/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-facebook-square"></i>
          facebook
        </a>
      </div>
    </footer>
  );
};

export default Footer;
