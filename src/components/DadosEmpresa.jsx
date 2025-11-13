import Styles from './css/DadosEmpresa.module.css';
import BannerEmpresa from '../components/BannerEmpresa.jsx';
import Telefone from '../assets/phone-dados-empresa.svg';
import Email from '../assets/email-dados-empresa.svg';
import Foto from   '../assets/images/foto-perfil-empresa-inicial.png';
import Lapis from   '../assets/lapis-dados.svg';


function DadosEmpresa() {
  return (
    <main>
        <section className={Styles.conteudo_principal}>
            <div className={Styles.banner_empresa}>{/*<BannerEmpresa />*/}</div>
            <hr />

            <section>
                <img src={Foto} alt="Foto da empresa" className={Styles.foto_empresa}/>
                <button className={Styles.botao_lapis}><img src={Lapis} alt="Ícone de lápis" /></button>
            </section>

        <section className={Styles.organizacao}>

            {/*Primeiro Bloco*/}
            <section className={Styles.bloco}>

                <section className={Styles.conteudo_esquerda}>
                    <div>
                        <h3>Nome da empresa</h3>
                        <p>LinkdIn da empresa</p>
                    </div>
                    <div className={Styles.contato}>
                        <h3>Contato</h3>
                        <div><img src={Telefone} alt="Icone de telefone" /> 
                        <p>(11) 3333-3333</p></div>
                        <div><img src={Email} alt="Icone de carta" /> <p>libraliproa@gmail.com</p></div>
                    </div>


                </section>

                <section className={Styles.conteudo_direita}>
                    <div>
                        <h3>Informações</h3>
                        <p>Média de avaliações: </p>
                        <p>Serviços contratados: </p>
                        <p>Site da empresa: </p>
                    </div>
                    <div>
                        <h3>Localidade</h3>
                        <p>Rua Exemplo, 123 - Bairro - Cidade - Estado </p>
                        <p>CEP: 00000-000</p>
                    </div>
                </section>
            

            </section>

                <button className={Styles.botao_editar}> Editar </button>

            {/*Segundo Bloco*/}
            <section className={Styles.bloco}>

                <section className={Styles.conteudo_unico}>
                    <div>
                        <h3>Sobre</h3>
                        <p>Uma descrição da empresa é o ato de expor as características e os detalhes da empresa ou ideia, seja de forma oral, escrita ou imagética. Seu objetivo é tornar algo visível e dar a entender como aquilo é, detalhando suas propriedades.</p>
                    </div>

                </section>            

            </section>

                <button className={Styles.botao_editar}> Editar </button>

        </section>

        </section>
    </main>
  );
}

export default DadosEmpresa;