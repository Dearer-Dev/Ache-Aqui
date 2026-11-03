function paginaNaoEncontrada(app) {
  app.innerHTML = `
    <div class="container">
      <div class="pagina-404">
        <span>🧭</span>
        <h1>Página não encontrada</h1>
        <p>O endereço acessado não existe ou foi movido.</p>
        <a class="botao" href="#inicio">Voltar para o início</a>
      </div>
    </div>
  `;
}

export default paginaNaoEncontrada;
