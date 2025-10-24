import Styles from './css/Menu.module.css'

function Menu() {
  return (
    <div className={Styles.container_pai}>
      <form className={Styles.formulario}>
        <div className={Styles.grupo}>
          <label htmlFor="especialidades" className={Styles.titulo}>Especialidades:</label>
          <select name="especialidades" className={Styles.quadrado}>
            <option value="design" className={Styles.opcoes}>Todas as Especialidades</option>
            <option value="programacao" className={Styles.opcoes}>Programação</option>
            <option value="redacao" className={Styles.opcoes}>Redação</option>
            <option value="marketing" className={Styles.opcoes}>Marketing</option>
          </select>
        </div>

        <div className={Styles.grupo}>
          <label htmlFor="localizacao" className={Styles.titulo}>Localização:</label>
          <select name="espaco_localizacao" className={Styles.quadrado}>
            <option value="toda_regiao" className={Styles.opcoes}>Toda região</option>
            <option value="sao_paulo" className={Styles.opcoes}>São Paulo</option>
            <option value="rio_de_janeiro" className={Styles.opcoes}>Rio de Janeiro</option>
            <option value="bahia" className={Styles.opcoes}>Bahia</option>
          </select>
        </div>

        <div className={Styles.grupo}>
          <label htmlFor="disponibilidade" className={Styles.titulo}>Disponibilidade:</label>
          <select name="espaco_disponibilidade" className={Styles.quadrado}>
            <option value="qualquer_horario" className={Styles.opcoes}>Qualquer Horário</option>
            <option value="matutino" className={Styles.opcoes}>Matutino</option>
            <option value="diurno" className={Styles.opcoes}>Diurno</option>
            <option value="noturno" className={Styles.opcoes}>Noturno</option>
          </select>
        </div>

        <div className={Styles.grupo}>
          <label htmlFor="preco_por_hora" className={Styles.titulo}>Preço por hora:</label>
          <select name="espaco_hora" className={Styles.quadrado}>
            <option value="qualquer_valor" className={Styles.opcoes}>Qualquer valor</option>
            <option value="oitenta" className={Styles.opcoes}>R$ 80,00/hora</option>
            <option value="cem" className={Styles.opcoes}>R$ 100,00/hora</option>
            <option value="cento_e_vinte" className={Styles.opcoes}>R$ 120,00/hora</option>
          </select>
        </div>
  

        
      </form>
    </div>
  );
}


export default Menu

