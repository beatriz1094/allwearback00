require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

const PORT = process.env.PORT || 3000;

const app = express();
const routes = require('./src/routes');
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log('http://localhost:' + PORT);
});