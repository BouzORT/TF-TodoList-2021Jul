import React, { useState } from 'react';

import Listado from './Listado';

const Inicio = () => {
  const [tareas, setTareas] = useState([
    '200g Jamón Crudo',
    '20 tornillos 1/8 pulgada',
    '2 motos de agua',
    'Taller de Frontend salvado',
  ]);

  const agregarTarea = tarea => {
    setTareas([...tareas, tarea]);
  };

  const borrarTarea = tarea => {
    setTareas(tareas.filter(elem => elem !== tarea));
  };

  return <Listado tareas={tareas} agregarTarea={agregarTarea} borrarTarea={borrarTarea} />;
};

Inicio.propTypes = {};

export default Inicio;
