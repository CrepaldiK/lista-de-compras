# 🛒 Lista de Compras

Aplicação web desenvolvida durante o curso de JavaScript da [Alura](https://www.alura.com.br/), que permite gerenciar uma lista de compras de forma simples e intuitiva diretamente no navegador.

## 🔗 Deploy

Acesse o projeto em produção:
**[lista-de-compras-sb2y.vercel.app](https://lista-de-compras-sb2y.vercel.app/)**

---

## ✨ Funcionalidades

- **Adicionar itens** à lista de compras
- **Marcar como comprado** com checkbox (item riscado ao ser marcado)
- **Editar** o nome de um item já adicionado
- **Excluir** itens da lista com confirmação
- **Mensagem dinâmica** quando a lista está vazia

---

## 🚀 Tecnologias

- **HTML5** — estrutura semântica da página
- **CSS3** — estilização com variáveis CSS, Flexbox e fontes do Google Fonts
- **JavaScript (ES6+)** — lógica da aplicação com módulos ES Modules (`import/export`)

---

## 📁 Estrutura do projeto

```
lista-de-compras/
├── index.html
├── style.css
├── img/
│   ├── bag.png
│   ├── edit.svg
│   └── delete.svg
└── scripts/
    ├── index.js                — ponto de entrada, eventos principais
    ├── criarItemDaLista.js     — criação dinâmica dos elementos da lista
    └── verificarListaVazia.js  — controle da mensagem de lista vazia
```

---

## 🖥️ Como executar localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/lista-de-compras.git
   ```

2. Acesse a pasta do projeto:
   ```bash
   cd lista-de-compras
   ```

3. Abra o arquivo `index.html` em um servidor local (necessário por conta dos ES Modules).
   - Com a extensão **Live Server** no VS Code: clique com o botão direito em `index.html` → *Open with Live Server*
   - Ou via terminal:
     ```bash
     npx serve .
     ```
---

## 📚 Aprendizados

Este projeto foi desenvolvido como parte da formação de JavaScript na Alura e abordou os seguintes conceitos:

- Manipulação do DOM com JavaScript puro
- Criação e inserção dinâmica de elementos HTML
- Modularização de código com ES Modules
- Eventos de clique, checkbox e formulário
- Deploy de aplicações estáticas na Vercel

---
