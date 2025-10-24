
import Style from './css/Aomeco.module.css'
import videoFundo from '../assets/img/video/librali_video.mp4'

function Aomeco() {
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

export default Aomeco