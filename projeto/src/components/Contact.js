import { useState } from "react";
import { call, emailIcon, msgSent } from "../svgImage";

const Contact = () => {
  const [mailData, setMailData] = useState({
    name: "",
    message: "",
  });
  const { name, message } = mailData;
  const [error, setError] = useState(null);
  const onChange = (e) =>
    setMailData({ ...mailData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    if (name.length === 0 || message.length === 0) {
      setError(true);
      clearError();
    } else {
      // Criar o link mailto
      const mailtoLink = `mailto:leisoj58@gmail.com?subject=Mensagem de ${encodeURIComponent(
        name
      )}&body=${encodeURIComponent(
        `Nome: ${name}\nMensagem: ${message}`
      )}`;

      // Abrir o cliente de e-mail
      window.location.href = mailtoLink;

      // Limpar o formulário (opcional)
      setMailData({ name: "", message: "" });
      setError(false);
    }
  }

  const clearError = () => {
    setTimeout(() => {
      setError(null);
    }, 2000);
  };
  return (
    <div className="aali_tm_section" id="contact">
      <div className="aali_tm_contact">
        <div className="container">
          <div
            className="aali_tm_main_title"
            data-text-align="center"
            data-color="dark"
          >
            <span>Entre em contato</span>
            <h3>Conecte-se comigo</h3>
          </div>
          <div className="contact_inner">
            <div className="left wow fadeInLeft" data-wow-duration="1s">
              <div className="text">
                <p>
                  Por favor preencha o formulário nesta seção para entrar em contato comigo.
                  Ou ligue entre 9h00 e 20h00.De segunda a Sexta-feira
                </p>
              </div>
              <ul>
                <li>
                  <div className="list_inner">
                    {call}
                    <span>fale comigo</span>
                    <h3>+55 (11) 98220-8368</h3>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    {emailIcon}
                    <span>Email</span>
                    <h3>
                      <a className="line_anim" href="mailto:juninhojoka11@gmail.com">
                        juninhojoka11@gmail.com
                      </a>
                    </h3>
                  </div>
                </li>
              </ul>
            </div>
            <div className="right wow fadeInRight" data-wow-duration="1s">
              <div className="fields">
                <form
                  action="/"
                  method="post"
                  className="contact_form"
                  id="contact_form"
                  autoComplete="off"
                  onSubmit={(e) => onSubmit(e)}
                >
                  <div
                    className={error ? "empty_notice" : "returnmessage"}
                    style={{ display: error == null ? "none" : "block" }}
                  >
                    <span>
                      {error
                        ? "Preencha os campos obrigatórios"
                        : "Sua mensagem foi recebida, entraremos em contato em breve."}
                    </span>
                  </div>
                  <div className="input_list">
                    <ul>
                      <li>
                        <input
                          id="name"
                          type="text"
                          name="name"
                          onChange={(e) => onChange(e)}
                          value={name}
                          placeholder="Seu Nome"
                        />
                      </li>
                    </ul>
                  </div>
                  <div className="message_area">
                    <textarea
                      id="message"
                      placeholder="Menssagem"
                      name="message"
                      onChange={(e) => onChange(e)}
                      value={message}
                    />
                  </div>
                  <div className="aali_tm_button">
                    <a id="send_message" href="#" onClick={(e) => onSubmit(e)}>
                      <span>Mande Menssagem {msgSent}</span>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <span
          className="square moving_effect"
          data-direction="y"
          data-reverse="yes"
        />
      </div>
    </div>
  );
};

export default Contact;
