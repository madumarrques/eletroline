import Card from '../../../components/Card/Card';
import './Solucoes.css';
import card1 from '../../../assets/card1.webp';
import card2 from '../../../assets/card2.webp' ;
import card3 from '../../../assets/card3.webp' 

function Solucoes() {
  const cards = [
    {
      image: card1,
      tag: 'SERVIÇO DE ASSISTÊNCIA',
      titulo: 'TÉCNICA AUTORIZADA',
      descricao: 'Realizamos manutenção e reparo em equipamentos de áudio dentro do período de garantia, seguindo os padrões e especificações dos fabricantes.',
    },
    {
      image: card2,
      tag: 'CONSERTO',
      titulo: 'FORA DA GARANTIA',
      descricao: 'Diagnóstico e reparo especializado para aparelhos fora da garantia, com análise técnica criteriosa e soluções confiáveis.',
    },
    {
      image: card3,
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
            image={card.image}
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