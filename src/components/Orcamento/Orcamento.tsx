import { useState } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import './Orcamento.css';

const marcas = [
  'Harman Kardon', 'JBL', 'AKG', 'Crown', 'Soundcraft',
  'Attack', 'Datrel', 'Donner', 'LL Audio', 'Novik',
  'Staner', 'TRC', 'Someco',
];

type FormFields = {
  nome: string;
  celular: string;
  marca: string;
  equipamento: string;
  descricao: string;
};

function Orcamento() {
  const [tipo, setTipo] = useState<'orcamento' | 'garantia'>('orcamento');
  const [form, setForm] = useState<FormFields>({
    nome: '',
    celular: '',
    marca: '',
    equipamento: '',
    descricao: '',
  });
  const [erros, setErros] = useState<Partial<FormFields>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (erros[name as keyof FormFields]) {
      setErros(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleMarca = (value: string) => {
    setForm(prev => ({ ...prev, marca: value }));
    if (erros.marca) setErros(prev => ({ ...prev, marca: '' }));
  };

  const validar = (): boolean => {
    const novosErros: Partial<FormFields> = {};
    if (!form.nome.trim()) novosErros.nome = 'Informe seu nome';
    if (!form.celular.trim()) novosErros.celular = 'Informe seu celular';
    if (!form.marca) novosErros.marca = 'Selecione a marca';
    if (!form.equipamento.trim()) novosErros.equipamento = 'Informe o equipamento';
    setErros(novosErros);
    return Object.keys(novosErros).length === 0;
  };

  const handleSubmit = () => {
    if (!validar()) return;

    const mensagem = `
*Solicitação de ${tipo === 'orcamento' ? 'Orçamento' : 'Garantia'}*

*Nome:* ${form.nome}
*Celular:* ${form.celular}
*Marca:* ${form.marca}
*Equipamento:* ${form.equipamento}
*Descrição:* ${form.descricao || 'Não informada'}
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
            <label htmlFor="nome">Nome</label>
            <input
              id="nome"
              type="text"
              name="nome"
              placeholder="Digite seu nome"
              value={form.nome}
              onChange={handleChange}
              className={erros.nome ? 'orcamento__input--erro' : ''}
              aria-invalid={!!erros.nome}
              aria-describedby={erros.nome ? 'erro-nome' : undefined}
            />
            {erros.nome && <span className="orcamento__erro" id="erro-nome" role="alert">{erros.nome}</span>}
          </div>

          <div className="orcamento__grupo">
            <label htmlFor="celular">Celular</label>
            <input
              id="celular"
              type="tel"
              name="celular"
              placeholder="(XX) XXXXX-XXXX"
              value={form.celular}
              onChange={handleChange}
              className={erros.celular ? 'orcamento__input--erro' : ''}
              aria-invalid={!!erros.celular}
              aria-describedby={erros.celular ? 'erro-celular' : undefined}
            />
            {erros.celular && <span className="orcamento__erro" id="erro-celular" role="alert">{erros.celular}</span>}
          </div>

          <div className="orcamento__grupo">
            <label>Marca do aparelho</label>
            <Dropdown
              options={marcas}
              value={form.marca}
              placeholder="Selecione a marca"
              onChange={handleMarca}
            />
            {erros.marca && <span className="orcamento__erro" role="alert">{erros.marca}</span>}
          </div>

          <div className="orcamento__grupo">
            <label htmlFor="equipamento">Equipamento a ser reparado</label>
            <input
              id="equipamento"
              type="text"
              name="equipamento"
              placeholder="Digite o modelo do equipamento"
              value={form.equipamento}
              onChange={handleChange}
              className={erros.equipamento ? 'orcamento__input--erro' : ''}
              aria-invalid={!!erros.equipamento}
              aria-describedby={erros.equipamento ? 'erro-equipamento' : undefined}
            />
            {erros.equipamento && <span className="orcamento__erro" id="erro-equipamento" role="alert">{erros.equipamento}</span>}
          </div>

        </div>

        <div className="orcamento__lado">
          <fieldset className="orcamento__radio" aria-label="Tipo de solicitação">
            <legend className="orcamento__radio-legenda">Tipo de solicitação</legend>
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
          </fieldset>

          <div className="orcamento__grupo">
            <label htmlFor="descricao">Descrição do problema</label>
            <textarea
              id="descricao"
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
