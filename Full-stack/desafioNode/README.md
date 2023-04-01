# Desafio Node

<details open> 
<summary>:brazil: Versão em Português</summary>

### Objetivo

Construir uma aplicação full stack que consiste no CRUD de usuários numa plataforma. A que serve ao projeto é do tipo REST feita em Node.js com Sequelize para gerenciar o banco de dados do tipo SQL Server; ela foi arquitetada em camadas MSC para o discernimento das funções específicas de cada uma.
O frontend foi desenvolvido em Vue 3 contando com rotas e reutilização de componentes. A estilização foi feita via CSS padrão na própria aplicação e respeita a resolução de dispositivos portáteis tendo sido adaptada a eles.

## Backend
### Características
- autenticação de usuário é feita na rota /login com JWT;
- O banco de dados possui duas tabelas: users e addresses sob a relação de 1:N;
- a conexão com o banco de dados foi feita com o ORM Sequelize;
- uma vez autenticado, é possível buscar, criar, atualizar e deletar usuários
- conta com middleware para tratamento de erros;

### Desafios
- Trabalhar pela primeira vez com SQL Server e aprender sobre seus detalhes;
- Construir as migrations de modo que a relação 1:N ocorresse corretamente e que mudanças em users pudessem repercutir no addresses;
- Tratar erros de maneira robusta e sólida;

<br />
  
## Saídas (Endpoints)

### Login

| Requisição | URL                         |
| ---------- | --------------------------- |
| `POST`     | http://localhost:3000/login |

### User

| Requisição | URL                            |
| ---------- | ------------------------------ |
| `GET`      | http://localhost:3000/user     |
| `GET`      | http://localhost:3000/user/:id |
| `POST`     | http://localhost:3000/signup   |
| `PUT`      | http://localhost:3000/user/:id |
| `DELETE`   | http://localhost:3000/user/:id |


<br />
  
## Frontend
### Características
- Utiliza o Vue-route para gerenciar as rotas;
- Faz requisições às api's via axios;
- Foi criado em Vite;
  
### Desafios
- Criar uma aplicação frontend em Vue pela primeira vez;
- Entender e lidar com a sintaxe do Vue, em especial o gerenciamento de estados e envio de props;
- Entender e criar um gerenciamento de rotas eficiente com Vue Router;
  
<br />

## Instalação

Para instalar e executar a aplicação, é necessário clonar este repositório num diretório que deseja. Dessa forma, abra o terminal 
na pasta onde deseja armazenar o projeto e rode:

```
git clone git@github.com:kelderpassos/desafioNode.git
```

Após o término da operação, acesse a pasta e rode o comando para a instalação das dependências do projeto:

```
cd desafioNode/backend && npm install
```

A aplicação não vem com variáveis de ambiente por motivos de segurança, portanto é necessário que você insira as credenciais do seu banco de dados.
Para criar o arquivo com as variáveis, rode na pasta que o terminal já está:

```
touch .env
```

Abra este arquivo e insira as seguintes variáveis:

```
DATABASE=NOME-DO-BANCO-SQL-SERVER
USERNAME=USUÁRIO-DO-SEU-BANCO
PASSWORD=SENHA-DO-SEU-BANCO
PORT=PORTA-QUE-DESEJA-USAR
HOST=127.0.0.1 (para rodar localmente)
DIALECT=mssql (dialeto para rodar SQL Server)
JWT_SECRET=SEGREDO-JWT-QUE-DESEJAR
```
Com estes valores estabelecidos, só falta agora rodar o comando para criar o banco e as tabelas

```
npm run prestart
```

E o comando para iniciar a aplicação

```
npm run dev
```

Pronto! A api está pronta. O próximo passo agora é configurar o frontend.

Para configurar o frontend é mais simples. Só é necessário acessar a pasta do frontend no diretório do projeto e rodar:
  
```
npm install && npm run dev
```
Seu navegador abrirá uma janela ou aba com a aplicação rodando, contundo ela ainda não estará 100% funcional. Para isso, é importante acessar 
a pasta ```src/utils``` e abrir o arquivo ```baseUrl.js```. Haverá uma variável chamada PORT que precisa receber o mesmo valor PORT da seu arquivo .env, pois é para esta porta que a aplicação fará as requisições. Uma vez isso configurado, é só utilizar a aplicação


</details>
