<h2 align="center">
  <br>
  <strong>nestjs-boiderplate</strong>
</h2>

<p align="center">
  <a href="https://www.linkedin.com/in/pedrolcsf/">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by-Pedro%20Ferreira-gree">
  </a>
  
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/pedrolcsf/boiderplate-nestjs">
  
  <a href="https://github.com/pedrolcsf/boiderplate-nestjs/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/pedrolcsf/boiderplate-nestjs">
  </a>
  
  <a href="https://github.com/pedrolcsf/boiderplate-nestjs/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/pedrolcsf/boiderplate-nestjs">
  </a>
</p>

## 📃 About

NestJS Boilerplate: JWT Authentication (RSA256) and Vitest Testing

This repository provides a concise NestJS boilerplate with secure JWT authentication using RSA256 and comprehensive testing using Vitest. Accelerate your Node.js application development with a robust foundation for secure authentication and reliable testing.

## 🚀 Technologies

Technologies that I used to develop this boiderplate

- [JavaScript]([])
- [Node.js]([https://nodejs.org/en])
- [TypeScript]([https://www.typescriptlang.org/])
- [Nest.js]([https://nestjs.com/])
- [Vitest]([https://vitest.dev/])
- [Prisma]([https://www.prisma.io/])
- [Docker]([https://www.docker.com/])
- [Bcrypt]([https://www.npmjs.com/package/bcrypt])
- [JWT]([https://jwt.io/])
- [ESLint]([https://eslint.org/])

## 💻 Getting started

### Requirements

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- [Docker]([https://www.docker.com/])
- [Docker Compose]([https://www.docker.com/])

  **Clone the project and access the folder**

```bash
  $ git clone https://github.com/pedrolcsf/boiderplate-nestjs.git
```

**install libs**

```bash
  $ npm i
```

**Follow the steps below**

**generate private and public key (b64)**

```bash
  # generate private key (b64)
  $ openssl genpkey -algorithm RSA -out private_key.pem
  $ openssl base64 -A -in private_key.pem -out private_key_base64.txt

  # generate public key (b64)
  $ openssl rsa -pubout -in private_key.pem -out public_key.pem
  $ openssl base64 -A -in public_key.pem -out public_key_base64.txt
```

**set private and public keys in .env**

```bash
  JWT_PRIVATE_KEY="private_key"
  JWT_PUBLIC_KEY="public_key"
```

**set port in .env**

```bash
  PORT=3333
```

**run db in docker with docker compose**

```bash
  $ docker compose up -d
```

**run migartions and start prima studio**

```bash
  $ npx prisma migrate dev

  # run prisma studio
  $ npx prisma studio
```

**run server**

```bash
  # initialize the server (open in http:localhost:3333)
  $ npm run start:dev
```

---

Made with ♥ by Pedro Ferreira :wave: [Get in touch!](https://www.linkedin.com/in/pedrolcsf/)
