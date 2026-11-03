import { categorias, itens } from "../dadosMockados/itens.js";

function paginaResultados(app, params) {
  const busca = (params.get("busca") || "").toLowerCase();
  const categoriaAtiva = params.get("categoria") || "";
  const tipoAtivo = params.get("tipo") || "";

  const resultados = itens.filter((item) => {
    const bateBusca = item.titulo.toLowerCase().includes(busca) || item.descricao.toLowerCase().includes(busca);
    const bateCategoria = categoriaAtiva ? item.categoria === categoriaAtiva : true;
    const bateTipo = tipoAtivo ? item.tipo === tipoAtivo : true;
    return bateBusca && bateCategoria && bateTipo;
  });

  app.innerHTML = `
    <div class="container">
      <h1>Resultados</h1>

      <form id="formFiltro" class="busca-form">
        <input type="text" name="busca" placeholder="Buscar por título ou descrição" value="${busca}" />
        <select name="categoria">
          <option value="">Todas as categorias</option>
          ${categorias
            .map((categoria) => {
              return `<option value="${categoria}" ${categoria === categoriaAtiva ? "selected" : ""}>${categoria}</option>`;
            })
            .join("")}
        </select>
        <select name="tipo">
          <option value="">Achados e perdidos</option>
          <option value="achado" ${tipoAtivo === "achado" ? "selected" : ""}>Somente achados</option>
          <option value="perdido" ${tipoAtivo === "perdido" ? "selected" : ""}>Somente perdidos</option>
        </select>
        <button type="submit" class="botao">Filtrar</button>
      </form>

      <p>${resultados.length} item(ns) encontrado(s)</p>

      <div class="grade">
        ${
          resultados.length
            ? resultados
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
                          <span>🗂️ ${item.categoria}</span>
                        </div>
                        <div class="card-acoes">
                          <a class="botao botao-secundario" href="#detalhe?id=${item.id}">Ver detalhes</a>
                        </div>
                      </div>
                    </article>
                  `;
                })
                .join("")
            : `<p>Nenhum item encontrado com esses filtros.</p>`
        }
      </div>
    </div>
  `;

  const form = document.getElementById("formFiltro");
  form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const dados = new FormData(form);
    const novaBusca = new URLSearchParams();
    if (dados.get("busca")) novaBusca.set("busca", dados.get("busca"));
    if (dados.get("categoria")) novaBusca.set("categoria", dados.get("categoria"));
    if (dados.get("tipo")) novaBusca.set("tipo", dados.get("tipo"));
    window.location.hash = `#resultados?${novaBusca.toString()}`;
  });
}

export default paginaResultados;
