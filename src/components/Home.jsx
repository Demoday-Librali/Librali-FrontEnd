import Styles from './css/Home.module.css'
import Fundointerprete from '../assets/images/fundointerprete.png'
import Fundointerprete1 from '../assets/images/fundointerprete1.png'
import Ellipse from '../assets/images/figura-roxa.png'
import Mulherinterprete from '../assets/images/img_home.png'
import Menu from './Menu'
import Card from './Card'
import Paginas from './Paginas'
import { useInterpretes } from '../hooks/useInterprete'

function Home() {
  const { data: interpretes, isLoading, isError } = useInterpretes();

  return (
    <>
      <section id="home" className={Styles.home_interpretes}>
        <h1>A comunicação acessível<br /> começa aqui.</h1>
        <div className={Styles.home_qudrado}></div>
        <img className={Styles.fundo_claro} src={Fundointerprete} alt="" />
        <img className={Styles.fundo_escuro} src={Fundointerprete1} alt="" />
        <img className={Styles.fundo_elipse} src={Ellipse} alt="" />
        <img className={Styles.img_mulher} src={Mulherinterprete} alt="" />
      </section>

      <Menu />

      <div className={Styles.container}>
        {isLoading && <p>Carregando intérpretes...</p>}

        {isError && <p>Erro ao carregar intérpretes.</p>}

        {interpretes?.map((usuario) => (
          <Card
            key={usuario.id}
            nome={usuario.nomeRazao}
            cidade={usuario.cidade}
            estado={usuario.uf}
            descricao={usuario.descricao}
          />
        ))}
      </div>

      <Paginas />
    </>
  )
}

export default Home;
