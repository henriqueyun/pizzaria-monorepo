export default {
  "development": {
    "username": process.env.DB_USER ?? "root",
    "password": process.env.DB_PASSWORD ?? "root",
    "database": process.env.DB_DATABASE ?? "pizzaria",
    "host": process.env.DB_HOST ?? "localhost",
    "dialect": "postgres",
  },
  "test": {
    "username": process.env.DB_USER ?? "root",
    "password": process.env.DB_PASSWORD ?? "root",
    "database": process.env.DB_DATABASE ?? "pizzaria",
    "host": process.env.DB_HOST ?? "localhost",
    "dialect": "postgres",
  },
  "production": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST,
    "dialect": "postgres",
  }
}
