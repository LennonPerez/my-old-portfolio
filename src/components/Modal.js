import { useContext } from "react";
import { LanguageContext } from "../App";

const Modal = ({ setOpenModal }) => {
  const language = useContext(LanguageContext);

  const closeModal = () => {
    setOpenModal(false);
  };
  return (
    <>
      <div className="modal">
        <h2>
          {language === "EN"
            ? "The message was sent succesfully"
            : "El mensaje fue enviado exitosamente"}
        </h2>
        <p>
          {language === "EN"
            ? "Thank you for contact me, I'll be in touch as soon as I can."
            : "Gracias por contactarme, respondere tan pronto como pueda."}
        </p>
        <button type="button" onClick={closeModal}>
          {language === "EN" ? "Alright" : "De acuerdo"}
        </button>
      </div>
      <div className="transparentbg" />
    </>
  );
};

export default Modal;
