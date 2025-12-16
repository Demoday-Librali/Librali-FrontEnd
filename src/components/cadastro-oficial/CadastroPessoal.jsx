import React, { useEffect, useState } from "react";
import Styles from './css/CadastroPessoal.module.css';

function CadastroPessoal({ data, updateFieldHandler }) {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState({
    logradouro: "",
    bairro: "",
    cidade: "",
    uf: "",
    numero: "",
    complemento: ""
  });

  useEffect(() => {
    const buscarCEP = async () => {
      if (cep.length === 8) {
        try {
          const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
          const data = await response.json();
          if (!data.erro) {
            setEndereco(prev => ({
              ...prev,
              logradouro: data.logradouro,
              bairro: data.bairro,
              cidade: data.localidade,
              uf: data.uf
            }));
          } else {
            alert("CEP não encontrado.");
          }
        } catch (error) {
          console.error("Erro ao buscar o CEP:", error);
        }
      }
    };
    buscarCEP();
  }, [cep]);

  // Atualiza o estado do pai
  useEffect(() => {
    updateFieldHandler("cep", cep);
    updateFieldHandler("numero", endereco.numero);
    updateFieldHandler("complemento", endereco.complemento);
    updateFieldHandler("logradouro", endereco.logradouro);
    updateFieldHandler("bairro", endereco.bairro);
    updateFieldHandler("cidade", endereco.cidade);
    updateFieldHandler("uf", endereco.uf);
  }, [cep, endereco]);

  return (
    <div className={Styles.cadastro}>

      <div id={Styles.superior}>
        <div className={Styles.form_control}>
          <input
            type="text"
            name='cep'
            id={Styles.cep}
            placeholder='CEP'
            value={cep}
            onChange={(e) => setCep(e.target.value.replace(/\D/g, ''))}
            required
          />
        </div>
        <div className={Styles.form_control}>
          <input
            type="text"
            name='numero'
            id={Styles.numero}
            placeholder='N°'
            value={endereco.numero}
            onChange={(e) => setEndereco({ ...endereco, numero: e.target.value })}
            required
          />
        </div>
        <div className={Styles.form_control}>
          <input
            type="text"
            name='complemento'
            id={Styles.complemento}
            placeholder='Complemento'
            value={endereco.complemento}
            onChange={(e) => setEndereco({ ...endereco, complemento: e.target.value })}
          />
        </div>
      </div>

      <div id={Styles.meio}>
        <div className={Styles.form_control}>
          <input
            type="text"
            name='rua'
            id={Styles.rua}
            placeholder='Rua'
            value={endereco.logradouro}
            readOnly
            required
          />
        </div>
        <div className={Styles.form_control}>
          <input
            type="text"
            name='uf'
            id={Styles.uf}
            placeholder='UF'
            value={endereco.uf}
            readOnly
            required
          />
        </div>
      </div>

      <div className={Styles.form_control}>
        <input
          type="text"
          name='cidade'
          id={Styles.cidade}
          placeholder='Cidade'
          value={endereco.cidade}
          readOnly
          required
        />
      </div>

    </div>
  );
}

export default CadastroPessoal;
