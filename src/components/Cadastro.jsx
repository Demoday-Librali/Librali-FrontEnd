import Styles from "./css/Cadastro.module.css"
import person from "../assets/person.svg"
import company from "../assets/company.svg"
import hand from "../assets/hand.svg"
import logo from "../assets/images/logo-completo.png"
import { Link } from 'react-router-dom';

export default function Cadastro() {

    return(
        <div className={Styles.container_cadastro}>
                <div className={Styles.content}>
                    <h1>Tipo de cadastro</h1>
                     <div id={Styles.botoes}>
                         <Link to='/cadastropf'><div className={Styles.botao}>
                            <img src={person} alt="" />
                            <p>Pessoa Física</p>
                         </div></Link>
                         <Link to='/interprete'><div className={Styles.botao} id={Styles.meio}>
                            <img src={hand} alt="" />
                            <p>Intérpretes</p>
                         </div></Link>
                         <Link to='/empresa'><div className={Styles.botao}>
                            <img src={company} alt="" />
                            <p>Pessoa jurídica</p>
                         </div></Link>
                     </div>
                     <img src={logo} alt="" id={Styles.logo}/>
                </div>
        </div>
    )
}