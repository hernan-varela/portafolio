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
    setPhone("");
  };

  return (
    <div
      className={`${style.contFather} animate__animated animate__bounceInDown`}
    >
      <div className={style.container}>
        <form className={style.form} onSubmit={handleSubmit}>
          <h2 className={style.text}>Contact me!!</h2>
          <div className={style.contLabels}>
            <label className={style.text}>
              Name :
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </label>
            <label className={style.text}>
              Phone number :
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </label>
            <label className={style.text}>
              Email :
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </label>
          </div>

          <div className= {style.contTextAerea} >
            <label className={style.text}>
              Message :
              <textarea
                value={text}
                onChange={(event) => setText(event.target.value)}
              />
            </label>
          </div >

          <button className={style.btn} type="submit">
            Send{" "}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
