import React, { useState, useRef, useEffect } from "react";
import Styles from "./css/Lara.module.css";
import { GoogleGenAI } from "@google/genai";
import Imglara from "./../assets/images/lara1.jpeg"

// importação da API através de um arquivo 
const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY
  // secrets.env.GEMINI_API_KEY
});

// Dados mockados de profissionais - Usado lista para armanenzar os dados ( O ideal é substituir por uma API real - será necessario mexer na página de Setores)
const profissionaisMock = [
  {
    id: 1,
    nome: "Ana Silva",
    especialidade: "Educacional",
    avaliacao: 4.8,
    experiencia: 5,
    cidade: "São Paulo",
    descricao: "Especialista em interpretação para ambiente escolar e universitário"
  },
  {
    id: 2,
    nome: "Carlos Santos",
    especialidade: "Educacional", 
    avaliacao: 4.6,
    experiencia: 3,
    cidade: "Rio de Janeiro",
    descricao: "Atua em escolas e cursos preparatórios"
  },
  {
    id: 3,
    nome: "Mariana Oliveira",
    especialidade: "Jurídico",
    avaliacao: 4.9,
    experiencia: 7,
    cidade: "Brasília",
    descricao: "Experiência em tribunais e audiências"
  },
  {
    id: 4,
    nome: "Roberto Lima",
    especialidade: "Jurídico",
    avaliacao: 4.7, 
    experiencia: 4,
    cidade: "São Paulo",
    descricao: "Especializado em processos jurídicos"
  },
  {
    id: 5,
    nome: "Dr. João Pereira",
    especialidade: "Saúde",
    avaliacao: 4.9,
    experiencia: 8,
    cidade: "Belo Horizonte", 
    descricao: "Atendimento em hospitais e consultórios"
  },
  {
    id: 6,
    nome: "Dra. Fernanda Costa",
    especialidade: "Saúde",
    avaliacao: 4.8,
    experiencia: 6,
    cidade: "Porto Alegre",
    descricao: "Experiência em emergências médicas"
  }
];

// Função para formatar hora
const formatTime = (date) => {
  return date.toLocaleTimeString('pt-BR', { 
    hour: '2-digit', 
    minute: '2-digit' 
  });
};

export default function Lara() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Olá! Como posso te ajudar hoje?",
      sender: "lara",
      timestamp: new Date()
    }
  ]);
  const [loading, setLoading] = useState(false);
  
  // CORREÇÃO: Agora referencia o CONTAINER das mensagens
  const messagesContainerRef = useRef(null);

  // CORREÇÃO: Função para rolar apenas DENTRO da área do chat
  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      // Rola apenas o container das mensagens, não a página toda
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  };

  // CORREÇÃO: useEffect para rolar automaticamente quando novas mensagens chegarem
  useEffect(() => {
    scrollToBottom();
  }, [messages]); // Executa sempre que 'messages' mudar

  // Função para buscar profissionais baseado no input
  const buscarProfissionais = (inputUsuario) => {
    const inputLower = inputUsuario.toLowerCase();
    const palavrasChave = {
      educacional: ['educacional', 'escola', 'universidade', 'aula', 'professor', 'aluno', 'curso'],
      jurídico: ['jurídico', 'tribunal', 'advogado', 'juiz', 'audiência', 'processo', 'justiça'],
      saúde: ['saúde', 'hospital', 'médico', 'consulta', 'emergência', 'enfermeiro', 'clínica']
    };

    // Encontra o setor com mais correspondências
    let setorEncontrado = null;
    let maxCorrespondencias = 0;

    Object.entries(palavrasChave).forEach(([setor, palavras]) => {
      const correspondencias = palavras.filter(palavra => inputLower.includes(palavra)).length;
      if (correspondencias > maxCorrespondencias) {
        maxCorrespondencias = correspondencias;
        setorEncontrado = setor;
      }
    });

    if (setorEncontrado) {
      return profissionaisMock.filter(p => p.especialidade.toLowerCase() === setorEncontrado);
    }

    // Se não encontrou, retorna profissionais de todos os setores (limitado a 3)
    return profissionaisMock.slice(0, 3);
  };

  // Prompt para definir o comportamento da IA
  const systemPrompt = `Você é Lara, uma assistente, que é uma inteligencia Artifical, criada exclusivamente para 
falar da plataforma Librali. Uma plataforma que conecta interpretes de libras com empresas e pessoas, para contratação de serviços
de tradução de libras, com foco em promover aacessibilidade e inclusão social, nos mais diversos tipos de eventos, sejam corporativos ou pessoais.

Sua função é tirar dúvidas e esclarecer as perguntas do usuário em relação a plataforma Librali, e somente sobre isso.
Jamais dizer que uma criança ou adolescente entre 5 a 17 anos pode usar a plataforma sem supervisão de um adulto. 
Sobre formas de pagamento você só pode responder que isso fica visivel na área do interpete, empresa ou pessoa física contratante, e que o pagamento e feito por meio 
de um contrato entre interprete e empresa, e que você infelizmente não pode ajudar nisso.

Nossa forma de manter a plataforma ativida e cobrando planos de pagamento para empresa e interprete. 
Para o interprete temos 3 planos, gratuito, mãos de prata e mãos de diamente: Plano Mãos de Prata (Gratuito): Seus benefícios incluem Perfil do intérprete visível, Até 5 contatos por mês, Acesso básico às vagas disponíveis e Acesso a grupo fechado para networking.

Plano Mãos de Ouro (R$49,90/mês): Este plano oferece Todos os benefícios do gratuito, 3x mais contatos por mês, o Selo de "Recomendado" e Benefícios para você.

Plano Mãos de Diamante (R$79,99/mês): Os benefícios deste plano são Todos os benefícios dos planos anteriores, Maior destaque visual, o Selo de "Top Intérprete" e Ferramentas extras.

Planos pra as Empresas: 
Plano Conectar (Gratuito): Os benefícios deste plano incluem Acesso ao diretório de intérpretes, Contato direto com intérpretes, Limite de até 3 buscas por mês e Acesso a IA.

Plano Inclusão (R$99,90/mês): Este plano oferece Acesso ilimitado ao diretório de intérpretes, Lista de intérpretes favoritos, Suporte prioritário via chat ou e-mail e Filtros avançados de busca (experiência, localização, área de atuação).

Plano Impactar (R$199,90/mês): Os benefícios deste plano são Todos os benefícios do Inclusão, Prioridade na recomendação de intérpretes mais ativos, o Selo: "Líder em Inclusão" e E mais.

As pessoas fisicas só tem acesso ao gratuito da plataforma, não cobramos nenhuma taxa para uso, porém elas tem um acesso
limitado na plataforma.

Sobre a Librali, ela foi desenvolvida por uma equipe de 7 desenvolvedores que atuaram nas mais diversas frentes como back-end, front-end, UI E UX, caso alguém pergunte da historia da Librali
você pode dizer, que a historia começou pensando no mercado de Libras no Brasil que não tem muita visibilidade, e com isso 
os desenvolvedores forama atrás de entender melhor sobre esse mercado, conversaram com pessoas da área e entenderam que não 
exisitia nenhuma plataforma de contratação de interpretes de Libras de forma avulsa, e não somente isso, como muitos dependiam da indicação de amigos e colegas para conseguir trabalhos. 
Foi pensando nisso que resolveram mudar esse cenario e atender não somente o interprete de libras, mas também a pessoa surda ou com deficiencia auditiva.

Sobre a Lara, você foi desenvolvida por um de nossos desenvolvedores que criou você justamente para ajudar o usuario dentro da plataforma, sua missão e tornar tudo mais 
facil para o usuaario. 

Com isso a missão do Librali e promover a acessbilidade e inclusção social.
A visão do Librali é ser a primeira plataforma digital de contratação de interpretes de forma facilitada.
Valores incluem a etica social, inovação, responabilidade social e inclusção social.

Quando o usuario perguntar de acessbilidade informar que temos a Lara interprete que consegue ajudar pessoas surdas na plataforma fazendo tradução de textos para libras. 
E que a Lara interprete esta em desenvolviemnto pela equipe do Librali, A lara interprete é uma extensão da Lara criada justamente para não só ajudar 
com duvidas, mas ser mais inclusiva.
Outra tipos de acessibilidade que temos, leitor de tela e o mais acessibilidade onde você consegue mudar as cores do site com as três opções que temos, soft, convencional e a dark.
Além de almentar o tamho das letras entre outros itens.


FORMATO DE RESPOSTA OBRIGATÓRIO:
- NUNCA use ** ou *, ou  qualquer formatação markdown
- NUNCA use emojis em nenhuma frase, mesmo que o usuario peça
- Use frases curtas e diretas
- Só se apresente quando perguntarem quem é você

- Formate profissionais assim:
  Nome: Carlos Santos
  Especialidade: Educacional  
  Avaliação: 4.6/5
  Experiência: 3 anos
  Descrição: Atua em escolas e cursos preparatórios

QUANDO O USUÁRIO PEDIR INDICAÇÕES DE PROFISSIONAIS:
- Use os dados reais dos profissionais que serão fornecidos
- Limite a 3-4 profissionais por resposta
- Se não encontrar profissionais específicos, diga que infelizmente não foi possivel achar o profissional desejado no momento.

Responda de forma natural, clara e profissional.
Use linguagem acessível. Apresente-se somente uma vez, e caso o usuario pergunte.
Não reptia em todas as mensgaem que você é a Lara, apenas uma vez ao acessar o chat,  quando perguntarem`;

  const handleSend = async () => {
    if (!input.trim()) return;

    // Adiciona mensagem do usuário
    const userMessage = {
      id: Date.now(),
      text: input,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      // Busca profissionais baseado no input do usuário
      const profissionaisEncontrados = buscarProfissionais(input);
      
      // Prepara informações dos profissionais para o prompt
      const infoProfissionais = profissionaisEncontrados.map(prof => 
        `Nome: ${prof.nome}, Especialidade: ${prof.especialidade}, Avaliação: ${prof.avaliacao}/5, Experiência: ${prof.experiencia} anos, Cidade: ${prof.cidade}, Descrição: ${prof.descricao}`
      ).join('\n\n');

      const promptCompleto = `
        ${systemPrompt}
        
        DADOS DOS PROFISSIONAIS DISPONÍVEIS:
        ${infoProfissionais.length > 0 ? infoProfissionais : 'Nenhum profissional específico encontrado. Os setores disponíveis são: Educacional, Jurídico e Saúde.'}
        
        PERGUNTA DO USUÁRIO: "${input}"
        
        Baseado nos profissionais acima (se houver) e no contexto da Librali, responda de forma útil:
      `;

      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error("timeout")), 8000)
      );

      const iaPromise = ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: [
          {
            role: "user",
            parts: [{ text: promptCompleto }]
          }
        ]
      });

      // Agora response existe
      const response = await Promise.race([iaPromise, timeoutPromise]);

      // Resposta da Lara
      const laraMessage = {
        id: Date.now() + 1,
        text: response.text,
        sender: "lara",
        timestamp: new Date()
      };

      setMessages(prev => [...prev, laraMessage]);

    } catch (error) {
      console.error(error);

      const errorMessage = {
        id: Date.now() + 1,
        text: "Desculpe, ocorreu um erro. Tente novamente.",
        sender: "lara",
        timestamp: new Date()
      };

      setMessages(prev => [...prev, errorMessage]);
    }

    setLoading(false);
  };

  return (
    <section className={Styles.laraSection}>
      <div className={Styles.container}>
        <div className={Styles.chatHeader}>
          <div className={Styles.laraInfo}>
            <div className={Styles.avatar}></div>
            <div>
              <h2 className={Styles.title}>Lara</h2>
              <span className={Styles.status}></span>
            </div>
          </div>
        </div>

        {/* CORREÇÃO: Container das mensagens com scroll INTERNO */}
        <div 
          ref={messagesContainerRef} 
          className={Styles.chatMessages}
        >
          {messages.map((message) => (
            <div 
              key={message.id} 
              className={`${Styles.message} ${
                message.sender === "user" ? Styles.userMessage : Styles.laraMessage
              }`}
            >
              {message.sender === "lara" && (
                <div className={Styles.messageAvatar}></div>
              )}
              
              <div className={Styles.messageContent}>
                <div className={Styles.messageText}>{message.text}</div>
                <div className={Styles.messageTime}>
                  {formatTime(message.timestamp)}
                </div>
              </div>

              {message.sender === "user" && (
                <div className={Styles.userAvatar}>Você</div>
              )}
            </div>
          ))}
          
          {loading && (
            <div className={Styles.message}>
              <div className={Styles.messageAvatar}></div>
              <div className={Styles.messageContent}>
                <div className={Styles.typingIndicator}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className={Styles.chatInput}>
          <input
            type="text"
            className={Styles.input}
            placeholder="Digite sua mensagem..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            disabled={loading}
          />
          <button 
            onClick={handleSend} 
            className={Styles.button}
            disabled={loading}
          >
            {loading ? "..." : "Enviar"}
          </button>
        </div>
      </div>
    </section>
  );
}