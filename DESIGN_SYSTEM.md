# Multylog — Design System

> **OBRIGATÓRIO:** Todo agente deve ler este arquivo antes de escrever qualquer código de UI.
> Nunca use cores, fontes ou espaçamentos fora deste sistema sem autorização explícita do usuário.

---

## 1. Paleta de Cores

### Cores primárias (marca)

| Token CSS             | Valor hex   | Tailwind equivalente       | Uso                                      |
|-----------------------|-------------|----------------------------|------------------------------------------|
| `--color-brand`       | `#CC0000`   | `bg-[#CC0000]`             | CTA principal, ícones de destaque, badges, destaques ativos |
| `--color-brand-dark`  | `#A80000`   | `bg-[#A80000]`             | Hover do botão vermelho                  |
| `--color-dark`        | `#1C1C1E`   | `bg-[#1C1C1E]`             | Fundo escuro padrão (navbar, hero, footer, seções escuras) |
| `--color-gold`        | `#C8973A`   | `bg-[#C8973A]`             | Reservado — uso pontual em selos/prêmios |

### Cores de superfície (backgrounds claros)

| Token CSS              | Valor hex   | Tailwind equivalente       | Uso                                      |
|------------------------|-------------|----------------------------|------------------------------------------|
| `--color-surface`      | `#F5F5F7`   | `bg-[#F5F5F7]`             | Fundo de seções claras (catálogo, listas)|
| `--color-surface-dark` | `#E5E5E7`   | `bg-[#E5E5E7]`             | Hover de elementos sobre surface         |
| —                      | `#FFFFFF`   | `bg-white`                 | Cards, painéis internos                  |

### Cor especial — seção de vantagens (locação)

| Valor hex   | Tailwind equivalente  | Uso                                              |
|-------------|-----------------------|--------------------------------------------------|
| `#0D1B2E`   | `bg-[#0D1B2E]`        | **Apenas** na seção "Vantagens da Locação" — navy escuro para contraste com cards brancos. Não use no footer, navbar ou outras seções. |

### Regra de uso das cores escuras

- **Footer, Navbar, Hero, seções escuras genéricas → sempre `#1C1C1E`**
- **Seção de vantagens da locação → `#0D1B2E`**
- **Nunca** trocar `#1C1C1E` por `#0D1B2E` em componentes globais (Footer, Navbar, Hero)

---

## 2. Tipografia

| Papel        | Fonte            | Tailwind class   | Uso                                      |
|--------------|------------------|------------------|------------------------------------------|
| Display      | Bebas Neue       | `font-display`   | Títulos de seção, headlines de hero, nomes de produto |
| Corpo        | Outfit           | `font-sans` / padrão | Parágrafos, labels, navegação, botões |

### Escala de tamanhos (títulos)

| Contexto              | Classes Tailwind                            |
|-----------------------|---------------------------------------------|
| Hero principal (H1)   | `text-5xl sm:text-6xl lg:text-7xl`          |
| Títulos de seção (H2) | `text-4xl lg:text-5xl`                      |
| Títulos de card (H3)  | `text-xl` a `text-2xl`                      |
| Labels / badges       | `text-xs sm:text-sm font-semibold uppercase tracking-widest` |

---

## 3. Botões

### Primário (CTA vermelho)
```
bg-[#CC0000] hover:bg-[#A80000] text-white font-semibold px-7 py-3.5 transition-colors
```

### Secundário (outline escuro)
```
border border-gray-600 hover:border-white text-gray-300 hover:text-white font-semibold px-7 py-3.5 transition-colors
```

### WhatsApp (verde)
```
bg-[#25D366] hover:bg-[#1ebe59] text-white font-semibold rounded-full transition-colors
```

> **Importante:** Os botões do hero e da página de locação **não têm `rounded`** (estilo industrial/corporativo STILL). Botões dentro de seções de cards podem ter `rounded` ou `rounded-full` conforme contexto.

---

## 4. Espaçamentos padrão

| Contexto              | Padding / Margin                              |
|-----------------------|-----------------------------------------------|
| Seção padrão          | `py-16 lg:py-24`                              |
| Container interno     | `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`     |
| Container hero        | `max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20` |
| Gap de grid           | `gap-6`                                       |

---

## 5. Componentes recorrentes

### Badge de seção (label acima do título)
```tsx
<div className="flex items-center gap-2 mb-5">
  <span className="w-6 h-0.5 bg-[#CC0000]" />
  <span className="text-[#CC0000] text-xs font-semibold uppercase tracking-widest">
    Texto do badge
  </span>
</div>
```

### Divisor vermelho
```tsx
<div className="w-12 h-0.5 bg-[#CC0000] mb-5" />
```

### Card de produto (fundo branco sobre surface)
```
bg-white rounded-xl border border-gray-100 hover:border-[#CC0000]/30 hover:shadow-md transition-all
```

---

## 6. Hero / Banner principal

- **Altura:** `clamp(520px, 72vh, 840px)` — nunca `min-h-screen`
- **Largura máxima do conteúdo:** `max-w-[1400px] mx-auto`
- **Imagens:** `quality={90}`, `sizes` adequado ao container (não `100vw` cego)
- **Overlay padrão:** `linear-gradient(to right, rgba(28,28,30,0.88) 40%, rgba(28,28,30,0.40) 65%, rgba(28,28,30,0.05) 100%)`

---

## 7. Footer

- **Fundo:** `bg-[#1C1C1E]` — **jamais** `#0D1B2E` ou outra cor navy
- **Estrutura:** barra de endereços → corpo (logo + links + máquinas) → barra inferior com copyright + botão WhatsApp

---

## 8. Página de Locação — Hero

- **Layout:** split — painel escuro (`#1C1C1E`) à esquerda com texto, foto real à direita (`absolute top-0 right-0 bottom-0`)
- **Imagem:** `/images/locacao-hero.jpg` (foto da equipe no galpão)
- **Fade de integração:** `bg-gradient-to-r from-[#1C1C1E] to-transparent` na borda esquerda da foto

---

## 9. O que NÃO fazer

- ❌ Não usar azul, navy, laranja ou qualquer cor fora da paleta acima sem autorização
- ❌ Não trocar `font-display` (Bebas Neue) por outra fonte em títulos
- ❌ Não usar `min-h-screen` no hero principal
- ❌ Não usar `rounded` nos botões CTA do hero e locação
- ❌ Não alterar o fundo do footer para navy (`#0D1B2E`) — esse tom é exclusivo da seção de vantagens da locação
- ❌ Não adicionar cores de outros projetos/referências sem adaptar para a paleta Multylog
