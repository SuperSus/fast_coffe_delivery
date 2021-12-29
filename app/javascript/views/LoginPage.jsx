import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../contexts/AuthContext';

const Login = function () {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { state } = useLocation();

  const handleLogin = () => {
    login().then(() => {
      navigate(state?.path || '/');
    });
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Log in with telegram</button>
      <button onClick={handleLogin}>Log in with viber</button>
      <div>
        <script
          async
          src="https://telegram.org/js/telegram-widget.js?14"
          data-telegram-login="mate_assistant_bot"
          data-size="large"
          data-auth-url="<%= user_telegram_omniauth_callback_url %>"
          data-request-access="write"
        />
      </div>
    </div>
  );
};

export default Login;
