# API de Usuários com Express.js

Esta é uma API simples de gerenciamento de usuários utilizando [Express.js](https://expressjs.com/).

## 🚀 Tecnologias Utilizadas

- Node.js
- Express.js

## 📌 Instalação

Antes de iniciar, certifique-se de ter o [Node.js](https://nodejs.org/) instalado.

1. Clone este repositório:

   ```sh
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```

2. Acesse o diretório do projeto:

   ```sh
   cd nome-do-projeto
   ```

3. Instale as dependências:

   ```sh
   npm install express
   ```

## ▶️ Como Usar

1. Inicie o servidor:

   ```sh
   node index.js
   ```

2. O servidor estará rodando em:

   ```
   http://localhost:3000
   ```

## 🔗 Rotas Disponíveis

### 📌 Criar Usuário

**Rota:** `POST /usuarios`

**Exemplo de Corpo da Requisição:**

```json
{
  "nome": "João Silva",
  "email": "joao@email.com"
}
```

**Resposta:**

```json
{
  "id": 1,
  "nome": "João Silva",
  "email": "joao@email.com"
}
```

---

### 📌 Listar Todos os Usuários

**Rota:** `GET /usuarios`

**Resposta Exemplo:**

```json
[
  {
    "id": 1,
    "nome": "João Silva",
    "email": "joao@email.com"
  }
]
```

---

### 📌 Buscar Usuário por ID

**Rota:** `GET /usuarios/:id`

**Resposta Exemplo (Usuário encontrado):**

```json
{
  "id": 1,
  "nome": "João Silva",
  "email": "joao@email.com"
}
```

**Resposta Exemplo (Usuário não encontrado):**

```json
{
  "mensagem": "Usuário não encontrado"
}
```

---

### 📌 Atualizar Usuário

**Rota:** `PUT /usuarios/:id`

**Exemplo de Corpo da Requisição:**

```json
{
  "nome": "João Atualizado",
  "email": "joaoatualizado@email.com"
}
```

**Resposta Exemplo:**

```json
{
  "id": 1,
  "nome": "João Atualizado",
  "email": "joaoatualizado@email.com"
}
```

---

### 📌 Deletar Usuário

**Rota:** `DELETE /usuarios/:id`

**Resposta Exemplo:**

```json
{
  "mensagem": "Usuário removido com sucesso"
}
```

---

## 📷 Adicionando Imagens

Para adicionar uma imagem ao README, use a seguinte sintaxe:

```md
![Captura de tela](caminho/para/imagem.png)
```

## 🛠 Melhorias Futuras

- Implementar banco de dados para persistência dos usuários.
- Adicionar validações mais robustas nos inputs.
- Criar autenticação e autorização.

📌 **Contribuições são bem-vindas!** Sinta-se à vontade para abrir issues e pull requests. 🚀

