import Style from './css/Sobre.module.css'

function Sobre(){
    return(
        <section className={Style.container}>
            <div className={Style.Sobre}>
            <h1 className={Style.title}>Nossa História</h1>
            <p className={Style.paragraph}>A plataforma Librali foi desenvolvida a partir da necessidade de promover maior inclusão e acessibilidade no mercado de serviços especialmente para a comunidade surda e pessoas com deficiência auditiva.</p>
            </div>
        </section>
    )
}

export default Sobre