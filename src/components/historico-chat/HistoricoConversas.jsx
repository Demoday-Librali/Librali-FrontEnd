import styles from "./HistoricoConversas.module.css";

const conversas = [
  {
    id: 1,
    nome: "Elaine Pereira",
    mensagem: "Claro! Podemos marcar às 15h...",
    online: true,
    ativa: true,
  },
  {
    id: 2,
    nome: "Fábio Martins",
    mensagem: "Enviei os documentos...",
    online: false,
    ativa: false,
  },
  {
    id: 3,
    nome: "Márcia Sousa",
    mensagem: "Perfeito, obrigado!",
    online: true,
    ativa: false,
  },
];

export default function HistoricoConversas() {
  return (
    <aside className={styles.container}>
      <div className={styles.busca}>
        <input
          type="text"
          placeholder="Buscar intérprete ou conversa..."
        />
      </div>

      <div className={styles.lista}>
        {conversas.map((conversa) => (
          <div
            key={conversa.id}
            className={`${styles.card} ${
              conversa.ativa ? styles.ativo : ""
            }`}
          >
            <div className={styles.avatar}></div>

            <div className={styles.info}>
              <span className={styles.nome}>{conversa.nome}</span>
              <span className={styles.mensagem}>
                {conversa.mensagem}
              </span>
            </div>

            <span
              className={`${styles.status} ${
                conversa.online ? styles.online : styles.offline
              }`}
            ></span>
          </div>
        ))}
      </div>
    </aside>
  );
}
