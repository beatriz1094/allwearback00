# Allwear TCC
Projeto Back-end API Node.JS com Prisma para o TCC

## Tecnologias
- VsCode
- Node.js
- Prisma
- XAMPP (MySQL)
- JavaScript

## Como executar localmente
- 1 Clonar este repositorio
- 2 Abrir com Vs code
- 3 Criar o `.env` contendo
```js
DATABASE_URL="mysql://root@localhost:3306/allwear"
PORT=3000
JWT_SECRET="chavesecreta"
```
- 4 Abrir o XAMPP, dar start em MySQL e Fazer a migração.
```bash
npx prisma migrate dev --name init
```
- 5 Instalar as dependencias
```bash
npm install
```
- 6 Executar
```bash
npm run dev
```