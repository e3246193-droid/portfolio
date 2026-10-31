import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="page-container" style={{ maxWidth: '480px' }}>
      <div className="page-content" style={{ backgroundColor: '#ffffff', color: '#000000' }}>
        <h2 className="login-title">Войти в личный кабинет</h2>
        <input type="email" className="login-input" placeholder="E-mail" />
        <input type="password" className="login-input" placeholder="Пароль" />
        <a className="forgot-password" href="#">Забыли пароль?</a>
        <button className="login-submit-btn">ВОЙТИ</button>
        <a className="register-link" href="#">Регистрация покупателя</a>
        <div style={{ marginTop: '20px', textAlignment: 'center' }}>
          <Link to="/" style={{ color: '#666', fontSize: '13px' }}>← Вернуться в магазин</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;