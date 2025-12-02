import React, { useState } from 'react';
import styles from './css/AlterarCadastroEmpresas.module.css'; 
import { 
  Pencil, 
  Plus, 
  Eye, 
  EyeOff, 
  ChevronDown 
} from 'lucide-react';

const AlterarCadastroEmpresas = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePass = () => setShowPassword(!showPassword);

  return (
    <div className={styles.container}>
      
      {/* Corrigi o typo "cadastraos" para "cadastrais" */}
      <h1 className={styles.title}>Alterar dados cadastrais Empresas</h1>

      <div className={styles.card}>
        
        {/*DADOS*/}
        <div className={styles.sectionHeader}>
          <ChevronDown size={24} color="#000" />
          <span style={{color: '#3b0068'}}>Dados</span>
        </div>
        <hr className={styles.divider} />

        {/* Linha 1 */}
        <div className={styles.row}>
          <div className={styles.col}>
            <label className={styles.label}>Razão social</label>
            <div className={styles.inputWrapper}>
              <input type="text" placeholder="Razão social da empresa" className={styles.input} />
              <Pencil size={14} className={styles.icon} />
            </div>
          </div>
          <div className={styles.col}>
            <label className={styles.label}>Nome de contato</label>
            <div className={styles.inputWrapper}>
              <input type="text" placeholder="Informe" className={styles.input} />
              <Pencil size={14} className={styles.icon} />
            </div>
          </div>
        </div>

        {/* Linha 2 */}
        <div className={styles.row}>
          <div className={styles.col}>
            <label className={styles.label}>E-mail</label>
            <div className={styles.inputWrapper}>
              <input type="email" placeholder="fulano@gmail.com" className={styles.input} />
              <Pencil size={14} className={styles.icon} />
            </div>
          </div>
          <div className={styles.col}>
            <label className={styles.label}>Telefone celular</label>
            <div className={styles.inputWrapper}>
              <input type="text" placeholder="+xx (xx) xxxxx-xxxx" className={styles.input} />
              <Pencil size={14} className={styles.icon} />
            </div>
          </div>
        </div>

        {/* Linha 3 */}
        <div className={styles.row}>
          <div className={styles.col}>
            <label className={styles.label}>E-mail</label>
            <div className={styles.inputWrapper}>
              <input type="email" placeholder="fulano2@gmail.com" className={styles.input} />
              <Plus size={16} className={styles.icon} />
            </div>
          </div>
          <div className={styles.col}>
            <label className={styles.label}>Telefone comercial</label>
            <div className={styles.inputWrapper}>
              <input type="text" placeholder="+xx (xx) xxxxx-xxxx" className={styles.input} />
              <Pencil size={14} className={styles.icon} />
            </div>
          </div>
        </div>

        {/*ENDEREÇO*/}
        <div className={styles.sectionHeader} style={{marginTop: '2rem'}}>
          <ChevronDown size={24} color="#000" />
          <span style={{color: '#3b0068'}}>Endereço</span>
        </div>
        <hr className={styles.divider} />

        {/* Endereço Linha 1 */}
        <div className={styles.row}>
          <div className={styles.col}>
            <label className={styles.label}>CEP</label>
            <div className={styles.inputWrapper}>
              <input type="text" placeholder="CEP" className={styles.input} />
              <Plus size={16} className={styles.icon} />
            </div>
          </div>
          <div className={styles.col}>
            <label className={styles.label}>Rua</label>
            <div className={styles.inputWrapper}>
              <input type="text" placeholder="Rua" className={styles.input} />
              <Plus size={16} className={styles.icon} />
            </div>
          </div>
        </div>

        {/* Endereço Linha 2 */}
        <div className={styles.row}>
          <div className={styles.col}>
            <label className={styles.label}>Nº</label>
            <div className={styles.inputWrapper}>
              <input type="text" placeholder="Numero da casa" className={styles.input} />
              <Plus size={16} className={styles.icon} />
            </div>
          </div>
          <div className={styles.col}>
            <label className={styles.label}>Bairro</label>
            <div className={styles.inputWrapper}>
              <input type="text" placeholder="Bairro" className={styles.input} />
              <Plus size={16} className={styles.icon} />
            </div>
          </div>
        </div>

        {/* Endereço Linha 3 */}
        <div className={styles.row}>
          <div className={styles.col}>
            <label className={styles.label}>Complemento</label>
            <div className={styles.inputWrapper}>
              <input type="text" placeholder="Complemento" className={styles.input} />
              <Plus size={16} className={styles.icon} />
            </div>
          </div>
          <div className={styles.col}>
            <label className={styles.label}>Cidade</label>
            <div className={styles.inputWrapper}>
              <input type="text" placeholder="Cidade" className={styles.input} />
              <Plus size={16} className={styles.icon} />
            </div>
          </div>
        </div>

        {/* Endereço Linha 4 (UF) */}
        <div className={styles.row}>
          <div className={styles.col}>
            <label className={styles.label}>UF</label>
            <div className={styles.inputWrapper}>
                <select className={styles.select}>
                  <option>CEP</option>
                  <option>SP</option>
                  <option>RJ</option>
                </select>
                <ChevronDown size={16} className={styles.icon} />
            </div>
          </div>
          <div className={styles.col}></div> {/* Espaço vazio para alinhar */}
        </div>

        {/*SENHA*/}
        <div className={styles.sectionHeader} style={{marginTop: '2rem'}}>
          <ChevronDown size={24} color="#000" />
          <span style={{color: '#3b0068'}}>Senha</span>
        </div>
        <hr className={styles.divider} />

        {/* Senha Linha 1 */}
        <div className={styles.row}>
          <div className={styles.col}>
            <label className={styles.label}>Senha</label>
            <div className={styles.inputWrapper}>
              <input type={showPassword ? "text" : "password"} placeholder="Senha atual" className={styles.input} />
              <div onClick={togglePass} className={`${styles.icon} ${styles.iconClickable}`}>
                 {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </div>
            </div>
          </div>
          <div className={styles.col}>
            <label className={styles.label}>Nova senha</label>
            <div className={styles.inputWrapper}>
              <input type={showPassword ? "text" : "password"} placeholder="Informe nova senha" className={styles.input} />
              <div onClick={togglePass} className={`${styles.icon} ${styles.iconClickable}`}>
                 {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </div>
            </div>
          </div>
        </div>

        {/* Senha Linha 2 (Confirmar) */}
        <div className={styles.row}>
          <div className={styles.col}></div>
          <div className={styles.col}>
            <label className={styles.label}>Confirmar senha</label>
            <div className={styles.inputWrapper}>
              <input type={showPassword ? "text" : "password"} placeholder="Confirme a senha" className={styles.input} />
              <div onClick={togglePass} className={`${styles.icon} ${styles.iconClickable}`}>
                 {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={styles.footer}>
           <div className={styles.termsContainer}>
              <label className={styles.label}>Ler termos de uso</label>
              <button type="button" className={styles.btnOutline}>Clique aqui</button>
              <span className={styles.termsText}>Ao concluir, você concorda com nossos termos</span>
           </div>
           <button className={styles.btnSave}>Salvar</button>
        </div>

      </div>

    </div>
  );
};

export default AlterarCadastroEmpresas;