import React from 'react'
import Formulario from '../components/Formulario';
const Libros = () => {
  return (
    <React.Fragment>
    <section>
    <div className="centered text-4xl h-screen">
          <div>
            <Formulario />
            <Formulario />
            <Formulario />
            <Formulario />
          </div>
        </div>
    </section>
  </React.Fragment>
  )
}

export default Libros