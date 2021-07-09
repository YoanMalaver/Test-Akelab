import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.css';

const Akelab = () => {
  const [value, setValue] = useState('');
  const [list, setList] = useState('');
  //captura de valor de input
  const handleChange = (e) => setValue(e.target.value);

  const handleSubmit = (e) => {
    // para evitar la recarga de la pagina prevent default
    e.preventDefault();
    let numero = parseInt(value);
    //para almacenar los datos en el array
    let secuencia = [];
    console.log(secuencia);
    //codigo de impresion de numeros
    for (var i = 1; i <= numero; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        secuencia.push(`Akelab, `);
      } else if (i % 3 === 0) {
        secuencia.push(`Ake, `);
      } else if (i % 5 === 0) {
        secuencia.push(`Lab, `);
      } else {
        secuencia.push(i + ', ');
      }
    }
    setList(`${secuencia.join('')}`);
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <h1 className='title'>Secuencia Ake-lab</h1>
        <label htmlFor='number'>
          Ingrese un número entero igual o mayor a 1
        </label>
        <input
          type='text'
          name='number'
          id='number'
          placeholder='Escribe un número'
          onChange={handleChange}
          required
        />
        <button type='submit'>Ver Secuencia</button>
      </form>
      <div className='secuencia'>
        <strong>Secuencia:</strong> {list}
      </div>
      <Link className='links' to='/'>
        Volver a la pagina principal
      </Link>
    </div>
  );
};

export default Akelab;
