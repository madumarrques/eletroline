import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__principal">

        {/* Coluna 1 — Logo e descrição */}
        <div className="footer__coluna footer__coluna--marca">
          <NavLink to="/" className="footer__logo">
            <img src={logo} alt="Eletroline" />
          </NavLink>
          <p className="footer__desc">
            Assistência técnica autorizada para equipamentos de áudio. Diagnóstico preciso e reparo com padrão de fábrica.
          </p>
          <div className="footer__redes">
            <a
              href="https://www.facebook.com/EletrolineEletronica/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__rede"
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/eletrolineeletronica/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__rede"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a
              href="https://wa.me/552127825606"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__rede"
              aria-label="WhatsApp"
            >
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Coluna 2 — Navegação */}
        <div className="footer__coluna">
          <h3 className="footer__titulo-coluna">Navegação</h3>
          <ul className="footer__lista">
            <li><NavLink to="/" end className="footer__link">Assistência Técnica</NavLink></li>
            <li><NavLink to="/sobre" className="footer__link">Sobre Nós</NavLink></li>
            <li><NavLink to="/contato" className="footer__link">Contato</NavLink></li>
            <li><a href="/#orcamento" className="footer__link">Faça um Orçamento</a></li>
            <li>
              <a
                href="https://shoficina.com.br/osweb/home.php"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__link"
              >
                Consultar Ordem de Serviço
              </a>
            </li>
          </ul>
        </div>

        {/* Coluna 3 — Contato */}
        <div className="footer__coluna">
          <h3 className="footer__titulo-coluna">Contato</h3>
          <ul className="footer__lista footer__lista--contato">
            <li className="footer__contato-item">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
              </svg>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Av.+Duque+de+Caxias,+207,+Centro,+Duque+de+Caxias,+RJ"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__link"
              >
                Av. Duque de Caxias, 207 — Loja C<br />
                Centro, Duque de Caxias — RJ
              </a>
            </li>
            <li className="footer__contato-item">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.26.2 2.47.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
              </svg>
              <a href="https://wa.me/552127825606" className="footer__link">(21) 2782-5606</a>
            </li>
            <li className="footer__contato-item">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              <a href="mailto:rh@eletroline.com.br" className="footer__link">rh@eletroline.com.br</a>
            </li>
            <li className="footer__contato-item">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm.5 5H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
              </svg>
              <span className="footer__texto">
                Seg–Sex: 9h às 17h30<br />
                Sábado: 9h às 12h30
              </span>
            </li>
          </ul>
        </div>

      </div>

      <div className="footer__rodape">
        <p className="footer__copy">
          © {new Date().getFullYear()} Eletroline Eletrônica e Consertos Ltda. Todos os direitos reservados.
        </p>
        <p className="footer__cnpj">
          Av. Duque de Caxias, 207 — Loja C · Centro · Duque de Caxias — RJ · CEP 25070-070
        </p>
      </div>
    </footer>
  );
}

export default Footer;
