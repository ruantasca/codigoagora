import React from "react";


export default function Login() {
  return (
    <section>
      <header>
      <img src="../public/Logo.jpeg" alt="Logo da Empresa" />
        <div>
                <ul>
                    <li><a href="./Lobby.jsx">Lobby</a></li>
                    <li><a href="./Login.jsx">Login</a></li>
                    <li><a href="./Postagens.jsx">Postagens</a></li>
                    <li><a href="./Usuarios.jsx">Usuários</a></li>
                    <li><a href="./Hardware.jsx">Comunicações</a></li>
                    <li><a href="./Busca.jsx">Busca</a></li>
                </ul>
        </div>
      </header>
      <main>
        <div className="login-container">
          <h2 style={{ color: '#89ffdc' }}>Login</h2>
          <form id="login-form">
            <div className="form-group">
              <label htmlFor="username" style={{ color: '#89ffdc' }}>Usuário:</label>
              <input type="text" id="username" name="username" required />
            </div>
            <div className="form-group">
              <label htmlFor="password" style={{ color: '#89ffdc' }}>Senha:</label>
              <input type="password" id="password" name="password" required />
            </div>
            <button type="submit" style={{ color: '#010817' }}>Entrar</button>
          </form>
          <p><a href="2StepVerification.html" style={{ color: '#4d9083' }}>Esqueceu sua senha?</a></p>
          <p><a href="SignUp.html" style={{ color: '#4d9083' }}>Cadastro</a></p>
        </div>
      </main>
      <footer className="footer">
                <p style={{ color: '#89ffdc' }}>© 2024 S.M.A.R.T. System. Todos os direitos reservados.</p>
        </footer>
    </section>
  );
}
