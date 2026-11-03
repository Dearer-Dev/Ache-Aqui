import { categorias, itens } from "../dadosMockados/itens.js";

function paginaInicio(app) {
  const destaques = itens.filter((item) => item.status === "pendente").slice(0, 4);

  app.innerHTML = `
    <div class="container">
      <section class="hero">
        <h1 class="hero-titulo">Perdeu ou achou algo?</h1>
        <p class="hero-sub">O AchaAqui conecta quem perdeu um item com quem o encontrou. Busque, publique e ajude a devolver.</p>
        <form id="formBuscaInicio" class="busca-form">
          <input type="text" name="busca" placeholder="O que você está procurando?" />
          <button type="submit" class="botao">Buscar</button>
        </form>
      </section>

      <section>
        <h2>Categorias</h2>
        <div class="chips" id="chipsCategorias">
          ${categorias
            .map((categoria) => {
              return `<a class="chip" href="#resultados?categoria=${encodeURIComponent(categoria)}">${categoria}</a>`;
            })
            .join("")}
        </div>
      </section>

      <section>
        <h2>Publicados recentemente</h2>
        <div class="grade">
          ${destaques
            .map((item) => {
              return `
                <article class="card">
                  <div class="card-imagem">${item.emoji}</div>
                  <div class="card-corpo">
                    <div class="card-topo">
                      <span class="card-titulo">${item.titulo}</span>
                      <span class="selo selo-${item.tipo}">${item.tipo === "achado" ? "Achado" : "Perdido"}</span>
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
            .join("")}
        </div>
      </section>
    </div>
  `;

  const form = document.getElementById("formBuscaInicio");
  form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const busca = new FormData(form).get("busca").trim();
    window.location.hash = `#resultados?busca=${encodeURIComponent(busca)}`;
  });
}

export default paginaInicio;
