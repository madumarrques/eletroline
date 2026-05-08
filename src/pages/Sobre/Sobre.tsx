import HeroSobre from './components/HeroSobre';
import NossaHistoria from './components/NossaHistoria';
import Especializacao from './components/Especializacao';
import Diferenciais from './components/Diferenciais';
import NumerosCred from './components/NumerosCred';
import Marcas from '../Home/components/Marcas';
import CTASobre from './components/CTASobre';
import Orcamento from '../../components/Orcamento/Orcamento';
import BarraContato from '../../components/BarraContato/BarraContato';

function Sobre() {
  return (
    <main>
      <HeroSobre />
      <NossaHistoria />
      <Especializacao />
      <Diferenciais />
      <NumerosCred />
      <Marcas />
      <CTASobre />
      <Orcamento />
      <BarraContato />
    </main>
  );
}

export default Sobre;
