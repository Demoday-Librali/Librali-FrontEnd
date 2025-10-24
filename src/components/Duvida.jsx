import Style from './css/Duvidas.module.css'

function Duvidas() {
        
    return (
        <div className={Style.duvidas}>
            <h1>Principais dúvidas</h1>
            <div className={Style.duvidasContainer}>
                <input type="checkbox" id="duvida1" className={Style.checkbox} />
                <label htmlFor="duvida1" className={Style.toggle}></label>
                <div className={Style.textoContainer}>
                    <h2>Preciso ter algum contrato ou documentação?</h2>
                    <p className={Style.descricao}>
                        A única documentação solicitamos é do intérprete para confirmar sua qualificação, habilidade e experiência em 
                        trabalhos com Libras. Os contratos são feitos diretamente entre os contratantes e os intérpretes.
                    </p>
                </div>
            </div>
            <div className={Style.duvidasContainer}>
                <input type="checkbox" id="duvida2" className={Style.checkbox} />
                <label htmlFor="duvida2" className={Style.toggle}></label>
                <div className={Style.textoContainer}>
                    <h2>Quem são os intérpretes?</h2>
                    <p className={Style.descricao}>
                        Todos os intérpretes cadastrados em nossa plataforma passam por um processo de curadoria que avalia formação, 
                        experiência e atuação profissional. Trabalhamos apenas com intérpretes qualificados, com conhecimento técnico em 
                        dLibras e atuação comprovada, garantindo a segurança, ética e excelência em cada contratação.
                    </p>
                </div>
            </div>
            <div className={Style.duvidasContainer}>
                <input type="checkbox" id="duvida3" className={Style.checkbox} />
                <label htmlFor="duvida3" className={Style.toggle}></label>
                <div className={Style.textoContainer}>
                    <h2>E se eu tiver dúvidas ou problemas?</h2>
                    <p className={Style.descricao}>
                        Em caso de dúvidas referentes ao nosso site você pode utlizar a nossa Inteligência artificial para esclarecer 
                        essas dúvidas ou entrar em contato conosco via e-mail(libraliproa@gmail.com) ou telefone((14) 3376-1782).
                    </p>
                </div>
            </div>
            <div className={Style.duvidasContainer}>
                <input type="checkbox" id="duvida4" className={Style.checkbox} />
                <label htmlFor="duvida4" className={Style.toggle}></label>
                <div className={Style.textoContainer}>
                    <h2>É seguro contratar por aqui?</h2>
                    <p className={Style.descricao}>
                        O LibraLi respeita o seu direito à privacidade e zela pela segurança dos dados pessoais a que tem acesso em suas 
                        atividades. Para saber mais, clique aqui para ler nossa política de privacidade.!
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default Duvidas;