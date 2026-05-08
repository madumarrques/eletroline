import Hero from './components/Hero';
import Solucoes from './components/Solucoes';
import Marcas from './components/Marcas';
import Orcamento from '../../components/Orcamento/Orcamento';
import ConsultaOS from './components/ConsultaOS';
import Localizacao from '../../components/Localizacao/Localizacao';
import Feedback from './components/Feedback';
import BarraContato from '../../components/BarraContato/BarraContato';

function Home() {
  return (
    <main>
      <Hero />
      <Solucoes />
      <Marcas />
      <Orcamento />
      <ConsultaOS />
      <Localizacao />
      <Feedback />
      <BarraContato />
    </main>
  );
}

export default Home;
