import React, { useState } from 'react'
import Laravideo from '../assets/images/video/Lara3D.mp4'
import { FiSettings, FiBook, FiX } from "react-icons/fi"

const VLara = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      {/* BOTÃO FLUTUANTE - IDÊNTICO AO V-LIBRAS */}
      <div
        onClick={handleClick}
        style={{
          position: 'fixed',
          bottom: '120px',
          right: '10px',
          width: '60px',
          height: '60px',
          backgroundColor: '#CA8BD4',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 10000,
        }}
      >
        <img 
          src="/libras.svg"
          alt="VLara - Tradutor de Libras"
          style={{ 
            width: '30px', 
            height: '30px',
            filter: 'brightness(0) invert(1)'
          }}
        />
      </div>

      {/* MODAL - LAYOUT EXATO V-LIBRAS (SÓ VÍDEO + BARRA SUPERIOR) */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: '175px',
            right: '12px',
            width: '208px',
            height: '420px',
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            border: '1px solid #FFFAFA',
            overflow: 'hidden',
            fontFamily: 'Segoe UI, Arial, sans-serif'
          }}
        >
          {/* BARRA SUPERIOR - COM ÍCONES DO V-LIBRAS */}
          <div
            style={{
              padding: '12px 16px',
              backgroundColor: '#A13BB1',
              color: 'white',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mborderBottom: '1px solid  #A13BB1'
            }}
                  >

                      {/* LADO ESQUERDO: ÍCONE LIVRO + NOME LARA */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>

                          {/* ÍCONE DO LIVRO */}
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

                          {/* NOME LARA */}
                          <span style={{
                              fontSize: '14px',
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

          {/* ÁREA PRINCIPAL - APENAS O VÍDEO DA LARA */}
          <div
            style={{
              flex: 1,
              backgroundColor: '#2e062fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            {/* VÍDEO DA LARA - USANDO O VÍDEO IMPORTADO */}
            <video
              src={Laravideo}  
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover"
              }}
              autoPlay
              loop
              muted
              controls={false} // Remove controles do player
            />
            
          </div>

           
        </div>
      )}
    </>
  );
};

export default VLara;