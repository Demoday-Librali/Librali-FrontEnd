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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, delectus commodi, officia magnam suscipit iste consectetur sapiente veniam vero iusto cupiditate qui minima veritatis quos? Eos, eveniet! Ad, dolorum laborum!
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit laudantium tempore ipsam fuga, labore quibusdam 
                        tempora ullam doloremque. Culpa, esse accusantium dolorem pariatur voluptas nostrum quasi animi incidunt placeat 
                        fugit.
                    </p>
                </div>
            </div>
            <div className={Style.duvidasContainer}>
                <input type="checkbox" id="duvida4" className={Style.checkbox} />
                <label htmlFor="duvida4" className={Style.toggle}></label>
                <div className={Style.textoContainer}>
                    <h2>É em tempo real ou agendado?</h2>
                    <p className={Style.descricao}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus ad odio magni aliquid ut corporis, sunt 
                        sequi necessitatibus et! Vitae dicta, repudiandae aut rerum incidunt dignissimos repellat consequuntur explicabo 
                        nemo!
                    </p>
                </div>
            </div>
            <div className={Style.duvidasContainer}>
                <input type="checkbox" id="duvida5" className={Style.checkbox} />
                <label htmlFor="duvida5" className={Style.toggle}></label>
                <div className={Style.textoContainer}>
                    <h2>É seguro contratar por aqui?</h2>
                    <p className={Style.descricao}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium eius enim omnis amet assumenda quibusdam 
                        delectus voluptas est magni, quia molestiae optio, natus dolores? Ullam commodi voluptates facere quod expedita.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Duvidas;