import Styles from "./css/Login.module.css"
import { Link } from 'react-router-dom';

export default function Login() {
    return(
        <div className={Styles.container_login}>
                <div className={Styles.content}>
                    <div className={Styles.esquerdo}>
                        {/*Imagem de login*/}
                    </div>
                    <div className={Styles.direito}>
                        <h1 id={Styles.login_titulo}>Login</h1>

                        <input type="email" name="emailInput" placeholder="e-mail" className={Styles.login_input}/>
                        <input name="cpfInput" placeholder="CPF ou CNPJ" className={Styles.login_input}/>
                        <input type="password" name="senhaInput" placeholder="Senha" className={Styles.login_input}/>

                        <a href="#"><p id={Styles.forgot}>Esqueci a senha!</p></a>

                        <button id={Styles.btn_logar}>Entrar</button>

                        <p>Não possui conta? <a href="#">Crie aqui!</a></p>
                    </div>
                </div>
        </div>
    )
}