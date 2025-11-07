# Sistema de Personal — Pedro Eduardo

Formulário moderno de **Anamnese** para alunos do Personal Trainer Pedro Eduardo. Projeto focado em uma experiência simples, rápida e bonita para coletar dados essenciais do aluno.

![Preview](https://res.cloudinary.com/dkzhaw7kw/image/upload/v1762523319/Captura_de_tela_2025-11-07_104815_nkmyce.png)

---

✨ Funcionalidades

Formulário dividido por seções (dados pessoais, objetivos, histórico, etc.)

Layout responsivo e visual profissional

Ícones intuitivos e feedbacks de interação

Validações básicas de campos

Pronto para publicar no Netlify / Vercel / GitHub Pages

🔧 Stack / Tecnologias

HTML5

CSS3

JavaScript (vanilla)

(Opcional) Font Awesome para ícones

Projeto estático (sem backend). Pode ser hospedado em qualquer serviço de páginas estáticas.

📂 Estrutura de Pastas (sugerida)
/
├── ficha.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── app.js
│   └── img/
│       └── logo.png
└── README.md

▶️ Como rodar localmente
git clone https://github.com/Naianejulia/Sistema-de-Personal-Pedro-Eduardo.git
cd Sistema-de-Personal-Pedro-Eduardo
# Abra o arquivo ficha.html no navegador
# ou rode um servidor simples:
python -m http.server 5173
# depois acesse http://localhost:5173/ficha.html

☁️ Deploy (Netlify recomendado)

Opção A — renomeie ficha.html para index.html.
Opção B — mantendo ficha.html, crie um arquivo _redirects na raiz com:

/ /ficha.html 200


No GitHub Pages, use o link direto: .../ficha.html.
No Vercel, configure routes:

[{ "src": "/", "dest": "/ficha.html" }]

🧪 Checklist

 Teste mobile/desktop

 Validações de campos

 Contraste/legibilidade

 Otimização de imagens

 Revisão de textos

🛣️ Roadmap

 Enviar respostas para Google Sheets/API

 Exportar PDF

 Tema claro/escuro

 i18n (pt-BR / en-US)

 Máscaras (CPF, telefone)

🤝 Contribuindo

Fork

git checkout -b feature/minha-feature

git commit -m "feat: descrição"

git push origin feature/minha-feature

Abra um PR

📄 Licença

Sugestão: MIT License.

👤 Autor

Pedro Eduardo — Personal Trainer
Dev: @Naianejulia
