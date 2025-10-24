import Style from './css/Setores.module.css'
import Educacional from '../assets/images/educacional.png'
import Juridico from '../assets/images/juridico.png'
import Saude from '../assets/images/saude.png'


function Setores(){
    return(
        <div className={Style.setores}>
            <h1>Os setores mais solicitados.</h1>
            <h2>Áreas com alta demanda </h2>
            <div className={Style.caixas}>
                <div className={Style.caixinha}>
                    <img src={Educacional} alt=""/>
                    <h3>intérpretes de Libras</h3>
                    <h2>Educacional</h2>
                    <hr className={Style.linha} />
                    <button className={Style.botao}>Ver profissionais</button>
                </div>
                <div className={Style.caixinha}>
                    <img src={Juridico} alt=""/>
                    <h3>intérpretes de Libras</h3>
                    <h2>Jurídico</h2>
                    <hr className={Style.linha} />
                    <button className={Style.botao}>Ver profissionais</button>
                </div>
                <div className={Style.caixinha}>
                    <img src={Saude} alt=""/>
                    <h3>intérpretes de Libras</h3>
                    <h2>Saúde</h2>
                    <hr className={Style.linha} />
                    <button className={Style.botao}>Ver profissionais</button>
                </div>
            </div>
            <button className={Style.botao2}>Ver profissionais</button>
        </div>
    )
}

export default Setores