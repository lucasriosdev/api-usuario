const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let usuarios = [1];
let id = 1;

// sessão para criar usuário
app.post('/usuarios', (req, res) => {
    const { nome, email } = req.body;
    const novoUsuario = { id: id++, nome, email };
    usuarios.push(novoUsuario);
    res.status(201).json(novoUsuario);
});

// sessão para listar usuários
app.get('/usuarios', (req, res) => {
    res.json(usuarios);
});

// sessão para buscar usuário por ID
app.get('/usuarios/:id', (req, res) => {
    const usuario = usuarios.find(u => u.id == req.params.id);
    if (!usuario) return res.status(404).json({ mensagem: 'Usuário não encontrado' });
    res.json(usuario);
});

// sessão para atualizar usuário
app.put('/usuarios/:id', (req, res) => {
    const usuario = usuarios.find(u => u.id == req.params.id);
    if (!usuario) return res.status(404).json({ mensagem: 'Usuário não encontrado' });

    const { nome, email } = req.body;
    if (nome) usuario.nome = nome;
    if (email) usuario.email = email;

    res.json(usuario);
});

// sessão para deletar usuário
app.delete('/usuarios/:id', (req, res) => {
    usuarios = usuarios.filter(u => u.id != req.params.id);
    res.json({ mensagem: 'Usuário removido com sucesso' });
});

//sessão para confirmar que o servidor está rodando
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
app.get('/', (req, res) => {
    res.send('Servidor rodando! Use /usuarios para ver os usuários.');
});
