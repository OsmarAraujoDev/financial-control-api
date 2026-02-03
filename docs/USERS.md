# API de Users

## Endpoints

### Registrar Usuário

`POST /users/register`

**Body:**
```json
{
  "nickname": "João",
  "email": "joao@email.com",
  "password": "senhaSegura123",
  "phone": "11999999999"
}
```

**Response:**
- 201 Created
```json
{
  "message": "Usuário cadastrado com sucesso",
  "user": {
    "user_id": 1,
    "nickname": "João",
    "email": "joao@email.com",
    "phone": "11999999999",
    "created_at": "2024-06-01T12:00:00.000Z"
  }
}
```

---

### Login

`POST /users/login`

**Body:**
```json
{
  "email": "joao@email.com",
  "password": "senhaSegura123"
}
```

**Response:**
- 200 OK
```json
{
  "message": "Login realizado com sucesso",
  "user": {
    "id": 1,
    "nickname": "João",
    "email": "joao@email.com"
  }
}
```

---

### Logout

`POST /users/logout`

**Response:**
- 200 OK
```json
{
  "message": "Logout realizado com sucesso"
}
```

---

## Observações

- O campo `phone` é opcional no cadastro.
- O login cria uma sessão para o usuário autenticado.
- O logout encerra a sessão do usuário.
