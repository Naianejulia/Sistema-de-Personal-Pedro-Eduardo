# Sistema de Personal — Pedro Eduardo

Gerencie alunos, treinos, agenda e evolução física em um só lugar.

![Preview](https://res.cloudinary.com/dkzhaw7kw/image/upload/v1763399500/Captura_de_tela_2025-11-17_141042_kqknsu.png)

---

>  Projeto focado em facilitar o dia a dia do personal trainer, com cadastro de alunos, planos, treinos, avaliações e acompanhamento.

---

##  Sumário
- [Preview](#-preview)
- [Principais Recursos](#-principais-recursos)
- [Stack Tecnológica](#-stack-tecnológica)
- [Arquitetura & Pastas](#-arquitetura--pastas)
- [Começando](#-começando)
- [Variáveis de Ambiente](#-variáveis-de-ambiente)
- [Scripts](#-scripts)
- [Banco de Dados](#-banco-de-dados)
- [Rotas/Endpoints](#-rotasendpoints)
- [Boas Práticas](#-boas-práticas)
- [Deploy na Vercel](#-deploy-na-vercel)
- [Roadmap](#-roadmap)
- [Contribuição](#-contribuição)
- [Licença](#-licença)

---

##  Preview
<!-- Substitua pelas suas imagens -->
<!-- Arraste seus prints para a pasta /docs e atualize os paths -->
| Login | Dashboard | Aluno |
|------|-----------|-------|
| ![Login](docs/preview-login.png) | ![Dashboard](docs/preview-dashboard.png) | ![Aluno](docs/preview-aluno.png) |

---

##  Principais Recursos
- Cadastro e gestão de **alunos** (dados pessoais, contato, status)
- Controle de **planos**, **pagamentos** e vencimentos
- Criação e prescrição de **treinos** por objetivo/grupo muscular
- **Agenda** de treinos/consultas com calendário
- **Avaliações físicas** (medidas, fotos de evolução, IMC, BF%)
- **Relatórios** e exportações (PDF/CSV) *(opcional)*
- **Autenticação** com níveis de acesso *(Personal / Admin)*
- **Dark/Light theme** e interface responsiva

---

##  Stack Tecnológica
> Ajuste esta seção conforme seu projeto.

- **Frontend:** Next.js / React + Tailwind CSS
- **Backend:** Next.js API Routes **ou** Node.js (Express)
- **Banco:** PostgreSQL / MySQL / SQLite (via Prisma) *(opcional)*
- **Auth:** NextAuth/JSON Web Token
- **Deploy:** Vercel
- **Qualidade:** ESLint + Prettier

---

## Arquitetura & Pastas
> Exemplo para Next.js (app router). Adapte se usar pages/ ou Express.

.
├─ app/
│ ├─ (auth)/login/page.tsx # tela de login
│ ├─ dashboard/page.tsx # dashboard principal
│ ├─ alunos/ # CRUD de alunos
│ ├─ treinos/ # prescrição/planilhas
│ ├─ agenda/ # calendário/agenda
│ ├─ api/ # rotas API (Next.js)
│ └─ layout.tsx
├─ components/ # UI components
├─ lib/ # utils (auth, db, helpers)
├─ prisma/ # schema.prisma e migrations
├─ public/ # imagens, ícones
├─ docs/ # screenshots e docs
├─ .env.example
└─ README.md

yaml
Copy code

---

##  Começando

### 1) Pré-requisitos
- Node.js **LTS** (>= 18.x)
- pnpm **ou** npm **ou** yarn
- Banco de dados (Postgres/MySQL/SQLite) — *se aplicável*

### 2) Clonar e instalar
```bash
git clone https://github.com/<seu-usuario>/<seu-repo>.git
cd <seu-repo>

# escolha uma opção
pnpm install
# ou
npm install
# ou
yarn

Pedro Eduardo — Personal Trainer
Dev: @Naianejulia
