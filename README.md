# Typescript Clean Architecture 🚀

> Arquitetura limpa com Typescript e NestJs

> Projeto criado durante o esquenta da Imersão FullCycle 8

## 👨‍💻 Tecnologias e bibliotecas utilizadas 👩‍💻

- Typescript : Linguagem programação
- NodeJs : JavaScript runtime
- NestJs : Framework web para NodeJs
- Arquitetura: Clean Architecture
- TypeORM : Framework ORM

### 📚 bibliotecas adicionais 🗃️

## 📖 Guia 📃

- Instalando o Nest Js

        npm install -g @nestjs/cli

- Iniciando um projeto Nest

        nest new nome-do-projeto
        select npm

- Criando o recurso routes

        nest g resource routes
        transport layer select REST API
        generate CRUD entry points select Yes

- Para escolha do ORM:

  1. ORM tipo: Active Record - Registro ativo

     Modelo estende de alguma classe, ex: class RouteModel extends Model {}

     Deve-se modelar duas classes para cada entidade para manter separada as regras de negócio do framework.

     Exemplos: Sequelize, Prisma, Eloquent, Django ORM

  2. ORM tipo: Data Mapper - Mapeador de dados

     Diferente dos active record os modelos não estendem de nada e pode-se usar diretamente nossas entidades ricas de negócio só configurando o mapeamento.

     Exemplos: MikroORM, Doctrine, JPA ou Hibernate, TypeORM(obs: "híbrido" tem os dois)

- Instalando o TypeORM:

        npm install typeorm

- Instalando o driver do banco sqlite:

        npm install sqlite3

- Instalando a integração NestJs com TypeORM:

        npm install @nestjs/typeorm

- Instalando web socket no NestJs

        npm install @nestjs/websockets @nestjs/platform-socket.io

- Gerando o web socket no projeto Nest

        nest g gateway routes/routes

## 🔗 Links úteis ✨

## 🔥 Repositórios da Imersão FullCycle 8 ✨

- [Arquitetura Limpa com Typescript](https://github.com/rodolfoHOk/fullcycle.typescrit-clean-arch)

- [React Maps](https://github.com/rodolfoHOk/fullcycle.react-maps)
