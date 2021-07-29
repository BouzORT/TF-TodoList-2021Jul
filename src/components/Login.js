import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

const Login = ({ history }) => {
  const [usuario, setUsuario] = useState('flancondulce');
  const [password, setPassword] = useState('flanders');
  const [mensajeError, setMensajeError] = useState('');

  const handleChangeUsuario = ({ target: { value } }) => {
    setUsuario(value);
  };

  const handleChangePassword = ({ target: { value } }) => {
    setPassword(value);
  };

  const btnClick = () => {
    const body = {
      usuario,
      password,
    };

    setMensajeError('');

    fetch('http://destinos.develotion.com/login.php', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then(res => res.json())
      .then(res => {
        console.log('Seeee!', res);
        if (res.codigo === 200) {
          sessionStorage.setItem('token', res.apiKey);
          sessionStorage.setItem('userId', res.id);
          history.push('/');
        } else {
          setMensajeError(`Error :-( -> ${res.mensaje}`);
        }
      })
      .catch(res => {
        setMensajeError(`Error :-( -> ${res.mensaje}`);
      });
  };

  return (
    <>
      <div>
        <input type="text" placeholder="Ingrese el usuario..." value={usuario} onChange={handleChangeUsuario} />
        <input
          type="password"
          placeholder="Ingrese la contraseña..."
          value={password}
          onChange={handleChangePassword}
        />
        <input type="button" value="Entrar" onClick={btnClick} />
      </div>
      <p className="mensaje-error">{mensajeError}</p>
    </>
  );
};

Login.propTypes = {};

export default withRouter(Login);
