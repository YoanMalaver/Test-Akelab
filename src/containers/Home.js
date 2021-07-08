import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <>
      <div className='cards'>
        <p>Click en el boton dela tarjeta para ir al ejercicio.</p>
        <div className='card__content'>
          <div className='cards__description'>
            <p>Fibonnachi</p>
            <Link className='links' to='/Fibonacci'>
              ir
            </Link>
          </div>
          <div className='cards__description'>
            <p>Ake-Lab</p>
            <Link className='links' to='/Akelab'>
              ir
            </Link>
          </div>
          <div className='cards__description'>
            <p>Mock-up</p>
            <Link className='links' to='/Mockup'>
              ir
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
