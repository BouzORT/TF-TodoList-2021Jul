import React from 'react';

const Login = props => {
  return (
    <div>
      <input type="text" placeholder="Ingrese el usuario..." />
      <input type="password" placeholder="Ingrese la contraseña..." />
      <input type="button" value="Entrar" />
    </div>
  );
};

Login.propTypes = {};

export default Login;
