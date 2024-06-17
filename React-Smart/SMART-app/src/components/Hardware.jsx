import React from "react";
import "../style.css";  

export default function Hardware() {
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
                <div className="container">
                    <h1 style={{ color: 'whitesmoke' }}>Comunicação com Hardware</h1>
                    <div id="status" style={{ color: 'whitesmoke' }}>Status: Desconectado</div>
                    <button id="connect-button" style={{ color: 'whitesmoke' }}>Conectar</button>
                </div>
            </main>
            <footer className="footer">
                <p style={{ color: '#89ffdc' }}>© 2024 S.M.A.R.T. System. Todos os direitos reservados.</p>
            </footer>
        </div>
    );
}
