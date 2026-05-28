# duda-blog

Blog pessoal da Duda, publicado em [mikaelkkn.github.io/duda-blog](https://mikaelkkn.github.io/duda-blog).

Construído com [Astro](https://astro.build) e hospedado no GitHub Pages. A cada push na branch `main`, o site é gerado e publicado automaticamente.

## Publicar um post

1. Crie um arquivo `.md` na pasta `src/content/essay/`
2. Adicione o cabeçalho obrigatório no topo do arquivo:

```
---
title: Título do post
description: Uma frase descrevendo o post
date: 2025-06-01
tags: ["tag1", "tag2"]
draft: false
---

Conteúdo do post aqui...
```

3. Faça commit e push — o post aparece no blog em alguns minutos.

> Para deixar um post salvo sem publicar, use `draft: true`.

## Estrutura relevante

```
src/
  content/
    essay/       ← posts em Markdown ficam aqui
  data/
    settings/    ← configurações do site (título, links, etc.)
public/
  images/        ← imagens referenciadas nos posts
```

## Rodar localmente

```bash
npm install
npm run dev
```

O site abre em `http://localhost:4321/duda-blog`.

## Configurações

As configurações do site ficam em `src/data/settings/`:

| Arquivo      | O que controla                          |
|--------------|-----------------------------------------|
| `site.json`  | Título, descrição, links sociais        |
| `shell.json` | Nome no topo, frase de destaque, nav    |
| `home.json`  | Texto de introdução da página inicial   |
| `ui.json`    | Data, tags, tempo de leitura, RSS       |
| `page.json`  | Títulos das páginas de listagem         |
