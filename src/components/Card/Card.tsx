import './Card.css';

interface CardProps {
  image: string;
  tag: string;
  titulo: string;
  descricao: string;
}

function Card({ image, tag, titulo, descricao }: CardProps) {
  return (
    <div className="card">
      <div
        className="card__img"
        style={image ? { backgroundImage: `url(${image})` } : { backgroundColor: '#e0e0e0' }}
      />
      <div className="card__body">
        <span className="card__tag">{tag}</span>
        <h3 className="card__titulo">{titulo}</h3>
        <p className="card__desc">{descricao}</p>
      </div>
    </div>
  );
}

export default Card;