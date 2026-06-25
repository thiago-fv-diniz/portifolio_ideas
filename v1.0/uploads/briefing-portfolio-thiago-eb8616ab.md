# Briefing — Portfólio Thiago Diniz

> Documento completo para construção do site portfólio pessoal.
> Baseado na análise de juanmora.co, 14 referências Pinterest, e 4 sites de referência (sidewave.it, thorgal.com, kvs.services, larevoltosa.es).
> **Direção visual: Lua + Universo — Preto, Branco e Prata**
> Data: Maio 2026 (v2 — atualizado com nova direção criativa)

---

## 1. Visão Geral do Projeto

**Dono:** Thiago Felipe Viana Diniz
**Posicionamento:** Desenvolvedor FullStack
**Idioma:** Português (Brasil)
**Formato:** Single Page (todas as seções na mesma página)
**Páginas:** 1 (Home com scroll contínuo)
**Objetivo:** Portfólio profissional que surpreende do início ao fim com animações fluidas e bem desenvolvidas. Mostrar competência técnica, experiência profissional, stack tecnológica e projetos — tudo em uma experiência visual premium.

**Direção Criativa:** O site mistura astrologia com tecnologia. A estética visual é inspirada no universo, na lua e no cosmos — usando preto profundo, branco puro e tons de prata/cinza metálico. A lua é o elemento central: aparece dividida entre o hero (metade inferior) e a seção 2 (metade superior), criando uma transição visual contínua ao scrollar. O conteúdo é 100% tech, mas com metáforas astrais sutis nos textos.

**Contato:**
- Email: thiagof.vdiniz@gmail.com / thiago.diniz@twinfo.io
- LinkedIn: https://www.linkedin.com/in/thiago-diniz-dev
- Celular: +55 83 99847-8312

---

## 2. Dados Pessoais e Profissionais

### 2.1 Headline / Tagline

Sugestões para o hero (com mix astral sutil):

| Opção | Texto |
|---|---|
| **Direta** | "Desenvolvedor FullStack" |
| **Com personalidade** | "Transformo ideias em código. Do backend ao pixel." |
| **Astral sutil** | "Navegando entre sistemas, construindo universos digitais." |
| **Minimalista** | "FullStack Developer — Java, React, Cloud" |

### 2.2 Sobre (About)

**Formação:** Bacharelado em Ciências da Computação — UEPB (Universidade Estadual da Paraíba)

**Bio curta (para hero/statement):**
Desenvolvedor FullStack com experiência em aplicações web de alta escala, desde a arquitetura backend em Java/Spring até interfaces modernas com React e Next.js. Espírito empreendedor, foco em solução e paixão por entregar software de qualidade.

**Bio expandida (para seção About):**
Sou desenvolvedor desde os 20 anos, com inclinação para liderança e forte raciocínio lógico. Possuo espírito empreendedor e procuro sempre focar na solução, e não no problema. Acredito que com dedicação e vontade de entregar resultados, é sempre possível encontrar caminhos e desenvolver boas soluções. Encaro cada tarefa como um novo desafio e uma oportunidade de aprendizado. Busco manter um bom relacionamento com todos por onde passo, valorizando a colaboração e o trabalho em equipe.

### 2.3 Experiência Profissional

| Empresa | Período | Cargo | Stack Principal |
|---|---|---|---|
| **Lifters** | 09/2024 — Atual | Desenvolvedor FullStack Pleno | React, Next.js, Java, Spring, PostgreSQL, Thymeleaf |
| **MarjoSports** | 11/2023 — 09/2024 | Desenvolvedor FullStack Júnior | Angular, Node.js, Python, AWS Lambda, JavaScript |
| **MarjoSports** | 01/2023 — 11/2023 | Estagiário de Desenvolvimento | Testes funcionais, SQL, Git, suporte técnico |

**Lifters (Projeto Obabet):**
- Desenvolvimento e evolução de aplicações web fullstack
- Interfaces modernas e responsivas com React/Next.js
- Backend escalável com Java e Spring Framework
- Funcionalidades E2E: análise de requisitos → implementação → integração → manutenção
- Práticas ágeis: Scrum e Kanban

**MarjoSports (Plataforma de apostas):**
- Evolução da plataforma MarjoSports
- Frontend com Angular + integração backend
- Automações com Node.js e Python em AWS Lambda
- Regras de negócio + bancos de dados relacionais
- Migração de estagiário → júnior → entrega como dev pleno

### 2.4 Tech Stack Completa

**Backend:**
- Java 8+, Spring Framework (Boot, Web, Data, OpenAPI)
- Maven, Hibernate, JPA, JWT, OAuth2
- JUnit, Mockito, JSF
- Node.js

**Frontend:**
- HTML5, CSS3, JavaScript, TypeScript
- React, Next.js
- Angular 2+, AngularJS

**Banco de Dados:**
- MySQL, PostgreSQL
- Redis, MongoDB

**Mensageria:**
- SQS, RabbitMQ, Kafka

**Cloud & DevOps:**
- AWS (EC2, ECS, Lambda, RDS, SNS, SQS, S3, API Gateway, CloudWatch)
- Docker

**Metodologias:**
- Scrum, Kanban
- Git (controle de versão)

---

## 3. Estrutura de Seções (Single Page)

O site é uma single-page com scroll contínuo. A estrutura segue o padrão validado nas referências, adaptada para o perfil FullStack.

```
<body>
  ├── Navbar (fixa)                    <!-- NAVEGAÇÃO -->
  ├── Loader                           <!-- PRELOADER DE ENTRADA -->
  ├── Cursor customizado               <!-- CURSOR INTERATIVO -->
  ├── Seção 1: HERO                    <!-- Nome + headline + foto/visual -->
  ├── Seção 2: STATEMENT               <!-- Frase de impacto + elementos 3D -->
  ├── Seção 3: SOBRE MIM               <!-- Bio + formação + anos de experiência -->
  ├── Seção 4: TECH STACK              <!-- Skills interativas (NOVA) -->
  ├── Seção 5: EXPERIÊNCIA             <!-- Timeline profissional -->
  ├── Seção 6: PROJETOS                <!-- Portfolio de trabalhos -->
  ├── Seção 7: CTA / CONTATO           <!-- Call to action + formulário/links -->
  └── Footer                           <!-- Créditos + links sociais -->
</body>
```

**Total: 8 seções + navbar + loader + cursor = ~10 componentes**

---

## 4. Mapeamento Detalhado das Seções

### 4.0 — Navbar (Fixa)

**Posição:** Fixed top, z-index alto
**Altura:** ~70-80px

**Layout (3 colunas):**

| Esquerda | Centro | Direita |
|---|---|---|
| Logo "TD" ou "Thiago Diniz" (com dot accent) | Links de âncora: Sobre, Skills, Experiência, Projetos, Contato | Ícones sociais: LinkedIn, GitHub, Email |

**Comportamento:**
- Fixed durante todo o scroll
- Muda de tema (light/dark) conforme a seção visível via ScrollTrigger
- Links fazem smooth scroll para a respectiva seção (âncoras)
- Menu hamburger em mobile → drawer com animação

**Animações:**
- Entrada: slide-down com fade ao carregar
- Theme switch: transição suave de cores (0.3s)
- Active link: indicador animado que segue o link ativo

---

### 4.1 — Loader de Entrada

**Duração:** 2-3s
**Estilo:** Tela cheia preta com texto "Thiago - Diniz" (NÃO usar "TD")

**Conteúdo:**
- Texto **"Thiago"** aparece primeiro (SplitText char reveal da esquerda)
- Separador **" - "** (dash) aparece com fade
- Texto **"Diniz"** aparece depois (SplitText char reveal da direita)
- Possível: partículas de estrelas sutis no fundo durante o loading
- Após reveal completo: toda a tela faz slide-up revelando o hero com a lua

**Animação (GSAP Timeline):**
```javascript
const loaderTL = gsap.timeline();

const splitFirst = new SplitText(".loader-first-name", { type: "chars" });
const splitLast = new SplitText(".loader-last-name", { type: "chars" });

loaderTL
  // "Thiago" revela char por char
  .from(splitFirst.chars, {
    y: 40, opacity: 0, stagger: 0.05, duration: 0.6, ease: "power3.out"
  })
  // " - " fade in
  .from(".loader-dash", { opacity: 0, scaleX: 0, duration: 0.3, ease: "power2.out" }, "-=0.2")
  // "Diniz" revela char por char
  .from(splitLast.chars, {
    y: 40, opacity: 0, stagger: 0.05, duration: 0.6, ease: "power3.out"
  }, "-=0.3")
  // Pausa para leitura
  .to({}, { duration: 0.5 })
  // Tudo faz fade + slide up
  .to(".loader-container", {
    yPercent: -100, duration: 1, ease: "power4.inOut"
  })
  .set(".loader-container", { display: "none" });
```

**HTML do Loader:**
```html
<div class="loader-container">
  <div class="loader-name">
    <span class="loader-first-name">Thiago</span>
    <span class="loader-dash"> - </span>
    <span class="loader-last-name">Diniz</span>
  </div>
</div>
```

---

### 4.2 — Cursor Customizado

**Tamanho base:** ~24-32px
**Estilo:** Dot/circle com borda ou preenchimento sólido

**Comportamento:**
- Segue o mouse com lerp suave (GSAP)
- **Estado normal:** dot pequeno
- **Hover em links/botões:** expande + muda cor (efeito magnético inspirado larevoltosa.es)
- **Hover em projetos:** expande grande + texto "Ver" dentro
- **Oculto em mobile** (touch devices)

**Animação:**
```javascript
// Tracking com lerp
gsap.ticker.add(() => {
  gsap.to(cursor, { x: mouseX, y: mouseY, duration: 0.5, ease: "power3.out" });
});

// Efeito magnético em botões
buttons.forEach(btn => {
  btn.addEventListener('mousemove', (e) => {
    const { left, top, width, height } = btn.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;
    gsap.to(btn, { x: x * 0.3, y: y * 0.3, duration: 0.3 });
  });
  btn.addEventListener('mouseleave', () => {
    gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" });
  });
});
```

---

### 4.3 — Seção 1: HERO (100vh) — Meia-Lua Inferior

**Altura:** 100vh (fullscreen)
**Fundo:** Preto puro `#050505` com estrelas CSS e meia-lua na parte inferior

**Conceito visual principal — A LUA DIVIDIDA:**
O hero mostra a **metade inferior de uma lua** (crescent/half moon) posicionada no fundo, cortada pela borda inferior da viewport. Ao scrollar para a seção 2, a **metade superior da mesma lua** aparece no topo daquela seção. Isso cria a ilusão de que a lua foi "dividida" entre as duas seções — uma continuidade visual impressionante.

A lua pode ser feita via:
- **CSS puro:** `radial-gradient` circular com borda sutil + `box-shadow` para glow
- **SVG:** Meia-lua como SVG com glow filter
- **Canvas/WebGL:** Para efeito mais realista com textura lunar (avançado)

**Referência visual:** Estilo dos wallpapers padrão do iPhone com lua/espaço — clean, minimalista, impactante.

**Layout:**

| Camada | Elemento |
|---|---|
| **Background** | Preto com partículas de estrelas (CSS ou canvas) |
| **Meia-Lua (inferior)** | Grande semicírculo no bottom center da viewport. Cor: gradiente de `#C0C0C8` (borda iluminada) para `#3A3A42` (face escura). Glow branco sutil ao redor |
| **Título principal** | "THIAGO DINIZ" — tipografia gigante (8-12vw, Syne 800), cor **branco puro** `#FFFFFF` — posicionado acima da lua |
| **Subtítulo** | "Desenvolvedor FullStack" — Syne 400, cor `#C0C0C8` (Moon Dust/prata) |
| **Microcopy** | "Java • React • Cloud" — pills com borda `--border-subtle` ou texto inline prata |
| **Scroll indicator** | Seta ou chevron branco animado no bottom, sobre ou logo acima da lua |

**HTML estrutural:**
```html
<section class="hero" data-theme="dark">
  <div class="stars-bg"></div>
  <div class="hero-content">
    <h1 class="hero-title">THIAGO DINIZ</h1>
    <p class="hero-subtitle">Desenvolvedor FullStack</p>
    <div class="hero-pills">
      <span class="pill">Java</span>
      <span class="pill">React</span>
      <span class="pill">Cloud</span>
    </div>
  </div>
  <div class="hero-moon">
    <!-- Meia-lua inferior: semicírculo com glow -->
  </div>
  <div class="scroll-indicator">
    <span class="scroll-text">scroll</span>
    <div class="scroll-arrow"></div>
  </div>
</section>
```

**CSS da Meia-Lua:**
```css
.hero-moon {
  position: absolute;
  bottom: -50%;            /* metade do círculo fica abaixo da viewport */
  left: 50%;
  transform: translateX(-50%);
  width: min(700px, 80vw);
  height: min(700px, 80vw);
  border-radius: 50%;
  background: radial-gradient(circle at 40% 35%,
    #D0D0D8 0%,           /* face iluminada — prata */
    #8A8A95 30%,           /* transição */
    #3A3A42 60%,           /* face escura */
    #1A1A22 100%           /* borda escura */
  );
  box-shadow:
    0 0 80px rgba(255, 255, 255, 0.08),   /* glow externo */
    0 0 200px rgba(255, 255, 255, 0.04),  /* halo amplo */
    inset 0 0 60px rgba(0, 0, 0, 0.3);    /* sombra interna */
  z-index: 0;
}
```

**Animações:**
- SplitText no nome "THIAGO DINIZ" — chars revelam com stagger (0.02s) após loader
- Subtítulo fade-in com delay (0.3s após o nome)
- Pills fade-in com stagger
- Lua: scale de 0.8 → 1 com ease suave ao carregar (sutil, quase imperceptível)
- Lua: parallax lento ao scrollar (move ligeiramente para baixo, criando depth)
- Estrelas de fundo: twinkle sutil (opacity pulsando em random)
- Scroll indicator: bounce loop infinito

---

### 4.4 — Seção 2: STATEMENT — Meia-Lua Superior + Transição Cósmica

**Altura:** ~150-200vh (tall section para parallax)
**Fundo:** Preto `#050505` → gradiente sutil para `#0A0A0F`

**Conceito visual — CONTINUIDADE DA LUA:**
No topo desta seção, a **metade superior da mesma lua** do hero aparece. Quando o usuário scrolla do hero para cá, as duas metades se "encontram" brevemente na transição entre seções, formando a lua completa por um instante — depois a metade do hero sai de vista e resta a metade superior aqui.

A partir desta meia-lua superior, o conteúdo abaixo começa a misturar **astrologia com tecnologia**: constelações formadas por ícones de tech, órbitas de elementos, estrelas como dots decorativos.

**CSS da Meia-Lua Superior:**
```css
.statement-moon {
  position: absolute;
  top: -50%;              /* metade do círculo fica ACIMA da seção */
  left: 50%;
  transform: translateX(-50%);
  width: min(700px, 80vw);  /* MESMO tamanho da lua do hero */
  height: min(700px, 80vw);
  border-radius: 50%;
  background: radial-gradient(circle at 40% 35%,
    #D0D0D8 0%, #8A8A95 30%, #3A3A42 60%, #1A1A22 100%
  );
  box-shadow:
    0 0 80px rgba(255, 255, 255, 0.08),
    0 0 200px rgba(255, 255, 255, 0.04),
    inset 0 0 60px rgba(0, 0, 0, 0.3);
  z-index: 0;
}
```

**Importante para o alinhamento:** As duas meias-luas (hero bottom + statement top) devem ter **exatamente o mesmo tamanho, cor e posição horizontal**. O efeito de "lua dividida" depende desse alinhamento pixel-perfect. Ambas usam `overflow: hidden` em suas respectivas seções.

**Conteúdo (abaixo da meia-lua):**

**Frase de impacto (opções com metáforas astrais sutis):**
- "**3+ anos** navegando entre sistemas, construindo **constelações** de código que **funcionam** e **escalam**"
- "Do **backend** robusto ao **frontend** que encanta — como dois lados da mesma **órbita**"
- "Cada projeto é um novo **universo**. Cada linha de código, uma nova **estrela**."

**Elementos visuais flutuantes (parallax):**
- Constelações de dots conectados por linhas finas (representando conexão entre tecnologias)
- Pequenos ícones de tech (Java, React, AWS) flutuando como planetas/satélites
- Partículas de estrelas no fundo
- Linhas orbitais sutis (arcos finos em prata com opacity baixa)

**Animações:**
- Meia-lua superior: parallax lento (move para cima enquanto user scrolla, "saindo de vista")
- SplitText reveal da frase principal (word-by-word)
- Palavras-chave em **branco puro** ou **prata brilhante** com glow sutil
- Constelações: dots aparecem em stagger + linhas draw-in conectando eles
- Ícones flutuantes: parallax em velocidades diferentes
- Possível: counter animation ("3+ anos", "X projetos")

---

### 4.5 — Seção 3: SOBRE MIM

**Altura:** ~100-150vh
**Fundo:** `--bg-secondary` (#0A0A0F) com estrelas sutis

**Layout (2 colunas em desktop):**

| Esquerda (40%) | Direita (60%) |
|---|---|
| Foto profissional ou ilustração com borda `--border-subtle` e glow lunar | Bio expandida em `--text-secondary` (prata) |
| | Formação: UEPB — Ciências da Computação |
| | Localização: Paraiba, Brasil |
| | Números em `--text-primary` (branco): "3+ anos", "2 empresas" |

**Animações:**
- Foto: reveal com clip-path circular (expand do centro — "como uma lua cheia emergindo")
- Bio: SplitText reveal (line-by-line)
- Números: counter animation (0 → valor final) em branco puro
- Separador: line reveal (width: 0 → 100%) em prata `--accent-primary`

---

### 4.6 — Seção 4: TECH STACK (Skills Interativas)

**Altura:** ~150-200vh
**Fundo:** `--bg-primary` (#050505) — seção com mais estrelas no fundo, como um "campo estelar denso"

Esta seção é o diferencial técnico do portfólio. Inspirada no Pin 05 (cards de skills), Pin 08 (grid de serviços) e na visualização interativa que impressiona visitantes.

**Layout: Grid de categorias com cards de tecnologias**

#### Categoria 1: Backend
```
Java 8+ | Spring Boot | Spring Data | Hibernate | JPA
Maven | JWT | OAuth2 | Node.js
```

#### Categoria 2: Frontend
```
React | Next.js | TypeScript | Angular 2+
HTML5 | CSS3 | JavaScript
```

#### Categoria 3: Banco de Dados
```
PostgreSQL | MySQL | MongoDB | Redis
```

#### Categoria 4: Cloud & DevOps
```
AWS EC2 | ECS | Lambda | S3 | RDS | SQS | SNS
API Gateway | CloudWatch | Docker
```

#### Categoria 5: Mensageria & Ferramentas
```
Kafka | RabbitMQ | SQS | Git | Scrum | Kanban
```

**Opções de visualização:**

| Tipo | Descrição | Referência |
|---|---|---|
| **Grid de pills/badges** | Cada tech é um pill com borda prata e ícone + nome. Glow no hover | Pin 05 |
| **Cards glassmorphism** | Cards por categoria com `glass-card` que expandem no hover | Pin 08 |
| **Orbiting circles** | Tecnologias orbitando um centro como planetas/satélites (GSAP circular) — **combina perfeito com tema astral** | Diferencial |
| **Horizontal scroll strip** | Stack de ícones em scroll horizontal por categoria | juanmora.co |
| **Bento grid** | Grid assimétrico com bordas `--border-subtle` e glow lunar no hover | Tendência 2025-26 |

**Animações:**
- Stagger entrance dos cards/pills ao scrollar (fade-up com delay entre eles)
- Hover: scale + glow/shadow + cor accent
- Marquee infinito com logos das tecnologias (GSAP ticker, inspirado larevoltosa.es)
- Possível: hover em cada tech mostra tooltip com nível de experiência
- Category headers com SplitText reveal

---

### 4.7 — Seção 5: EXPERIÊNCIA PROFISSIONAL

**Altura:** ~150-200vh
**Fundo:** `--bg-secondary` (#0A0A0F)

**Layout: Timeline vertical**

Inspirada no Pin 05 (timeline com datas e roles) e Pin 09 (resume section).

```
2024 ──── Lifters (Projeto Obabet)
  │       Desenvolvedor FullStack Pleno
  │       React, Next.js, Java, Spring, PostgreSQL
  │
2023 ──── MarjoSports
  │       Desenvolvedor FullStack Júnior
  │       Angular, Node.js, Python, AWS Lambda
  │
2023 ──── MarjoSports
          Estagiário de Desenvolvimento
          Testes, SQL, Git, suporte técnico
```

**Elementos por item da timeline:**
- Ano/período (tipografia bold, cor accent)
- Nome da empresa (heading médio)
- Cargo (subtítulo)
- Descrição curta (1-2 linhas)
- Pills com tecnologias usadas
- Linha conectora animada entre os items

**Animações:**
- Linha da timeline: draw animation de cima para baixo (conforme scroll)
- Cards: slide-in alternado (esquerda/direita) com ScrollTrigger
- Ano: counter ou fade-in
- Pills de tech: stagger entrance
- Dots na timeline: scale-in ao chegar no ponto

---

### 4.8 — Seção 6: PROJETOS (Portfolio)

**Altura:** ~150-200vh
**Fundo:** `--bg-primary` (#050505) com estrelas sutis

**Nota:** O Thiago vai criar projetos especificamente para o portfólio. Esta seção deve ser projetada para receber de 3 a 6 projetos inicialmente, com estrutura escalável.

**Layout: Grid de projetos (2 colunas desktop)**

Inspirado no Pin 13 (grid 2x2 com hover reveal) e juanmora.co (strips de imagens).

**Cada card de projeto contém:**

| Elemento | Detalhe |
|---|---|
| **Thumbnail** | Screenshot ou mockup do projeto (imagem 16:9 ou 4:3) |
| **Nome** | Título do projeto |
| **Tipo** | "Aplicação Web", "API REST", "Landing Page", etc. |
| **Stack** | Pills com tecnologias usadas |
| **Link** | Botão → live demo ou GitHub |
| **Overlay hover** | Ao hover, escurece + mostra info + cursor "Ver projeto" |

**Sugestões de projetos para criar:**

| # | Projeto Sugerido | Stack | Tipo |
|---|---|---|---|
| 1 | **Dashboard Financeiro** | React + Spring Boot + PostgreSQL + Chart.js | FullStack App |
| 2 | **API REST com documentação** | Java + Spring + Swagger/OpenAPI + Docker | Backend |
| 3 | **E-commerce Frontend** | Next.js + TypeScript + Tailwind + Stripe | Frontend |
| 4 | **Chat Realtime** | React + Node.js + WebSocket + Redis | FullStack |
| 5 | **Landing Page Animada** | HTML + CSS + GSAP + Lenis (este próprio portfólio!) | Frontend/Creative |
| 6 | **Microserviço com Mensageria** | Spring Boot + Kafka + SQS + Docker | Backend/Cloud |

**Animações:**
- Cards: stagger entrance diagonal (GSAP stagger com grid)
- Hover: scale sutil (1.02-1.05) + overlay fade-in + texto reveal
- GSAP Flip: ao clicar, card expande para modal/detalhe fluido (inspirado kvs.services)
- Cursor: expande com texto "Ver" ao hover nos cards
- Possível: horizontal scroll strip como alternativa ao grid (juanmora.co style)

---

### 4.9 — Seção 7: CTA / CONTATO

**Altura:** ~100vh
**Fundo:** `--bg-secondary` (#0A0A0F) com um glow lunar central sutil (radial-gradient branco a 3-5% opacity no centro)

**Conteúdo:**

| Elemento | Texto |
|---|---|
| **Headline** | "Vamos construir algo juntos?" |
| **Subtítulo** | "Estou disponível para novos desafios e oportunidades." |
| **Botão principal** | "Fale comigo" → mailto. Borda prata, fundo transparente, hover: fundo branco + texto preto |
| **Botão secundário** | "Copiar email" → clipboard. Estilo ghost (só borda sutil) |
| **Links** | LinkedIn, GitHub, Email — ícones prata com hover branco |

**Animações:**
- SplitText reveal na headline (branco puro)
- Botões: slide-up com stagger
- Hover nos botões: efeito magnético + fill transition (borda → preenchido)
- Glow central: pulsa suavemente (opacity 3% ↔ 6%, loop lento)

---

### 4.10 — Footer

**Altura:** 100vh
**Fundo:** `--bg-primary` (#050505)

**Conceito visual:** O footer é dominado pela **ilustração do Thiago** (cartoon do dev com headphones no laptop, estilo lo-fi/anime escuro). A ilustração ocupa boa parte do fundo do footer (como o footer do juanmora.co com o cartoon do Juan). O nome gigante sobrepõe a ilustração.

**Arquivo da ilustração:** Imagem fornecida pelo Thiago (dev com headphones, laptop com `</>`, livros "Design Systems" e "Clean Code", caneca "focus >fuel", quadro "SHIP BUILD REPEAT", código no fundo).

**Conteúdo:**

| Elemento | Detalhe |
|---|---|
| **Ilustração** | Background do footer — a imagem do dev (fornecida). Posicionada centralizada com overlay escuro sutil no topo (para legibilidade do texto) |
| **Nome** | "THIAGO DINIZ" em tipografia gigante (mesmo estilo do hero — branco, Syne 800, 8-12vw). Sobreposto à ilustração |
| **Subtítulo esq.** | "Desenvolvedor FullStack — 2026" |
| **Subtítulo dir.** | "Feito com: GSAP, Lenis" |
| **Links sociais** | LinkedIn, GitHub, Email — ícones brancos |
| **Copyright** | "(C) 2026 Thiago Diniz" — texto small, prata |

**HTML:**
```html
<footer class="footer" data-theme="dark">
  <div class="footer-illustration">
    <img src="assets/images/thiago-illustration.png" alt="Ilustração Thiago Diniz" />
    <div class="footer-overlay"></div> <!-- gradiente escuro no topo para legibilidade -->
  </div>
  <div class="footer-content">
    <h2 class="footer-name">THIAGO DINIZ</h2>
    <div class="footer-info">
      <span>Desenvolvedor FullStack — 2026</span>
      <span>Feito com: GSAP, Lenis</span>
    </div>
    <div class="footer-social">
      <!-- LinkedIn, GitHub, Email icons -->
    </div>
    <p class="footer-copyright">&copy; 2026 Thiago Diniz</p>
  </div>
</footer>
```

**CSS:**
```css
.footer {
  position: relative;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: flex-end;    /* conteúdo alinhado ao bottom */
  justify-content: center;
}

.footer-illustration {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.footer-illustration img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;  /* foco no personagem */
}

.footer-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(5, 5, 5, 0.8) 0%,       /* escuro no topo — legibilidade */
    rgba(5, 5, 5, 0.2) 40%,      /* transparente no meio — ver ilustração */
    rgba(5, 5, 5, 0.6) 100%      /* escuro embaixo — texto do copyright */
  );
}

.footer-content {
  position: relative;
  z-index: 1;
  text-align: center;
  padding-bottom: 3rem;
}
```

**Animações:**
- Nome: SplitText reveal (fecha o ciclo visual com o hero)
- Ilustração: parallax sutil (move ~10% mais lento que o scroll)
- Links: hover com glow branco
- Possível: estrelas piscando no fundo escuro acima da ilustração

---

## 5. Paleta de Cores — Preto, Branco e Prata (Lunar)

A paleta é monocromática com tons metálicos. Sem cores quentes. A ideia é evocar o espaço sideral: preto profundo do vácuo, branco da luz estelar, prata da superfície lunar.

### 5.1 Paleta Principal

| Token CSS | Nome | Hex | Uso |
|---|---|---|---|
| `--bg-primary` | Void Black | `#050505` | Fundo principal — preto do espaço profundo |
| `--bg-secondary` | Deep Space | `#0A0A0F` | Fundo alternado — preto com micro tom azulado |
| `--bg-tertiary` | Lunar Dark | `#141419` | Cards, containers, elevação |
| `--bg-card` | Nebula | `#1A1A22` | Cards com hover, surfaces elevadas |
| `--text-primary` | Starlight | `#FFFFFF` | Texto principal — branco puro |
| `--text-secondary` | Moon Dust | `#C0C0C8` | Texto secundário — prata claro |
| `--text-muted` | Asteroid | `#6B6B78` | Texto terciário, metadata, labels |
| `--accent-primary` | Silver | `#D0D0D8` | Títulos destaque, bordas ativas, hover |
| `--accent-glow` | Moonlight | `rgba(255, 255, 255, 0.08)` | Glow effects, halos lunares |
| `--accent-shine` | Chrome | `#E8E8F0` | Highlights, ícones ativos, shine effects |
| `--border-subtle` | Cosmos Edge | `rgba(255, 255, 255, 0.06)` | Bordas sutis de cards e containers |
| `--border-active` | Star Line | `rgba(255, 255, 255, 0.15)` | Bordas em hover, linhas ativas |

### 5.2 CSS Custom Properties

```css
:root {
  /* Backgrounds — escala do preto */
  --bg-primary: #050505;
  --bg-secondary: #0A0A0F;
  --bg-tertiary: #141419;
  --bg-card: #1A1A22;

  /* Texto — escala do branco ao cinza */
  --text-primary: #FFFFFF;
  --text-secondary: #C0C0C8;
  --text-muted: #6B6B78;

  /* Accents — prata e brilho */
  --accent-primary: #D0D0D8;
  --accent-glow: rgba(255, 255, 255, 0.08);
  --accent-shine: #E8E8F0;

  /* Bordas */
  --border-subtle: rgba(255, 255, 255, 0.06);
  --border-active: rgba(255, 255, 255, 0.15);

  /* Gradientes temáticos */
  --gradient-moon: radial-gradient(ellipse at 50% 100%, rgba(200, 200, 215, 0.15) 0%, transparent 60%);
  --gradient-stars: radial-gradient(1px 1px at random, rgba(255,255,255,0.4) 0%, transparent 100%);
  --gradient-void: linear-gradient(180deg, #050505 0%, #0A0A0F 50%, #050505 100%);

  /* Transições */
  --transition-fast: 0.2s ease;
  --transition-smooth: 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  --transition-slow: 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}
```

### 5.3 Efeitos Visuais Lunares

```css
/* Glow lunar — usar em elementos de destaque */
.moon-glow {
  box-shadow: 0 0 60px rgba(255, 255, 255, 0.05),
              0 0 120px rgba(255, 255, 255, 0.02);
}

/* Borda glassmorphism lunar */
.glass-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(12px);
}

/* Estrelas de fundo via CSS (partículas estáticas) */
.stars-bg {
  background-image:
    radial-gradient(1px 1px at 10% 20%, rgba(255,255,255,0.3), transparent),
    radial-gradient(1px 1px at 40% 70%, rgba(255,255,255,0.2), transparent),
    radial-gradient(1.5px 1.5px at 70% 30%, rgba(255,255,255,0.4), transparent),
    radial-gradient(1px 1px at 90% 80%, rgba(255,255,255,0.2), transparent);
  /* Repetir com muitos mais pontos para efeito denso */
}
```

---

## 6. Tipografia

### 6.1 Recomendação de Fontes (Gratuitas — Google Fonts)

| Uso | Fonte Recomendada | Alternativa | Peso |
|---|---|---|---|
| **Display / Hero** | **Syne** | Clash Display (Fontshare) | 700-800 (Bold/ExtraBold) |
| **Headings** | **Syne** | Space Grotesk | 600-700 |
| **Body** | **Inter** | DM Sans | 400-500 |
| **Mono / Code** | **JetBrains Mono** | Fira Code | 400 |

### 6.2 Escala Tipográfica

```css
/* Display — hero name */
.text-display { font-size: clamp(3rem, 10vw, 8rem); font-weight: 800; line-height: 0.95; }

/* H1 — section titles */
.text-h1 { font-size: clamp(2rem, 5vw, 4rem); font-weight: 700; line-height: 1.1; }

/* H2 — subtitles */
.text-h2 { font-size: clamp(1.5rem, 3vw, 2.5rem); font-weight: 600; line-height: 1.2; }

/* H3 — card titles */
.text-h3 { font-size: clamp(1.1rem, 1.5vw, 1.5rem); font-weight: 600; line-height: 1.3; }

/* Body */
.text-body { font-size: clamp(0.95rem, 1vw, 1.1rem); font-weight: 400; line-height: 1.6; }

/* Small / Meta */
.text-small { font-size: 0.85rem; font-weight: 400; line-height: 1.5; }

/* Mono */
.text-mono { font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; }
```

---

## 7. Sistema de Animações — Implementação Completa

> Todo o sistema de animação é baseado em GSAP 3.15+ (agora 100% gratuito incluindo plugins premium).

### 7.1 Smooth Scroll (Lenis + GSAP)

```javascript
import Lenis from 'lenis';

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smooth: true,
  smoothTouch: false,
});

// Sincronizar com GSAP ScrollTrigger
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);
```

### 7.2 Text Reveal (SplitText + ScrollTrigger)

```javascript
// Padrão para títulos — chars com stagger
function revealText(selector, trigger) {
  const split = new SplitText(selector, { type: "chars,words,lines" });

  gsap.from(split.chars, {
    y: "115%",
    opacity: 0,
    stagger: 0.02,
    duration: 0.8,
    ease: CustomEase.create("textReveal", "M0,0 C0.126,0.382 0.282,0.674 0.44,0.822 0.632,1.002 0.818,1.001 1,1"),
    scrollTrigger: {
      trigger: trigger || selector,
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });
}

// Uso
revealText(".hero-title");
revealText(".statement-text", ".section-statement");
```

### 7.3 Parallax Elements (ScrollTrigger Scrub)

```javascript
// Elementos com velocidades diferentes
gsap.utils.toArray("[data-parallax]").forEach(el => {
  const speed = el.dataset.parallax || -100;
  gsap.to(el, {
    y: speed,
    ease: "none",
    scrollTrigger: {
      trigger: el.closest("section"),
      start: "top bottom",
      end: "bottom top",
      scrub: true
    }
  });
});
```

### 7.4 Stagger Entrance (Cards, Pills, Items)

```javascript
// Cards de projeto em grid
gsap.from(".project-card", {
  y: 60,
  opacity: 0,
  stagger: {
    amount: 0.6,
    grid: [2, 3],    // 2 rows, 3 cols
    from: "start"
  },
  duration: 0.8,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".projects-grid",
    start: "top 70%"
  }
});
```

### 7.5 Timeline Draw Animation (Experiência)

```javascript
// Linha da timeline cresce conforme scroll
gsap.from(".timeline-line", {
  scaleY: 0,
  transformOrigin: "top center",
  ease: "none",
  scrollTrigger: {
    trigger: ".section-experience",
    start: "top 60%",
    end: "bottom 80%",
    scrub: 1
  }
});

// Cards alternam esquerda/direita
gsap.utils.toArray(".timeline-item").forEach((item, i) => {
  gsap.from(item, {
    x: i % 2 === 0 ? -80 : 80,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: item,
      start: "top 80%"
    }
  });
});
```

### 7.6 Marquee Infinito (Tech Logos)

```javascript
// Loop horizontal infinito com GSAP
function createMarquee(selector, speed = 50) {
  const marquee = document.querySelector(selector);
  const content = marquee.querySelector(".marquee-content");

  // Duplicar conteúdo para loop seamless
  content.innerHTML += content.innerHTML;

  const totalWidth = content.scrollWidth / 2;

  gsap.to(content, {
    x: -totalWidth,
    duration: totalWidth / speed,
    ease: "none",
    repeat: -1,
    modifiers: {
      x: gsap.utils.unitize(x => parseFloat(x) % totalWidth)
    }
  });
}

createMarquee(".tech-marquee");
```

### 7.7 Custom Cursor com Efeito Magnético

```javascript
const cursor = document.querySelector('.cursor');
const cursorDot = document.querySelector('.cursor-dot');
let mouseX = 0, mouseY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Tracking suave com GSAP ticker
gsap.ticker.add(() => {
  gsap.to(cursor, { x: mouseX, y: mouseY, duration: 0.5, ease: "power3.out" });
  gsap.to(cursorDot, { x: mouseX, y: mouseY, duration: 0.1 });
});

// Efeito magnético em botões/links
document.querySelectorAll('[data-magnetic]').forEach(btn => {
  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(btn, { x: x * 0.3, y: y * 0.3, duration: 0.3 });
    gsap.to(cursor, { scale: 2.5, duration: 0.3 });
  });

  btn.addEventListener('mouseleave', () => {
    gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.3)" });
    gsap.to(cursor, { scale: 1, duration: 0.3 });
  });
});
```

### 7.8 Navbar Theme Switch

```javascript
// Cada seção define seu tema via data-attribute
// <section data-theme="dark"> ou <section data-theme="light">
gsap.utils.toArray("section[data-theme]").forEach(section => {
  ScrollTrigger.create({
    trigger: section,
    start: "top 50px",     // quando topo da seção chega na navbar
    end: "bottom 50px",
    onEnter: () => setNavTheme(section.dataset.theme),
    onEnterBack: () => setNavTheme(section.dataset.theme)
  });
});

function setNavTheme(theme) {
  const nav = document.querySelector('.navbar');
  nav.classList.remove('navbar--light', 'navbar--dark');
  nav.classList.add(`navbar--${theme}`);
}
```

### 7.9 Counter Animation

```javascript
// Números que contam de 0 ao valor final
gsap.utils.toArray("[data-count]").forEach(el => {
  const target = parseInt(el.dataset.count);
  const obj = { value: 0 };

  gsap.to(obj, {
    value: target,
    duration: 2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: el,
      start: "top 80%",
      toggleActions: "play none none none"
    },
    onUpdate: () => {
      el.textContent = Math.round(obj.value) + (el.dataset.suffix || "");
    }
  });
});

// Uso: <span data-count="3" data-suffix="+">0</span>
```

### 7.10 Image/Card Reveal com Clip-Path

```javascript
// Reveal diagonal
gsap.from(".reveal-image", {
  clipPath: "inset(0 100% 0 0)",    // escondido pela direita
  duration: 1.2,
  ease: "power4.inOut",
  scrollTrigger: {
    trigger: ".reveal-image",
    start: "top 75%"
  }
});
```

### 7.11 GSAP Flip para Modal de Projeto

```javascript
// Ao clicar num card de projeto, ele "voa" para ocupar a tela
function openProject(card) {
  const state = Flip.getState(card);

  card.classList.add("project--expanded");
  document.body.classList.add("has-overlay");

  Flip.from(state, {
    duration: 0.8,
    ease: "power3.inOut",
    absolute: true,
    onComplete: () => loadProjectDetails(card)
  });
}
```

### 7.12 Reduced Motion Support

```javascript
// Check global — respeitar preferência do usuário
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (prefersReducedMotion) {
  // Desabilitar smooth scroll
  lenis.destroy();
  // Simplificar todas as animações
  gsap.globalTimeline.timeScale(10); // acelerar tudo
  // Ou desabilitar ScrollTrigger scrub
  ScrollTrigger.defaults({ scrub: false });
}
```

---

## 8. Stack Tecnológico Final

### 8.1 GSAP — 100% Gratuito (Webflow adquiriu)

Todos os plugins premium agora são gratuitos para uso comercial:

| Plugin | Uso no Projeto |
|---|---|
| **GSAP Core** | Motor de animação base |
| **ScrollTrigger** | Animações vinculadas ao scroll |
| **SplitText** | Text reveals (chars, words, lines) |
| **CustomEase** | Curvas de easing personalizadas |
| **Flip** | Transições de layout (card → modal) |
| **ScrollSmoother** | Alternativa ao Lenis (opcional) |
| **Observer** | Gestos avançados e scroll detection |
| **DrawSVGPlugin** | Stroke animation em SVGs (loader, ícones) |
| **MorphSVGPlugin** | Morphing de formas SVG |
| **MotionPathPlugin** | Animação ao longo de paths |

### 8.2 Stack Completa

```
Framework:        HTML/CSS/JS puro OU Astro (recomendado por performance)
Animação:         GSAP 3.15+ (core + todos plugins)
Smooth Scroll:    Lenis 1.3+
3D/WebGL:         OGL (leve, ~25kb) — para efeitos visuais pontuais
Vetorial:         lottie-web (opcional, para micro-animações)
Build:            Vite (se usar Astro ou framework)
Deploy:           Vercel / Netlify / GitHub Pages
```

### 8.3 CDN Links

```html
<!-- GSAP Core + Plugins (todos gratuitos) -->
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/ScrollTrigger.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/SplitText.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/CustomEase.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/Flip.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/Observer.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/DrawSVGPlugin.min.js"></script>

<!-- Smooth Scroll -->
<script src="https://cdn.jsdelivr.net/npm/lenis@1.3.17/dist/lenis.min.js"></script>

<!-- Fonts (Google Fonts) -->
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400&display=swap" rel="stylesheet">
```

---

## 9. Catálogo de Animações — Prioridade de Implementação

### Nível 1: Essenciais (implementar primeiro)

| # | Animação | Seção | Complexidade |
|---|---|---|---|
| A1 | Smooth scroll (Lenis) | Global | Baixa |
| A2 | SplitText reveals nos títulos | Hero, Statement, CTA | Média |
| A3 | Loader de entrada | Loader | Média |
| A4 | Stagger entrance (cards, pills) | Tech Stack, Projetos | Baixa |
| A5 | ScrollTrigger fade-in | Todas as seções | Baixa |
| A6 | Navbar theme switch | Navbar | Baixa |
| A7 | Counter animation | Statement, Sobre | Baixa |

### Nível 2: Impacto Visual (wow factor)

| # | Animação | Seção | Complexidade |
|---|---|---|---|
| B1 | Custom cursor + magnético | Global | Média |
| B2 | Parallax de elementos visuais | Statement | Média |
| B3 | Timeline draw animation | Experiência | Média |
| B4 | Marquee infinito (tech logos) | Tech Stack | Baixa |
| B5 | Image reveal com clip-path | Projetos, Sobre | Média |
| B6 | GSAP Flip (card → modal) | Projetos | Alta |

### Nível 3: Polish Avançado

| # | Animação | Seção | Complexidade |
|---|---|---|---|
| C1 | WebGL image distortion (OGL) | Projetos (hover) | Alta |
| C2 | 3D floating elements | Statement | Alta |
| C3 | Scroll-linked video | Possível na hero | Alta |
| C4 | Reduced motion support | Global | Baixa |
| C5 | Section number indicators | Global | Baixa |
| C6 | Gradient animation (hue shift) | CTA | Baixa |

---

## 10. Workplan — Fases de Implementação

### Fase 1: Setup + Estrutura HTML (Dias 1-2)
- [ ] Iniciar projeto (Astro + Vite ou HTML puro)
- [ ] Configurar GSAP 3.15 com todos os plugins
- [ ] Configurar Lenis
- [ ] Criar HTML semântico com as 8 seções + navbar + loader + cursor
- [ ] CSS base: custom properties (cores, tipografia, spacing)
- [ ] Google Fonts: Syne + Inter + JetBrains Mono
- [ ] Breakpoints responsivos definidos

### Fase 2: Layout Estático + Dark Theme (Dias 3-5)
- [ ] Hero: nome gigante + subtítulo + CTA + scroll indicator
- [ ] Statement: frase impacto + espaço para 3D
- [ ] Sobre Mim: 2 colunas (foto + bio) + counters
- [ ] Tech Stack: grid de categorias com pills/cards
- [ ] Experiência: timeline vertical com 3 entradas
- [ ] Projetos: grid 2x2 (placeholder para projetos futuros)
- [ ] CTA/Contato: headline + botões + links
- [ ] Footer: nome gigante + créditos + sociais

### Fase 3: Smooth Scroll + Base Animations (Dias 6-7)
- [ ] Integrar Lenis com ScrollTrigger
- [ ] Loader de entrada (GSAP timeline)
- [ ] SplitText em todos os títulos principais
- [ ] ScrollTrigger fade-in em todas as seções
- [ ] Navbar theme switch
- [ ] Reduced motion check global

### Fase 4: Animações de Impacto (Dias 8-10)
- [ ] Custom cursor com tracking suave
- [ ] Efeito magnético em botões/links
- [ ] Parallax nos elementos visuais do statement
- [ ] Timeline draw animation (experiência)
- [ ] Stagger entrance nos cards de tech e projetos
- [ ] Counter animations
- [ ] Marquee infinito na tech stack

### Fase 5: Polish + WebGL (Dias 11-13)
- [ ] Image reveal com clip-path
- [ ] GSAP Flip para modal de projetos
- [ ] WebGL image distortion no hover (OGL — opcional)
- [ ] 3D floating elements no statement (OGL/Three.js — opcional)
- [ ] Hover effects refinados em todos os interativos
- [ ] Copy email functionality
- [ ] Scroll indicator animation

### Fase 6: Conteúdo + Projetos (Dias 14-16)
- [ ] Criar e adicionar os projetos ao portfólio
- [ ] Screenshots/mockups dos projetos
- [ ] Foto profissional para seção Sobre
- [ ] Ícones das tecnologias (SVG)
- [ ] Textos finais revisados
- [ ] Meta tags (SEO, OpenGraph, Twitter Card)

### Fase 7: Responsividade + QA (Dias 17-19)
- [ ] Breakpoints mobile (< 768px) e tablet (768-1024px)
- [ ] Menu hamburger com animação
- [ ] Ajustar tipografia responsiva (clamp)
- [ ] Desabilitar cursor custom em touch
- [ ] Simplificar/desabilitar WebGL em mobile
- [ ] Lazy loading de imagens
- [ ] GSAP: `will-change` só durante animação
- [ ] Testes: Chrome, Safari, Firefox, Edge
- [ ] Lighthouse: target > 90 Performance
- [ ] Deploy em Vercel/Netlify

---

## 11. Referências Consolidadas

### Sites Analisados

| Site | O que extrair |
|---|---|
| **juanmora.co** | Estrutura de seções, SplitText, parallax, horizontal scroll, cursor custom, navbar adaptativa |
| **sidewave.it** | Conceito imersivo (aplicar versão leve com OGL) |
| **thorgal.com** | Web Components para animações, reduced motion, Astro como framework |
| **kvs.services** | GSAP Flip, OGL leve, ScrollSmoother, Vue + GSAP integration |
| **larevoltosa.es** | Cursor magnético, marquee infinito, Barba.js, color themes por seção, OGL shaders |

### Pinterest — Padrões Aplicados

| Padrão | Pins | Como aplicar |
|---|---|---|
| Dark mode premium | 11/14 pins | Fundo `#0D0D0D` como base |
| Tipografia oversized | Todos | Nome "THIAGO DINIZ" em 8-12vw |
| Foto pessoal no hero | 6+ pins | Foto ou visual no hero/sobre |
| Cards com borda sutil | Pin 04, 05, 08 | Glassmorphism nos cards de tech/projeto |
| Logo strip / marquee | Pin 13 | Marquee de logos de tech no Tech Stack |
| Numeração de seções | Pin 11, 14 | ".01", ".02" como indicadores laterais |
| Grid de projetos + hover | Pin 13 | Grid 2x2 com overlay reveal |
| Timeline vertical | Pin 05, 09 | Seção de experiência |
| Earth tones | Pin 10 | Paleta Smoky Black → Bone → Floral White |
