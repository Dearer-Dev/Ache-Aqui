import paginaInicio from "../paginas/inicio.js";
import paginaResultados from "../paginas/resultados.js";
import paginaDetalhe from "../paginas/detalhe.js";
import paginaPublicar from "../paginas/publicar.js";
import paginaConta from "../paginas/conta.js";
import paginaNaoEncontrada from "../paginas/naoEncontrada.js";

const rotas = [
  { url: "#inicio", label: "Início", pagina: paginaInicio, menu: true },
  { url: "#resultados", label: "Resultados", pagina: paginaResultados, menu: true },
  { url: "#detalhe", label: "Detalhe", pagina: paginaDetalhe, menu: false },
  { url: "#publicar", label: "Publicar", pagina: paginaPublicar, menu: true },
  { url: "#conta", label: "Minha conta", pagina: paginaConta, menu: true },
  { url: "#404", label: "Não encontrada", pagina: paginaNaoEncontrada, menu: false },
];

export { rotas };
