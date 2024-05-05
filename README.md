# PubArticles API

A REST API that serves articles created by people through public endpoints. Supports GET /articles and POST /articles.

## Steps to run server

#### Clone this repository

```
git clone git@github.com:michaelhpet/pubarticles-api.git
cd pubarticles-api
```

#### Install dependencies

```
yarn
```

#### Create `.env` file (reference `.env.example`)

```
cp .env.example .env
```

#### Fill-in variables in `.env` file

```
DATABASE_URI=
JWT_SECRET=
```

> This project uses MongoDB Atlas. Therefore, `DATABASE_URI` is generated from Atlas.

#### Start the server

```
yarn dev
```

## Authors

- [Michael Peter](https://github.com/michaelhpet)
