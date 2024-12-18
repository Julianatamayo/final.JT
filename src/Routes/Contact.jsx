import { useContext } from "react";
import Form from "../Components/Form";
import { ContextGlobal } from "../Components/utils/global.context";

const Contact = () => {
  const { theme } = useContext(ContextGlobal);

  return (
    <div className={`contact-container ${theme}`}>
      {" "}
      {}
      <h2>¿Quieres saber más?</h2>
      <p>Envíanos tus preguntas y nos pondremos en contacto contigo.</p>
      <Form />
    </div>
  );
};

export default Contact;
