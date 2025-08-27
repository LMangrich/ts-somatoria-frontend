# Calculadora de Somatórias 

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/LMangrich/ts-somatoria-frontend)  


Utilize o site clicando em: [![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-blue)](https://lmangrich.github.io/ts-somatoria-frontend/) 

--- 

Uma aplicação frontend em **TypeScript + React + Vite** para calcular pontuações de questões de somatória.  

O usuário insere sua soma e a soma correta do gabarito, seleciona a sequência de números, e a aplicação calcula a pontuação detalhada, mostrando quais números foram corretos, incorretos ou não selecionados.  

---

## ⚡ Funcionalidades

- Suporte a múltiplas sequências de números.
- Validação de inputs numéricos (até 99).
- Cálculo detalhado da pontuação:
  - Números corretos
  - Números incorretos
  - Números do gabarito não escolhidos
- Interface responsiva e amigável.
- Tabs para alternar entre diferentes sequências.
- Reset de formulário e cálculo em tempo real.

---

## 🛠️ Tecnologias

- **React**  
- **TypeScript**  
- **Vite** (build tool)  
- **Fetch API** para comunicação com backend ou cálculo local
- **CSS inline** para estilo dos componentes  

---

## 📦 Estrutura do Projeto

```
frontend/
│
├─ src/
│ ├─ components/
│ │ ├─ NumberGrid/
│ │ │ └─ NumberGrid.tsx
│ │ │ └─ NumberItem.tsx
│ │ ├─ ScoreInputs.tsx
│ │ ├─ ScoreResult.tsx
│ │ ├─ SomatoriaForm.tsx
│ │ └─ Tabs.tsx
│ ├─ App.tsx
│ ├─ main.tsx
│ └─ services/
│ └─ scoringService.ts
├─ tsconfig.json
├─ package.json
└─ vite.config.ts
```

---

## 🚀 Rodando localmente

1. Clone o repositório:

```bash
git clone https://github.com/LMangrich/ts-somatoria-frontend.git
cd ts-somatoria-frontend/frontend
```
2. Instale as dependências:

```bash
npm install
```

4. Rode em modo desenvolvimento:
```bash
npm run dev
```

- A aplicação será aberta em ```http://localhost:5173/ts-somatoria-frontend/```

## 📝 Como usar

1. Escolha uma sequência de números clicando nas tabs.

2. Digite sua soma e a soma correta do gabarito.

3. Clique em Enviar para calcular a pontuação (via backend).

4. Veja o resultado detalhado:

  - Pontos obtidos

  - Números corretos e incorretos

  - Números do gabarito não escolhidos

5. Use o botão Reiniciar para resetar o formulário.

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## ⚠️ Observações

A aplicação depende do backend para calcular a pontuação. Sem ele, o envio do formulário não funciona.


## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👤 Autor

**[Letícia S. M. Pereira]**
- GitHub: [@Lmangrich](https://github.com/Lmangrich)
- LinkedIn: [Letícia Mangrich](www.linkedin.com/in/letícia-souza-mangrich-pereira)

---


