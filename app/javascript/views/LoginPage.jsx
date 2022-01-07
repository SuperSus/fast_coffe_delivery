import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import TelegramLoginButton from 'react-telegram-login';
import useAuth from '../contexts/AuthContext';

const Login = function () {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { state } = useLocation();
  const dataAuthUrl = document.querySelector('[name=telegram-auth]').content;

  useEffect(
    () => login().then((success) => success && navigate(state?.path || '/')),
    [],
  );

  return (
    <div>
      <h1>Login</h1>
      {/* <button onClick={handleLogin}>Log in with viber</button> */}
      <TelegramLoginButton
        dataAuthUrl={dataAuthUrl}
        botName="fast_deliverytest_bot"
        widgetVersion={14}
        buttonSize="large"
        requestAccess="write"
      />
    </div>
  );
};

export default Login;
