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
                <div className={Styles.plano} id={Styles.prata}>
                    <h2 className={Styles.titleP}>Mãos de Prata</h2>
                    <p className={Styles.valor}>Gratuito</p>
                    <div className={Styles.beneficios}>
                        <p><img className={Styles.check_roxo_p} src={Check_roxo_p} alt="Check roxo pequeno" /> Perfil visível para empresas</p>
                        <p><img className={Styles.check_roxo_p} src={Check_roxo_p} alt="Check roxo pequeno" /> Até 5 contatos po mês</p>
                        <p><img className={Styles.check_roxo_p} src={Check_roxo_p} alt="Check roxo pequeno" /> Acesso às vagas básicas</p>
                        <div className={Styles.Botao}>
                            <button className={Styles.selecionar}>Plano atual</button>
                        </div>
                    </div>
                </div>

                <div className={Styles.plano} id={Styles.ouro}>
                    <h2 className={Styles.titleP}>Mãos de Ouro</h2>
                    <p className={Styles.valor}>R$ 79,90</p>
                    <div className={Styles.beneficios}>
                        <p><img className={Styles.check_verde_p} src={Check_verde_p} alt="Check verde pequeno" /> 3x mais contatos (até 15/mês)</p>
                        <p><img className={Styles.check_verde_p} src={Check_verde_p} alt="Check verde pequeno" /> Selo de recomendado</p>
                        <p><img className={Styles.check_verde_p} src={Check_verde_p} alt="Check verde pequeno" /> Destaque maior nas buscas</p>
                        <p><img className={Styles.check_verde_p} src={Check_verde_p} alt="Check verde pequeno" /> Receber avaliações verificadas</p>
                        <p><img className={Styles.check_verde_p} src={Check_verde_p} alt="Check verde pequeno" /> Canal de suporte mais rápido</p>
                        <p><img className={Styles.check_verde_p} src={Check_verde_p} alt="Check verde pequeno" /> Mini relatórios</p>
                    </div>
                    <div className={Styles.Botao}>
                        <button className={Styles.selecionar}>Selecionar este plano</button>
                    </div>
                </div>
                
                <div className={Styles.plano} id={Styles.diamante}>
                    <h2 className={Styles.titleP}>Mãos de Diamante</h2>
                    <p className={Styles.valor}>R$ 149,90</p>
                    <div className={Styles.beneficios}>
                        <p><img className={Styles.check_roxo_p} src={Check_roxo_p} alt="Check roxo pequeno" /> Todos os benefícios anteriores</p>
                        <p><img className={Styles.check_roxo_p} src={Check_roxo_p} alt="Check roxo pequeno" /> Destaque visual máximo (perfil no topo)</p>
                        <p><img className={Styles.check_roxo_p} src={Check_roxo_p} alt="Check roxo pequeno" /> Selo de <strong>Top Intérprete</strong></p>
                        <p><img className={Styles.check_roxo_p} src={Check_roxo_p} alt="Check roxo pequeno" /> Dashboard com <strong>estatísticas avançandas</strong></p>
                        <p><img className={Styles.check_roxo_p} src={Check_roxo_p} alt="Check roxo pequeno" /> Possibilidade de aparecer em <strong>destaque da plataforma</strong></p>
                    </div>
                    <div className={Styles.Botao}>
                        <button className={Styles.selecionar}>Selecionar este plano</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EscolhaPlano