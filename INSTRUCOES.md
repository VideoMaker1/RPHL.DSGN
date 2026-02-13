# 🚀 Como Baixar e Publicar o Portfólio RPHL DSGN

## PASSO 1: Baixar o Projeto

### Opção A: Baixar como ZIP (Mais Fácil)
1. No painel de arquivos do sistema, navegue até a pasta do projeto
2. Selecione todos os arquivos e compacte em um ZIP
3. Baixe o arquivo ZIP

### Opção B: Via Terminal
```bash
# Crie um tarball do projeto
tar -czvf rphl-dsgn-portfolio.tar.gz \
  --exclude='node_modules' \
  --exclude='.next' \
  --exclude='dev.log' \
  -C /home/z/my-project .
```

---

## PASSO 2: Preparar o Projeto Localmente

Após baixar e descompactar:

```bash
# Entre na pasta do projeto
cd rphl-dsgn-portfolio

# Instale as dependências
bun install
# OU se não tiver o bun:
npm install

# Rode localmente para testar
bun run dev
# OU:
npm run dev

# Acesse http://localhost:3000
```

---

## PASSO 3: Publicar no GitHub

### 3.1 Criar Repositório no GitHub
1. Acesse https://github.com
2. Clique em **"New repository"** (botão verde)
3. Nome do repositório: `rphl-dsgn-portfolio`
4. Deixe **PÚBLICO** (para deploy gratuito na Vercel)
5. **NÃO** inicialize com README/gitignore (já temos)
6. Clique em **"Create repository"**

### 3.2 Enviar o Código para o GitHub

No terminal, dentro da pasta do projeto:

```bash
# Inicializar Git (se não existir)
git init

# Adicionar todos os arquivos
git add .

# Criar primeiro commit
git commit -m "Primeiro commit - Portfolio RPHL DSGN"

# Adicionar repositório remoto (SUBSTITUA pelo seu usuário)
git remote add origin https://github.com/SEU-USUARIO/rphl-dsgn-portfolio.git

# Enviar para GitHub
git branch -M main
git push -u origin main
```

---

## PASSO 4: Publicar na Vercel (GRÁTIS!)

### Opção A: Via Site (Mais Fácil)
1. Acesse https://vercel.com
2. Clique em **"Sign Up"** → **"Continue with GitHub"**
3. Autorize a Vercel a acessar seus repositórios
4. Clique em **"Add New..."** → **"Project"**
5. Selecione o repositório `rphl-dsgn-portfolio`
6. Clique em **"Deploy"**
7. Aguarde ~1 minuto
8. **Pronto!** Seu site estará online em algo como:
   `https://rphl-dsgn-portfolio.vercel.app`

### Opção B: Via CLI
```bash
# Instalar Vercel CLI
npm i -g vercel

# Fazer login
vercel login

# Publicar
vercel

# Seguir as instruções no terminal
```

---

## PASSO 5: Domínio Personalizado (Opcional)

Na Vercel:
1. Vá em **Settings** → **Domains**
2. Adicione seu domínio (ex: `rphldsgn.com`)
3. Configure os DNS no seu provedor de domínio

---

## 📁 Estrutura do Projeto

```
rphl-dsgn-portfolio/
├── public/
│   ├── logo-main.png      # Logo principal
│   └── logo-icon.png      # Ícone R
├── src/
│   ├── app/
│   │   ├── page.tsx       # Página principal
│   │   ├── layout.tsx     # Layout
│   │   └── globals.css    # Estilos
│   └── components/
│       └── portfolio/     # Componentes do site
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🎨 Personalizar

### Adicionar suas artes
Edite o arquivo `src/components/portfolio/GallerySection.tsx`:

```typescript
const artworks = [
  {
    id: 1,
    title: 'Nome da Obra',
    category: 'Ilustração',
    description: 'Descrição da obra',
    image: '/suas-artes/obra1.jpg',  // Adicione em /public/suas-artes/
    width: 800,
    height: 600,
  },
  // ... mais obras
]
```

### Mudar cores
Edite `src/app/globals.css`:
```css
--brutalist-accent: #ff3e00;  /* Mude para sua cor preferida */
```

### Mudar textos
- Sobre: `src/components/portfolio/AboutSection.tsx`
- Contato: `src/components/portfolio/ContactSection.tsx`

---

## ✅ Checklist

- [ ] Baixei o projeto
- [ ] Instalei as dependências (`bun install` ou `npm install`)
- [ ] Testei localmente (`bun run dev`)
- [ ] Criei repositório no GitHub
- [ ] Enviei o código (`git push`)
- [ ] Publiquei na Vercel
- [ ] Site online! 🎉

---

## 🆘 Precisa de Ajuda?

- GitHub Docs: https://docs.github.com/pt
- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
