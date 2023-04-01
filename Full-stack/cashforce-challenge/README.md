# Cashforce Challenge

<details> 
<summary>:us: English Version</summary>
  
## Description
 A full stack project made as a challenge to the company Cashforce. The application is composed by a REST api built on Node / Express with Typescript and Sequelize to connect it the database as well as an interface built on Vue 3 to render the api's return. The whole application is set to be executed on Docker containers.
  
## Challenges
 - Develop the entire application in Typescript using OOP and SOLID concepts at the back-end;
 - Develop tests to cover 100% of the code at the back-end;
 - Develop the front-end with Vue 3 following the good practices of the framework like prioritize Composition API and use Pinia for global state management;
 
## Installation
The best way to install the application is using Docker, but it's necessary to install it on your machine. You can do it through this [link](https://www.docker.com/get-started/).

Once Docker is installed, clone the project through the following command on a terminal
```
git clone git@github.com:kelderpassos/cashforce-challenge.git
```
Enter the folder `cashforce-challenge` and run de command
```
npm run compose:up
```
This will run the docker-compose and install the containers, it should take some minutes. When it's finished, it'll be necessary to populate the database with the data provided by the challenge. Run the following command:
 ```
npm run db:build
 ```
Now you can access the application through the link and see the api's return on the screen.

## Uninstalling
To remove the containers and the database run:
```
npm run compose:down
```

</details>


<details open>
 <summary>:brazil: Versão em Português</summary>
  
## Descrição
  
  Projeto full stack feito como desafio para a empresa Cashforce. A aplicação é composta por uma api REST construída em Node / Express com Typescript
  e Sequelize para a conexão com o banco de dados além de uma interface construída em Vue 3 para a renderização do retorno da api. Toda a aplicação encontra-se configurada para ser executada em containers Docker.
  
## Desafios
 - Desenvolver a aplicação 100% em Typescript, utilizando no backend conceitos de POO e SOLID;
 - Desenvolver testes com 100% de cobertura para o back-end.
 - Desenvolver o front-end com Vue 3 seguindo as boas práticas da ferramenta como priorizar Composition Api, utilizar o Pinia para gerenciamento de estado global, por exemplo;
    
## Instalação
A melhor maneira de instalar a aplicação é utilzando o Docker. Para tal é necessário instalá-lo em sua máquina; você consegue instruções neste [endereço](https://www.docker.com/get-started/).

Uma vez o Docker instalado, realize o clone do projeto através do seguinte comando em um terminal
```
git clone git@github.com:kelderpassos/cashforce-challenge.git
```
 Acesse a pasta `cashforce-challenge` e rode o comando
```
npm run compose:up
```
Isto irá executar o docker-compose e instalar os containers, este processo deve demorar alguns minutos. Finalizado o processo, será necessário povoar o banco de dados com as informações fornecidas pelo desafio. Rode então o seguinte comando:
 ```
npm run db:build
 ```
Acesse então a aplicação pela endereço http://localhost:3000/ e veja o retorno da api renderizado na tela.

## Desinstalação
Para remover os containers e o banco de dados rode:
```
npm run compose:down
```

<br />

</details>

  
