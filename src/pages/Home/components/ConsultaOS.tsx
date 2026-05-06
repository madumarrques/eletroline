import './ConsultaOS.css';

function ConsultaOS() {
  return (
    <section className="consulta-os">
      <div className="consulta-os__container">
        <div className="consulta-os__texto">
          <h2 className="consulta-os__titulo">
            Já fez seu orçamento?
          </h2>
          <p className="consulta-os__subtitulo">
            Consulte sua Ordem de Serviço
          </p>
          <p className="consulta-os__desc">
            Acompanhe o status do reparo do seu equipamento em tempo real, de forma rápida e prática.
          </p>
        </div>
        
          <a href="https://shoficina.com.br/osweb/home.php"
          target="_blank"
          rel="noopener noreferrer"
          className="consulta-os__btn"
        >
          Consultar Ordem de Serviço →
        </a>
      </div>
    </section>
  );
}

export default ConsultaOS;