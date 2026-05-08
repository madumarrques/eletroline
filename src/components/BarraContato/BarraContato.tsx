import './BarraContato.css';

function BarraContato() {
  return (
    <section className="contato">
      <h2 className="contato__titulo">
        Entre em <strong>contato</strong>
      </h2>

      <div className="contato__grid">
        
          <a href="https://www.google.com/maps/dir/?api=1&destination=Av.+Duque+de+Caxias,+207,+Centro,+Duque+de+Caxias,+RJ"
          target="_blank"
          rel="noopener noreferrer"
          className="contato__item"
        >
          <div className="contato__icone">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
            </svg>
          </div>
          <p className="contato__label">Endereço</p>
          <p className="contato__info">
            Av. Duque de Caxias, 207 - Loja C<br />
            Centro, Duque de Caxias - RJ<br />
            CEP: 25070-070
          </p>
        </a>

        <a href="https://wa.me/552127825606" target="_blank" rel="noopener noreferrer" className="contato__item">
          <div className="contato__icone">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.26.2 2.47.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z"/>
            </svg>
          </div>
          <p className="contato__label">Telefone</p>
          <p className="contato__info">(21) 2782-5606</p>
        </a>

        <div className="contato__item">
          <div className="contato__icone">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/>
            </svg>
          </div>
          <p className="contato__label">Horário de funcionamento</p>
          <p className="contato__info">
            Segunda a sexta<br />
            das 9:00 às 17:30<br />
            Sábado<br />
            das 9:00 às 12:30
          </p>
        </div>

        <a href="mailto:contato@eletroline.com.br" className="contato__item">
          <div className="contato__icone">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </div>
          <p className="contato__label">E-mail</p>
          <p className="contato__info">contato@eletroline.com.br</p>
        </a>
      </div>

    </section>
  );
}

export default BarraContato;