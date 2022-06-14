# Typescript Clean Architecture 🚀

> Arquitetura limpa com Typescript

> Projeto criado durante o esquenta da Imersão FullCycle 8

## 👨‍💻 Tecnologias e bibliotecas utilizadas 👩‍💻

- Javascript / Typescript : Linguagem programação
- NodeJs : JavaScript runtime
- Express : Framework web minimalista para NodeJs
- Jest : Framework para testes unitários
- Arquitetura: Clean Architecture;

### 📚 bibliotecas adicionais 🗃️

## 📖 Guia 📃

- Iniciando um projeto Node Js

        npm init -y

- Adicionando Typescript ao projeto

        npm i typescript @types/node -D
        npx tsc --init

- Adicionando Jest para testes

        npm i jest -D
        npx jest --init
        npm i ts-node -D
        npm i @swc/jest @swc/core @types/jest -D

        no jest.config.ts substituir:
          transform: {
            '^.+\\.(t|j)sx?$': ['@swc/jest'],
          },

- Adicionando o Express

        npm i express
        npm i @types/express -D

        no package.json:
          "scripts": {
            ...
            "express": "ts-node src/infra/http/express/index.ts"
          },

## 🔗 Links úteis ✨

## 🔥 Repositórios da Imersão FullCycle 8 ✨

- [Arquitetura Limpa com Typescript](https://github.com/rodolfoHOk/fullcycle.typescrit-clean-arch)
