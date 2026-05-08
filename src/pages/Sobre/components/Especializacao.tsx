import './Especializacao.css';

const equipamentos = [
  {
    icone: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <rect x="4" y="14" width="40" height="26" rx="3" stroke="#FF4713" strokeWidth="2.2" />
        <rect x="8" y="18" width="20" height="14" rx="2" fill="#FF4713" fillOpacity="0.12" stroke="#FF4713" strokeWidth="1.5" />
        <circle cx="36" cy="25" r="4" stroke="#FF4713" strokeWidth="2" />
        <path d="M12 36h8M30 36h6" stroke="#FF4713" strokeWidth="2" strokeLinecap="round" />
        <path d="M24 8v6" stroke="#FF4713" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    titulo: 'Amplificadores',
    descricao:
      'Reparo e manutenção de amplificadores de potência, pré-amplificadores e receivers de diversas marcas e modelos.',
  },
  {
    icone: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <rect x="4" y="10" width="40" height="28" rx="3" stroke="#FF4713" strokeWidth="2.2" />
        <circle cx="14" cy="24" r="5" stroke="#FF4713" strokeWidth="2" />
        <circle cx="14" cy="24" r="2" fill="#FF4713" fillOpacity="0.3" />
        <path d="M24 16h14M24 22h10M24 28h14" stroke="#FF4713" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    titulo: 'Mixers e Mesas de Som',
    descricao:
      'Assistência técnica especializada em mixers analógicos e digitais, consoles e mesas de som profissionais.',
  },
  {
    icone: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <ellipse cx="24" cy="30" rx="14" ry="10" stroke="#FF4713" strokeWidth="2.2" />
        <ellipse cx="24" cy="30" rx="6" ry="4" stroke="#FF4713" strokeWidth="1.8" />
        <path d="M24 10v10" stroke="#FF4713" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 14l4 6M32 14l-4 6" stroke="#FF4713" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    titulo: 'Caixas e Alto-falantes',
    descricao:
      'Diagnóstico e reparo de sistemas de caixas acústicas, alto-falantes, tweeters e subwoofers de uso profissional.',
  },
  {
    icone: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <rect x="6" y="18" width="36" height="18" rx="3" stroke="#FF4713" strokeWidth="2.2" />
        <path d="M14 24h6M14 30h4" stroke="#FF4713" strokeWidth="2" strokeLinecap="round" />
        <circle cx="34" cy="27" r="4" stroke="#FF4713" strokeWidth="2" />
        <path d="M20 12l4 6 4-6" stroke="#FF4713" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    titulo: 'Equipamentos de Áudio',
    descricao:
      'Processadores de efeito, equalizadores, crossovers, interfaces de áudio e demais periféricos de estúdio e ao vivo.',
  },
];

function Especializacao() {
  return (
    <section className="especializacao">
      <div className="especializacao__cabecalho">
        <span className="especializacao__tag">— ESPECIALIZAÇÃO</span>
        <h2 className="especializacao__titulo">Equipamentos que atendemos</h2>
        <p className="especializacao__subtitulo">
          Nossa equipe é treinada e atualizada para lidar com as tecnologias mais modernas do
          mercado de áudio profissional, garantindo reparo eficiente em uma ampla variedade de
          equipamentos.
        </p>
      </div>

      <div className="especializacao__grid">
        {equipamentos.map((item) => (
          <div key={item.titulo} className="especializacao__item">
            <div className="especializacao__item-icone">{item.icone}</div>
            <h3 className="especializacao__item-titulo">{item.titulo}</h3>
            <p className="especializacao__item-descricao">{item.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Especializacao;
