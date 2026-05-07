import Hero from './components/Hero';
import Solucoes from './components/Solucoes';
import Marcas from './components/Marcas';
import Orcamento from './components/Orcamento';
import ConsultaOS from './components/ConsultaOS';
import Localizacao from './components/Localizacao';
import Feedback from './components/Feedback';
import BarraContato from './components/BarraContato';

function Home() {
  return (
    <main>
      <Hero />
      <Solucoes />
      <Marcas />
      <Orcamento />
      <div className="divider--light-dark" />
      <ConsultaOS />
      <div className="divider--dark-light" />
      <Localizacao />
      <Feedback />
      <div className="divider--light-dark" />
      <BarraContato />
    </main>
  );
}

export default Home;