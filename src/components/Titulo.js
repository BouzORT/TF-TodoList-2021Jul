import React from 'react';
import { string } from 'prop-types';

const Titulo = ({ nombre, apellido }) => {
  return (
    <h2 className="titulo">
      Bienvenido/a, {nombre} {apellido}
    </h2>
  );
};

Titulo.propTypes = {
  nombre: string,
  apellido: string,
};

export default Titulo;
