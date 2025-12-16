import Styles from './css/CadastroOficial.module.css';

import CadastroPessoal from './cadastro-oficial/CadastroPessoal';
import CadastroPerfil from './cadastro-oficial/CadastroPerfil';
import CadastroFoto from './cadastro-oficial/CadastroFoto';
import CadastroContato from './cadastro-oficial/CadastroContato';
import Steps from './Steps';

import { cadastroForm } from '../hooks/cadastroForm';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import inscricao from '../assets/images/sinal-inscricao.png';
import bem_vindo from '../assets/images/sinal-bem-vindo.png';
import logo from '../assets/images/logo-completo.png';

import { useInterpreteCreate } from '../hooks/useInterpreteCreate'; // hook POST

const formTemplate = {
  nome_razao: '',
  cpf_cnpj: '',
  data_nasc: '',
  email: '',
  senha: '',
  conf_senha: '',
  cep: '',
  numero: '',
  complemento: '',
  rua: '',
  uf: '',
  cidade: '',
  phone: '',
  cel: '',
  check_contratante: false
};

function CadastroOficial() {
  const navigate = useNavigate();
  const [data, setData] = useState(formTemplate);

  const updateFieldHandler = (key, value) => {
    setData(prev => ({
      ...prev,
      [key]: value
    }));
  };

  // Hook POST (React Query)
  const { mutate, isLoading, isError, error } = useInterpreteCreate();

  const cadastroComponents = [
    <CadastroPerfil data={data} updateFieldHandler={updateFieldHandler} />,
    <CadastroPessoal data={data} updateFieldHandler={updateFieldHandler} />,
    <CadastroContato data={data} updateFieldHandler={updateFieldHandler} />,
    <CadastroFoto data={data} />
  ];

  const {
    currentStep,
    currentComponent,
    changeStep,
    isLastStep,
    isFirstStep
  } = cadastroForm(cadastroComponents);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!isLastStep) {
      changeStep(currentStep + 1);
      return;
    }

    // Último passo → cadastro
    if (data.senha !== data.conf_senha) {
      alert('As senhas não conferem!');
      return;
    }

    const payload = {
      nomeRazao: data.nome_razao,
      cpfCnpj: data.cpf_cnpj,
      dataNasc: data.data_nasc,
      email: data.email,
      senha: data.senha,
      cep: data.cep,
      numero: data.numero,
      complemento: data.complemento,
      rua: data.rua,
      uf: data.uf,
      cidade: data.cidade,
      telefone: data.phone,
      celular: data.cel,
      checkContratante: data.check_contratante
    };

    mutate(payload, {
      onSuccess: () => {
        if (data.check_contratante) {
          navigate('/escolhaplano');
        } else {
          navigate('/');
        }
      },
      onError: (err) => {
        console.error('Erro no cadastro:', err);
        alert('Ocorreu um erro no cadastro. Tente novamente.');
      }
    });
  };

  return (
    <div className={Styles.container_cadastro}>
      <div className={Styles.form_container}>
        <div className={Styles.conteudo_esquerda}>
          <h1 id={Styles.titulo}>Cadastro</h1>
          <Steps currentStep={currentStep} />
          <form onSubmit={handleFormSubmit}>
            <h1>{currentComponent}</h1>
            <div className={Styles.input_container}></div>
            <div className={Styles.actions}>
              {!isFirstStep && (
                <button
                  type="button"
                  className={Styles.botao}
                  id={Styles.voltar}
                  onClick={() => changeStep(currentStep - 1)}
                  disabled={isLoading}
                >
                  <span>Voltar</span>
                </button>
              )}
              <button type="submit" className={Styles.botao} disabled={isLoading}>
                <span>{isLoading ? 'Enviando...' : (!isLastStep ? "Avançar" : "Cadastrar")}</span>
              </button>
            </div>
            {isError && (
              <p style={{ color: 'red', marginTop: '10px' }}>
                {error?.message || 'Erro no cadastro'}
              </p>
            )}
          </form>
        </div>
        {!isLastStep ? (
          <div
            className={Styles.conteudo_direito}
            style={{ backgroundImage: `url(${inscricao})` }}
          >
            <img src={logo} alt="Logotipo Librali" />
          </div>
        ) : (
          <div
            className={Styles.conteudo_direito}
            style={{ backgroundImage: `url(${bem_vindo})` }}
          >
            <img src={logo} alt="Logotipo Librali" />
          </div>
        )}
      </div>
    </div>
  );
}

export default CadastroOficial;
