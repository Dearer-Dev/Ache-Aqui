import { categorias, itens } from "../dadosMockados/itens.js";
import { usuarioLogadoId } from "../dadosMockados/usuarios.js";

const emojisPorCategoria = {
  "Eletrônicos": "🔌",
  "Documentos": "📄",
  "Chaves": "🔑",
  "Roupas e Acessórios": "🧥",
  "Pets": "🐾",
  "Outros": "📦",
};

function paginaPublicar(app) {
  app.innerHTML = `
    <div class="container">
      <h1>Publicar item</h1>
      <p>Preencha os dados abaixo para publicar um item achado ou perdido.</p>

      <div id="areaMensagem"></div>

      <form id="formPublicar" class="formulario" novalidate>
        <div class="campo">
          <label for="titulo">Título *</label>
          <input id="titulo" name="titulo" type="text" minlength="5" maxlength="60" required placeholder="Ex: Carteira marrom encontrada" />
        </div>

        <div class="linha-campos">
          <div class="campo">
            <label for="tipo">Tipo *</label>
            <select id="tipo" name="tipo" required>
              <option value="">Selecione</option>
              <option value="achado">Achei um item</option>
              <option value="perdido">Perdi um item</option>
            </select>
          </div>

          <div class="campo">
            <label for="categoria">Categoria *</label>
            <select id="categoria" name="categoria" required>
              <option value="">Selecione</option>
              ${categorias.map((categoria) => `<option value="${categoria}">${categoria}</option>`).join("")}
            </select>
          </div>
        </div>

        <div class="linha-campos">
          <div class="campo">
            <label for="local">Local *</label>
            <input id="local" name="local" type="text" required minlength="3" placeholder="Ex: Estação Sé" />
          </div>

          <div class="campo">
            <label for="data">Data *</label>
            <input id="data" name="data" type="date" required />
          </div>
        </div>

        <div class="campo">
          <label for="descricao">Descrição *</label>
          <textarea id="descricao" name="descricao" rows="4" required minlength="10" maxlength="300" placeholder="Dê detalhes que ajudem a identificar o item"></textarea>
        </div>

        <button type="submit" class="botao">Publicar</button>
      </form>
    </div>
  `;

  const form = document.getElementById("formPublicar");
  const areaMensagem = document.getElementById("areaMensagem");

  form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    areaMensagem.innerHTML = "";

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const dados = new FormData(form);
    const titulo = dados.get("titulo").trim();
    const local = dados.get("local").trim();

    const duplicado = itens.find(
      (item) => item.titulo.toLowerCase() === titulo.toLowerCase() && item.local.toLowerCase() === local.toLowerCase()
    );

    if (duplicado) {
      areaMensagem.innerHTML = `<p class="mensagem mensagem-erro">Já existe uma publicação com esse título e local. Verifique os <a href="#resultados?busca=${encodeURIComponent(titulo)}">resultados</a> antes de publicar novamente.</p>`;
      return;
    }

    const categoria = dados.get("categoria");
    const novoItem = {
      id: itens.length ? Math.max(...itens.map((item) => item.id)) + 1 : 1,
      titulo,
      categoria,
      tipo: dados.get("tipo"),
      local,
      data: dados.get("data"),
      descricao: dados.get("descricao").trim(),
      emoji: emojisPorCategoria[categoria] || "📦",
      usuarioId: usuarioLogadoId,
      status: "pendente",
    };

    itens.push(novoItem);

    areaMensagem.innerHTML = `<p class="mensagem mensagem-sucesso">Item publicado com sucesso! <a href="#detalhe?id=${novoItem.id}">Ver publicação</a></p>`;
    form.reset();
  });
}

export default paginaPublicar;
