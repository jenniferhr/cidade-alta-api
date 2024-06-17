# Projeto Cidade Alta API

API criada para desafio técnico de vaga para desenvolvedor Back-End Jr na Cidade Alta.

![Cidade Alta API Swagger](https://i.imgur.com/J6g4BAv.png)

## Descrição

Este projeto é uma API RESTful desenvolvida em Node.js utilizando o framework NestJS e o banco de dados MySQL. 
### Requisitos
- Endpoint para listar todos emblemas registrados ✅
- Endpoint para resgatar um emblema pelo slug garantindo que o mesmo emblema não seja resgatado duas vezes pelo mesmo usuário. ✅
- Listar todos os emblemas já resgatados por um usuário específico. ✅
### Extra (Opcional)
- Implementar **autenticação**
- Documentar todos os endpoints da API, utilizando por exemplo **Swagger**.  ✅
- Implementar **paginação** no endpoint de listagem de emblemas ✅
- Adicionar a capacidade de filtrar os emblemas pelo **nome** no endpoint de listagem de emblemas. ✅

## Como Rodar

### Pré-requisitos

- Node.js (v14.x ou superior)
- MySQL (ou outro banco de dados compatível)
- Git

### Instalação

1. Clone o repositório:
```
git clone https://github.com/seu-usuario/seu-projeto.git
```
2. Instale as dependências:
```
npm install
``` 
3. Crie o banco de dados MySQL:
```
CREATE DATABASE `cidade_alta_db`;
CREATE USER 'ca_db'@'localhost' IDENTIFIED BY '123';
GRANT ALL PRIVILEGES ON `cidade_alta_db`.* TO 'ca_db'@'localhost';
FLUSH PRIVILEGES;
```
4. Rode o script MySQL para adicionar os emblemas:
```
INSERT INTO badges 
	(id, slug, name, image) 
VALUES 
	(1, 'cda', 'Cidade Alta', 'https://cidadealtarp.com/imagens/challenge/cidade-alta.png'),
	(2, 'cda-valley', 'Cidade Alta Valley', 'https://cidadealtarp.com/imagens/challenge/cidade-alta-valley.png'),
	(3, 'policia', 'Policia do Cidade Alta', 'https://cidadealtarp.com/imagens/challenge/policia.png'),
	(4, 'hospital', 'Hospital do Cidade Alta', 'https://cidadealtarp.com/imagens/challenge/hospital.png'),
	(5, 'mecanica', 'Mecânica do Cidade Alta', 'https://cidadealtarp.com/imagens/challenge/mecanica.png'),
	(6, 'taxi', 'Taxi do Cidade Alta', 'https://cidadealtarp.com/imagens/challenge/taxi.png'),
	(7, 'curuja', 'Coruja', 'https://cidadealtarp.com/imagens/challenge/coruja.png'),
	(8, 'hiena', 'Hiena', 'https://cidadealtarp.com/imagens/challenge/hiena.png'),
	(9, 'gato', 'Gato', 'https://cidadealtarp.com/imagens/challenge/gato.png'),
	(10, 'urso', 'Urso', 'https://cidadealtarp.com/imagens/challenge/urso.png')
```
5. Inicie o servidor:
```
npm run start:dev
```
### Uso

Acesse a documentação da API em http://localhost:3000/swagger#/ após rodar para obter detalhes sobre os endpoints disponíveis e como usá-los.

## Licença

Este projeto é licenciado sob a MIT License.
