import React, { Component } from 'react'
import { useState } from 'react'



function Formulario() {
 /* useState */
  const [title, settitle] = useState(" ")
  /* funcion handleSubmitpara cancelar el comportamiento por  defecto  del formulario*/
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title);
  }

    return (
      
        <form onSubmit={handleSubmit}>
          <input placeholder='escribe algo'
          onChange={(e) => settitle(e.target.value) }
          />
          <button>Guardar</button>
        </form>
    
    )
  }



export default Formulario