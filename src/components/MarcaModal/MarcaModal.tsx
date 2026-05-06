import './MarcaModal.css';

interface MarcaModalProps {
  nome: string;
  logo: string;
  aparelhos: string[];
  onClose: () => void;
}

function MarcaModal({ nome, logo, aparelhos, onClose }: MarcaModalProps) {
  return (
    <div className="modal__overlay" onClick={onClose}>
      <div className="modal__box" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose}>✕</button>
        <img src={logo} alt={nome} className="modal__logo" />
        <h2 className="modal__titulo">Aparelhos atendidos</h2>
        <ul className="modal__lista">
          {aparelhos.map((aparelho, index) => (
            <li key={index}>{aparelho}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MarcaModal;