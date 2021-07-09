import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.css';

const Fibonacci = () => {
  const [value, setValue] = useState('');
  const [list, setList] = useState('');
  const handleChange = (e) => setValue(e.target.value);

  const handleSubmit = (e) => {
    // para evitar la recarga de la pagina prevent default
    e.preventDefault();
    let numero = parseInt(value);
    console.log(numero);
    //para almacenar los datos en el array
    let fibonacci = [];
    console.log(fibonacci);
    //codigo de impresion de numeros
    //inicializacion de variables
    let a = 0;
    let b = 1;
    let c, i;

    for (i = 0; i <= numero; i++) {
      if (numero === 0) {
        fibonacci.push(`Ingrese un numero mayor a 0`);
      } else {
        //para insertarlo en el array
        fibonacci.push(a + ', ');
        c = a + b;
        a = b;
        b = c;
      }
    }
    //metdodo array join
    setList(`Secuencia: ${fibonacci.join('')}`);
  };
  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <h1 className='title'>Secuencia Fibonacci</h1>
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
      <div>{list}</div>
      <Link className='links' to='/'>
        Volver a la pagina principal
      </Link>
    </div>
  );
};

export default Fibonacci;
