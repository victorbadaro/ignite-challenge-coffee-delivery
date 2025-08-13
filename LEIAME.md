# Ignite Coffee Delivery

Este projeto foi desenvolvido durante o curso Ignite da Rocketseat.

## Tecnologias Utilizadas

- [React](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Styled Components](https://styled-components.com/)
- [React Router DOM](https://reactrouter.com/web/guides/quick-start)
- [Phosphor Icons](https://phosphoricons.com/)
- [Biome](https://biomejs.dev/)

## Padrões de Projeto

- **Styled Components**: Utilizado para a estilização dos componentes, permitindo a criação de componentes de UI reutilizáveis com seus próprios estilos.
- **Composição de Componentes**: Os componentes são divididos em partes menores e reutilizáveis, seguindo os princípios do React.

## Setup e Configuração

### Pré-requisitos

- [Node.js](https://nodejs.org/en/) (versão 18 ou superior)
- [pnpm](https://pnpm.io/installation)

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/victorbadaro/ignite-challenge-coffee-delivery.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd ignite-challenge-coffee-delivery
   ```
3. Instale as dependências:
   ```bash
   pnpm install
   ```

### Rodando o Projeto

Para iniciar o servidor de desenvolvimento, execute o seguinte comando:

```bash
pnpm run dev
```

A aplicação estará disponível em `http://localhost:5173`.

### Scripts disponíveis

- **dev**: Inicia o servidor de desenvolvimento com hot reload
  ```bash
  pnpm run dev
  ```

- **build**: Gera a versão de produção do projeto (compila TypeScript e executa o build do Vite)
  ```bash
  pnpm run build
  ```

- **lint**: Verifica o código utilizando ESLint para encontrar problemas de qualidade e estilo
  ```bash
  pnpm run lint
  ```

- **preview**: Visualiza localmente a versão de produção gerada pelo build
  ```bash
  pnpm run preview
  ```
