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
    const form = document.querySelector(".container-form");
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
          <p>
            {language === "EN"
              ? " Reach me on social media, by filling out the contact form or by sending an email to:"
              : "Encuentrame en redes sociales, llenando el formulario de contacto, o al enviarme un correo a:"}
          </p>
          <span>lenonart14@gmail.com</span>
          <form className="form" onSubmit={sendMessage}>
            <div className="input-box">
              <label>
                {language === "EN"
                  ? "What's your name?"
                  : "¿Cual es tu nombre?"}
              </label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={readInputs}
              />
            </div>
            <div className="input-box">
              <label>
                {language === "EN"
                  ? "Your email address"
                  : "Tu correo electronico"}
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={readInputs}
              />
            </div>
            <div className="input-box">
              <label>
                {language === "EN"
                  ? "Type your message here"
                  : "Escribe tu mensaje aqui"}
              </label>
              <textarea
                name="message"
                value={message}
                onChange={readInputs}
              ></textarea>
            </div>
            {error && (
              <p className="formerror">
                {language === "EN"
                  ? "All the inputs must be filled"
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
