# API de Gerenciamento de Usuários com Express

Este projeto é uma API simples desenvolvida com Express para gerenciar usuários. Ela permite criar, listar, buscar, atualizar e deletar usuários, armazenando os dados em memória (sem persistência em banco de dados).

## Tecnologias Utilizadas

- Node.js
- Express

## Endpoints

### 1. Criar Usuário

- **Método:** `POST`
- **Rota:** `/usuarios`
- **Corpo da requisição (JSON):**
  ```json
  {
    "nome": "Nome do Usuário",
    "email": "email@exemplo.com"
  }
