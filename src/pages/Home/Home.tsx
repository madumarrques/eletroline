import Hero from './components/Hero';
import Solucoes from './components/Solucoes';
import Marcas from './components/Marcas';
import Orcamento from './components/Orcamento';
import ConsultaOS from './components/ConsultaOS';

function Home() {
  return (
    <main>
      <Hero />
      <Solucoes />
      <Marcas />
      <Orcamento />
      <ConsultaOS />
    </main>
  );
}

export default Home;