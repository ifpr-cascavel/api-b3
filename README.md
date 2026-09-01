# 📈 Consulta B3 — Cotações em Tempo Real

Uma aplicação web leve, moderna e responsiva para consulta de cotações de ações da Bolsa de Valores de São Paulo (B3) em tempo real, construída puramente com HTML, CSS e JavaScript (Vanilla JS).

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![BRAPI](https://img.shields.io/badge/API-BRAPI-008080?style=for-the-badge)

---

## 🚀 Funcionalidades

- **🔥 Cards de Destaque:** Exibição automática das 4 principais ações do mercado (`PETR4`, `VALE3`, `ITUB4`, `BBAS3`) com atualização via requisições assíncronas em paralelo (`Promise.all`).
- **🔍 Busca com Autocomplete:** Pesquisa inteligente por ativos com sugestões instantâneas de código e nome da empresa conforme você digita (*Debounced Search*).
- **📊 Dados Detalhados:** 
  - Preço atual e variação percentual do dia (com indicador visual de alta/baixa).
  - Preço máximo e mínimo do dia.
  - Horário da última atualização.
  - Logo oficial da empresa.
- **🎨 Interface Dark Mode:** Design escuro moderno, otimizado para legibilidade e 100% responsivo para dispositivos móveis.
- **⚡ Zero Frameworks:** Desenvolvido com JavaScript puro, sem dependências externas de compilação ou pacotes npm.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estrutura semântica e acessível.
- **CSS3:** Estilização moderna utilizando Flexbox, CSS Grid e Design Responsivo.
- **JavaScript (ES6+):** Manipulação da DOM, Fetch API para chamadas HTTP, técnicas de *Debounce* para otimização do autocomplete e *Promise.all* para concorrência de requisições.
- **[BRAPI](https://brapi.dev/):** API pública e gratuita para dados de ativos financeiros da B3.
