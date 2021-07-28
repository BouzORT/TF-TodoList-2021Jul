import React, { useState } from 'react';

const Listado = ({ carrito }) => {
  const { textoTarea, setTextoTarea } = useState('textoooooo');

  const btnClick = () => {
    alert('Click!');
  };

  return (
    <>
      <h2>Carrito de Compras:</h2>
      <ul>
        {carrito.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <input type="text" value={textoTarea} />
      <input type="button" value="Agregar" onClick={btnClick} />
    </>
  );
};

export default Listado;
