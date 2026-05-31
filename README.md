# Site — Graciela Oliveira (Psicóloga)

Site institucional profissional para Graciela Oliveira (CRP 05/75493), psicóloga clínica especialista em Terapia Cognitivo-Comportamental (TCC) e Terapia Comportamental Dialética (DBT).

## Como visualizar

Basta **abrir o arquivo `index.html` no navegador** (Chrome, Safari, Firefox, Edge).

Não há etapa de build — o site usa Tailwind CSS via CDN e funciona imediatamente.

### Servidor local (opcional, para evitar bloqueios de CORS em algumas imagens)

```bash
cd "Site - Graciela Oliveira"
python3 -m http.server 8000
```
Acesse em `http://localhost:8000`

## Estrutura

```
Site - Graciela Oliveira/
├── index.html          # Página principal (todas as seções)
├── styles.css          # Estilos customizados complementares ao Tailwind
├── script.js           # Interações: menu mobile, scroll, FAQ accordion
├── README.md           # Este arquivo
└── images/
    ├── README.txt              # Instruções para as fotos
    ├── graciela-hero.jpg       # ⚠️ Adicionar (Imagem 2)
    └── graciela-sobre.jpg      # ⚠️ Adicionar (Imagem 3)
```

## ⚠️ IMPORTANTE — Adicionar as fotos

Para o site exibir as fotos da Graciela, salve as duas imagens enviadas em `images/`:

1. **`images/graciela-hero.jpg`** → Imagem 2 (retrato em pé, blazer branco)
2. **`images/graciela-sobre.jpg`** → Imagem 3 (sentada à mesa)

Veja `images/README.txt` para detalhes de tamanho e otimização.

## Seções do site

1. **Navbar fixa** com menu, logo e CTA WhatsApp
2. **Hero** — Headline, foto da Graciela, CTAs
3. **Pull Quote** — "É um privilégio ser ponte de esperança..."
4. **Sobre / Quem sou eu** — Bio + foto + selos de formação
5. **Áreas de Atuação** — 6 cards (ansiedade, depressão, bipolar, etc.)
6. **Abordagem** — TCC e DBT explicadas
7. **Formação** — Timeline com 7 cursos do Grupo PBE
8. **Como Funciona** — 4 passos do processo terapêutico
9. **Pull Quote 2** — "Acredito na cura pela fala"
10. **FAQ** — 7 perguntas frequentes em accordion
11. **CTA Final** — Bloco destacado com WhatsApp + aviso CVV
12. **Footer** — Navegação, contato, CRP, conformidade CFP
13. **Botão flutuante** do WhatsApp (sempre visível)

## Identidade visual

**Paleta de cores** (extraída das imagens enviadas):
- Verde sálvia: `#A8B89A` (botões, badges)
- Verde escuro: `#6B7A5A` (títulos)
- Verde mais escuro: `#4F5A42` (footer, seções de impacto)
- Bege creme: `#F2EDE0` (fundo principal)
- Bege quente: `#E8DFCC` (seções alternadas)
- Off-white: `#FAF7F0` (cards)
- Dourado suave: `#C9A961` (acentos)

**Tipografia:**
- Títulos: **Cormorant Garamond** (serifada elegante)
- Corpo: **Inter** (sans-serif moderna)

## Conformidade ética (CFP)

Site segue a **Resolução CFP nº 03/2007**:
- ✅ CRP visível em header e footer
- ✅ Sem promessas de cura ou resultados
- ✅ Sem depoimentos de pacientes
- ✅ Sem comparações com outros profissionais
- ✅ Sem antes/depois ou linguagem sensacionalista
- ✅ Aviso de emergência (CVV 188) na seção de contato

## Personalização rápida

### Mudar número do WhatsApp
Buscar e substituir `5521979391820` em todo o `index.html`.

### Mudar cores
Editar o objeto `tailwind.config` no `<script>` dentro do `<head>` do `index.html`.

### Adicionar/remover áreas de atuação
Seção `<section id="areas">` no `index.html`. Cada card é um `<article>`.

## Deploy

Por ser um site estático, pode ser publicado em:
- **Vercel** (arrastar a pasta no dashboard)
- **Netlify** (arrastar a pasta no dashboard)
- **GitHub Pages**
- **Cloudflare Pages**
- Qualquer hospedagem com suporte a HTML

## Performance e SEO

- Tags Open Graph para compartilhamento
- Schema.org `MedicalBusiness` configurado
- Meta description otimizada
- Fontes carregadas com `preconnect`
- Imagens com `loading="lazy"` (exceto hero)
- HTML semântico (header, nav, section, article, footer)
- Acessibilidade: alt text, aria-labels, focus states, prefers-reduced-motion

---

**Contato profissional:** WhatsApp (21) 97939-1820 · CRP 05/75493
