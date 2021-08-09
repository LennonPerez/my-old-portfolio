import { useContext, useState, useEffect } from "react";
import Info from "../data.json";
import { LanguageContext } from "../App";
import Modal from "./Modal";

const Contact = () => {
  const language = useContext(LanguageContext);
  const [error, setError] = useState(false);
  const [openmodal, setOpenModal] = useState(false);
  const [contactmessage, setContactMessage] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = contactmessage;
  const info = Info.contact[language];

  const readInputs = (e) => {
    setContactMessage({
      ...contactmessage,
      [e.target.name]: e.target.value,
    });
  };

  const inputError = () => {
    const inputs = document.querySelectorAll("input");
    const textarea = document.querySelector("textarea");
    inputs.forEach((input) => {
      if (input.value === "") {
        input.classList.add("error");
        input.previousElementSibling.classList.add("labelerror");
      } else {
        input.classList.remove("error");
        input.previousElementSibling.classList.remove("labelerror");
      }
    });
    if (textarea.value === "") {
      textarea.classList.add("error");
      textarea.previousElementSibling.classList.add("labelerror");
    } else {
      textarea.classList.remove("error");
      textarea.previousElementSibling.classList.remove("labelerror");
    }
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (name && email && message) {
      window.emailjs.send(
        "service_15vecpd",
        "template_zly3s62",
        contactmessage,
        "user_VOT8V9hDdOcctPxQMy0pJ"
      );
      setContactMessage({
        name: "",
        email: "",
        message: "",
      });
      setOpenModal(true);
      setError(false);
    } else {
      setError(true);
    }
    inputError();
  };

  useEffect(() => {
    const form = document.querySelector(".contact-form");
    const options = {};

    const io = new IntersectionObserver((entries, io) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          form.classList.add("show-form");
        } else {
          form.classList.remove("show-form");
        }
      });
    }, options);

    io.observe(form);
  }, []);

  return (
    <>
      <div className="contact-form" id="contact">
        <h2>{info.title}</h2>
        <div className="container-form">
          <h3>{info.question}</h3>
          <p>{info.description}</p>
          <a href="mailto:lenonart14@gmail.com" className="email">
            lenonart14@gmail.com
          </a>
          <form className="form" onSubmit={sendMessage}>
            <div className="input-box">
              <label htmlFor="name-input">{info.name}</label>
              <input
                type="text"
                name="name"
                id="name-input"
                value={name}
                onChange={readInputs}
                onFocus={(e) =>
                  e.target.previousElementSibling.classList.add("focused")
                }
                onBlur={(e) =>
                  e.target.previousElementSibling.classList.remove("focused")
                }
              />
            </div>
            <div className="input-box">
              <label htmlFor="email-input">{info.email}</label>
              <input
                type="email"
                name="email"
                id="email-input"
                value={email}
                onChange={readInputs}
                onFocus={(e) =>
                  e.target.previousElementSibling.classList.add("focused")
                }
                onBlur={(e) =>
                  e.target.previousElementSibling.classList.remove("focused")
                }
              />
            </div>
            <div className="input-box">
              <label htmlFor="input-message">{info.message}</label>
              <textarea
                name="message"
                id="input-message"
                value={message}
                onChange={readInputs}
                onFocus={(e) =>
                  e.target.previousElementSibling.classList.add("focused")
                }
                onBlur={(e) =>
                  e.target.previousElementSibling.classList.remove("focused")
                }
              ></textarea>
            </div>
            {error && <p className="formerror">{info.error}</p>}
            <button type="submit">{info.button}</button>
          </form>
        </div>
      </div>
      {openmodal && <Modal setOpenModal={setOpenModal} />}
    </>
  );
};

export default Contact;
