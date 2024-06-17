import React from 'react';
import '../styles.css';
import logo from '../public/Logo.jpeg';

function Verification() {
  return (
    <div>
      <header>
             <img src="../public/Logo.jpeg" alt="Logo da Empresa" />
        <nav>
          <ul>
            <li><a href="./Index.jsx">Lobby</a></li>
            <li><a href="./Login.jsx">Login</a></li>
            <li><a href="./Postagens.jsx">Postagens</a></li>
            <li><a href="./Usuarios.jsx">Usuários</a></li>
            <li><a href="./Hardware.jsx">Comunicações</a></li>
            <li><a href="./Busca.jsx">Busca</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="login-container">
          <h2 style={{ color: '#89ffdc' }}>Esqueceu sua Senha?</h2>
          <form id="login-form">
            <div className="form-group">
              <label htmlFor="username" style={{ color: '#89ffdc' }}>Digite seu Email:</label>
              <input type="text" id="username" name="username" required />
            </div>
            <button type="submit" style={{ color: '#010817' }}>Enviar Email</button>
          </form>
          <p><a href="Login.html" style={{ color: '#4d9083' }}>Login</a></p>
          <p><a href="SignUp.html" style={{ color: '#4d9083' }}>Cadastro</a></p>
        </div>
      </main>
      <footer>
        <p style={{ color: '#89ffdc' }}>© 2024 S.M.A.R.T. System. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default Login;
