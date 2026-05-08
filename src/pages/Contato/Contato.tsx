import HeroContato from './components/HeroContato';
import InfoContato from './components/InfoContato';
import Localizacao from '../../components/Localizacao/Localizacao';
import Orcamento from '../../components/Orcamento/Orcamento';
import BarraContato from '../../components/BarraContato/BarraContato';

function Contato() {
  return (
    <main>
      <HeroContato />
      <InfoContato />
      <Localizacao />
      <Orcamento />
      <BarraContato />
    </main>
  );
}

export default Contato;
