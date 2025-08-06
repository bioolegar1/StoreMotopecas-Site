# Landing Page - Store Motopeças

## 📖 Sobre o Projeto

Este repositório contém o código-fonte da landing page desenvolvida para a **Store Motopeças**, uma oficina mecânica de motos localizada em Goiânia, GO. O objetivo do site é apresentar a empresa, seus serviços e diferenciais de forma moderna e profissional, com foco na conversão de visitantes em clientes através de chamadas de ação diretas para o WhatsApp.

O projeto foi construído do zero, utilizando tecnologias modernas para garantir alta performance, responsividade e uma excelente experiência de usuário em qualquer dispositivo.

## ✨ Funcionalidades Principais

O site foi projetado com diversas funcionalidades interativas para criar uma experiência de navegação fluida e agradável:

* **Design Responsivo:** Layout totalmente adaptável, otimizado para desktops, tablets e celulares.

* **Cabeçalho Dinâmico e Fixo:** O menu de navegação permanece fixo no topo da página. A logo da empresa começa em um tamanho grande e flutuante, e anima para uma versão menor ao rolar a página, otimizando o espaço da tela.

* **Navegação por Seções (Scroll-to-Section):** Links no menu e setas animadas guiam o usuário suavemente através das diferentes seções da página.

* **Galeria de Fotos Interativa:** As imagens da galeria abrem em um modal "lightbox" (mesa de vidro) em tela cheia, com botões para avançar, voltar e fechar, permitindo uma visualização detalhada dos trabalhos.

* **Otimização para Mobile:**
    * Títulos de seção são ocultados em telas menores para uma interface mais limpa e direta.
    * A seção de serviços se transforma em uma lista simplificada para facilitar a leitura.

* **Chamadas de Ação (CTAs) Estratégicas:** Botões de contato via WhatsApp estão posicionados de forma proeminente para facilitar a comunicação direta com a oficina.

* **Mapa Interativo:** Integração com o Google Maps para exibir a localização exata da oficina e facilitar o cálculo de rotas.

## 🚀 Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias:

* **Next.js:** Framework React para construção de sites rápidos, com renderização no lado do servidor (SSR) e otimização de performance.

* **React:** Biblioteca JavaScript para a construção de interfaces de usuário componentizadas.

* **Tailwind CSS:** Framework de CSS "utility-first" para estilização rápida e responsiva diretamente no JSX.

* **Lucide React:** Biblioteca de ícones SVG, leve e de fácil customização.

## ⚙️ Como Executar o Projeto

Para rodar este projeto localmente, siga os passos abaixo:

### 1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
```

### 2. Navegue até a pasta do projeto:
```bash
cd nome-do-repositorio
```

### 3. Instale as dependências:
```bash
npm install
```

### 4. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

### 5. Visualizar o projeto
Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## 📂 Estrutura do Projeto

A estrutura de arquivos principal está organizada da seguinte forma:

* `app/page.js`: Arquivo principal que contém todos os componentes React que formam a landing page.
* `app/layout.js`: Define o layout raiz da aplicação, incluindo metadados como título e favicon.
* `public/`: Pasta para armazenar ativos estáticos como imagens (logo, fotos da galeria) e ícones.
* `tailwind.config.js`: Arquivo de configuração do Tailwind CSS.