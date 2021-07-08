import React from 'react';
import '../styles/main.css';
import '../styles/buscador.css';

const main_tittle_text = 'Peliculas';
const main_input_placeholder = 'Buscar...';

function Buscador() {
  return (
    <>
      <section className='main'>
        <h2 className='main__title'>{main_tittle_text}</h2>
        <input className='' type='text' placeholder={main_input_placeholder} />
      </section>
    </>
  );
}

export default Buscador;
