import './MarcaCard.css';

interface MarcaCardProps {
  logo: string;
  nome: string;
  onClick: () => void;
}

function MarcaCard({ logo, nome, onClick }: MarcaCardProps) {
  return (
    <button
      type="button"
      className="marca-card"
      onClick={onClick}
      aria-label={`Ver aparelhos atendidos: ${nome}`}
    >
      <img src={logo} alt={nome} />
    </button>
  );
}

export default MarcaCard;
