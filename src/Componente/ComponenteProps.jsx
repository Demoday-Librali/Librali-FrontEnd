import Style from './css/ComponenteProps.module.css';

export default function ComponenteProps({Logo, TikTok, Instagram, X, Facebook, YouTube, Educacional, Juridico, Saude, Fundoia, Mulheria, Iconeia, Blocoverde, Categoria, Interprete, Cadastro, Impulso, Rosa, Laranja, Verde, Azul, Fundodepoimento}) {
    return (
        <div className={Style.box}>
            <img src={Logo} alt="Logo da Librali"  className={Style.image_props}/>
            <img src={TikTok} alt="tiktok da Librali"  className={Style.TikTok_props}/>
            <img src={Instagram} alt="Instagram da Librali"  className={Style.Instagram_props}/>
            <img src={X} alt="X da Librali"  className={Style.X_props}/>
            <img src={Facebook} alt="Facebook da Librali"  className={Style.Facebook_props}/>
            <img src={YouTube} alt="YouTube da Librali"  className={Style.YouTube_props}/>
            <img src={Educacional} alt=""  className={Style.Educacional_props}/>
            <img src={Juridico} alt=""  className={Style.Juridico_props}/>
            <img src={Saude} alt=""  className={Style.Saude_props}/>
            <img src={Fundoia} alt=""  className={Style.Fundoia_props}/>
            <img src={Mulheria} alt=""  className={Style.Mulheria_props}/>
            <img src={Iconeia} alt=""  className={Style.Iconeia_props}/>
            <img src={Blocoverde} alt=""  className={Style.Blocoverde_props}/>
            <img src={Categoria} alt=""  className={Style.Categoria_props}/>
            <img src={Interprete} alt=""  className={Style.Interprete_props}/>
            <img src={Cadastro} alt=""  className={Style.Cadastro_props}/>
            <img src={Impulso} alt=""  className={Style.Impulso_props}/>
            <img src={Rosa} alt=""  className={Style.Rosa_props}/>
            <img src={Laranja} alt=""  className={Style.Laranja_props}/>
            <img src={Verde} alt=""  className={Style.Verde_props}/>
            <img src={Azul} alt=""  className={Style.Azul_props}/>
            <img src={Fundodepoimento} alt=""  className={Style.Fundodepoimento_props}/>
        </div>
    )
}