const express = require('express');
const routes = express.Router();

const Usuario = require('./controllers/usuario');
const Login = require('./controllers/login');
const Roupa = require('./controllers/roupa');
const Escolha = require('./controllers/escolha');
const Escolhido = require('./controllers/escolhido');

const { validate } = require('./middlewares/auth');

// Rotas públicas
routes.get('/', (req, res) => {
  return res.json({ titulo: 'all wear',
    versao: '1.0.0',
    autor: 'Equipe All Wear',
    rotas:[
      { metodo: 'POST', rota: '/login', descricao: 'Autenticação de usuário' },
      { metodo: 'GET', rota: '/login', descricao: 'Validação do token e sessão' },
      { metodo: 'POST', rota: '/usuario', descricao: 'Criação de novo usuário' },
      { metodo: 'GET', rota: '/usuario', descricao: 'Listagem de todos os usuários' },
      { metodo: 'GET', rota: '/usuario/:id', descricao: 'Detalhes de um usuário específico' },
      { metodo: 'PATCH', rota: '/usuario/:id', descricao: 'Atualização de um usuário específico' },
      { metodo: 'DELETE', rota: '/usuario/:id', descricao: 'Remoção de um usuário específico' },
      { metodo: 'POST', rota: '/escolha', descricao: 'Criação de nova escolha' },
      { metodo: 'GET', rota: '/escolha', descricao: 'Listagem de todas as escolhas' },
      { metodo: 'GET', rota: '/escolha/:id', descricao: 'Detalhes de uma escolha específica' },
      { metodo: 'PATCH', rota: '/escolha/:id', descricao: 'Atualização de uma escolha específica' },
      { metodo: 'DELETE', rota: '/escolha/:id', descricao: 'Remoção de uma escolha específica' }

    ]
   });
});

// Remova estas rotas duplicadas se não existirem nos controllers
routes.post('/login', Login.login);
routes.get('/login', Login.validaToken);

routes.post('/usuario', Usuario.create);
routes.get('/usuario', Usuario.read);
routes.get('/usuario/:id', validate, Usuario.readOne);
routes.patch('/usuario/:id', validate, Usuario.update);
routes.delete('/usuario/:id', validate, Usuario.remove);

routes.post('/roupa', Roupa.create);
routes.get('/roupa', Roupa.read);
routes.get('/roupa/:id', Roupa.readOne);
routes.patch('/roupa/:id', Roupa.update);
routes.delete('/roupa/:id', Roupa.remove);

routes.post('/escolha', Escolha.create);
routes.get('/escolha', Escolha.read);
routes.get('/escolha/:id', Escolha.readOne);
routes.get('/escolhausuario/:id', Escolha.readUsuario);
routes.patch('/escolha/:id', Escolha.update);
routes.delete('/escolha/:id', Escolha.remove);

routes.post('/escolhido', Escolhido.create);
routes.post('/escolhidos', Escolhido.createMany);
routes.get('/escolhido', Escolhido.read);
routes.get('/escolhido/:id', Escolhido.readOne);
routes.patch('/escolhido/:id', Escolhido.update);
routes.delete('/escolhido/:id', Escolhido.remove);


module.exports = routes;