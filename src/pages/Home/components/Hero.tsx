import { useState, useEffect, useRef } from 'react';
import './Hero.css';

import heroImg from '../../../assets/HeroImg.webp';
import heroImg1 from '../../../assets/HeroImg1.webp';
import heroImg2 from '../../../assets/HeroImg2.webp';

const slides = [
  {
    imagem: heroImg,
    tag: '—SERVIÇO AUTORIZADO',
    titulo: 'Assistência técnica autorizada',
    subtitulo: 'Atendimento especializado para equipamentos de áudio de diversas marcas, com diagnóstico preciso e reparo conforme padrões do fabricante.',
    posicaoMobile: '70% 30%',
  },
  {
    imagem: heroImg1,
    tag: '—SUPORTE ESPECIALIZADO',
    titulo: 'Soluções técnicas para áudio profissional',
    subtitulo: 'Manutenção e reparo de equipamentos profissionais, incluindo mesas de som e sistemas de áudio, com qualidade e confiabilidade.',
    posicaoMobile: '70% 30%',
  },
  {
    imagem: heroImg2,
    tag: '—ATENDIMENTO MULTIMARCAS',
    titulo: 'Serviço autorizado com padrão técnico',
    subtitulo: 'Reparo e manutenção com procedimentos homologados, garantindo desempenho, segurança e durabilidade dos equipamentos.',
    posicaoMobile: '80% 30%',
  },
];

function Hero() {
  const [atual, setAtual] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 767);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setAtual((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const irPara = (index: number) => setAtual(index);
  const anterior = () => setAtual((prev) => (prev - 1 + slides.length) % slides.length);
  const proximo = () => setAtual((prev) => (prev + 1) % slides.length);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) {
      delta > 0 ? proximo() : anterior();
    }
    touchStartX.current = null;
  };

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${slides[atual].imagem})`,
        backgroundPosition: isMobile ? slides[atual].posicaoMobile : 'center',
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="hero__overlay" />

      <button className="hero__seta hero__seta--esq" onClick={anterior} aria-label="Slide anterior">&#8249;</button>

      <div className="hero__content">
        <span className="hero__tag">{slides[atual].tag}</span>
        <h1 className="hero__title">{slides[atual].titulo}</h1>
        <p className="hero__subtitle">{slides[atual].subtitulo}</p>
        <div className="hero__buttons">
          <a href="#orcamento" className="hero__btn hero__btn--primary">Faça seu orçamento</a>
          <a href="https://shoficina.com.br/osweb/home.php" target="_blank" rel="noopener noreferrer" className="hero__btn hero__btn--secondary">Consulte sua OS</a>
        </div>
      </div>

      <button className="hero__seta hero__seta--dir" onClick={proximo} aria-label="Próximo slide">&#8250;</button>

      <div className="hero__bolinhas">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`hero__bolinha ${index === atual ? 'hero__bolinha--ativa' : ''}`}
            onClick={() => irPara(index)}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;