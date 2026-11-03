import { itens } from "../dadosMockados/itens.js";
import { usuarios } from "../dadosMockados/usuarios.js";

function paginaDetalhe(app, params) {
  const id = Number(params.get("id"));
  const item = itens.find((item) => item.id === id);

  if (!item) {
    app.innerHTML = `
      <div class="container">
        <p>Item não encontrado. <a href="#resultados">Voltar para resultados</a></p>
      </div>
    `;
    return;
  }

  const publicador = usuarios.find((usuario) => usuario.id === item.usuarioId);

  app.innerHTML = `
    <div class="container">
      <a class="botao botao-secundario" href="#resultados" style="align-self:flex-start">← Voltar</a>

      <div class="detalhe">
        <div class="detalhe-imagem">${item.emoji}</div>
        <div class="detalhe-info">
          <div class="card-topo">
            <h1>${item.titulo}</h1>
            <span class="selo selo-${item.status === "resolvido" ? "resolvido" : item.tipo}">
              ${item.status === "resolvido" ? "Resolvido" : item.tipo === "achado" ? "Achado" : "Perdido"}
            </span>
          </div>
          <p class="card-meta">
            <span>📍 ${item.local}</span>
            <span>🗂️ ${item.categoria}</span>
            <span>📅 ${item.data}</span>
          </p>
          <p>${item.descricao}</p>

          <div class="detalhe-publicador">
            <span class="avatar">${publicador ? publicador.avatar : "👤"}</span>
            <div>
              <strong>${publicador ? publicador.nome : "Usuário removido"}</strong>
              <div class="card-meta">${publicador ? publicador.cidade : ""}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

export default paginaDetalhe;
