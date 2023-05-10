import { useState } from "react";
import style from "./contactForm.module.css";

function ContactForm() {
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Aquí es donde puedes enviar el mensaje de correo electrónico utilizando la librería Nodemailer o cualquier otra herramienta que desees utilizar
    console.log(`Email: ${email}\nTexto: ${text}\nNombre: ${name}`);

    // Resetea los valores del formulario
    setEmail("");
    setText("");
    setName("");
  };

  return (
    <div
      className={`${style.contFather} animate__animated animate__bounceInDown`}
    >
      <div className={style.container}>
        <form onSubmit={handleSubmit}>
          <label>
            Nombre:
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </label>
          <label>
            Teléfono:
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
          <br />
          <label>
            Texto:
            <textarea
              value={text}
              onChange={(event) => setText(event.target.value)}
            />
          </label>
          <br />

          <br />
          <button type="submit">Enviar mensaje</button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
