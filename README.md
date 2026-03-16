# Link in Bio - Raphael Santana

Este é um projeto web estilo Linktree criado para centralizar links pessoais.

## Tecnologias Utilizadas

- HTML5
- CSS3 (com design responsivo mobile-first)
- JavaScript puro
- FontAwesome para ícones

## Estrutura do Projeto

```
link-in-bio/
├── index.html          # Página principal
├── css/
│   └── style.css       # Estilos CSS
├── js/
│   └── script.js       # Scripts JavaScript
├── assets/
│   ├── profile.jpg     # Foto de perfil (substitua pela sua)
│   ├── curriculo.pdf   # Currículo para download (substitua pelo seu)
│   └── icons/          # Diretório para ícones (se necessário)
└── README.md           # Este arquivo
```

## Funcionalidades

- Layout inspirado no Linktree, totalmente responsivo (mobile-first)
- Tema claro/escuro com alternância e detecção automática do modo do sistema
- Foto de perfil circular com efeito cover para qualquer proporção
- Ícones sociais + botões de links com hover suave e sombreamento moderno
- Botão de download para currículo em PDF (substitua `assets/curriculo.pdf`)
- Animação de entrada suave ao carregar a página
- Favicon customizado

## Como Usar

1. Clone ou baixe os arquivos
2. Substitua `assets/profile.jpg` pela sua foto de perfil (quadrada ou maior, recortada pelo CSS)
3. Substitua `assets/curriculo.pdf` pelo seu currículo em PDF para que o botão "Currículo" faça o download
4. Atualize os links nos botões e ícones sociais em `index.html`
5. Abra `index.html` em um navegador e teste o tema claro/escuro

## Personalização

- Edite o `css/style.css` para alterar cores, fontes e layout
- Modifique o `index.html` para adicionar/remover links
- Adicione funcionalidades extras no `js/script.js`

### Personalização rápida

#### 1) Ajustar cores do tema
No `css/style.css` são usadas variáveis CSS. Para alterar o esquema de cores, basta ajustar os valores em `:root` (modo claro) e em `body.dark` (modo escuro). Exemplo:

```css
:root {
  --bg: #f3f3f3;
  --card-bg: #ffffff;
  --text: #333333;
  --accent: #f3f3f3;
}

body.dark {
  --bg: #121212;
  --card-bg: #1e1e1e;
  --text: #eeeeee;
  --accent: #333333;
}
```

#### 2) Adicionar um link extra
Basta copiar um dos blocos `<a class="link-button">` em `index.html` e ajustar o destino e o ícone:

```html
<a href="https://seu-site.com" class="link-button">
  <i class="fas fa-globe"></i>
  <span>Meu Site</span>
  <i class="fas fa-arrow-right"></i>
</a>
```

#### 3) Mudar o texto do botão de tema
No `index.html`, o botão de tema usa ícones FontAwesome. Para trocar o texto ou ícone, altere o conteúdo do botão com o id `theme-toggle`.

## Design

- Fundo cinza claro (#f3f3f3)
- Layout centralizado com largura máxima de 500px
- Sombras suaves e bordas arredondadas
- Tipografia moderna
- Animações suaves de hover (0.2s)

---

Criado por Raphael Santana