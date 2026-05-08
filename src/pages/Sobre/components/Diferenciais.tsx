import './Diferenciais.css';

const diferenciais = [
  {
    numero: '01',
    titulo: 'Assistência Técnica Autorizada',
    descricao:
      'Somos credenciados pelos fabricantes para realizar reparos dentro da garantia. As peças utilizadas são sempre originais, solicitadas diretamente à marca do aparelho, garantindo autenticidade e conformidade com cada reparo.',
  },
  {
    numero: '02',
    titulo: 'Diagnóstico Transparente',
    descricao:
      'Antes de qualquer reparo, emitimos um orçamento detalhado com diagnóstico técnico completo. Você decide com informação, sem surpresas na hora do pagamento.',
  },
  {
    numero: '03',
    titulo: 'Mão de Obra Especializada',
    descricao:
      'Nossa equipe é formada por técnicos com vasta experiência em eletrônica de áudio profissional, com capacitação contínua e atualizada nos equipamentos do mercado atual.',
  },
  {
    numero: '04',
    titulo: 'Garantia no Serviço',
    descricao:
      'Todos os reparos realizados pela Eletroline têm garantia de serviço. Confiamos na qualidade do nosso trabalho e estamos comprometidos com a sua satisfação.',
  },
];

function Diferenciais() {
  return (
    <section className="diferenciais">
      <div className="diferenciais__cabecalho">
        <span className="diferenciais__tag">— NOSSOS DIFERENCIAIS</span>
        <h2 className="diferenciais__titulo">Por que escolher a Eletroline?</h2>
        <p className="diferenciais__subtitulo">
          Mais do que reparar equipamentos — entregamos tranquilidade, qualidade e confiança em
          cada atendimento.
        </p>
      </div>

      <div className="diferenciais__grid">
        {diferenciais.map((item) => (
          <div key={item.numero} className="diferenciais__card">
            <span className="diferenciais__card-numero" aria-hidden="true">
              {item.numero}
            </span>
            <h3 className="diferenciais__card-titulo">{item.titulo}</h3>
            <p className="diferenciais__card-texto">{item.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Diferenciais;
