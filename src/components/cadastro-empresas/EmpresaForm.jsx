import React from 'react'


const EmpresaForm = () => {
  return (
    <div>
        <div className='form-control'>
            <input
             type="text" 
             name='name' 
             id='name' 
             placeholder='Digite seu nome' 
             required/>
        </div>
        <div className='form-control'>
            <input
             type="email" 
             name='email' 
             id='email' 
             placeholder='Digite seu e-mail' 
             required/>
        </div>
    </div>
  )
}

export default EmpresaForm