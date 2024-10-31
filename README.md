# NestJS CRUD com MongoDB

Este projeto é um CRUD (Create, Read, Update, Delete) básico de estudantes, desenvolvido usando o framework [NestJS](https://nestjs.com/) e [MongoDB](https://www.mongodb.com/). O aplicativo permite adicionar, visualizar, atualizar e excluir registros de estudantes em um banco de dados MongoDB.

## Tecnologias Utilizadas

- [NestJS](https://nestjs.com/) - Framework para construção de aplicações Node.js.
- [MongoDB](https://www.mongodb.com/) - Banco de dados NoSQL.
- [Mongoose](https://mongoosejs.com/) - Biblioteca para modelar objetos MongoDB.

## Pré-requisitos

Antes de começar, verifique se você tem os seguintes itens instalados:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [MongoDB](https://www.mongodb.com/) - instância local ou [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) para um banco de dados online.

## Funcionalidades
CRUD Completo: Permite criar, ler, atualizar e excluir registros de estudantes.
Inserção em Massa: Suporta a inserção de múltiplos estudantes em uma única requisição.
Modelo de Estudante: Cada estudante possui os seguintes atributos:

- Nome: O nome do estudante.
- Idade: A idade do estudante.
- Nota: A nota do estudante.

API RESTful: Implementa endpoints seguindo as convenções REST, permitindo a interação com os dados de forma intuitiva.
Persistência de Dados: Utiliza o MongoDB como banco de dados para armazenar os registros de estudantes de forma eficiente.
Validação de Dados: Inclui validações básicas para garantir que os dados dos estudantes estejam no formato correto.
Tratamento de Erros: Implementa tratamento de erros para lidar com falhas durante as operações de CRUD.
Documentação da API: Fornece documentação clara sobre como utilizar os endpoints disponíveis.

