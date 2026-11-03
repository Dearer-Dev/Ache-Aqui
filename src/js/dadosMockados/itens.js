const categorias = [
  "Eletrônicos",
  "Documentos",
  "Chaves",
  "Roupas e Acessórios",
  "Pets",
  "Outros",
];

const itens = [
  { id: 1, titulo: "Fone de ouvido Bluetooth preto", categoria: "Eletrônicos", tipo: "achado", local: "Parque Ibirapuera", data: "2026-10-12", descricao: "Encontrado próximo ao portão 3, dentro de um estojo redondo.", emoji: "🎧", usuarioId: 2, status: "pendente" },
  { id: 2, titulo: "Carteira de couro marrom", categoria: "Documentos", tipo: "achado", local: "Shopping Eldorado", data: "2026-10-09", descricao: "Carteira com documentos pessoais, entregue na central de informações.", emoji: "👛", usuarioId: 1, status: "pendente" },
  { id: 3, titulo: "Molho de chaves com chaveiro de fuba", categoria: "Chaves", tipo: "perdido", local: "Rua Augusta, 1200", data: "2026-10-15", descricao: "Perdi um molho com 3 chaves e um chaveiro de personagem amarelo.", emoji: "🔑", usuarioId: 3, status: "pendente" },
  { id: 4, titulo: "Óculos de sol Ray-Ban", categoria: "Roupas e Acessórios", tipo: "achado", local: "Estação Sé do Metrô", data: "2026-10-18", descricao: "Encontrado no banco da plataforma sentido Jabaquara.", emoji: "🕶️", usuarioId: 4, status: "pendente" },
  { id: 5, titulo: "Gato siamês sem coleira", categoria: "Pets", tipo: "achado", local: "Jardim das Flores", data: "2026-10-20", descricao: "Gato dócil, parece ser de rua há pouco tempo, foi acolhido temporariamente.", emoji: "🐱", usuarioId: 2, status: "pendente" },
  { id: 6, titulo: "Mochila escolar azul", categoria: "Outros", tipo: "perdido", local: "Terminal Rodoviário Tietê", data: "2026-10-05", descricao: "Mochila com cadernos e uma calculadora científica dentro.", emoji: "🎒", usuarioId: 1, status: "resolvido" },
  { id: 7, titulo: "Celular com capinha floral", categoria: "Eletrônicos", tipo: "perdido", local: "Avenida Paulista, 900", data: "2026-10-22", descricao: "Tela trincada no canto superior esquerdo, capinha estampada de flores.", emoji: "📱", usuarioId: 3, status: "pendente" },
  { id: 8, titulo: "RG e CPF em porta-documentos", categoria: "Documentos", tipo: "achado", local: "Biblioteca Municipal", data: "2026-10-11", descricao: "Documentos no nome de J. Ferreira, entregues no balcão de atendimento.", emoji: "🪪", usuarioId: 4, status: "pendente" },
  { id: 9, titulo: "Chave de carro com controle", categoria: "Chaves", tipo: "achado", local: "Estacionamento do Carrefour", data: "2026-10-24", descricao: "Chave com controle de alarme e um pingente de coração.", emoji: "🚗", usuarioId: 2, status: "pendente" },
  { id: 10, titulo: "Cachecol de lã cinza", categoria: "Roupas e Acessórios", tipo: "perdido", local: "Praça da República", data: "2026-10-07", descricao: "Cachecol tricotado à mão, muito valor sentimental.", emoji: "🧣", usuarioId: 1, status: "pendente" },
  { id: 11, titulo: "Cachorro pequeno com coleira vermelha", categoria: "Pets", tipo: "perdido", local: "Vila Madalena", data: "2026-10-26", descricao: "Cachorro da raça poodle, atende por 'Bolinha', muito assustado.", emoji: "🐶", usuarioId: 3, status: "pendente" },
  { id: 12, titulo: "Guarda-chuva preto grande", categoria: "Outros", tipo: "achado", local: "Estação Luz do Metrô", data: "2026-10-14", descricao: "Deixado aberto secando perto da catraca, ninguém reclamou ainda.", emoji: "☂️", usuarioId: 4, status: "resolvido" },
  { id: 13, titulo: "Notebook em mochila cinza", categoria: "Eletrônicos", tipo: "perdido", local: "Faculdade - Bloco C", data: "2026-10-28", descricao: "Esquecido na sala 12 após a aula da noite, urgente.", emoji: "💻", usuarioId: 2, status: "pendente" },
  { id: 14, titulo: "Anel de prata com pedra azul", categoria: "Roupas e Acessórios", tipo: "achado", local: "Praia Grande - Calçadão", data: "2026-10-16", descricao: "Encontrado na areia próximo ao quiosque 14.", emoji: "💍", usuarioId: 1, status: "pendente" },
];

export { categorias, itens };
