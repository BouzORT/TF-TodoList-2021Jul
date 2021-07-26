import Titulo from './Titulo';
import './App.css';
import Listado from './Listado';

const App = () => {
  const nombre = 'Rigoberta';
  const apellido = 'Menchú';
  const carrito = ['200g Jamón Crudo', '20 tornillos 1/8 pulgada', '2 motos de agua', 'Taller de Frontend salvado'];

  return (
    <div className="App">
      <header className="App-header">
        <Titulo nombre={nombre} apellido={apellido} />
      </header>
      <div>
        <Listado carrito={carrito} />
      </div>
    </div>
  );
};

export default App;
