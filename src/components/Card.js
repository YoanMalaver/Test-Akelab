import React from 'react';
import '../styles/Card.css';

function Card({
  title,
  fecha,
  genero,
  calificacion,
  descripcion,
  caratula,
  generosPeliculas,
}) {
  return (
    <div className='tarjeta'>
      <h1 className='titulo'>{title}</h1>
      <div className='descripcion'>
        <img src={caratula} alt='' />
        <div className='descripcion__info'>
          <p>{descripcion}</p>
          <div className='datos'>
            <p>
              <strong>Titulo: </strong>
              {title}
            </p>
            <p>
              <strong>Calificación: </strong> {calificacion}
            </p>
            <p>
              <strong>Genero: </strong>
              {genero}
            </p>
            <p>
              <strong>fecha de actualzacion: </strong>
              {fecha}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
