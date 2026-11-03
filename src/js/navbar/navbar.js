function renderNavbar(rotas) {
  const navbar = document.getElementById("navbar");

  navbar.innerHTML = `
    <nav class="navbar">
      <a href="#inicio" class="navbar-marca">
        <span class="navbar-logo">🔎</span>
        <span>AchaAqui</span>
      </a>
      <button class="navbar-toggle" id="navbarToggle" type="button" aria-label="Abrir menu">☰</button>
      <ul class="navbar-menu" id="navbarMenu">
        ${rotas
          .filter((rota) => rota.menu)
          .map((rota) => {
            return `<li class="navbar-item"><a href="${rota.url}" class="navbar-link" data-url="${rota.url}">${rota.label}</a></li>`;
          })
          .join("")}
      </ul>
    </nav>
  `;

  const toggle = document.getElementById("navbarToggle");
  const menu = document.getElementById("navbarMenu");
  toggle.addEventListener("click", () => menu.classList.toggle("aberto"));
}

function marcarLinkAtivo(urlAtual) {
  const links = document.querySelectorAll(".navbar-link");
  links.forEach((link) => {
    link.classList.toggle("ativo", link.dataset.url === urlAtual);
  });
  const menu = document.getElementById("navbarMenu");
  if (menu) menu.classList.remove("aberto");
}

export { renderNavbar, marcarLinkAtivo };
