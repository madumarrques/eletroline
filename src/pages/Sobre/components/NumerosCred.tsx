import './NumerosCred.css';

const numeros = [
  {
    valor: '+10 mil',
    label: 'Clientes atendidos',
    descricao: 'Ao longo dos anos, construímos a confiança de milhares de clientes no Rio de Janeiro.',
  },
  {
    valor: '+20 mil',
    label: 'Equipamentos reparados',
    descricao: 'Cada aparelho tratado com critério técnico, peças originais do fabricante e testes rigorosos.',
  },
  {
    valor: 'Autorizada',
    label: 'Assistência técnica',
    descricao: 'Credenciados pelos principais fabricantes de áudio profissional do mercado.',
  },
  {
    valor: 'Especializado',
    label: 'Suporte técnico',
    descricao: 'Equipe treinada e atualizada nas tecnologias mais modernas de áudio.',
  },
];

function NumerosCred() {
  return (
    <section className="numeros-cred">
      <div className="numeros-cred__cabecalho">
        <span className="numeros-cred__tag">— NOSSA CREDIBILIDADE</span>
        <h2 className="numeros-cred__titulo">Números que comprovam nossa experiência</h2>
      </div>

      <div className="numeros-cred__grid">
        {numeros.map((item) => (
          <div key={item.label} className="numeros-cred__item">
            <span className="numeros-cred__valor">{item.valor}</span>
            <span className="numeros-cred__label">{item.label}</span>
            <p className="numeros-cred__descricao">{item.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default NumerosCred;
