import { useContext, useState, useEffect } from "react";
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
      console.log("exito");
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
        <h2>{language === "EN" ? "Contact me" : "Contactame"}</h2>
        <div className="container container-form">
          <h3>
            {language === "EN"
              ? "Interested in working with me or perhaps just talk?"
              : "¿Interesado en trabajar conmigo o quizas solo quieres hablar?"}
          </h3>
          <p>
            {language === "EN"
              ? " Reach me on social media, by filling out the contact form down below or by sending an email to:"
              : "Encuentrame en redes sociales, llenando el formulario de contacto, o al enviarme un correo a:"}
          </p>
          <a href="mailto:lenonart14@gmail.com" className="email">
            lenonart14@gmail.com
          </a>
          <form className="form" onSubmit={sendMessage}>
            <div className="input-box">
              <label htmlFor="name-input">
                {language === "EN"
                  ? "What's your name?"
                  : "¿Cual es tu nombre?"}
              </label>
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
              <label htmlFor="email-input">
                {language === "EN"
                  ? "Your email address"
                  : "Tu correo electronico"}
              </label>
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
              <label htmlFor="input-message">
                {language === "EN"
                  ? "Type your message here"
                  : "Escribe tu mensaje aqui"}
              </label>
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
            {error && (
              <p className="formerror">
                {language === "EN"
                  ? "All of the inputs must be filled out"
                  : "Todos los campos son obligatorios"}
              </p>
            )}
            <button type="submit">
              {language === "EN" ? "Send message" : "Enviar mensaje"}
            </button>
          </form>
        </div>
      </div>
      {openmodal && <Modal setOpenModal={setOpenModal} />}
    </>
  );
};

export default Contact;
