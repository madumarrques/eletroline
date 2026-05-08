import Card from '../../../components/Card/Card';
import './Solucoes.css';

function Solucoes() {
  const cards = [
    {
      tag: 'SERVIÇO DE ASSISTÊNCIA',
      titulo: 'TÉCNICA AUTORIZADA',
      descricao: 'Realizamos manutenção e reparo em equipamentos de áudio dentro do período de garantia, seguindo os padrões e especificações dos fabricantes.',
    },
    {
      tag: 'CONSERTO',
      titulo: 'FORA DA GARANTIA',
      descricao: 'Diagnóstico e reparo especializado para aparelhos fora da garantia, com análise técnica criteriosa e soluções confiáveis.',
    },
    {
      tag: 'DIAGNÓSTICO E',
      titulo: 'SUPORTE ESPECIALIZADO',
      descricao: 'Identificamos falhas, realizamos testes técnicos e orientamos a melhor solução para preservar o desempenho do seu equipamento.',
    },
  ];

  return (
    <section className="solucoes">
      <h2 className="solucoes__titulo">Nossas Soluções</h2>
      <div className="solucoes__cards">
        {cards.map((card) => (
          <Card
            key={card.titulo}
            tag={card.tag}
            titulo={card.titulo}
            descricao={card.descricao}
          />
        ))}
      </div>
    </section>
  );
}

export default Solucoes;