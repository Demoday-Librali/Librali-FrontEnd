import Styles from './css/Home.module.css'
import Fundointerprete from '../assets/img/Fundointerprete.png'
import Fundointerprete1 from '../assets/img/Fundointerprete1.png'
import Ellipse from '../assets/img/Ellipse.png'
import Mulherinterprete from '../assets/img/img_home.png'
import Menu from './Menu'
import Card from './Card'
import Paginas from './Paginas'


function Home() {
    return (
        <>
        
        <section id="home" className={Styles.home_interpretes}>
            <h1>A comunicação acessível<br /> começa aqui.</h1>
            <div className={Styles.home_qudrado}></div>
            <img className={Styles.fundo_claro} src={Fundointerprete} alt=""/>
            <img className={Styles.fundo_escuro} src={Fundointerprete1} alt=""/>
            <img className={Styles.fundo_elipse} src={Ellipse} alt=""/>
            <img className={Styles.img_mulher} src={Mulherinterprete} alt=""/>

            
        </section>
        <Menu />
        <div className={Styles.container}>
            <Card 
            nome="Gustavo Moura"
            status="Disponível agora"
            cidade="São Paulo"
            estado="SP"
            especialidades={["Educacional", "Médica", "Eventos"]}
            descricao="8 anos de experiência. Especialista em interpretação educacional e médica. Formação em Letras-Libras pela UFSC. Certificada pelo Prolibras."
            preco="85"
            
            />

            <Card
            nome="João Silva Oliveira"
            status="Ocupado até às 18h"
            cidade="São Paulo"
            estado="SP"
            especialidades={["Jurídica", "Empresarial", "Conferências"]}
            descricao="12 anos de experiência. Especialista em interpretação educacional e médica. Formação em Letras-Libras pela UFSC. Certificada pelo Prolibras."
            preco="120"
            
            />

            <Card
            nome="Cleyton Durval"
            status="Disponível agora"
            cidade="Rio de Janeiro"
            estado="RJ"
            especialidades={["Educacional", "Empresarial"]}
            descricao="12 anos de experiência. Especialista em interpretação educacional e médica. Formação em Letras-Libras pela UFSC. Certificada pelo Prolibras."
            preco="95"
            
            />

            <Card
            nome="Gustavo Moura"
            status="Disponível agora"
            cidade="São Paulo"
            estado="SP"
            especialidades={["Educacional", "Médica", "Eventos"]}
            descricao="8 anos de experiência. Especialista em interpretação educacional e médica. Formação em Letras-Libras pela UFSC. Certificada pelo Prolibras."
            preco="85"
            
            />

            <Card
            nome="João Silva Oliveira"
            status="Ocupado até às 18h"
            cidade="São Paulo"
            estado="SP"
            especialidades={["Jurídica", "Empresarial", "Conferências"]}
            descricao="12 anos de experiência. Especialista em interpretação educacional e médica. Formação em Letras-Libras pela UFSC. Certificada pelo Prolibras."
            preco="120"
            
            />

            <Card
            nome="Cleyton Durval"
            status="Disponível agora"
            cidade="Rio de Janeiro"
            estado="RJ"
            especialidades={["Educacional", "Empresarial"]}
            descricao="12 anos de experiência. Especialista em interpretação educacional e médica. Formação em Letras-Libras pela UFSC. Certificada pelo Prolibras."
            preco="95"
            
            />
      </div>
      <Paginas />
        </>
    )
}

export default Home