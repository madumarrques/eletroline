import { useState, useEffect, useRef } from 'react';
import './Feedback.css';

const reviews = [
  {
    nome: 'Alberto Guedes',
    nota: 5,
    texto: 'Excelente atendimento! Duas funcionárias excepcionais resolveram o meu problema em questão de minutos. Estão de parabéns pelo atendimento. Ganharam um cliente.',
    data: 'há 8 meses',
    avatar: 'A',
    cor: '#4285F4',
  },
  {
    nome: 'Fabio Gamar',
    nota: 5,
    texto: 'Foi boa, deixei minha JBL Partybox Ultimate para reparo e fui bem atendido.',
    data: 'há 11 meses',
    avatar: 'F',
    cor: '#34A853',
  },
  {
    nome: 'Cezar Paulino',
    nota: 5,
    texto: 'Boa loja, atendimento bom, funcionários educados e os aparelhos são consertados de verdade.',
    data: 'há 1 ano',
    avatar: 'C',
    cor: '#EA4335',
  },
  {
    nome: 'Marcelo Tavares',
    nota: 5,
    texto: 'Atendimento show, nota 10! Parabéns pelo trabalho 👏👏👏',
    data: 'há 2 anos',
    avatar: 'M',
    cor: '#FBBC05',
  },
  {
    nome: 'Daniele Santos',
    nota: 5,
    texto: 'Atendimento respeitoso e profissionais com muita responsabilidade. Dão retorno sobre o serviço solicitado, além de muita rapidez no reparo.',
    data: 'há 2 anos',
    avatar: 'D',
    cor: '#FF4713',
  },
];

function Estrelas({ nota }: { nota: number }) {
  return (
    <div className="feedback__estrelas">
      {[1, 2, 3, 4, 5].map(i => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className={`feedback__estrela ${i <= nota ? 'feedback__estrela--ativa' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function Feedback() {
  const [atual, setAtual] = useState(0);
  const [visiveis, setVisiveis] = useState(3);
  const [arrastando, setArrastando] = useState(false);
  const inicioX = useRef(0);
  const totalSlides = reviews.length;
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const atualizar = () => {
      if (window.innerWidth < 640) setVisiveis(1);
      else if (window.innerWidth < 1024) setVisiveis(2);
      else setVisiveis(3);
    };
    atualizar();
    window.addEventListener('resize', atualizar);
    return () => window.removeEventListener('resize', atualizar);
  }, []);

  const maxIndex = totalSlides - visiveis;

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setAtual(a => (a >= maxIndex ? 0 : a + 1));
    }, 2000);
  };

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [maxIndex]);

  const anterior = () => { setAtual(a => Math.max(a - 1, 0)); resetTimer(); };
  const proximo = () => { setAtual(a => Math.min(a + 1, maxIndex)); resetTimer(); };

  const onTouchStart = (e: React.TouchEvent) => {
    inicioX.current = e.touches[0].clientX;
    setArrastando(true);
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (!arrastando) return;
    const diff = inicioX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? proximo() : anterior();
    setArrastando(false);
  };

  return (
    <section className="feedback">
      <div className="feedback__cabecalho">
        <div className="feedback__google-badge">
          <svg viewBox="0 0 24 24" className="feedback__google-icon" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
          </svg>
          <span className="feedback__google-label">Avaliações Google</span>
        </div>

        <h2 className="feedback__titulo">O que dizem nossos clientes</h2>

        <div className="feedback__nota-geral">
          <span className="feedback__nota-numero">4,3</span>
          <div className="feedback__nota-estrelas">
            {[1, 2, 3, 4].map(i => (
              <svg key={i} viewBox="0 0 24 24" className="feedback__estrela feedback__estrela--ativa" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
            {/* meia estrela */}
            <svg viewBox="0 0 24 24" className="feedback__estrela" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="meia">
                  <stop offset="50%" stopColor="#FBBC05" />
                  <stop offset="50%" stopColor="#e0e0e0" />
                </linearGradient>
              </defs>
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="url(#meia)" />
            </svg>
          </div>
          <span className="feedback__nota-total">140 avaliações</span>
        </div>
      </div>

      <div className="feedback__carrossel-wrapper">
        <button
          className="feedback__nav feedback__nav--anterior"
          onClick={anterior}
          disabled={atual === 0}
          aria-label="Anterior"
        >
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
        </button>

        <div
          className="feedback__carrossel"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="feedback__track"
            style={{ transform: `translateX(calc(-${atual} * (100% / ${visiveis} + 8px)))` }}
          >
            {reviews.map((r, i) => (
              <div className="feedback__card" key={i} style={{ flex: `0 0 calc(${100 / visiveis}% - 12px)` }}>
                <div className="feedback__card-topo">
                  <div className="feedback__avatar" style={{ backgroundColor: r.cor }}>
                    {r.avatar}
                  </div>
                  <div className="feedback__card-info">
                    <span className="feedback__card-nome">{r.nome}</span>
                    <span className="feedback__card-data">{r.data}</span>
                  </div>
                  <svg viewBox="0 0 24 24" className="feedback__card-google" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                </div>
                <Estrelas nota={r.nota} />
                <p className="feedback__card-texto">"{r.texto}"</p>
              </div>
            ))}
          </div>
        </div>

        <button
          className="feedback__nav feedback__nav--proximo"
          onClick={proximo}
          disabled={atual >= maxIndex}
          aria-label="Próximo"
        >
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
          </svg>
        </button>
      </div>

      <div className="feedback__dots">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            className={`feedback__dot ${i === atual ? 'feedback__dot--ativo' : ''}`}
            onClick={() => { setAtual(i); resetTimer(); }}
            aria-label={`Ir para slide ${i + 1}`}
          />
        ))}
      </div>

      <div className="feedback__rodape">
        <a
          href="https://www.google.com/maps/place/Eletroline+Eletronica/@-22.7869,-43.3058,17z"
          target="_blank"
          rel="noopener noreferrer"
          className="feedback__btn"
        >
          Ver todas as avaliações no Google →
        </a>
      </div>
    </section>
  );
}

export default Feedback;
