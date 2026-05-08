import './InfoContato.css';

function InfoContato() {
  return (
    <section className="info-contato">
      <div className="info-contato__cabecalho">
        <span className="info-contato__tag">— INFORMAÇÕES DE CONTATO</span>
        <h2 className="info-contato__titulo">Como nos encontrar</h2>
      </div>

      <div className="info-contato__grid">

        <a
          href="https://www.google.com/maps/dir/?api=1&destination=Av.+Duque+de+Caxias,+207,+Centro,+Duque+de+Caxias,+RJ"
          target="_blank"
          rel="noopener noreferrer"
          className="info-contato__card"
        >
          <div className="info-contato__icone" aria-hidden="true">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="#FF4713">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
            </svg>
          </div>
          <div className="info-contato__conteudo">
            <h3 className="info-contato__label">Endereço</h3>
            <p className="info-contato__info">
              Av. Duque de Caxias, 207 — Loja C<br />
              Centro, Duque de Caxias — RJ<br />
              CEP: 25070-070
            </p>
            <span className="info-contato__link">Ver no mapa →</span>
          </div>
        </a>

        <a
          href="https://wa.me/552127825606"
          target="_blank"
          rel="noopener noreferrer"
          className="info-contato__card"
        >
          <div className="info-contato__icone" aria-hidden="true">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="#FF4713">
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.26.2 2.47.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
            </svg>
          </div>
          <div className="info-contato__conteudo">
            <h3 className="info-contato__label">Telefone / WhatsApp</h3>
            <p className="info-contato__info">(21) 2782-5606</p>
            <span className="info-contato__link">Enviar mensagem →</span>
          </div>
        </a>

        <div className="info-contato__card">
          <div className="info-contato__icone" aria-hidden="true">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="#FF4713">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
            </svg>
          </div>
          <div className="info-contato__conteudo">
            <h3 className="info-contato__label">Horário de funcionamento</h3>
            <p className="info-contato__info">
              Segunda a sexta<br />
              das 9:00 às 17:30<br />
              Sábado<br />
              das 9:00 às 12:30
            </p>
          </div>
        </div>

        <a
          href="mailto:contato@eletroline.com.br"
          className="info-contato__card"
        >
          <div className="info-contato__icone" aria-hidden="true">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="#FF4713">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </div>
          <div className="info-contato__conteudo">
            <h3 className="info-contato__label">E-mail</h3>
            <p className="info-contato__info">contato@eletroline.com.br</p>
            <span className="info-contato__link">Enviar e-mail →</span>
          </div>
        </a>

      </div>
    </section>
  );
}

export default InfoContato;
