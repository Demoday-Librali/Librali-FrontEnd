
import Style from './css/Comeco.module.css'
import videoFundo from '../assets/img/video/Vergil_combo.mp4'

function Comeco() {
    return (

        <div className={Style.video_fundo}>
            <video autoPlay loop muted playsInline className={Style.video_bg}>
                <source src={videoFundo} type="video/mp4" />
            </video>

            <div className={Style.texto_video}>
                <h1>librali</h1>
                <p>A primeira plataforma simplificada de contratação de interpretes de libras, especializados das mais diversas áreas.</p>
            </div>
        </div>


    )
}

export default Comeco