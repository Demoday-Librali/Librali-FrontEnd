import Styles from './css/Home.module.css'
import Img_home from '../assets/img/img_home.png'
import Fundo_escuro from '../assets/img/Frame 52.png'
import Fundo_claro from '../assets/img/Rectangle 3.png'
import Decoracao from '../assets/img/Ellipse 4.png'


function Home() {
    return (
        
        <section className={Styles.home_interpretes}>
            <h1>A comunicação acessível<br /> começa aqui.</h1>
            <div className={Styles.home_qudrado}></div>
            <img src={Fundo_escuro} className={Styles.fundo_escuro}/>
            <img src={Fundo_claro}  className={Styles.fundo_claro}/>
            <img src={Img_home} alt='Imagem Home' className={Styles.img_mulher}/>
            <img src={Decoracao}  className={Styles.fundo_elipse}/>
        </section>
    )
}

export default Home