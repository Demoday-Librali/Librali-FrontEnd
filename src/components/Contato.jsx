import Style from './css/Contato.module.css'
import { useState } from 'react'

function Contato(){
    const [descricaoEvento, setDescricaoEvento] = useState("")
    const [endereco, setEndereco] = useState({
        cep: '',
        rua: '',
        numero: '',
        complemento: '',
        bairro: '',
        cidade: '',
        estado: ''
    })
    const [horario, setHorario] = useState({
        data: '',
        horaInicio: '',
        horaFim: '',
        duracao: ''
    })

    const handleEnderecoChange = (e) => {
        const { name, value } = e.target
        setEndereco({
            ...endereco,
            [name]: value
        })
    }

    const handleHorarioChange = (e) => {
        const { name, value } = e.target
        setHorario({
            ...horario,
            [name]: value
        })
    }

    // Função para buscar CEP
    const buscarCEP = async () => {
        if (endereco.cep.replace(/\D/g, '').length === 8) {
            try {
                const response = await fetch(`https://viacep.com.br/ws/${endereco.cep.replace(/\D/g, '')}/json/`)
                const data = await response.json()
                
                if (!data.erro) {
                    setEndereco(prev => ({
                        ...prev,
                        rua: data.logradouro || '',
                        bairro: data.bairro || '',
                        cidade: data.localidade || '',
                        estado: data.uf || ''
                    }))
                }
            } catch (error) {
                console.error('Erro ao buscar CEP:', error)
            }
        }
    }

    return(
        <section className={Style.Container}>

            <h1 className={Style.Title}>
                Ficha de contrato
            </h1>

            <div className={Style.Inicio}>
                <h2 className={Style.Profissao}>
                    Intérprete: 
                </h2>

                <div className={Style.Foto}></div>

                <div className={Style.Infos}>

                    <p className={Style.Nome}>
                        Gustavo Moura De Jesus
                    </p>

                    <p className={Style.Funcao}>
                        intérprete de Libras
                    </p>

                    <div className={Style.Avaliacao}>⭐⭐⭐⭐⭐</div>

                    <div className={Style.Especialidade}>
                        <h2>Especialista em comunicação:</h2>
                        <div className={Style.Tags}>
                            <p>Educacional</p>
                            <p>Juridico</p>
                            <p>Empressaial</p>
                        </div>
                    </div>

                </div>
            </div>

            <hr className={Style.Divisor} />

            <div className={Style.Descricao}>
                <h1 className={Style.SubTitle}>Descreva o evento</h1>
                <textarea 
                    className={Style.Textarea}
                    value={descricaoEvento}
                    onChange={(e) => setDescricaoEvento(e.target.value)}
                    placeholder="Traga todos os detalhes do evento: objetivos, pauta, participantes, materiais necessários, expectativas e informações relevantes."
                    rows="6"
                />
                <small className={Style.HelperText}>
                    Quanto mais detalhes você fornecer, melhor o intérprete poderá se preparar
                </small>
            </div>

            <br /><br /><hr className={Style.Divisor} />

            <div className={Style.InfosEvento}>
                <h1 className={Style.SubTitle}>Endereço e horário do evento</h1>
                
                <div className={Style.GridContainer}>
                    {/* Coluna 1: Endereço */}
                    <div className={Style.Coluna}>
                        <h3 className={Style.SectionTitle}>Endereço</h3>
                        
                        <div className={Style.InputGroup}>
                            <label className={Style.Label}>CEP *</label>
                            <div className={Style.InputRow}>
                                <input
                                    type="text"
                                    name="cep"
                                    value={endereco.cep}
                                    onChange={handleEnderecoChange}
                                    onBlur={buscarCEP}
                                    placeholder="00000-000"
                                    className={Style.Input}
                                    maxLength="9"
                                />
                                <input
                                    type="text"
                                    placeholder="Confirme o CEP"
                                    className={Style.Input}
                                />
                            </div>
                        </div>

                        <div className={Style.InputGroup}>
                            <label className={Style.Label}>Rua *</label>
                            <div className={Style.InputRow}>
                                <input
                                    type="text"
                                    name="rua"
                                    value={endereco.rua}
                                    onChange={handleEnderecoChange}
                                    placeholder="Nome da rua"
                                    className={Style.Input}
                                />
                                <input
                                    type="text"
                                    placeholder="Confirme a rua"
                                    className={Style.Input}
                                />
                            </div>
                        </div>

                        <div className={Style.InputGroup}>
                            <label className={Style.Label}>Número *</label>
                            <div className={Style.InputRow}>
                                <input
                                    type="text"
                                    name="numero"
                                    value={endereco.numero}
                                    onChange={handleEnderecoChange}
                                    placeholder="Número"
                                    className={Style.Input}
                                />
                                <input
                                    type="text"
                                    placeholder="Complemento"
                                    name="complemento"
                                    value={endereco.complemento}
                                    onChange={handleEnderecoChange}
                                    className={Style.Input}
                                />
                            </div>
                        </div>

                        <div className={Style.InputGroup}>
                            <label className={Style.Label}>Bairro *</label>
                            <div className={Style.InputRow}>
                                <input
                                    type="text"
                                    name="bairro"
                                    value={endereco.bairro}
                                    onChange={handleEnderecoChange}
                                    placeholder="Bairro"
                                    className={Style.Input}
                                />
                                <input
                                    type="text"
                                    placeholder="Confirme o bairro"
                                    className={Style.Input}
                                />
                            </div>
                        </div>

                        <div className={Style.InputGroup}>
                            <label className={Style.Label}>Cidade *</label>
                            <div className={Style.InputRow}>
                                <input
                                    type="text"
                                    name="cidade"
                                    value={endereco.cidade}
                                    onChange={handleEnderecoChange}
                                    placeholder="Cidade"
                                    className={Style.Input}
                                />
                                <input
                                    type="text"
                                    name="estado"
                                    value={endereco.estado}
                                    onChange={handleEnderecoChange}
                                    placeholder="Estado"
                                    className={Style.Input}
                                    maxLength="2"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Coluna 2: Horário */}
                    <div className={Style.Coluna}>
                        <h3 className={Style.SectionTitle}>Horário</h3>
                        
                        <div className={Style.InputGroup}>
                            <label className={Style.Label}>Data do evento *</label>
                            <input
                                type="date"
                                name="data"
                                value={horario.data}
                                onChange={handleHorarioChange}
                                className={Style.Input}
                            />
                        </div>

                        <div className={Style.InputGroup}>
                            <label className={Style.Label}>Horário *</label>
                            <div className={Style.InputRow}>
                                <input
                                    type="time"
                                    name="horaInicio"
                                    value={horario.horaInicio}
                                    onChange={handleHorarioChange}
                                    className={Style.Input}
                                />
                                <span className={Style.HorarioSeparador}>às</span>
                                <input
                                    type="time"
                                    name="horaFim"
                                    value={horario.horaFim}
                                    onChange={handleHorarioChange}
                                    className={Style.Input}
                                />
                            </div>
                        </div>

                        <div className={Style.InputGroup}>
                            <label className={Style.Label}>Duração estimada</label>
                            <select
                                name="duracao"
                                value={horario.duracao}
                                onChange={handleHorarioChange}
                                className={Style.Select}
                            >
                                <option value="">Selecione</option>
                                <option value="30min">30 minutos</option>
                                <option value="1h">1 hora</option>
                                <option value="1h30">1 hora e 30 min</option>
                                <option value="2h">2 horas</option>
                                <option value="3h">3 horas</option>
                                <option value="4h+">4 horas ou mais</option>
                            </select>
                        </div>

                        <div className={Style.InputGroup}>
                            <label className={Style.Label}>Formato do evento</label>
                            <div className={Style.CheckboxGroup}>
                                <label className={Style.CheckboxLabel}>
                                    <input type="checkbox" name="presencial" /> Presencial
                                </label>
                                <label className={Style.CheckboxLabel}>
                                    <input type="checkbox" name="online" /> Online
                                </label>
                                <label className={Style.CheckboxLabel}>
                                    <input type="checkbox" name="hibrido" /> Híbrido
                                </label>
                            </div>
                        </div>

                        <div className={Style.InputGroup}>
                            <label className={Style.Label}>Link da reunião (se online)</label>
                            <input
                                type="text"
                                placeholder="https://meet.google.com/..."
                                className={Style.Input}
                            />
                        </div>
                    </div>
                </div>

                <div className={Style.BotaoContainer}>
                    <button className={Style.BotaoEnviar}>
                        Enviar solicitação de contrato
                    </button>
                </div>
            </div>

            <br /><br /><hr className={Style.Divisor} />
            
            <div className={Style.Descricao}>
                <h1 className={Style.SubTitle}>Roteiro para o intérprete:</h1>
                <textarea 
                    className={Style.Textarea}
                    value={descricaoEvento}
                    onChange={(e) => setDescricaoEvento(e.target.value)}
                    placeholder="Traga todos os detalhes do roteiro do intérprete"
                    rows="6"
                />
            </div>

            <br /><br /><hr className={Style.Divisor} />

            <div className={Style.Final}>

                <h1 className={Style.SubTitle}>Ler termos de contrato</h1>

                <button className={Style.Cliqueaqui}>
                    Clique Aqui
                </button>

                <button className={Style.Contratar}>
                    Contratar
                </button>

                <p>Ao concluir, você concorda com os termos</p>

            </div>

        </section>
    )
}

export default Contato