import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Style from '../components/css/PlanoEmpresa.module.css';
import Check_roxo_p from '../assets/images/check_roxo_p.png';
import Check_verde_p from '../assets/images/check_verde_p.png';

function PlanoEmpresa() {
    const [selected, setSelected] = useState("empresas");
    const navigate = useNavigate();

    return (
        <section className={Style.PlanoEmpresa}>
            <div className={Style.botoes}>
                <div className={Style.Selecao}>
                    <div
                        className={`${Style.Interprete} ${selected === "interpretes" ? Style.active : ""}`}
                        onClick={() => {
                            setSelected("interpretes");
                            navigate("/planos/interprete");
                        }}
                    >
                        Intérpretes
                    </div>
                    <div
                        className={`${Style.Interprete} ${selected === "empresas" ? Style.active : ""}`}
                        onClick={() => setSelected("empresas")}
                    >
                        Empresas
                    </div>
                </div>
            </div>

            <div className={Style.Textos}>
                <div className={Style.title}>Conecte sua empresa a quem transforma comunicação em inclusão</div>
                <div className={Style.paragrafo}>
                    No Librali, oferecemos planos feitos para empresas que valorizam a acessibilidade.
                    Nossas soluções tornam serviços, eventos e conteúdos mais inclusivos.
                    Escolha o plano ideal e faça parte de um movimento que transforma barreiras em pontes.
                </div>
            </div>

            <div className={Style.Planos}>
                <div className={Style.MaosDePrata}>
                    <h2 className={Style.titleP}>Conectar</h2>
                    <p className={Style.valor}>R$ 299,90</p>
                    <div className={Style.beneficios}>
                        <p><img className={Style.check_roxo_p} src={Check_roxo_p} alt="" /> Acesso ao diretório de intérpretes</p>
                        <p><img className={Style.check_roxo_p} src={Check_roxo_p} alt="" /> Contato direto com intérpretes sem taxas adicionais</p>
                        <p><img className={Style.check_roxo_p} src={Check_roxo_p} alt="" /> Limite de até <span>3 bsucas por mês</span></p>
                    </div>
                    <div className={Style.Botao}>
                        <button className={Style.selecionar}>Plano atual</button>
                    </div>
                </div>

                <div className={Style.MaosDeOuro}>
                    <h2 className={Style.titleP}>Inclusão</h2>
                    <p className={Style.valor}>R$ 599,90</p>
                    <div className={Style.beneficios}>
                        <p><img className={Style.check_verde_p} src={Check_verde_p} alt="" /> Acesso ilimitado ao diretório de intérpretes</p>
                        <p><img className={Style.check_verde_p} src={Check_verde_p} alt="" /> Filtros avançado de busca (experiência, localização, área de atuação)</p>
                        <p><img className={Style.check_verde_p} src={Check_verde_p} alt="" /> Lista de intérpretes favoritos</p>
                        <p><img className={Style.check_verde_p} src={Check_verde_p} alt="" /> Relatório mensal simples de acessos e contatos realizados</p>
                        <p><img className={Style.check_verde_p} src={Check_verde_p} alt="" /> Selo:
                            “Acessibilidade em Ação”</p>
                    </div>
                    <div className={Style.Botao}>
                        <button className={Style.selecionar}>Selecionar este plano</button>
                    </div>
                </div>

                <div className={Style.MaosDeDiamantes}>
                    <h2 className={Style.titleP}>Impactar</h2>
                    <p className={Style.valor}>R$ 149,90</p>
                    <div className={Style.beneficios}>
                        <p><img className={Style.check_roxo_p} src={Check_roxo_p} alt="" /> Todos os benefícios do Inclusão</p>
                        <p><img className={Style.check_roxo_p} src={Check_roxo_p} alt="" /> Prioridade na recomendação de intérpretes mais ativos</p>
                        <p><img className={Style.check_roxo_p} src={Check_roxo_p} alt="" /> Relatórios avançados detalhando buscas e contatos</p>
                        <p><img className={Style.check_roxo_p} src={Check_roxo_p} alt="" /> Suporte majoritário
                            (atendimento prioritário e consultoria rápida)</p>
                        <p><img className={Style.check_roxo_p} src={Check_roxo_p} alt="" /> Selo: 
                            <strong> “Líder em Inclusão”</strong></p>
                    </div>
                    <div className={Style.Botao}>
                        <button className={Style.selecionar}>Selecionar este plano</button>
                    </div>
                </div>
            </div>

            <p className={Style.Termo}>
                Para que sua empresa escolha a melhor solução, apresentamos aqui uma explicação clara e objetiva sobre cada plano disponível. Nosso objetivo é garantir total transparência quanto aos recursos, benefícios e níveis de suporte oferecidos, facilitando a tomada de decisão e o alinhamento com as necessidades da sua organização.

            </p>
        </section>
    );
}

export default PlanoEmpresa;
