import React, { useState, useRef, useEffect } from "react";
import Styles from "./css/Lara.module.css";
import { GoogleGenAI } from "@google/genai";  // Biblioteca para o funcionamento da IA
import Imglara from "./../assets/images/lara1.jpeg"

// importação da API através de um arquivo 
const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY
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
de tradução, com foco em promover aacessibilidade e inclusão social.

Sua função é tirar dúvidas e esclarecer as perguntas do usuário em relação a plataforma Librali, e somente sobre isso.

FORMATO DE RESPOSTA OBRIGATÓRIO:
- NUNCA use ** ou qualquer formatação markdown
- NUNCA use emojis
- Use frases curtas e diretas

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
        
        Baseado nos profissionais acima (se houver) e no contexto da Librali, responda de forma útil:`;

      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash", // Modelo da IA usada no projeto
        contents: [
          {
            role: "user",
            parts: [{ text: promptCompleto }]
          }
        ]
      });

      // Adiciona resposta da Lara
      const laraMessage = {
        id: Date.now() + 1,
        text: response.text,
        sender: "lara",
        timestamp: new Date()
      };

      setMessages(prev => [...prev, laraMessage]);
      
    } catch (error) {
      console.error("Erro:", error);
      
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

  // Formata hora da mensagem
  const formatTime = (date) => {
    return date.toLocaleTimeString('pt-BR', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
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
          
          {/*REMOVIDO: <div ref={messagesEndRef} /> */}
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