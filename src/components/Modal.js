import { useContext } from "react";
import Info from "../data.json";
import { LanguageContext } from "../App";

const Modal = ({ setOpenModal }) => {
  const language = useContext(LanguageContext);
  const info = Info.modal[language];

  const closeModal = () => {
    setOpenModal(false);
  };
  return (
    <>
      <div className="modal">
        <h2>{info.title}</h2>
        <p>{info.description}</p>
        <button type="button" onClick={closeModal}>
          {info.button}
        </button>
      </div>
      <div className="transparentbg" />
    </>
  );
};

export default Modal;
