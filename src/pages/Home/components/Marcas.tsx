import { useState } from 'react';
import MarcaCard from '../../../components/MarcaCard/MarcaCard';
import MarcaModal from '../../../components/MarcaModal/MarcaModal';
import './Marcas.css';

import harmanK from '../../../assets/harmanK.png';
import jbl from '../../../assets/JBL.png';
import akg from '../../../assets/akg.png';
import crown from '../../../assets/crown.png';
import soundcraft from '../../../assets/soundcraft.png';
import attack from '../../../assets/attack.png';
import datrel from '../../../assets/datrel.png';
import donner from '../../../assets/donner.png';
import llAudio from '../../../assets/LLAudio.png';
import novik from '../../../assets/novik.png';
import staner from '../../../assets/staner.png';
import trc from '../../../assets/trc.png';
import someco from '../../../assets/someco.png';

const marcas = [
  { nome: 'Harman Kardon', logo: harmanK, aparelhos: ['Caixas de som Bluetooth', 'Sistemas de som residencial', 'Soundbars', 'Home theaters', 'Receivers (AVR)'] },
  { nome: 'JBL', logo: jbl, aparelhos: ['Caixas de som Bluetooth (portáteis)', 'Caixas de som profissionais (PA)', 'Subwoofers', 'Monitores de áudio (estúdio)', 'Soundbars', 'Sistemas de home theater', 'Fones de ouvido', 'Amplificadores de áudio'] },
  { nome: 'AKG', logo: akg, aparelhos: ['Microfones profissionais', 'Fones de ouvido (studio e consumer)', 'Headsets', 'Sistemas de microfone sem fio', 'Equipamentos de áudio para estúdio'] },
  { nome: 'Crown', logo: crown, aparelhos: ['Amplificadores de potência', 'Amplificadores para PA', 'Sistemas de amplificação para eventos', 'Equipamentos de rack de áudio'] },
  { nome: 'Soundcraft', logo: soundcraft, aparelhos: ['Mesas de som analógicas', 'Mesas de som digitais', 'Mixers compactos', 'Equipamentos de áudio para estúdio e eventos'] },
  { nome: 'Attack', logo: attack, aparelhos: ['Caixas acústicas profissionais', 'Subwoofers', 'Sistemas de som para eventos', 'Equipamentos de PA'] },
  { nome: 'Datrel', logo: datrel, aparelhos: ['Caixas acústicas', 'Sistemas de som amplificados', 'Equipamentos para igrejas e eventos'] },
  { nome: 'Donner', logo: donner, aparelhos: ['Interfaces de áudio', 'Pedais de efeito', 'Equipamentos musicais eletrônicos', 'Sistemas de som compactos'] },
  { nome: 'LL Audio', logo: llAudio, aparelhos: ['Caixas de som profissionais', 'Sistemas de áudio amplificado', 'Equipamentos para eventos'] },
  { nome: 'Novik', logo: novik, aparelhos: ['Caixas amplificadas', 'Mesas de som', 'Microfones', 'Equipamentos de áudio profissional'] },
  { nome: 'Staner', logo: staner, aparelhos: ['Amplificadores', 'Caixas de som profissionais', 'Sistemas de som portáteis', 'Equipamentos para músicos'] },
  { nome: 'TRC', logo: trc, aparelhos: ['Amplificadores', 'Caixas de som', 'Sistemas de áudio para uso geral'] },
  { nome: 'Someco', logo: someco, aparelhos: ['Caixas de som', 'Sistemas de som ambiente', 'Equipamentos de áudio comercial'] },
];

function Marcas() {
  const [marcaSelecionada, setMarcaSelecionada] = useState<typeof marcas[0] | null>(null);

  return (
    <section className="marcas">
      <h2 className="marcas__titulo">Marcas Atendidas</h2>
      <div className="marcas__grid">
        {marcas.map((marca, index) => (
          <MarcaCard
            key={index}
            logo={marca.logo}
            nome={marca.nome}
            onClick={() => setMarcaSelecionada(marca)}
          />
        ))}
      </div>

      {marcaSelecionada && (
        <MarcaModal
          nome={marcaSelecionada.nome}
          logo={marcaSelecionada.logo}
          aparelhos={marcaSelecionada.aparelhos}
          onClose={() => setMarcaSelecionada(null)}
        />
      )}
    </section>
  );
}

export default Marcas;