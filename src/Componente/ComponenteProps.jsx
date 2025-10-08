import Style from './css/ComponenteProps.module.css';

function ComponenteProps({Logo}) {
    return (
        <div className={Style.box}>
            <img src={Logo} alt="Logo da Librali"  className={Style.image_props}/>
        </div>
    )
}
export default ComponenteProps;