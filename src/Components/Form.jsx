import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.length < 5) {
      setError("Por favor verifique su información nuevamente");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Por favor verifique su información nuevamente");
      return;
    }
    setError("");
    setSuccessMessage(
      `Gracias ${name}, te contactaremos cuanto antes vía mail`
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre completo"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Enviar</button>
      {error && <p className="error">{error}</p>}
      {successMessage && <p className="success">{successMessage}</p>}
    </form>
  );
};

export default Form;
