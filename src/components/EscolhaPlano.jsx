import React from 'react'
import Styles from './css/EscolhaPlano.module.css'

import Check_roxo_p from '../assets/images/check_roxo_p.png';
import Check_verde_p from '../assets/images/check_verde_p.png';

const EscolhaPlano = () => {
  return (
    <div className={Styles.fundo}>
        <div className={Styles.container_plano}>
            <h1>Para finalizar</h1>
            <p>Escolha o seu plano</p>
            <div className={Styles.planos} >
                <div className={Styles.plano} id={Styles.MaosDePrata}>
                        <h2 className={Styles.titleP}>Conectar</h2>
                        <p className={Styles.valor}>R$299,90</p>
                        <div className={Styles.beneficios} id={Styles.beneficios_prata}>
                            <p className={Styles.p_beneficios}><img className={Styles.check_roxo_p} src={Check_roxo_p} alt="" /> Acesso ao diretório de intérpretes;</p>
                            <p className={Styles.p_beneficios}><img className={Styles.check_roxo_p} src={Check_roxo_p} alt="" /> Contato direto com intérpretes sem taxas adicionais;</p>
                            <p className={Styles.p_beneficios}><img className={Styles.check_roxo_p} src={Check_roxo_p} alt="" /> Limite de até <span>3 bsucas por mês.</span></p>
                        </div>
                        <div className={Styles.botao}>
                            <button className={Styles.selecionar}>Plano atual</button>
                        </div>
                    </div>

                <div className={Styles.plano} id={Styles.MaosDeOuro}>
                    <h2 className={Styles.titleP}>Inclusão</h2>
                    <p className={Styles.valor}>R$599,90</p>
                    <div className={Styles.beneficios} id={Styles.beneficios_ouro}>
                        <p className={Styles.p_beneficios}><img className={Styles.check_verde_p} src={Check_verde_p} alt="" /> Acesso ilimitado ao diretório de intérpretes;</p>
                        <p className={Styles.p_beneficios}><img className={Styles.check_verde_p} src={Check_verde_p} alt="" /> Filtros avançado de busca (experiência, localização, área de atuação);</p>
                        <p className={Styles.p_beneficios}><img className={Styles.check_verde_p} src={Check_verde_p} alt="" /> Relatório mensal simples de acessos e contatos realizados.</p>
                    </div>
                    <div className={Styles.botao}>
                        <button className={Styles.selecionar}>Selecionar este plano</button>
                    </div>
                </div>
                
                <div className={Styles.plano} id={Styles.MaosDeDiamantes}>
                    <h2 className={Styles.titleP}>Impactar</h2>
                    <p className={Styles.valor}>R$999,90</p>
                    <div className={Styles.beneficios} id={Styles.beneficios_diamante}>
                        <p className={Styles.p_beneficios}><img className={Styles.check_roxo_p} src={Check_roxo_p} alt="" /> Todos os benefícios do Inclusão;</p>
                        <p className={Styles.p_beneficios}><img className={Styles.check_roxo_p} src={Check_roxo_p} alt="" /> Prioridade na recomendação de intérpretes mais ativos;</p>
                        <p className={Styles.p_beneficios}><img className={Styles.check_roxo_p} src={Check_roxo_p} alt="" /> Relatórios avançados detalhando buscas e contatos;</p>
                        <p className={Styles.p_beneficios}><img className={Styles.check_roxo_p} src={Check_roxo_p} alt="" /> Suporte majoritário
                            (atendimento prioritário e consultoria rápida).</p>
                    </div>
                    <div className={Styles.botao}>
                        <button className={Styles.selecionar}>Selecionar este plano</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EscolhaPlano