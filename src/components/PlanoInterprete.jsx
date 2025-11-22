import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Style from '../components/css/PlanoInterprete.module.css';
import Check_roxo_p from '../assets/images/check_roxo_p.png';
import Check_verde_p from '../assets/images/check_verde_p.png';

function PlanoInterprete() {
    const [selected, setSelected] = useState("interpretes");
    const navigate = useNavigate();   // ⭐ PARA REDIRECIONAR

    return (
        <section className={Style.PlanoInterprete}>
            <div className={Style.botoes}>
                <div className={Style.Selecao}>
                    <div
                        className={`${Style.Interprete} ${selected === "interpretes" ? Style.active : ""}`}
                        onClick={() => setSelected("interpretes")}
                    >
                        Intérpretes
                    </div>

                    <div
                        className={`${Style.Interprete} ${selected === "empresas" ? Style.active : ""}`}
                        onClick={() => {
                            setSelected("empresas");
                            navigate("/planos/empresa"); // ⭐ REDIRECIONA PARA PlanoEmpresa
                        }}
                    >
                        Empresas
                    </div>
                </div>
            </div>

            <div className={Style.Textos}>
                <div className={Style.title}>
                    Mãos que comunicam <br />Planos que impulsionam
                </div>
                <div className={Style.paragrafo}>
                    Seja você iniciante ou experiente, aqui você encontra o espaço ideal para crescer, se conectar com contratantes e fortalecer sua presença no mercado. Escolha o plano que mais combina com o seu momento e continue traduzindo o mundo com as suas mãos.
                </div>
            </div>

            <div className={Style.Planos}>
                <div className={Style.MaosDePrata}>
                    <h2 className={Style.titleP}>Mãos de Prata</h2>
                    <p className={Style.valor}>Gratuito</p>
                    <div className={Style.beneficios}>
                        <p><img className={Style.check_roxo_p} src={Check_roxo_p} alt="" /> Perfil visível para empresas</p>
                        <p><img className={Style.check_roxo_p} src={Check_roxo_p} alt="" /> Até 5 contatos po mês</p>
                        <p><img className={Style.check_roxo_p} src={Check_roxo_p} alt="" /> Acesso às vagas básicas</p>
                    </div>
                    <div className={Style.Botao}>
                        <button className={Style.selecionar}>Plano atual</button>
                    </div>
                </div>

                <div className={Style.MaosDeOuro}>
                    <h2 className={Style.titleP}>Mãos de Ouro</h2>
                    <p className={Style.valor}>R$ 79,90</p>
                    <div className={Style.beneficios}>
                        <p><img className={Style.check_verde_p} src={Check_verde_p} alt="" /> Todos os benefícios do Prata</p>
                        <p><img className={Style.check_verde_p} src={Check_verde_p} alt="" /> 3x mais contatos (até 15/mês)</p>
                        <p><img className={Style.check_verde_p} src={Check_verde_p} alt="" /> Selo de recomendado</p>
                        <p><img className={Style.check_verde_p} src={Check_verde_p} alt="" /> Destaque maior nas buscas</p>
                        <p><img className={Style.check_verde_p} src={Check_verde_p} alt="" /> Receber avaliações verificadas</p>
                        <p><img className={Style.check_verde_p} src={Check_verde_p} alt="" /> Canal de suporte mais rápido</p>
                        <p><img className={Style.check_verde_p} src={Check_verde_p} alt="" /> Mini relatórios</p>
                    </div>
                    <div className={Style.Botao}>
                        <button className={Style.selecionar}>Selecionar este plano</button>
                    </div>
                </div>

                <div className={Style.MaosDeDiamantes}>
                    <h2 className={Style.titleP}>Mãos de Diamante</h2>
                    <p className={Style.valor}>R$ 149,90</p>
                    <div className={Style.beneficios}>
                        <p><img className={Style.check_roxo_p} src={Check_roxo_p} alt="" /> Todos os benefícios anteriores</p>
                        <p><img className={Style.check_roxo_p} src={Check_roxo_p} alt="" /> Destaque visual máximo (perfil no topo)</p>
                        <p><img className={Style.check_roxo_p} src={Check_roxo_p} alt="" /> Selo de <strong>Top Intérprete</strong></p>
                        <p><img className={Style.check_roxo_p} src={Check_roxo_p} alt="" /> Dashboard com <strong>estatísticas avançandas</strong></p>
                        <p><img className={Style.check_roxo_p} src={Check_roxo_p} alt="" /> Possibilidade de aparecer em <strong>destaque da plataforma</strong></p>
                    </div>
                    <div className={Style.Botao}>
                        <button className={Style.selecionar}>Selecionar este plano</button>
                    </div>
                </div>
            </div>

            <p className={Style.Termo}>
                Sabemos que alguns termos podem parecer confusos, então criamos esta área para te ajudar a entender melhor o que cada plano oferece...
                <br /><br />
                *No plano Mãos de Prata, as “Notícias e conteúdos básicos sobre mercado de Libras” serão lançadas de forma esporádica...
                <br /><br />
                *No plano Mãos de Ouro os “Mini relatórios” é uma estatística simples...
                <br /><br />
                *No plano Mãos de Diamante o “Dashboard” mostra quantas empresas visualizaram...
            </p>
        </section>
    );
}

export default PlanoInterprete;
