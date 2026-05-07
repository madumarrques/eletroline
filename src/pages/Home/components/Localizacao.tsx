import './Localizacao.css';

function Localizacao() {
  return (
    <section className="localizacao">
      <div className="localizacao__container">
        <div className="localizacao__info">
          <h2 className="localizacao__titulo">Visite a nossa loja</h2>
          <div className="localizacao__detalhes">
            <div className="localizacao__item">
              <div>
                <p className="localizacao__endereco">Av. Duque de Caxias, 207 - Loja C</p>
                <p className="localizacao__endereco">Centro, Duque de Caxias - RJ</p>
                <p className="localizacao__endereco">CEP: 25070-070</p>
              </div>
            </div>
          </div>
          
            < a href="https://www.google.com/maps/dir/?api=1&destination=Av.+Duque+de+Caxias,+207,+Centro,+Duque+de+Caxias,+RJ"
            target="_blank"
            rel="noopener noreferrer"
            className="localizacao__btn"
          >
            Como chegar →
          </a>
        </div>

        <div className="localizacao__mapa">
          <iframe
            title="Localização Eletroline"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.5!2d-43.3058!3d-22.7869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAv.+Duque+de+Caxias%2C+207+-+Centro%2C+Duque+de+Caxias+-+RJ!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

export default Localizacao;