import React, { useState } from 'react'
import Laravideo from '../assets/images/video/Lara3D.mp4'
import { FiSettings, FiBook, FiX } from "react-icons/fi"

const VLara = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      {/* BOTÃO FLUTUANTE - RESPONSIVO */}
      <div
        onClick={handleClick}
        style={{
          position: 'fixed',
          bottom: 'clamp(80px, 15vh, 120px)', // Responsivo
          right: 'clamp(10px, 2vw, 20px)',    // Responsivo
          width: 'clamp(50px, 8vw, 60px)',    // Responsivo
          height: 'clamp(50px, 8vw, 60px)',   // Responsivo
          backgroundColor: '#CA8BD4',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 10000,
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
        }}
      >
        <img 
          src="/libras.svg"
          alt="VLara - Tradutor de Libras"
          style={{ 
            width: 'clamp(25px, 5vw, 30px)',   // Responsivo
            height: 'clamp(25px, 5vw, 30px)',  // Responsivo
            filter: 'brightness(0) invert(1)'
          }}
        />
      </div>

      {/* MODAL - RESPONSIVO */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: 'clamp(140px, 25vh, 175px)', // Responsivo
            right: 'clamp(10px, 2vw, 12px)',     // Responsivo
            width: 'clamp(180px, 40vw, 208px)',  // Responsivo
            height: 'clamp(300px, 60vh, 420px)', // Responsivo
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            border: '1px solid #FFFAFA',
            overflow: 'hidden',
            fontFamily: 'Segoe UI, Arial, sans-serif',
            maxWidth: '90vw', // Não ultrapassa a tela
            maxHeight: '80vh' // Não ultrapassa a tela
          }}
        >
          {/* BARRA SUPERIOR - CORRIGIDA */}
          <div
            style={{
              padding: '12px 16px',
              backgroundColor: '#A13BB1',
              color: 'white',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '1px solid #A13BB1' // ← CORRIGIDO AQUI
            }}
          >
            {/* LADO ESQUERDO: ÍCONE LIVRO + NOME LARA */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <button
                onClick={() => alert('Dicionário de libras em desenvolvimento')}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'white',
                  cursor: 'pointer',
                  padding: '4px',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                title="Dicionário"
              >
                <FiBook size={18} color="#FFFAFA" />
              </button>

              <span style={{
                fontSize: 'clamp(12px, 3vw, 14px)', // Responsivo
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                Lara
              </span>
            </div>

            {/* LADO DIREITO: ÍCONES DE CONFIGURAÇÃO */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <button
                onClick={() => alert('Configurações em desenvolvimento')}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'white',
                  cursor: 'pointer',
                  padding: '4px',
                  borderRadius: '4px',
                  fontSize: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                title="Configurações"
              >
                <FiSettings size={20} color="#FFFAFA" />
              </button>

              <button
                onClick={handleClose}
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  border: 'none',
                  color: 'white',
                  cursor: 'pointer',
                  padding: '6px',
                  borderRadius: '4px',
                  fontSize: '14px',
                  width: '28px',
                  height: '28px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                title="Fechar"
              >
                <FiX size={18} color="#FFFAFA" />
              </button>
            </div>
          </div>

          {/* ÁREA PRINCIPAL - VÍDEO RESPONSIVO */}
          <div
            style={{
              flex: 1,
              backgroundColor: '#2e062fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              minHeight: '200px' // Altura mínima
            }}
          >
            <video
              src={Laravideo}  
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                minWidth: "100%",
                minHeight: "100%"
              }}
              autoPlay
              loop
              muted
              controls={false}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default VLara;