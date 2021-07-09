import React from 'react';
import '../styles/main.css';
import '../styles/buscador.css';
import lupa from '../assets/Vector.png';
import Filter from '../assets/Filter.png';
import Arrow from '../assets/Arrow.png';

const main_tittle_text = 'Peliculas';
const main_input_placeholder = 'Buscar...';

function Buscador() {
  return (
    <>
      <h2 className='main__title'>{main_tittle_text}</h2>
      <section className='main'>
        <div className='search'>
          <input
            className=''
            type='text'
            placeholder={main_input_placeholder}
          />
          <img src={lupa} alt='' />
        </div>
        <div className='filter'>
          <img src={Filter} alt='' />
        </div>
        <div className='categoria'>
          <p>Ordenar</p>
          <img src={Arrow} alt='' />
        </div>
      </section>
    </>
  );
}

export default Buscador;
