import React, { useState, useContext, useCallback } from 'react';
import { AuthContext } from '../contexts/auth/Context';
import { authMidRequest } from '../contexts/auth/actions';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {
    state: { loginError, loginSuccess, isLoading },
    dispatch,
  } = useContext(AuthContext);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      dispatch(authMidRequest({ email, password }));
    },
    [dispatch, email, password]
  );

  return (
    <div>
      <h1>Login</h1>

      {loginError ? <p>Usuário ou senha inválidos</p> : <></>}
      {loginSuccess ? <p>LOGADO</p> : <></>}
      {isLoading ? <p>Carregando...</p> : <></>}

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Seu E-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <br />
        <button type="submit" disabled={isLoading}>
          Entrar
        </button>
      </form>
    </div>
  );
}
