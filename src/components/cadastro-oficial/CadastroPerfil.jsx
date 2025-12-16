import Styles from './css/CadastroPerfil.module.css';
import Steps from '../Steps';

const CadastroPerfil = ({ data, updateFieldHandler }) => {
  return (
    <div className={Styles.cadastro}>

      <div className={Styles.form_control}>
        <input
          type="text"
          name="nome_razao"
          id="nome_completo"
          placeholder="Nome completo ou Razão Social"
          value={data.nome_razao || ""}
          onChange={(e) => updateFieldHandler("nome_razao", e.target.value)}
          required
        />
      </div>

      <div className={Styles.form_control}>
        <input
          type="text"
          name="cpf_cnpj"
          id="cpf"
          placeholder="CPF ou CNPJ"
          value={data.cpf_cnpj || ""}
          onChange={(e) => updateFieldHandler("cpf_cnpj", e.target.value)}
          required
        />
      </div>

      <div className={Styles.meio}>
        <div className={Styles.form_control} id={Styles.data_nascimento}>
          <input
            type="date"
            name="data_nasc"
            id="data_nasc"
            value={data.data_nasc || ""}
            onChange={(e) => updateFieldHandler("data_nasc", e.target.value)}
            required
          />
        </div>
      </div>

      <div className={Styles.form_control}>
        <div className={Styles.senhas}>
          <input
            type="password"
            name="senha"
            id="form_senha"
            placeholder="Senha"
            value={data.senha || ""}
            onChange={(e) => updateFieldHandler("senha", e.target.value)}
            required
          />
          <input
            type="password"
            name="conf_senha"
            id="form_conf_senha"
            placeholder="Confirmar senha"
            value={data.conf_senha || ""}
            onChange={(e) => updateFieldHandler("conf_senha", e.target.value)}
            required
          />
        </div>

        <div className={Styles.form_control} id={Styles.controle_check}>
          <input
            type="checkbox"
            name="check_contratante"
            id="check_box"
            checked={data.check_contratante || false}
            onChange={(e) => updateFieldHandler("check_contratante", e.target.checked)}
          />
          <label htmlFor="check_box" id={Styles.checkbox_label}>
            Quero usar o Site apenas para Encontrar Intérpretes
          </label>
        </div>
      </div>

    </div>
  );
};

export default CadastroPerfil;
