import { useState } from 'react';
import Dropdown from '../../../components/Dropdown/Dropdown';
import './Orcamento.css';

const marcas = [
  'Harman Kardon', 'JBL', 'AKG', 'Crown', 'Soundcraft',
  'Attack', 'Datrel', 'Donner', 'LL Audio', 'Novik',
  'Staner', 'TRC', 'Someco'
];

function Orcamento() {
  const [tipo, setTipo] = useState<'orcamento' | 'garantia'>('orcamento');
  const [form, setForm] = useState({
    nome: '',
    celular: '',
    marca: '',
    equipamento: '',
    descricao: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleMarca = (value: string) => {
    setForm({ ...form, marca: value });
  };

  const handleSubmit = () => {
    const mensagem = `
*Solicitação de ${tipo === 'orcamento' ? 'Orçamento' : 'Garantia'}*

*Nome:* ${form.nome}
*Celular:* ${form.celular}
*Marca:* ${form.marca}
*Equipamento:* ${form.equipamento}
*Descrição:* ${form.descricao}
    `.trim();

    const url = `https://wa.me/552127825606?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="orcamento" id="orcamento">
      <h2 className="orcamento__titulo">Faça seu orçamento</h2>
      <div className="orcamento__container">
        <div className="orcamento__campos">
          <div className="orcamento__grupo">
            <label>Nome</label>
            <input
              type="text"
              name="nome"
              placeholder="Digite seu nome"
              value={form.nome}
              onChange={handleChange}
            />
          </div>

          <div className="orcamento__grupo">
            <label>Celular</label>
            <input
              type="tel"
              name="celular"
              placeholder="Digite seu número"
              value={form.celular}
              onChange={handleChange}
            />
          </div>

          <div className="orcamento__grupo">
            <label>Marca do aparelho</label>
            <Dropdown
              options={marcas}
              value={form.marca}
              placeholder="Selecione a marca"
              onChange={handleMarca}
            />
          </div>

          <div className="orcamento__grupo">
            <label>Equipamento a ser reparado</label>
            <input
              type="text"
              name="equipamento"
              placeholder="Digite o modelo do equipamento"
              value={form.equipamento}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="orcamento__lado">
          <div className="orcamento__radio">
            <label className={`orcamento__radio-opcao ${tipo === 'orcamento' ? 'orcamento__radio-opcao--ativa' : ''}`}>
              <input
                type="radio"
                name="tipo"
                value="orcamento"
                checked={tipo === 'orcamento'}
                onChange={() => setTipo('orcamento')}
              />
              Orçamento
            </label>
            <label className={`orcamento__radio-opcao ${tipo === 'garantia' ? 'orcamento__radio-opcao--ativa' : ''}`}>
              <input
                type="radio"
                name="tipo"
                value="garantia"
                checked={tipo === 'garantia'}
                onChange={() => setTipo('garantia')}
              />
              Garantia
            </label>
          </div>

          <div className="orcamento__grupo">
            <label>Descrição do problema</label>
            <textarea
              name="descricao"
              placeholder="Descreva o problema do equipamento"
              value={form.descricao}
              onChange={handleChange}
              rows={5}
            />
          </div>
        </div>
      </div>

      <div className="orcamento__footer">
        <button className="orcamento__btn" onClick={handleSubmit}>
          Solicitar orçamento →
        </button>
      </div>

    </section>
  );
}

export default Orcamento;