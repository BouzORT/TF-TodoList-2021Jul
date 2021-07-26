import React from 'react';

const Listado = ({ carrito }) => {
  return (
    <>
      <h2>Carrito de Compras:</h2>
      <ul>
        {carrito.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default Listado;
