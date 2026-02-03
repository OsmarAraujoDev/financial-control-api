# API de Accounts

## Endpoints

### Criar Conta

`POST /accounts`

**Body:**
```json
{
  "userId": 1,
  "accountTypeId": 2,
  "title": "Conta Corrente",
  "initialBalance": 1000.00
}
```

**Response:**
- 201 Created
```json
{
  "message": "Conta criada com sucesso",
  "account": {
    "account_id": 1,
    "user_id": 1,
    "account_type_id": 2,
    "title": "Conta Corrente",
    "inital_balance": "1000.00",
    "created_at": "2024-06-01T12:00:00.000Z"
  }
}
```

---

### Listar Contas

`GET /accounts`

**Query Params (opcionais):**
- `account_id` (integer)
- `user_id` (integer)
- `account_type_id` (integer)
- `title` (string, busca parcial)

**Exemplo:**
`/accounts?user_id=1&title=Corrente`

**Response:**
- 200 OK
```json
[
  {
    "account_id": 1,
    "user_id": 1,
    "account_type_id": 2,
    "title": "Conta Corrente",
    "inital_balance": "1000.00",
    "created_at": "2024-06-01T12:00:00.000Z"
  }
]
```

---

### Atualizar Conta

`PUT /accounts/:accountId`

**Body:**
```json
{
  "userId": 1,
  "accountTypeId": 2,
  "title": "Conta Corrente Atualizada",
  "initialBalance": 1200.00
}
```

**Response:**
- 200 OK
```json
{
  "message": "Conta atualizada com sucesso",
  "account": {
    "account_id": 1,
    "user_id": 1,
    "account_type_id": 2,
    "title": "Conta Corrente Atualizada",
    "inital_balance": "1200.00",
    "created_at": "2024-06-01T12:00:00.000Z"
  }
}
```

---

### Deletar Conta

`DELETE /accounts/:accountId`

**Response:**
- 200 OK
```json
{
  "message": "Conta deletada com sucesso"
}
```

---

## Observações

- Todos os endpoints requerem o campo `userId` (body) ou `user_id` (query) para identificar o usuário dono da conta.
- Os filtros de listagem podem ser combinados.
- O campo `inital_balance` é retornado como string para manter precisão decimal.
