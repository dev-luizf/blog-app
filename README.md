
# Blog app

Este projeto foi desenvolvido durante um desafio técnico, o objeto era desenvolver um projeto fullstack de um sistema de blog com funcionalidades com um CRUD de posts e autenticação de usuário.

## Tecnologias utilizadas

-   [Nest.js](https://nestjs.com/): Framework para desenvolvimento de aplicações em Node.js.
-   [Prisma ORM](https://www.prisma.io/): ORM (Object-Relational Mapping) para bancos de dados SQL e NoSQL, oferecendo uma camada de abstração para interagir com o banco de dados.
-   [Docker](https://www.docker.com/): Plataforma para desenvolvimento, envio e execução de aplicações em containers, permitindo a criação de ambientes isolados e portáteis.
-   [Joi](https://joi.dev/): Biblioteca para validação de dados em JavaScript, utilizada para definir regras e restrições nos formatos e estruturas dos dados.
-   [React](https://reactjs.org/): Biblioteca JavaScript para a construção de interfaces de usuário interativas e reativas.
-   [Argon2]: Argon2 é uma função de hash de senha que é resistente a ataques de força bruta e de dicionário.
-   [TailwindCSS](https://tailwindcss.com/): Framework de CSS utilitário que oferece uma abordagem baseada em classes para a criação rápida de layouts e estilos personalizados.
-   [Axios](https://axios-http.com/): Biblioteca para realizar requisições HTTP em JavaScript, oferecendo uma interface simples e flexível para interagir com APIs.
-   [React Router Dom](https://reactrouter.com/web/guides/quick-start): Biblioteca para roteamento de aplicações React, permitindo a navegação entre diferentes componentes ou páginas da aplicação de forma declarativa.

## Deploy

Para fins de organização no GitHub e facilidade na hora de mostrar o projeto, decidi cria-lo como monorepo e fazer o deploy na Vercel e Railway. Seguem os links:

 - https://dev-luizf-blog.vercel.app/
 - https://prod-blog-api.up.railway.app/

## Como rodar o back

### Localmente:
1.  Instale as dependências:

`npm install`

2.  Crie um arquivo  `.env`  na pasta `/blog-api/` com as seguintes variáveis:

```
DATABASE_URL="postgresql://seu-usuario:sua-senha@localhost:5432/seu-banco"

JWT_SECRET="seu-secret"
```

3.  Inicie o servidor:

`npm run start:dev`

4.  Acesse a API em  `http://localhost:3001`.


### Com docker:

1.  Crie um arquivo  `.env`  na raiz do projeto com as variáveis de ambiente:

```
DATABASE_URL="postgresql://seu-usuario:sua-senha@localhost:5432/seu-banco"

JWT_SECRET="seu-secret"

POSTGRES_USER="seu-usuario"

POSTGRES_PASSWORD="sua-senha"

POSTGRES_DB="seu-banco"
```

2.  Rode o Docker Compose:

`docker-compose up --build -d`

3.  Acesse a API em  `http://localhost:3001`.

## Como rodar o front

### Localmente:
1.  Instale as dependências:

`npm install`

2.  Inicie o app:

`npm run dev`

3.  Acesse o app em  `http://localhost:5173`.

## Testando online

Se preferir você pode testar online. Basta acessar o [link](https://dev-luizf-blog.vercel.app/) e entrar com o usuário "luiz" e senha "123456teste".