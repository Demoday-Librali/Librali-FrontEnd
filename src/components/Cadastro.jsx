import Styles from "./css/Cadastro.module.css"
import person from "../assets/person.svg"
import company from "../assets/company.svg"
import hand from "../assets/hand.svg"
import logo from "../assets/images/logo-completo.png"


export default function Cadastro() {
    return(
        <div className={Styles.container_cadastro}>
                <div className={Styles.content}>
                    <h1>Tipo de cadastro</h1>
                     <div id={Styles.botoes}>
                         <a href="#"><div className={Styles.botao}>
                            <img src={person} alt="" />
                            <p>Pessoa Física</p>
                         </div></a>
                         <a href="#"><div className={Styles.botao} id={Styles.meio}>
                            <img src={hand} alt="" />
                            <p>Intérpretes</p>
                         </div></a>
                         <a href="#"><div className={Styles.botao}>
                            <img src={company} alt="" />
                            <p>Pessoa jurídica</p>
                         </div></a>
                     </div>
                     <img src={logo} alt="" id={Styles.logo}/>
                </div>
        </div>
    )
}