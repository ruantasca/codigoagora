import React from "react";
export default function SignUp(){
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
          <h2 style={{ color: '#89ffdc' }}>CADASTRO</h2>
          <form id="login-form">
            <div className="form-group">
              <label htmlFor="username" style={{ color: '#89ffdc' }}>Email:</label>
              <input type="text" id="username" name="username" required />
            </div>
            <div className="form-group">
              <label htmlFor="username" style={{ color: '#89ffdc' }}>Nome de Usuário:</label>
              <input type="text" id="username" name="username" required />
            </div>
            <div className="form-group">
              <label htmlFor="password" style={{ color: '#89ffdc' }}>Senha:</label>
              <input type="password" id="password" name="password" required />
            </div>
            <div className="form-group">
              <label htmlFor="password" style={{ color: '#89ffdc' }}>Confirmar Senha:</label>
              <input type="password" id="password" name="password" required />
            </div>
            <div className="form-group">
              <label htmlFor="accountType" style={{ color: '#89ffdc' }}>Tipo da Conta:</label>
              <select name="accountType" id="accountType">
                <option value="Pessoa">Pessoa</option>
                <option value="Empresa">Empresa</option>
              </select>
            </div>
            <button type="submit" style={{ color: '#010817' }}>Cadastrar-se</button>
          </form>
          <p><a href="Login.html" style={{ color: '#4d9083' }}>Já tenho uma Conta</a></p>
        </div>
      </main>
      <footer>
        <p style={{ color: '#89ffdc' }}>© 2024 S.M.A.R.T. System. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}