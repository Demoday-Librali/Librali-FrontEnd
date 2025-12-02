import React from 'react';
import styles from "./css/DadosInterpletes.module.css";

const DadosInterpletes = () => {
  return (
    <div className={styles.pageWrapper}>
      {/* --- Conteúdo Principal --- */}
      <main className={styles.mainContainer}>
        <div className={styles.profileCard}>
          
          {/* Banner Topo */}
          <div className={styles.banner}>
            <span>Banner da preferência do usuário</span>
          </div>

          {/* Cabeçalho do Perfil (Avatar + Stats) */}
          <div className={styles.profileHeader}>
            <div className={styles.avatarSection}>
              <div className={styles.avatarCircle}>
                <svg width="60" height="60" viewBox="0 0 24 24" fill="#5c2d91" stroke="white" strokeWidth="1"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                <button className={styles.editIconSmall}>✎</button>
              </div>
              <a href="#editar" className={styles.editLink}>Editar dados do perfil</a>
            </div>

            <div className={styles.statsSection}>
              <div className={styles.rating}>
                <span>Média de avaliações:</span>
                <div className={styles.stars}>★★★★★</div>
              </div>
              <div className={styles.servicesCount}>
                <span>Serviços prestados:</span>
                <span className={styles.countNumber}>5</span>
              </div>
            </div>
          </div>

          <hr className={styles.divider} />

          {/* Seção de Informações Principais (Grid 2 colunas) */}
          <div className={styles.infoGrid}>
            {/* Coluna Esquerda: Dados Básicos */}
            <div className={styles.leftColumn}>
              <h2 className={styles.sectionTitle}>Nome de usuário</h2>
              <p className={styles.subText}>[Gênero]</p>
              <p className={styles.subText}>Localidade</p>
              
              <p className={styles.experienceText}>
                Experiência 1 | Experiência 2 | Experiência 3 | <br/>
                Experiência 4 | Experiência 5 | Experiência 6 | <br/>
                Experiência 7 | Experiência 8 | Experiência 9 | <br/>
                Experiência 10
              </p>
            </div>

            {/* Coluna Direita: Formações */}
            <div className={styles.rightColumn}>
              <h2 className={styles.sectionTitle}>Formações</h2>
              <ul className={styles.formationList}>
                <li>
                  <span className={styles.camIcon}>📷</span> Formação 1
                </li>
                <li>
                  <span className={styles.camIcon}>📷</span> Formação 2
                </li>
                <li>
                  <span className={styles.camIcon}>📷</span> Formação 3
                </li>
              </ul>
              <button className={styles.btnEditOutline}>Editar</button>
            </div>
          </div>

          {/* Seção Biografia */}
          <div className={styles.bioSection}>
            <div className={styles.sectionHeaderRow}>
              <h2 className={styles.sectionTitlePurple}>Biografia</h2>
            </div>
            <div className={styles.bioContent}>
              <p>
                Uma descrição do usuário é o ato de expor as características e os detalhes de um objeto, pessoa, cenário, sensação ou ideia, seja de forma oral, escrita ou imagética. Seu objetivo é tornar algo visível e dar a entender como aquilo é, detalhando suas propriedades e aspectos de maneira objetiva (fiel à realidade) ou subjetiva (com emoções e opiniões). Uma descrição do usuário é o ato de expor as características e os detalhes de um objeto...
              </p>
            </div>
             <div className={styles.rightAlignBtn}>
                <button className={styles.btnEditOutline}>Editar</button>
             </div>
          </div>

          {/* Seção Serviços Anteriores */}
          <div className={styles.servicesSection}>
            <h2 className={styles.sectionTitlePurple}>Serviços anteriores</h2>
            
            <div className={styles.servicesList}>
              {/* Item 1 - Proa */}
              <div className={styles.serviceItem}>
                <div className={styles.serviceLogoContainer}>
                   <div className={`${styles.logoCircle} ${styles.logoProa}`}>
                     <svg width="24" height="24" viewBox="0 0 24 24" stroke="white" fill="none" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/></svg>
                   </div>
                </div>
                <div className={styles.serviceText}>
                  <h3>Instituto Proa</h3>
                  <p>Uma descrição do usuário é o ato de expor as características do seu trabalho</p>
                </div>
              </div>

              {/* Item 2 - Oracle */}
              <div className={styles.serviceItem}>
                <div className={styles.serviceLogoContainer}>
                   <div className={`${styles.logoRect} ${styles.logoOracle}`}></div>
                </div>
                <div className={styles.serviceText}>
                  <h3>Oracle</h3>
                  <p>Uma descrição do usuário é o ato de expor as características do seu trabalho</p>
                </div>
              </div>

              {/* Item 3 - Proa Repetido */}
               <div className={styles.serviceItem}>
                <div className={styles.serviceLogoContainer}>
                   <div className={`${styles.logoCircle} ${styles.logoProa}`}>
                     <svg width="24" height="24" viewBox="0 0 24 24" stroke="white" fill="none" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/></svg>
                   </div>
                </div>
                <div className={styles.serviceText}>
                  <h3>Instituto Proa</h3>
                  <p>Uma descrição do usuário é o ato de expor as características do seu trabalho</p>
                </div>
              </div>

               {/* Item 4 - Oracle Repetido */}
               <div className={styles.serviceItem}>
                <div className={styles.serviceLogoContainer}>
                   <div className={`${styles.logoRect} ${styles.logoOracle}`}></div>
                </div>
                <div className={styles.serviceText}>
                  <h3>Oracle</h3>
                  <p>Uma descrição do usuário é o ato de expor as características do seu trabalho</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DadosInterpletes;