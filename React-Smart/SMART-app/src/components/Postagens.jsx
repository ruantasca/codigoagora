import React from "react";

export default function Postagens() {
  return (
    <section>
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
        <div className="crud-container">
          <h2 style={{ color: '#89ffdc' }}>Postagens</h2>
          <table>
            <thead>
              <tr>
                <th style={{ color: '#010817' }}>ID</th>
                <th style={{ color: '#010817' }}>Título</th>
                <th style={{ color: '#010817' }}>Conteúdo</th>
                <th style={{ color: '#010817' }}>Ações</th>
              </tr>
            </thead>
            <tbody id="post-table-body">
              <tr>
                <td>1</td>
                <td>Exemplo de Título</td>
                <td>Conteúdo da Postagem</td>
                <td>
                  <button style={{ color: '#010817' }}>Editar</button>
                  <button style={{ color: '#010817' }}>Excluir</button>
                </td>
              </tr>
            </tbody>
          </table>
          <form id="post-form">
            <input type="text" id="posttitle" placeholder="Título" required />
            <input type="text" id="postcontent" placeholder="Conteúdo" required />
            <button type="submit" style={{ color: '#010817' }}>Adicionar Postagem</button>
          </form>
        </div>
      </main>
      <footer className="footer">
                <p style={{ color: '#89ffdc' }}>© 2024 S.M.A.R.T. System. Todos os direitos reservados.</p>
            </footer>
    </section>
  );
}
