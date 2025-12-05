import Style from './css/PaginaIa.module.css'
import Fundoia from '../assets/images/fundoia.png'
import Mulheria from '../assets/images/mulheria.png'
import Iconeia from '../assets/images/iconeia.png'
import Blocoverde from '../assets/images/blocoverde.png'
import { Link } from 'react-router-dom';

function PaginaIa() {
    return(

        <div className={Style.PaginaIa}>
        <img src={Fundoia} alt="" className={Style.Fundoia}/>

        <section>
            <section className={Style.organizacao}>
                <img src={Mulheria} alt="" className={Style.Mulheria} />
                <img src={Iconeia} alt="" className={Style.Iconeia} />
                <img src={Blocoverde} alt="" className={Style.Blocoverde} />
            </section>

            <section className={Style.organizacao_texto}>
                <h1 className={Style.Titulo}>Conheça a Lara</h1>
                <p className={Style.Texto1}>Já pensou em ter uma ajudinha extra na palma da sua mão? Nossa página de IA está aqui para tornar sua experiência mais simples, rápida e inteligente..</p>
                <p className={Style.Texto2}>Venha conhecer, interagir e descobrir como a tecnologia pode facilitar sua vida!</p>

                <div className={Style.botoes}>
                <Link to="/assistente" className={Style.cadastro}>Explore</Link>
                <Link to="/assistente" className={Style.login}>Ver mais</Link>
                
            </div>
            </section>
            
            
        </section>

        </div>

    )
}

export default PaginaIa