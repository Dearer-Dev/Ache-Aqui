import { rotas } from "./rotas/rotas.js";
import { renderNavbar, marcarLinkAtivo } from "./navbar/navbar.js";
import paginaNaoEncontrada from "./paginas/naoEncontrada.js";

const app = document.getElementById("app");

renderNavbar(rotas);

function renderApp() {
  const hashCompleto = window.location.hash || "#inicio";
  const [url, querystring] = hashCompleto.split("?");
  const params = new URLSearchParams(querystring || "");

  const rota = rotas.find((item) => item.url === url);

  if (rota) {
    rota.pagina(app, params);
    marcarLinkAtivo(url);
  } else {
    paginaNaoEncontrada(app, params);
    marcarLinkAtivo(null);
  }

  window.scrollTo(0, 0);
}

window.addEventListener("hashchange", renderApp);
window.addEventListener("DOMContentLoaded", renderApp);

renderApp();
