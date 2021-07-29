import React, { useState } from 'react';

const Listado = ({ tareas, agregarTarea, borrarTarea }) => {
  const [textoTarea, setTextoTarea] = useState('');

  const btnClick = () => {
    if (textoTarea !== '') {
      agregarTarea(textoTarea);
      setTextoTarea('');
    }
  };

  const handleTextoTarea = ({ target: { value } }) => {
    setTextoTarea(value);
  };

  return (
    <>
      <h2>Carrito de Compras:</h2>
      <ul>
        {tareas.map((item, index) => (
          <li key={index}>
            {item} <input type="button" value="Borrar" onClick={() => borrarTarea(item)} />
          </li>
        ))}
      </ul>
      <input type="text" value={textoTarea} onChange={handleTextoTarea} />
      <input type="button" value="Agregar" onClick={btnClick} />
    </>
  );
};

export default Listado;
