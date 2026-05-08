import './NossaHistoria.css';

function NossaHistoria() {
  return (
    <section className="nossa-historia">
      <div className="nossa-historia__inner">
        <div className="nossa-historia__texto">
          <span className="nossa-historia__tag">— NOSSA HISTÓRIA</span>
          <h2 className="nossa-historia__titulo">
            Nossa <span className="palavra-destaque">excelência</span> em assistência técnica de áudio
          </h2>
          <p className="nossa-historia__paragrafo">
            A Eletroline nasceu da paixão pela eletrônica e de um compromisso inabalável com a{' '}
            <span className="palavra-destaque">excelência</span>. Consolidamos nossa atuação como
            referência em assistência técnica autorizada para equipamentos de áudio profissional no
            Rio de Janeiro, atendendo clientes de toda a região metropolitana com dedicação e
            seriedade.
          </p>
          <p className="nossa-historia__paragrafo">
            Sediados em Duque de Caxias, construímos uma trajetória pautada na confiança. Cada
            equipamento que passa pelo nosso laboratório recebe atenção individual: diagnóstico
            criteriosos, peças originais solicitadas diretamente ao fabricante e testes rigorosos
            antes da entrega. Mais do que reparar aparelhos, preservamos o investimento dos nossos
            clientes.
          </p>
          <p className="nossa-historia__paragrafo">
            Hoje somos autorizados por diversas marcas líderes do mercado e continuamos investindo
            em capacitação técnica e em infraestrutura para oferecer sempre o melhor serviço —
            dentro ou fora da garantia.
          </p>
        </div>

        <div className="nossa-historia__destaque">
          <div className="nossa-historia__card">
            <span className="nossa-historia__card-icone" aria-hidden="true">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <circle cx="18" cy="18" r="18" fill="#FF4713" fillOpacity="0.12" />
                <path
                  d="M18 10v8l5 3"
                  stroke="#FF4713"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="18" cy="18" r="8" stroke="#FF4713" strokeWidth="2" />
              </svg>
            </span>
            <h3 className="nossa-historia__card-titulo">Atendimento ágil</h3>
            <p className="nossa-historia__card-texto">
              Diagnóstico rápido e comunicação transparente em cada etapa do reparo.
            </p>
          </div>

          <div className="nossa-historia__card">
            <span className="nossa-historia__card-icone" aria-hidden="true">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <circle cx="18" cy="18" r="18" fill="#FF4713" fillOpacity="0.12" />
                <path
                  d="M12 18l4 4 8-8"
                  stroke="#FF4713"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <h3 className="nossa-historia__card-titulo">Qualidade garantida</h3>
            <p className="nossa-historia__card-texto">
              Peças originais solicitadas diretamente à marca e testes completos antes de cada devolução.
            </p>
          </div>

          <div className="nossa-historia__card">
            <span className="nossa-historia__card-icone" aria-hidden="true">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <circle cx="18" cy="18" r="18" fill="#FF4713" fillOpacity="0.12" />
                <path
                  d="M18 12c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6z"
                  stroke="#FF4713"
                  strokeWidth="2"
                />
                <path d="M18 10v2M18 24v2M10 18h2M24 18h2" stroke="#FF4713" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
            <h3 className="nossa-historia__card-titulo">Suporte técnico</h3>
            <p className="nossa-historia__card-texto">
              Equipe especializada, treinada e atualizada nas tecnologias mais recentes do mercado.
            </p>
          </div>

          <div className="nossa-historia__card">
            <span className="nossa-historia__card-icone" aria-hidden="true">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <circle cx="18" cy="18" r="18" fill="#FF4713" fillOpacity="0.12" />
                <path
                  d="M14 13h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2z"
                  stroke="#FF4713"
                  strokeWidth="2"
                />
                <path d="M18 16v4M16 18h4" stroke="#FF4713" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
            <h3 className="nossa-historia__card-titulo">Autorização oficial</h3>
            <p className="nossa-historia__card-texto">
              Credenciados pelos principais fabricantes, garantindo reparos dentro das normas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NossaHistoria;
