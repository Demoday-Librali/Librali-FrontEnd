import Styles from './css/Card.module.css'
import Interpreteuser from '../../assets/images/interpreteuser.jpeg'

function Card({ nome, status, cidade, estado, especialidades, descricao, preco, imagem }) {
  return (
    <div className={Styles.card}>
      <div className={Styles.topo}>
        <img src={Interpreteuser} alt={nome} className={Styles.foto} />
        <div className={Styles.info}>
          <h3>{nome}</h3>
          <p className={Styles.avaliacao}>⭐ 5.0 <span>(284 avaliações)</span></p>
          <p className={Styles.local}>📍 {cidade} - {estado}</p>
        </div>
      </div>

      <p className={status === 'Disponível agora' ? Styles.disponivel : Styles.ocupado}>
            {status === 'Disponível agora'}
            {status}
          </p>

      <div className={Styles.especialidades}>
        <p><strong>Especialidades:</strong></p>
        <div className={Styles.tags}>
          {especialidades?.map((esp, i) => (
            <span key={i} className={Styles.tag}>{esp}</span>
          ))}
        </div>
      </div>
          
      <div className={Styles.descricao}>
        <p>{descricao}</p>
      </div>

      <p className={Styles.preco}>R$ {preco}/hora</p>

      <button className={Styles.botao}>💬 Entrar em contato</button>
    </div>
  )
}

export default Card
