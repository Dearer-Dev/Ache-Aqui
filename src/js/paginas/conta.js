import { itens } from "../dadosMockados/itens.js";
import { usuarios, usuarioLogadoId } from "../dadosMockados/usuarios.js";

function paginaConta(app) {
  const usuario = usuarios.find((usuario) => usuario.id === usuarioLogadoId);
  const meusItens = itens.filter((item) => item.usuarioId === usuarioLogadoId);

  app.innerHTML = `
    <div class="container">
      <h1>Minha conta</h1>

      <div class="perfil">
        <span class="perfil-avatar">${usuario.avatar}</span>
        <div class="perfil-info">
          <strong>${usuario.nome}</strong>
          <span class="card-meta">${usuario.cidade}</span>
        </div>
      </div>

      <h2>Minhas publicações (${meusItens.length})</h2>

      <div class="grade">
        ${
          meusItens.length
            ? meusItens
                .map((item) => {
                  return `
                    <article class="card">
                      <div class="card-imagem">${item.emoji}</div>
                      <div class="card-corpo">
                        <div class="card-topo">
                          <span class="card-titulo">${item.titulo}</span>
                          <span class="selo selo-${item.status === "resolvido" ? "resolvido" : item.tipo}">
                            ${item.status === "resolvido" ? "Resolvido" : item.tipo === "achado" ? "Achado" : "Perdido"}
                          </span>
                        </div>
                        <div class="card-meta">
                          <span>📍 ${item.local}</span>
                          <span>📅 ${item.data}</span>
                        </div>
                        <div class="card-acoes">
                          <a class="botao botao-secundario" href="#detalhe?id=${item.id}">Ver detalhes</a>
                        </div>
                      </div>
                    </article>
                  `;
                })
                .join("")
            : `<p>Você ainda não publicou nenhum item. <a href="#publicar">Publicar agora</a></p>`
        }
      </div>
    </div>
  `;
}

export default paginaConta;
