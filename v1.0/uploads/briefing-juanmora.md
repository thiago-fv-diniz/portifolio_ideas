# Briefing de Referência — juanmora.co

> Documento para recriação do site portfolio de Juan Mora.
> Análise completa de estrutura, seções, animações e tecnologias.
> Data da análise: Maio 2026

---

## 1. Visão Geral

**URL:** https://juanmora.co/
**Tipo:** Portfólio pessoal — Freelance Design Director
**Páginas:** 4 (Home `/`, About `/about.html`, Work `/work.html`, Easter Egg `/dontscrolldown/`)
**Altura total da homepage:** ~13.775px
**Viewport base:** 100vh = 873px

---

## 2. Stack Tecnológico

| Tecnologia | Versão / CDN | Função |
|---|---|---|
| **Webflow** | CMS + Hosting | Plataforma no-code de build e deploy |
| **GSAP** | 3.15.0 | Motor principal de animações |
| **GSAP ScrollTrigger** | 3.15.0 | Animações vinculadas ao scroll |
| **GSAP SplitText** | 3.15.0 | Divide texto em chars/words para animação |
| **GSAP CustomEase** | 3.14.1 | Curvas de easing personalizadas |
| **Lenis** | 1.3.17 | Smooth scroll com inércia |
| **Lottie (AE)** | Webflow nativo | 4 animações vetoriais no site |
| **Unicorn Studio** | 2.1.6 | Efeitos visuais / 3D interativos |
| **jQuery** | 3.5.1 | Dependência nativa do Webflow |
| **Google Analytics** | G-CPH7PYBDWJ | Tracking |

### CDNs utilizados

```
https://cdn.prod.website-files.com/gsap/3.15.0/gsap.min.js
https://cdn.prod.website-files.com/gsap/3.15.0/SplitText.min.js
https://cdn.prod.website-files.com/gsap/3.15.0/ScrollTrigger.min.js
https://cdn.jsdelivr.net/npm/lenis@1.3.17/dist/lenis.min.js
https://cdn.jsdelivr.net/npm/gsap@3.14.1/dist/CustomEase.min.js
https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.6/dist/unicornStudio.umd.js
```

---

## 3. Paleta de Cores

| Nome | Hex aproximado | Uso |
|---|---|---|
| Peach / Salmão | `#E8A87C` | Títulos, destaques, CTAs, nome principal |
| Cream / Off-white | `#FFF5ED` | Fundos das seções claras |
| Dark Brown | `#2D2420` | Textos corpo, overlays escuros |
| Gray | `#8A8A8A` | Textos secundários, descrições |
| Azul Índigo | `#3B5BDB` | Accent — dots, card CTA Work, ícone logo |
| Branco | `#FFFFFF` | Textos sobre fundos escuros |

**Gradientes:** Seções claras usam gradiente warm de peach → cream. Seções escuras usam overlay brown com transparência sobre fotos.

---

## 4. Tipografia

- **Títulos (display):** Fonte sans-serif geométrica/arredondada, peso bold. Tamanhos extremamente grandes (8–12vw nos títulos hero).
- **Subtítulos:** Mesma família, peso regular, itálico para subtítulos do hero.
- **Corpo:** Sans-serif neutra, tamanho ~16px, cor cinza.
- **Fontes carregadas via Webflow** (custom fonts hospedados no CSS do tema `juan-portfolio-2026.webflow.css`).

---

## 5. Estrutura HTML da Homepage

```
<body>
  <ul class="nav-menu-mobile">        <!-- Menu mobile (hidden desktop) -->
  <div class="container-2">           <!-- NAVBAR FIXA (79px) -->
  <main class="main">                 <!-- CONTEÚDO PRINCIPAL (13.775px) -->
    ├── div.container-loader           <!-- Loader de entrada (h:0 após load) -->
    ├── div.cursor-jm                  <!-- Cursor customizado (29px) -->
    ├── div.top-glow                   <!-- Glow superior do hero (873px) -->
    ├── div.wrapper-hero               <!-- SEÇÃO 1: HERO (873px) -->
    ├── section.section                <!-- SEÇÃO 2: STATEMENT + 3D (2246px) -->
    ├── section.section                <!-- SEÇÃO 3: SERVIÇOS (3501px) -->
    ├── section.section                <!-- SEÇÃO 4: CTA WORK (1210px) -->
    ├── section.section                <!-- SEÇÃO 5: VALUE PROPOSITION (3853px) -->
    ├── section.section                <!-- SEÇÃO 6: CTA FINAL (1219px) -->
    └── section.section.footer         <!-- FOOTER (873px) -->
  </main>
</body>
```

---

## 6. Mapeamento Detalhado das Seções

### 6.0 — Navbar (Fixa)

**Classe:** `.container-2`
**Altura:** 79px | **Posição:** Fixed top

**Layout (3 colunas):**

| Esquerda | Centro | Direita |
|---|---|---|
| Logo "Juan • Mora" (texto com dot laranja) | Links "About" + ícone logo (3 barras azuis) + "Work" em pills semi-transparentes | Email, in, x, Be (links sociais) |

**Comportamento:**
- Sticky/fixed durante todo o scroll
- As pills do centro mudam de estilo (light/dark) conforme a seção visível — claro nas seções escuras, escuro nas seções claras
- Transição suave de cores via ScrollTrigger

---

### 6.1 — Loader de Entrada

**Classe:** `.container-loader`
**Estado após load:** height: 0 (oculto)

Preloader que exibe animação de entrada antes do conteúdo. Provavelmente mostra o logo ou nome com animação de reveal e depois faz fade-out.

---

### 6.2 — Cursor Customizado

**Classe:** `.cursor-jm`
**Tamanho:** 29px

- Substitui o cursor nativo por um dot/circle customizado
- Segue o mouse com `gsap.to()` usando lerp suave
- Muda de tamanho/estilo no hover sobre elementos interativos

---

### 6.3 — Seção 1: Hero (Full-screen)

**Classe:** `.wrapper-hero`
**Altura:** 873px (100vh)
**Filhos:** `.img-hero-wrapper` + `.wrapper-hero-home`

**Conteúdo:**

| Elemento | Detalhe |
|---|---|
| **Background** | Foto do designer (headphones, trabalhando) como full-bleed, com overlay warm |
| **Glow** | `.top-glow` — gradiente quente no topo (873px, camada separada) |
| **Título** | "Juan" [esquerda] + imagem flutuante [centro] + "Mora" [direita] — tipografia gigante peach/salmão |
| **Imagem central** | Foto de mãos desenhando/sketching branding, posicionada entre "Juan" e "Mora" |
| **Subtítulo esq.** | "Brand & Web Design Specialist" (itálico, peach) |
| **Subtítulo dir.** | "Freelance Design Director" (itálico, peach) |

**Animações:**
- SplitText nos títulos (reveal letra por letra ou palavra por palavra)
- Imagem central com parallax leve ao scrollar
- Glow é gradiente estático

---

### 6.4 — Seção 2: Statement + Formas 3D

**Classe:** `section` (1ª)
**Altura:** ~2246px
**Fundo:** Gradiente warm (peach → cream)

**Conteúdo:**

- **Frase de impacto:** "16 years making users **click** and **scroll** my designs"
  - Tipografia enorme, cinza escuro
  - "click" em peach com pill/badge arredondado (`.click-scroll-text` + `.click-scroll-height`)
  - "scroll" em peach com animação do texto
- **Microcopy:** "Who is a little curious?"
- **Formas 3D flutuantes:** Composição de formas orgânicas em tons peach/cinza/prata com dots azuis

**Elementos de parallax identificados (classes):**

```
.pill-scroll          → Forma pill/cápsula
.circle-left-scroll   → Esfera grande à esquerda
.hex-scroll           → Forma hexagonal
.circle-center-scroll → Esfera central (maior)
.circle-plus-scroll   → Esfera com ícone +
.square-scroll        → Quadrado com bordas arredondadas e ícone →
.ll-scroll            → Elemento scroll adicional
```

**Animações:**
- Formas 3D com GSAP ScrollTrigger (parallax em velocidades diferentes)
- Texto principal com SplitText reveal
- Possível uso de Unicorn Studio para renderizar as formas 3D

---

### 6.5 — Seção 3: Serviços

**Classe:** `section` (2ª)
**Altura:** ~3501px
**Estrutura:** `.service-headline-wrapper` + `.main-wrapper-services` (lista com 4 items)

**Headline:** "Design Expert — I help companies to succeed on **projects** like:"
(tipografia gigante, "projects" em peach, "like:" ainda mais claro)

**Padrão de cada serviço (`.service-wrapper`):**

```
.service-wrapper
  ├── .cont-text-service    → Título + descrição (centralizado)
  └── .cont-imgs-service    → Strip horizontal de imagens de projetos
```

#### Serviço 1: Websites & Landing Pages
- **Título:** "Websites & Landing pages" (peach + cinza)
- **Descrição:** "Creating high-end and beautiful websites built to perform and convert."
- **Imagens:** 3 thumbnails de projetos (Google, Ampli, Morable, etc.)
- **Scroll:** Imagens se movem da direita para a esquerda conforme scroll vertical

#### Serviço 2: Visual Branding
- **Título:** "Visual Branding" (peach + cinza)
- **Descrição:** "Helping brands find a distinctive visual language that truly stands out."
- **Imagens:** 3 thumbnails (Brudget, Strava Groups, etc.)
- **Scroll:** Imagens se movem da esquerda para a direita (direção alternada)

#### Serviço 3: Product Design Enhancement
- **Título:** "Product Design Enhancement" (peach + cinza)
- **Descrição:** "Bringing fresh ideas to turn complex products into intuitive experiences with an elevated visual layer."
- **Imagens:** 3 thumbnails (apps mobile, dashboards fintech)

#### Serviço 4: Webflow & Framer
- **Classe extra:** `.service-wrapper.webflow`
- **Título:** "Webflow & Framer" com ícones dos logos (Webflow azul + Framer azul) ao lado do texto em bounding boxes
- **Descrição:** "Building elegant and responsive projects featuring creative micro-interactions and seamless CMS hand-off."
- **Imagens:** 4 thumbnails de projetos

**Animação principal dos serviços:**
- Scroll-driven horizontal movement — imagens em `.cont-imgs-service` se movem horizontalmente via `GSAP ScrollTrigger scrub` enquanto o usuário scrolla verticalmente
- Direção alternada entre serviços (esquerda→direita, direita→esquerda)
- Títulos fazem fade-in ao entrar na viewport

---

### 6.6 — Seção 4: CTA Work / Portfolio

**Classe:** `section` (3ª) + `.work-cta-wrapper`
**Altura:** ~1210px

**Conteúdo:**
- **Background:** Texto gigante "Work" em letras enormes (peach, muito translúcido/faded)
- **Card central:** Retângulo azul/índigo (`.work-cta-content-wrapper`) com:
  - Ícone do logo (3 barras)
  - Botão "Portfolio" (link para `/work.html`)
- **Microcopy:** "Curious?... Check out my" (acima) + "Or keep scrolling" (abaixo)

---

### 6.7 — Seção 5: Value Proposition

**Classe:** `section` (4ª)
**Altura:** ~3853px (seção mais longa)
**Fundo:** Escuro — foto do designer com overlay dark brown

**Estrutura em 3 blocos:**

#### Bloco 1 — Statement
- "**Good design takes time**" — tipografia gigante peach sobre fundo escuro
- "**and working with me saves it**" — subtítulo abaixo

#### Bloco 2 — Diferenciais
- Headline: "Companies partner with me **because** of my"
- Subtítulo grande: "**perspective + sharp instincts**"
- Separador: Linha horizontal fina (dourada/peach)
- **4 checkmarks** (ícone ✓ azul) com benefícios:
  1. "I bring a premium and unique visual direction that makes your brand stand out."
  2. "I care about the craft, from concept to final product."
  3. "I define scalable design systems that keep your brand **consistent**."
  4. "I align your goals with my experience to make the right design decisions for your brand."

#### Bloco 3 — CTA
- Botão "Learn more about me" com ícone seta circular (→) — leva para `/about.html`

**Animações:**
- Textos revelam com SplitText ao scrollar
- Checkmarks aparecem sequencialmente com stagger
- Background foto tem parallax sutil
- Linhas separadoras animam largura (de 0 a 100%)

---

### 6.8 — Seção 6: CTA Final (Contact)

**Classe:** `section` (5ª)
**Altura:** ~1219px
**Fundo:** Peach sólido

**Conteúdo:**
- Card grande com borda arredondada (rounded rectangle, borda fina cinza)
- Texto: "**Let's build something people remember**"
- Subtítulo: "from global tech companies to growing startups."
- Botão: "**Let's talk**" (tipografia grande) com seta →
- Link para: `juan@morable.co`

---

### 6.9 — Footer

**Classe:** `.section.footer`
**Altura:** 873px (100vh)
**Fundo:** Escuro — ilustração digital

**Conteúdo:**

| Elemento | Detalhe |
|---|---|
| **Ilustração** | Artwork cartoon/3D do Juan Mora sentado em frente ao computador com headphones, iluminação ambiente quente |
| **Nome** | "Juan Mora" em tipografia gigante (mesmo estilo do hero) |
| **Crédito esq.** | "Freelance Design Director 2026" |
| **Crédito dir.** | "Morable Design Studio [Coming Soon]" |
| **Stack** | "Website made using: Figma, Webflow, GSAP, AE/Lottie, Lennis Scroll" (alinhado à direita) |
| **Links sociais** | Email, in, x, Be (mesmo da navbar) |

---

## 7. Sistema de Animações — Detalhamento Técnico

### 7.1 Smooth Scroll (Lenis)

```javascript
// Inicialização típica
const lenis = new Lenis({
  duration: 1.2,        // duração da inércia
  easing: (t) => ...,   // curva custom
  smooth: true,
  smoothTouch: false,
});

// Integração com GSAP
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);
```

**Efeito:** Substitui scroll nativo por scroll suave com inércia. Sensação de "flutuar".

### 7.2 Text Reveal (SplitText + ScrollTrigger)

```javascript
// Padrão típico para títulos
const split = new SplitText(".hero-title", { type: "chars,words" });

gsap.from(split.chars, {
  y: 100,
  opacity: 0,
  stagger: 0.02,
  duration: 0.8,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".hero-title",
    start: "top 80%",
    toggleActions: "play none none none"
  }
});
```

**Usado em:** Hero title, statement "16 years...", "Good design takes time", headlines de serviço.

### 7.3 Parallax das Formas 3D

```javascript
// Cada forma com velocidade diferente
gsap.to(".circle-center-scroll", {
  y: -200,
  ease: "none",
  scrollTrigger: {
    trigger: ".section-statement",
    start: "top bottom",
    end: "bottom top",
    scrub: true  // vincula ao scroll
  }
});
```

**Usado em:** Seção 2 — todas as formas `.xxx-scroll` movem em velocidades diferentes.

### 7.4 Horizontal Scroll dos Serviços

```javascript
// Strip de imagens se move horizontalmente com scroll vertical
gsap.to(".cont-imgs-service", {
  xPercent: -50,  // ou x: -(width - viewport)
  ease: "none",
  scrollTrigger: {
    trigger: ".service-wrapper",
    start: "top center",
    end: "bottom center",
    scrub: 1,
    pin: false
  }
});
```

**Usado em:** Cada bloco de serviço. Direção alternada (par: esq→dir, ímpar: dir→esq).

### 7.5 Fade-In Sequencial (Checkmarks)

```javascript
gsap.from(".check-item", {
  y: 30,
  opacity: 0,
  stagger: 0.15,
  duration: 0.6,
  scrollTrigger: {
    trigger: ".value-prop-section",
    start: "top 60%"
  }
});
```

### 7.6 Custom Cursor

```javascript
const cursor = document.querySelector('.cursor-jm');

document.addEventListener('mousemove', (e) => {
  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.3,
    ease: "power2.out"
  });
});

// Expand no hover
document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('mouseenter', () => gsap.to(cursor, { scale: 2, duration: 0.3 }));
  el.addEventListener('mouseleave', () => gsap.to(cursor, { scale: 1, duration: 0.3 }));
});
```

### 7.7 Navbar Adaptativa

```javascript
// Muda cores baseado na seção visível
ScrollTrigger.create({
  trigger: ".dark-section",
  start: "top center",
  end: "bottom center",
  onEnter: () => navbar.classList.add("is-light"),
  onLeaveBack: () => navbar.classList.remove("is-light")
});
```

### 7.8 Lottie Animations (4 instâncias)

- Criadas no After Effects, exportadas via Bodymovin como JSON
- Integradas via Webflow native Lottie player (`data-animation-type="lottie"`)
- Provavelmente usadas em: ícones animados, micro-interações, elementos decorativos

### 7.9 Loader de Entrada

```javascript
// Sequência típica
const tl = gsap.timeline();
tl.from(".loader-content", { opacity: 0, y: 20, duration: 0.5 })
  .to(".container-loader", { opacity: 0, duration: 0.3, delay: 0.5 })
  .set(".container-loader", { display: "none" });
```

---

## 8. Elementos Interativos Adicionais

| Elemento | Classe | Detalhe |
|---|---|---|
| **Webflow Interactions** | `[data-w-id]` × 5 | Hover states, menu mobile, transições |
| **Lottie Animations** | `[data-animation-type="lottie"]` × 4 | Micro-animações vetoriais |
| **Copy Email** | Botão no hero | "Copy my Email" — copia para clipboard |
| **Links sociais** | Header + Footer | Email, LinkedIn, X (Twitter), Behance |

---

## 9. Guia de Recriação — Workplan

### Fase 1: Setup e Estrutura (Dias 1-2)

- [ ] Escolher framework (Webflow, Next.js, Astro, ou HTML puro)
- [ ] Instalar dependências: GSAP (com ScrollTrigger, SplitText, CustomEase), Lenis
- [ ] Criar HTML semântico com todas as seções (hero → statement → serviços → CTA work → value prop → CTA final → footer)
- [ ] Definir CSS base: variáveis de cor, tipografia, resets
- [ ] Layout responsivo da navbar (3 colunas: logo | links | sociais)

### Fase 2: Layout Estático (Dias 3-4)

- [ ] Hero: foto fullscreen + overlay + tipografia gigante + imagem central
- [ ] Statement: texto grande + placeholder para formas 3D
- [ ] Serviços: 4 blocos com título/descrição centralizada + strips de imagens
- [ ] CTA Work: card azul sobre texto "Work" gigante
- [ ] Value Proposition: fundo escuro + texto + checkmarks
- [ ] CTA Final: card arredondado sobre fundo peach
- [ ] Footer: ilustração + nome gigante + créditos

### Fase 3: Smooth Scroll (Dia 5)

- [ ] Integrar Lenis com configuração de inércia
- [ ] Sincronizar Lenis com GSAP ScrollTrigger
- [ ] Testar suavidade em diferentes navegadores

### Fase 4: Animações de Texto (Dias 6-7)

- [ ] SplitText nos títulos do hero ("Juan Mora")
- [ ] SplitText no statement ("16 years...")
- [ ] SplitText nos títulos de serviço
- [ ] SplitText no value prop ("Good design takes time")
- [ ] Configurar CustomEase para curvas premium

### Fase 5: Scroll-Driven Animations (Dias 8-9)

- [ ] Parallax das formas 3D na seção statement
- [ ] Horizontal scroll das imagens nos serviços (direção alternada)
- [ ] Fade-in sequencial dos checkmarks
- [ ] Animação de largura das linhas separadoras
- [ ] Parallax sutil na foto de fundo do value prop

### Fase 6: Interações e Polish (Dias 10-11)

- [ ] Custom cursor com tracking suave + hover states
- [ ] Navbar adaptativa (light/dark conforme seção)
- [ ] Loader/preloader de entrada
- [ ] Lottie animations (4 instâncias)
- [ ] Hover effects em links e botões
- [ ] "Copy my Email" functionality

### Fase 7: Assets e Conteúdo (Dia 12)

- [ ] Formas 3D (Unicorn Studio, Spline, ou Three.js)
- [ ] Ilustração do footer (cartoon/3D)
- [ ] Imagens de projetos para os carrosséis
- [ ] Ícones (Webflow, Framer, social links)
- [ ] Animações Lottie (After Effects → Bodymovin)

### Fase 8: Responsividade e QA (Dias 13-14)

- [ ] Breakpoints mobile/tablet
- [ ] Menu mobile (hamburger → drawer)
- [ ] Ajustar tamanhos de tipografia para mobile
- [ ] Desabilitar cursor custom em touch devices
- [ ] Performance: lazy loading de imagens, otimizar GSAP
- [ ] Testes cross-browser (Chrome, Safari, Firefox)

---

## 10. Dependências NPM / CDN para Recriação

```json
{
  "dependencies": {
    "gsap": "^3.15.0",
    "lenis": "^1.3.17",
    "lottie-web": "^5.12.0"
  }
}
```

Ou via CDN:

```html
<!-- GSAP + Plugins -->
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/ScrollTrigger.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/CustomEase.min.js"></script>
<!-- SplitText agora é GRATUITO (Webflow adquiriu GSAP) -->
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/SplitText.min.js"></script>

<!-- Lenis -->
<script src="https://cdn.jsdelivr.net/npm/lenis@1.3.17/dist/lenis.min.js"></script>

<!-- Lottie -->
<script src="https://cdn.jsdelivr.net/npm/lottie-web@5.12.0/build/player/lottie.min.js"></script>
```

> **Nota (ATUALIZADO):** Desde a aquisição pela Webflow, **GSAP agora é 100% gratuito** incluindo TODOS os plugins premium (SplitText, MorphSVG, DrawSVG, ScrollSmoother, Flip, etc.). Não é mais necessário licença paga para uso comercial.

---

## 11. Análise de Referências Visuais (Pinterest Board)

Board: **"Inspiração web design"** — 14 pins analisados.

### 11.1 Padrões Visuais Dominantes

#### Tema de Cor: Dark Mode Premium
A grande maioria dos pins (11 de 14) usa **fundos escuros** (preto, dark gray, dark brown). Isso reforça a estética premium e faz os elementos visuais, tipografia e imagens "saltarem" da tela. A paleta recorrente é:

| Padrão | Cores | Pins |
|---|---|---|
| **Dark + Accent Gold/Bronze** | Preto + dourado/bronze | Pin 11 (Art gallery), Pin 13 (Arik) |
| **Dark + Accent Orange** | Preto + laranja vibrante | Pin 08 (Persona) |
| **Dark + Accent Purple/Neon** | Preto + roxo/neon | Pin 01 (Raze), Pin 02 (Portfolio) |
| **Dark + Accent Blue/Teal** | Preto + azul/ciano | Pin 09 (Jason Martin), Pin 14 (Tura) |
| **Dark neutral earth tones** | Smoky Black + Olive + Bone + Floral White | Pin 10 (Paleta de cores) |
| **Dark cinematic** | Preto + iluminação ambiente | Pin 06 (Mogul Kahn), Pin 12 (Village) |
| **Light + warm tones** | Cream + peach (mais próximo do juanmora.co) | Pin 07 (Apidura) |

**Conclusão para o projeto:** A preferência clara é por **dark themes com acentos quentes**. A paleta do Pin 10 (Smoky Black `#11120D`, Olive Drab `#565449`, Bone `#D8CFBC`, Floral White `#FFFBF4`) é uma referência direta de paleta que combina com a estética escura mas sofisticada.

---

#### Tipografia: Display Oversized
Todos os pins usam **tipografia grande como elemento hero**. Padrões:

| Estilo | Exemplos |
|---|---|
| **Nome gigante como identidade** | "TURA", "RAZE", "Jason Martin", "Arik" — nome/marca como centro visual |
| **Título serif/display com itálico** | "Web Designer & *Developer*" (Pin 13) — mix de pesos e estilos |
| **Tipografia como arte** | "Sculptures", "Paintings" (Pin 11) — texto integrado com imagens 3D |
| **Lettering custom** | "VILLAGE" (Pin 12) — lettering estilizado como parte da identidade |
| **Mono/code como estética** | Pin 02, Pin 05 — código como elemento visual |

**Conclusão para o projeto:** Manter tipografia oversized no hero (como juanmora.co já faz), mas considerar um mix de **display bold + serif italic** para criar mais contraste tipográfico.

---

#### Layout: Hero com Foto + Overlay
O padrão mais repetido é **foto pessoal/profissional como fundo do hero** com overlay escuro:

| Pin | Tipo de Hero |
|---|---|
| Pin 01 | Arte 3D fullscreen + tipografia sobreposta |
| Pin 05 | Dark hero + nome grande + navbar minimalista + cards de conteúdo |
| Pin 08 | Foto close-up + nome + subtítulo + social icons |
| Pin 09 | Foto no setup de trabalho + nome + CTAs |
| Pin 13 | Foto retrato sutil + título elegante |
| Pin 14 | Fundo sólido escuro + nome gigante centralizado |

**Conclusão para o projeto:** O hero do juanmora.co já segue esse padrão (foto + nome). Das referências, o Pin 13 (Arik) é o mais próximo em termos de sofisticação — foto discreta, tipografia elegante, logo strip de clientes.

---

### 11.2 Elementos de UI Recorrentes

#### Cards com Glassmorphism / Borda Sutil
Vários pins usam cards com bordas finas e fundos translúcidos:
- Pin 04: Card mobile com fundo translúcido sobre paisagem
- Pin 05: Cards de skill/experiência com bordas finas e cantos arredondados
- Pin 08: Cards de serviço com fundo escuro e hover accent

#### Logo Strip / Client Bar
- Pin 13 (Arik): Barra horizontal com logos de clientes em grayscale
- **Relevante para o projeto:** juanmora.co não tem logo strip, mas seria um bom complemento

#### Seção de Serviços em Grid
- Pin 05: Skills organizadas em cards empilhados (Front-end, Styles, Back-end, DevOps)
- Pin 08: Grid 3x2 de serviços com ícones + texto + hover state
- Pin 13: 3 colunas de serviço com número, título e descrição

#### Timeline / Experiência
- Pin 05: Timeline vertical com datas, empresas e roles
- Pin 09: Seção de resume com skills, experiência e educação

#### Seção de Projetos
- Pin 05: Carrossel horizontal com cards de artigos/projetos
- Pin 08: Grid de thumbnails de projetos
- Pin 13: Grid 2x2 de projetos com hover reveal

#### Numeração de Seções
- Pin 11: ".01", ".02", ".03" — numeração lateral como indicador de slide/seção
- Pin 14: ".01", ".02", ".03" — mesmo padrão

#### Hexagonal Grid
- Pin 07 (Apidura): Categorias em grid hexagonal com fotos — layout único e memorável

---

### 11.3 Elementos de Animação Implícitos

Vários designs sugerem animações específicas pela forma como foram compostos:

| Elemento Visual | Animação Sugerida |
|---|---|
| **Formas 3D flutuantes** (Pin 01, 04, 11) | Parallax, floating, rotação suave |
| **Texto sobreposto à imagem** (Pin 01, 08, 12) | SplitText reveal, fade in com parallax |
| **Cards empilhados** (Pin 05) | Stagger entrance, slide-up sequencial |
| **Slider de personagens** (Pin 12) | Horizontal slide com transição de conteúdo |
| **Hover reveal em projetos** (Pin 13) | Scale + overlay fade + texto reveal |
| **Numeração de seção** (Pin 11, 14) | Counter animation, progress indicator |
| **Logo strip** (Pin 13) | Marquee horizontal infinito |
| **Elementos geométricos (ouro)** (Pin 11) | Stroke draw animation, path reveal |

---

### 11.4 Síntese: O Que Extrair para o Projeto

Combinando juanmora.co + as referências do Pinterest, os padrões-chave são:

1. **Dark theme como base** — A maioria das referências é escura. Considerar inverter a paleta do juanmora.co para dark mode, ou criar um toggle
2. **Tipografia oversized como identidade** — Manter e reforçar. Nome gigante no hero é unanimidade
3. **Foto pessoal como hero** — Padrão validado em 6+ referências. Manter o approach do juanmora.co
4. **Cards com bordas sutis** — Adicionar glassmorphism ou bordas finas nos blocos de serviço
5. **Logo strip de clientes** — Adicionar uma barra de logos (empresas atendidas) com marquee horizontal
6. **Numeração de seções** — Adicionar ".01", ".02" etc. como navegação lateral ou indicadores
7. **Grid de projetos com hover** — Na página Work, usar grid 2x2 com hover reveal (como Pin 13)
8. **Paleta earth tones** — A paleta do Pin 10 (Smoky Black → Bone → Floral White) combina muito bem com a estética warm do juanmora.co
9. **Seção de skills/tools** — Adicionar visualização das ferramentas (Figma, Webflow, etc.) com ícones ou progress bars
10. **Animações 3D** — As referências reforçam o uso de elementos 3D (esculturas, formas orgânicas) como diferencial visual

---

## 12. Análise de Animações — Sites de Referência

Análise técnica de 4 sites visitados como referência para animações premium. Foco em stacks tecnológicos, padrões de animação e técnicas replicáveis.

### 12.1 sidewave.it

**Tipo:** Site imersivo / experiência interativa
**Stack principal:**

| Tecnologia | Função |
|---|---|
| **WebGL / Canvas** | Rendering 3D principal — experiência visual toda em canvas |
| **Unity WebGL Loader** | Engine de jogo/3D compilada para web |
| **jQuery 3.x** | Manipulação DOM e eventos |
| **jQuery Easing** | Curvas de easing estendidas |
| **Custom scripts** | `scroll-visuals.js`, `scroll-navigation.js`, `ui-interactions.js` |

**NÃO usa GSAP.** Toda a animação é controlada via Unity WebGL runtime + scripts jQuery custom.

**Padrões de animação identificados:**

- **Full-canvas 3D experience:** Todo o conteúdo visual é renderizado dentro de um canvas WebGL controlado pelo Unity. Não é DOM tradicional
- **Scroll-driven 3D navigation:** O scroll controla a câmera/cena 3D (script `scroll-navigation.js`)
- **Custom scroll visuals:** Efeitos visuais sincronizados ao scroll (script `scroll-visuals.js`)
- **UI interactions layer:** Camada de UI HTML sobre o canvas 3D (`ui-interactions.js`)

**Lição para o projeto:** Este nível de imersão requer Unity/WebGL pesado. Para o portfólio, podemos alcançar um efeito similar (mas mais leve) com **Three.js ou OGL** para elementos 3D pontuais, sem necessidade de Unity.

---

### 12.2 thorgal.com

**Tipo:** Site promocional (franquia de quadrinhos/mídia)
**Stack principal:**

| Tecnologia | Função |
|---|---|
| **Astro** | Framework SSR/SSG — renderiza HTML estático com "islands" interativos |
| **Motion (ex-Framer Motion)** | Motor de animação principal (import `animate`, `stagger`, `inView`) |
| **Lenis** | Smooth scroll com inércia |
| **WebGL / Custom Shaders** | Cena 3D com shaders GLSL (uniforms, scene, camera, renderer) |
| **Web Components** | Custom elements (`<c-text-reveal>`) como Astro components |
| **SplitText custom** | Implementação própria de split (chars, words, lines) sem GSAP |

**NÃO usa GSAP.** Usa **Motion (motion.dev)** como motor de animação.

**Padrões de animação identificados:**

- **Text Reveal com Web Components:** `<c-text-reveal>` é um custom element que:
  - Divide texto em chars/words/lines usando split próprio
  - Anima entrada com `animate()` do Motion: `y: ["115%", "0%"]` com stagger
  - Suporta modos "line" e "char"
  - Respeita `prefers-reduced-motion`
  - Suporta `data-animation`, `data-stagger`, `data-delay`, `data-repeat`
- **InView triggers:** Usa `inView()` do Motion para disparar animações ao entrar na viewport (equivalente ao ScrollTrigger do GSAP)
- **Page transitions:** Sistema de eventos (`PAGE:READY`, `PAGE:ENTER`, `PAGE:LEAVE`) para transições entre páginas com entrance/outrance animations
- **3D Scene:** Canvas WebGL com modelo `.glb` (door_01.glb), shaders custom, câmera e cena
- **WebGL Audio:** Componente `WebGLAudio.astro` — som integrado à experiência visual
- **Badge animations:** Componente `Badge.astro` com animações próprias
- **Scroll-to-explore indicator:** Componente `ScrollToExplore.astro`
- **Anchor navigation:** `AnchorNav.astro` com navegação animada entre seções

**Lições para o projeto:**

1. **Motion como alternativa ao GSAP para text reveals** — funciona muito bem, API limpa
2. **Web Components para encapsular animações** — reutilizáveis e declarativos
3. **Astro como framework** — ótimo para performance (HTML estático + JS só onde precisa)
4. **Modelos 3D .glb** — mais leve que Unity, carregável via Three.js/OGL

---

### 12.3 kvs.services

**Tipo:** Site institucional de agência/estúdio digital
**Stack principal:**

| Tecnologia | Função |
|---|---|
| **Vue.js 3** | Framework reativo (SPA) |
| **Vite** | Build tool |
| **GSAP** | Motor principal de animação |
| **GSAP ScrollTrigger** | Animações vinculadas ao scroll |
| **GSAP ScrollSmoother** | Smooth scroll nativo do GSAP (alternativa ao Lenis) |
| **GSAP Flip** | Animações de layout (reposicionamento fluido entre estados) |
| **GSAP Observer** | Detecção avançada de gestos e scroll |
| **GSAP TextPlugin** | Animação de texto (typewriter, replace) |
| **Lenis** | Smooth scroll (usado em conjunto com ScrollTrigger) |
| **OGL** | Engine WebGL leve (alternativa minimalista ao Three.js) |
| **Custom Shaders GLSL** | Fragment + Vertex shaders (182 refs "Shader", 133 "webgl") |

**USA GSAP extensivamente** — é o site mais próximo do stack ideal para o projeto.

**Padrões de animação identificados:**

- **GSAP ScrollTrigger + ScrollSmoother:** Combinação para scroll suave com animações vinculadas
- **GSAP Flip:** Transições de layout — elementos mudam de posição/tamanho suavemente entre estados (ex: grid → detalhe)
- **GSAP Observer:** Gestos custom — detecta swipe, scroll direction, velocity
- **OGL para WebGL:** Engine 3D leve (~25kb) com shaders custom — geometrias, programas, meshes
- **Lenis + GSAP:** Mesmo padrão do juanmora.co — Lenis para smooth scroll, GSAP para animações
- **Vue reactivity + GSAP:** Componentes Vue disparam animações GSAP nos lifecycle hooks

**Lições para o projeto:**

1. **GSAP Flip** é excelente para transições de layout (abrir/fechar cards, mudança de grid)
2. **OGL como alternativa leve ao Three.js** — perfeito para efeitos visuais sem o peso do Three.js (25kb vs 150kb+)
3. **ScrollSmoother** (agora gratuito!) pode substituir Lenis, simplificando a stack
4. **Observer** para detecção de gestos avançada (swipe mobile, scroll velocity)

---

### 12.4 larevoltosa.es

**Tipo:** Site institucional / estúdio criativo
**Stack principal:**

| Tecnologia | Função |
|---|---|
| **WordPress** | CMS |
| **Custom theme** | `larevoltosa` — tema próprio com build system |
| **GSAP** | Motor principal de animação (71 refs) |
| **GSAP ScrollTrigger** | Animações de scroll (50 refs) |
| **GSAP ScrollSmoother** | Smooth scroll |
| **GSAP Flip** | Transições de layout |
| **GSAP Observer** | Gestos e scroll avançado |
| **GSAP SplitText** | Text reveals (18 refs) |
| **Lenis** | Smooth scroll (22 refs) |
| **OGL** | WebGL engine leve — shaders custom intensivos (716 refs vec3, 568 Texture, 335 Attribute) |
| **Barba.js** | Page transitions (SPA-like navigation entre páginas) — `data-barba`, `data-barba-namespace` |
| **Custom Cursor** | Cursor personalizado (32 refs) |
| **Marquee** | Scroll horizontal infinito (43 refs) |

**USA GSAP + OGL + Barba.js** — stack completa e sofisticada.

**Padrões de animação identificados:**

- **Barba.js page transitions:** Navegação SPA-like em WordPress — ao clicar em links, Barba intercepta e faz transição animada (leave → enter) sem reload. Sistema de `enter`, `leave`, `beforeEnter`, `afterLeave`
- **GSAP SplitText reveals:** Texto dividido em chars/words com animação de entrada
- **Custom cursor magnético:** Cursor que segue o mouse com efeito magnético em hover (atrai para o centro de botões/links)
- **Marquee/Ticker infinito:** Texto/imagens em scroll horizontal infinito — padrão recorrente em sites de agência (43 refs). Usa `ticker` do GSAP para loop
- **OGL Shaders intensivos:** Efeitos visuais WebGL pesados — fragment/vertex shaders com texturas, render targets, vec3/vec4. Provavelmente: distorção de imagem, liquid transitions, noise effects
- **Scroll-linked video:** Componente `c-vimeo c-vimeo--scroll` — vídeo controlado pelo scroll
- **Storytelling vertical:** `c-storytelling-v2` — seções de conteúdo que revelam progressivamente com scroll
- **Color theme switching:** `data-text-color`, `data-surface-color`, `data-bg-color` — seções mudam o tema de cores (similar à navbar adaptativa do juanmora.co, mas mais abrangente)

**Lições para o projeto:**

1. **Barba.js para transições entre páginas** — essencial para dar sensação SPA em sites multi-página
2. **Marquee infinito com GSAP ticker** — elemento visual muito impactante para logo strips ou frases
3. **Cursor magnético** — evolução do cursor custom do juanmora.co
4. **Color theme per section** — data attributes para mudar todo o tema de cores por seção
5. **Scroll-linked video** — vídeo que avança frame a frame com scroll = wow factor altíssimo
6. **OGL para distorções visuais** — imagens com efeito liquid/noise no hover/scroll

---

### 12.5 Síntese Comparativa dos Sites de Referência

| Recurso | sidewave.it | thorgal.com | kvs.services | larevoltosa.es | juanmora.co |
|---|---|---|---|---|---|
| **Motor animação** | Unity WebGL | Motion | GSAP | GSAP | GSAP |
| **Smooth scroll** | Custom | Lenis | Lenis + ScrollSmoother | Lenis + ScrollSmoother | Lenis |
| **Text reveal** | N/A (canvas) | Motion + Custom Split | GSAP TextPlugin | GSAP SplitText | GSAP SplitText |
| **3D/WebGL** | Unity (pesado) | Custom shaders + .glb | OGL + shaders | OGL + shaders intensivos | Unicorn Studio |
| **Page transitions** | N/A | Custom events | — | Barba.js | — |
| **Custom cursor** | N/A | — | — | Magnético | Simples (lerp) |
| **Marquee** | — | — | — | GSAP ticker | — |
| **Framework** | HTML + jQuery | Astro | Vue 3 + Vite | WordPress | Webflow |

---

## 13. Catálogo de Animações Recomendadas para o Projeto

Baseado em juanmora.co + Pinterest + 4 sites de referência, este é o catálogo completo de animações recomendadas, organizadas por prioridade.

### 13.1 Animações Essenciais (Must-Have)

| # | Animação | Descrição | Library | Referência |
|---|---|---|---|---|
| A1 | **Smooth Scroll** | Scroll com inércia e suavidade | Lenis + GSAP ScrollTrigger | juanmora.co, todos os refs |
| A2 | **Text Reveal (SplitText)** | Títulos revelam char-by-char ou word-by-word ao scrollar | GSAP SplitText | juanmora.co, thorgal, larevoltosa |
| A3 | **Scroll-driven parallax** | Elementos movem em velocidades diferentes ao scrollar | GSAP ScrollTrigger (scrub) | juanmora.co, kvs |
| A4 | **Horizontal scroll** | Imagens/cards movem horizontalmente com scroll vertical | GSAP ScrollTrigger (scrub, xPercent) | juanmora.co |
| A5 | **Fade-in stagger** | Elementos aparecem sequencialmente com delay entre eles | GSAP stagger | juanmora.co, todas refs |
| A6 | **Custom cursor** | Cursor customizado que segue mouse com lerp | GSAP.to() com ease | juanmora.co, larevoltosa |
| A7 | **Loader/Preloader** | Animação de entrada ao carregar o site | GSAP timeline | juanmora.co, thorgal, larevoltosa |
| A8 | **Navbar theme switch** | Navbar muda cores conforme seção visível | GSAP ScrollTrigger (onEnter/onLeave) | juanmora.co, larevoltosa |

### 13.2 Animações de Impacto (Wow Factor)

| # | Animação | Descrição | Library | Referência |
|---|---|---|---|---|
| B1 | **Page transitions (Barba.js)** | Transição animada entre páginas sem reload | Barba.js + GSAP | larevoltosa |
| B2 | **Marquee infinito** | Texto/logos em loop horizontal contínuo | GSAP ticker ou CSS animation | larevoltosa, Pin 13 |
| B3 | **Cursor magnético** | Cursor que "gruda" em botões/links no hover | GSAP + mouse events | larevoltosa |
| B4 | **GSAP Flip transitions** | Elementos mudam de layout fluidamente | GSAP Flip (gratuito!) | kvs |
| B5 | **Scroll-linked video** | Vídeo avança com scroll | GSAP ScrollTrigger + video.currentTime | larevoltosa |
| B6 | **WebGL image distortion** | Imagens com efeito liquid/noise no hover | OGL + fragment shaders | kvs, larevoltosa |
| B7 | **3D objects** | Modelos 3D interativos (formas, objetos) | Three.js ou OGL + .glb | thorgal, juanmora |
| B8 | **Counter animation** | Números que contam de 0 ao valor final | GSAP ou CSS | Pin 11, Pin 14 |

### 13.3 Animações de Polish (Nice-to-Have)

| # | Animação | Descrição | Library | Referência |
|---|---|---|---|---|
| C1 | **Line reveal** | Linhas/separadores animam de width:0 a width:100% | GSAP ScrollTrigger | juanmora.co |
| C2 | **Image reveal** | Imagens revelam com clip-path ou mask | GSAP + CSS clip-path | Pinterest refs |
| C3 | **Hover scale + overlay** | Cards de projeto crescem no hover com overlay de info | GSAP ou CSS transitions | Pin 13 |
| C4 | **Lottie micro-animations** | Ícones e detalhes animados em vetor | lottie-web | juanmora.co |
| C5 | **Section number indicator** | ".01", ".02" como progress/navegação | GSAP ScrollTrigger | Pin 11, Pin 14 |
| C6 | **Color theme per section** | Cada seção define suas próprias cores via data-attributes | CSS custom properties + JS | larevoltosa |
| C7 | **Reduced motion support** | Respeitar `prefers-reduced-motion` | Media query + condicional | thorgal |
| C8 | **Staggered grid entrance** | Cards de portfolio entram com stagger diagonal | GSAP stagger com grid | Pinterest refs |

---

## 14. Stack Tecnológico Recomendado (Atualizado)

### 14.1 GSAP — Agora 100% Gratuito

Desde a aquisição pela **Webflow**, todo o ecossistema GSAP é gratuito para uso comercial, incluindo plugins que antes eram pagos:

| Plugin | Antes | Agora | Uso no Projeto |
|---|---|---|---|
| **GSAP Core** | Gratuito | Gratuito | Motor de animação base |
| **ScrollTrigger** | Gratuito | Gratuito | Animações vinculadas ao scroll |
| **SplitText** | Pago (Club) | **Gratuito** | Text reveals (chars, words, lines) |
| **CustomEase** | Pago (Club) | **Gratuito** | Curvas de easing personalizadas |
| **Flip** | Pago (Club) | **Gratuito** | Transições de layout |
| **ScrollSmoother** | Pago (Club) | **Gratuito** | Smooth scroll nativo GSAP |
| **MorphSVG** | Pago (Club) | **Gratuito** | Morphing de formas SVG |
| **DrawSVG** | Pago (Club) | **Gratuito** | Stroke animation em SVGs |
| **Observer** | Pago (Club) | **Gratuito** | Gestos e scroll avançado |
| **MotionPath** | Pago (Club) | **Gratuito** | Animação ao longo de paths |

**Recomendação: GSAP continua sendo a melhor escolha.** Agora com todos os plugins gratuitos, não há razão para buscar alternativas — a stack completa cobre 100% das necessidades do projeto.

### 14.2 Alternativas e Complementos (caso queira diversificar)

| Library | Tipo | Licença | Tamanho | Quando usar |
|---|---|---|---|---|
| **Motion (motion.dev)** | Animação geral | MIT (core) / Pago (Plus) | ~18kb | Se usar React/Vue; SplitText requer Motion+ ($) |
| **Anime.js v4** | Animação geral | MIT | ~17kb | Alternativa leve ao GSAP; tem ScrollObserver nativo |
| **Lenis** | Smooth scroll | MIT | ~8kb | Smooth scroll (pode ser substituído por ScrollSmoother) |
| **Barba.js** | Page transitions | MIT | ~7kb | Transições entre páginas (SPA-like) |
| **OGL** | WebGL engine | MIT | ~25kb | Efeitos visuais 3D/shader leves |
| **Three.js** | WebGL engine | MIT | ~150kb+ | 3D completo (mais pesado que OGL) |
| **lottie-web** | Animações vetoriais | MIT | ~60kb | Micro-animações exportadas do After Effects |
| **Splitting.js** | Text split | MIT | ~2kb | Alternativa ao SplitText (agora desnecessário) |

### 14.3 Stack Final Recomendada

```
Framework:        Astro / Next.js / HTML puro (escolha do desenvolvedor)
Animação:         GSAP 3.15+ (core + ScrollTrigger + SplitText + CustomEase + Flip + Observer)
Smooth Scroll:    Lenis 1.3+ OU GSAP ScrollSmoother (escolher um)
Page Transitions: Barba.js 2.x
3D/WebGL:         OGL (leve) ou Three.js (completo)
Vetorial:         lottie-web
Cursor:           GSAP custom (manual)
Marquee:          GSAP ticker (manual)
```

### 14.4 CDN Links Completos (Todos Gratuitos)

```html
<!-- GSAP Core + TODOS os Plugins (agora gratuitos) -->
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/ScrollTrigger.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/SplitText.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/CustomEase.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/Flip.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/ScrollSmoother.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/Observer.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/DrawSVGPlugin.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/MorphSVGPlugin.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/MotionPathPlugin.min.js"></script>

<!-- Smooth Scroll -->
<script src="https://cdn.jsdelivr.net/npm/lenis@1.3.17/dist/lenis.min.js"></script>

<!-- Page Transitions -->
<script src="https://cdn.jsdelivr.net/npm/@barba/core@2.10.0/dist/barba.umd.js"></script>

<!-- Lottie -->
<script src="https://cdn.jsdelivr.net/npm/lottie-web@5.12.0/build/player/lottie.min.js"></script>
```

---

## 15. Workplan Atualizado — Fases de Implementação

### Fase 1: Setup e Estrutura (Dias 1-2)

- [ ] Escolher framework (Astro recomendado por performance, ou Next.js se precisar React)
- [ ] Instalar GSAP 3.15+ com TODOS os plugins (agora gratuitos)
- [ ] Instalar Lenis OU configurar ScrollSmoother
- [ ] Instalar Barba.js para page transitions
- [ ] Criar HTML semântico: hero → statement → serviços → CTA work → value prop → CTA final → footer
- [ ] Definir CSS custom properties: paleta dark + warm accents, tipografia, spacing
- [ ] Layout responsivo da navbar (3 colunas)
- [ ] Implementar `data-bg-color`, `data-text-color` per section para theme switching

### Fase 2: Layout Estático + Dark Theme (Dias 3-5)

- [ ] Hero: foto fullscreen + overlay escuro + tipografia gigante + glow
- [ ] Statement: texto impacto + espaço para 3D elements
- [ ] Serviços: 4 blocos com numeração ".01"–".04" + strips de imagens
- [ ] Logo strip / client bar (novo elemento, inspirado Pin 13)
- [ ] CTA Work: card accent sobre texto "Work" gigante
- [ ] Value Proposition: fundo escuro + tipografia + checkmarks
- [ ] CTA Final: card arredondado
- [ ] Footer: ilustração + nome gigante + créditos

### Fase 3: Smooth Scroll + Page Transitions (Dias 6-7)

- [ ] Configurar Lenis com inércia (ou ScrollSmoother)
- [ ] Sincronizar com GSAP ScrollTrigger
- [ ] Configurar Barba.js com transições animadas (leave: fade-out + slide, enter: fade-in + text reveal)
- [ ] Testar navegação entre Home, About, Work
- [ ] Implementar `prefers-reduced-motion` check global

### Fase 4: Text Reveals + Stagger Animations (Dias 8-9)

- [ ] SplitText em todos os títulos (hero, statement, serviços, value prop)
- [ ] Configurar ScrollTrigger para cada text reveal
- [ ] CustomEase para curvas premium
- [ ] Fade-in stagger para checkmarks, cards, listas
- [ ] Counter animation para números/estatísticas
- [ ] Section number indicators (".01", ".02")

### Fase 5: Scroll-Driven Animations (Dias 10-11)

- [ ] Parallax de formas 3D na seção statement
- [ ] Horizontal scroll das imagens nos serviços (direção alternada)
- [ ] Line reveal nos separadores
- [ ] Image reveal com clip-path
- [ ] Parallax sutil em fotos de fundo
- [ ] Scroll-linked video (se aplicável)
- [ ] Marquee infinito no logo strip (GSAP ticker)

### Fase 6: Cursor + Interações (Dias 12-13)

- [ ] Custom cursor com GSAP lerp tracking
- [ ] Cursor magnético em botões e links (inspirado larevoltosa.es)
- [ ] Hover scale + overlay nos cards de projeto
- [ ] Navbar theme switching via ScrollTrigger
- [ ] GSAP Flip para transições de layout (grid → detalhe nos projetos)
- [ ] Copy email functionality

### Fase 7: WebGL + 3D + Lottie (Dias 14-16)

- [ ] Escolher OGL (leve) ou Three.js (completo) para elementos 3D
- [ ] Formas 3D flutuantes na seção statement (esferas, pills, hexágonos)
- [ ] WebGL image distortion no hover de projetos (fragment shader)
- [ ] Lottie animations para micro-interações (ícones, loading states)
- [ ] Ilustração do footer

### Fase 8: Responsividade + Performance + QA (Dias 17-19)

- [ ] Breakpoints mobile/tablet (ajustar tipografia, grids)
- [ ] Menu mobile (hamburger → drawer com animação)
- [ ] Desabilitar cursor custom em touch devices
- [ ] Desabilitar/simplificar WebGL em mobile (performance)
- [ ] `prefers-reduced-motion`: desabilitar parallax, simplificar reveals
- [ ] Lazy loading de imagens e modelos 3D
- [ ] GSAP: usar `will-change` apenas durante animação (como thorgal.com faz)
- [ ] Testes cross-browser (Chrome, Safari, Firefox, Edge)
- [ ] Lighthouse audit: target > 90 em Performance
