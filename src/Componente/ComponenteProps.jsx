import Style from './css/ComponenteProps.module.css';

function ComponenteProps({Logo, TikTok, Instagram, X, Facebook, YouTube}) {
    return (
        <div className={Style.box}>
            <img src={Logo} alt="Logo da Librali"  className={Style.image_props}/>
            <img src={TikTok} alt="tiktok da Librali"  className={Style.TikTok_props}/>
            <img src={Instagram} alt="Instagram da Librali"  className={Style.Instagram_props}/>
            <img src={X} alt="X da Librali"  className={Style.X_props}/>
            <img src={Facebook} alt="Facebook da Librali"  className={Style.Facebook_props}/>
            <img src={YouTube} alt="YouTube da Librali"  className={Style.YouTube_props}/>
        </div>
    )
}
export default ComponenteProps;