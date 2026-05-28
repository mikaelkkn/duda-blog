---
title: Como escrever um post
description: Um guia rápido para criar posts no blog usando Markdown
date: 2025-01-01
tags: ["guia"]
draft: false
---

Cada post é um arquivo `.md` dentro da pasta `src/content/essay/`. Para criar um novo post, basta criar um arquivo novo nessa pasta.

## Cabeçalho obrigatório

Todo post começa com um bloco de metadados entre `---`:

```
---
title: Título do post
description: Uma frase descrevendo o post
date: 2025-06-01
tags: ["tag1", "tag2"]
draft: false
---
```

- **title** — título que aparece na listagem e no topo do post
- **description** — aparece como resumo na listagem
- **date** — data de publicação (formato `AAAA-MM-DD`)
- **tags** — palavras-chave opcionais
- **draft** — se `true`, o post não aparece no site

## Formatação básica

**Negrito** com `**texto**`, *itálico* com `*texto*`.

Títulos com `#`, `##`, `###`.

## Listas

- Item um
- Item dois
- Item três

## Citações

> Uma frase bonita que vale guardar.

## Imagens

Coloque a imagem na pasta `public/images/` e referencie assim:

```markdown
![descrição da imagem](/duda-blog/images/minha-foto.jpg)
```

É isso — salve o arquivo, faça commit e push, e o post aparece no blog em alguns minutos.
