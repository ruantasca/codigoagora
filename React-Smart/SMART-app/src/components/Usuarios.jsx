import React from 'react';
import '../style.css';

function Usuarios() {
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
        <div className="search-container">
          <h2 style={{ color: 'whitesmoke' }}>Procurar Usuários</h2>
          <form id="search-form">
            <input type="text" id="search-input" placeholder="Digite o nome do usuário" />
            <button type="submit" style={{ color: '#010817' }}>Procurar</button>
          </form>
        </div>
        <div id="search-results" className="crud-container"></div>
      </main>
      <footer>
        <p style={{ color: '#89ffdc' }}>© 2024 S.M.A.R.T. System. Todos os direitos reservados.</p>
      </footer>
      <script src="../scripts/Script.js"></script>
    </div>
  );
}

export default Usuarios;
