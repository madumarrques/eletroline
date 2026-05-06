import './MarcaCard.css';

interface MarcaCardProps {
  logo: string;
  nome: string;
  onClick: () => void;
}

function MarcaCard({ logo, nome, onClick }: MarcaCardProps) {
  return (
    <div className="marca-card" onClick={onClick}>
      <img src={logo} alt={nome} />
    </div>
  );
}

export default MarcaCard;