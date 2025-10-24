import Style from './css/Depoimentos.module.css'
import React, { useState, useEffect } from 'react';
import Fundodepoimento from '../../assets/images/fundodepoimento.png'
import Rosa from '../assets/images/rosa.png'

import Verde from '../assets/images/verde.png'
import Azul from '../assets/images/azul.png'

function Depoimentos() {
    const [depoimentoAtual, setDepoimentoAtual] = useState(0);

    const depoimentos = [
        {
            texto: "O Librali transformou completamente minha experiência como intérprete. Conseguir conectar com clientes de forma tão simples e eficiente é incrível!",
            autor: "Ana Silva.",
            cargo: "Intérprete de Libras - 5 anos de experiência"
        },
        {
            texto: "Como pessoa surda, o Librali me deu autonomia para agendar interpretes quando preciso. A plataforma é intuitiva e muito fácil de usar.",
            autor: "Carlos Santos",
            cargo: "Usuário frequente"
        },
        {
            texto: "Na nossa empresa, o Librali se tornou essencial para garantir acessibilidade em reuniões e eventos. Serviço de qualidade excelente!",
            autor: "Marina Oliveira",
            cargo: "Gerente de RH - Empresa Tech"
        },
        {
            texto: "Como intérprete iniciante, o Librali me ajudou a conseguir meus primeiros trabalhos. A plataforma é muito acolhedora para novos profissionais.",
            autor: "João Pereira",
            cargo: "Intérprete Júnior"
        }
    ];

    const proximoDepoimento = () => {
        setDepoimentoAtual((prev) => (prev + 1) % depoimentos.length);
    };

    const depoimentoAnterior = () => {
        setDepoimentoAtual((prev) => (prev - 1 + depoimentos.length) % depoimentos.length);
    };

    const irParaDepoimento = (index) => {
        setDepoimentoAtual(index);
    };

    // Auto-play
    useEffect(() => {
        const interval = setInterval(proximoDepoimento, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={Style.fundo}>
                <img src={Fundodepoimento} alt="" />
        <div className={Style.carrossel}>
            <h2 className={Style.carrosselTitulo}>O que dizem sobre nós</h2>
            
            <div className={Style.depoimentosContainer}>
                {depoimentos.map((depoimento, index) => (
                    <div
                        key={index}
                        className={`${Style.depoimentoSlide} ${
                            index === depoimentoAtual ? Style.active : ''
                        }`}
                    >
                        <p className={Style.depoimentoTexto}>"{depoimento.texto}"</p>
                        <div className={Style.depoimentoAutor}>{depoimento.autor}</div>
                        <div className={Style.depoimentoCargo}>{depoimento.cargo}</div>
                    </div>
                ))}
            </div>

            {/* Botões de navegação */}
            <div className={Style.carrosselBotoes}>
                <button className={Style.carrosselBtn} onClick={depoimentoAnterior}>
                    ‹
                </button>
                <button className={Style.carrosselBtn} onClick={proximoDepoimento}>
                    ›
                </button>
            </div>

            {/* Indicadores */}
            <div className={Style.carrosselIndicadores}>
                {depoimentos.map((_, index) => (
                    <div
                        key={index}
                        className={`${Style.indicador} ${
                            index === depoimentoAtual ? Style.active : ''
                        }`}
                        onClick={() => irParaDepoimento(index)}
                    />
                ))}
            </div>
        </div>
        <div className={Style.bolinhas}>
                        <img className={Style.Rosa} src={Rosa} alt=""/>
                        <img className={Style.Verde} src={Verde} alt=""/>
                        <img className={Style.Azul} src={Azul} alt=""/>
                        <img className={Style.Azulv} src={Azul} alt=""/>
        </div>
        </div>
    );
}
export default Depoimentos