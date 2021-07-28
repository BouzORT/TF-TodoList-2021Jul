import React, { useState } from 'react';
import Titulo from './Titulo';
import './App.css';
import Listado from './Listado';

const App = () => {
  const nombre = 'Rigoberta';
  const apellido = 'Menchú';
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

  return (
    <div className="App">
      <header className="App-header">
        <Titulo nombre={nombre} apellido={apellido} />
      </header>
      <div className="App-content">
        <Listado tareas={tareas} agregarTarea={agregarTarea} borrarTarea={borrarTarea} />
      </div>
    </div>
  );
};

export default App;
