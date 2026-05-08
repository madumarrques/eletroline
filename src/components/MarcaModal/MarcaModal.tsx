import { useEffect } from 'react';
import './MarcaModal.css';

interface MarcaModalProps {
  nome: string;
  logo: string;
  aparelhos: string[];
  onClose: () => void;
}

function MarcaModal({ nome, logo, aparelhos, onClose }: MarcaModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="modal__overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Aparelhos atendidos: ${nome}`}
    >
      <div className="modal__box" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="Fechar">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
        <img src={logo} alt={nome} className="modal__logo" />
        <h2 className="modal__titulo">Aparelhos atendidos</h2>
        <ul className="modal__lista">
          {aparelhos.map((aparelho) => (
            <li key={aparelho}>{aparelho}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MarcaModal;
