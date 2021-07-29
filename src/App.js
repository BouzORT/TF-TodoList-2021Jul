import React from 'react';
import Titulo from './components/Titulo';
import Inicio from './components/Inicio';
import './App.css';

const App = () => {
  const nombre = 'Rigoberta';
  const apellido = 'Menchú';

  return (
    <div className="App">
      <header className="App-header">
        <Titulo nombre={nombre} apellido={apellido} />
      </header>
      <div className="App-content">
        <Inicio />
      </div>
    </div>
  );
};

export default App;
