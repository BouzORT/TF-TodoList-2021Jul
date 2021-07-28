import React, { useState } from 'react';

const Listado = ({ carrito }) => {
  const [textoTarea, setTextoTarea] = useState('');

  const btnClick = () => {
    alert(`Agregaste la tarea: ${textoTarea}`);
  };

  const handleTextoTarea = ({ target: { value } }) => {
    setTextoTarea(value);
  };

  return (
    <>
      <h2>Carrito de Compras:</h2>
      <ul>
        {carrito.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <input type="text" value={textoTarea} onChange={handleTextoTarea} />
      <input type="button" value="Agregar" onClick={btnClick} />
    </>
  );
};

export default Listado;
