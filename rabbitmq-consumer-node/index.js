require("dotenv").config();
const express = require("express");

const amqp = require("./consumidor/Consumidor");

const app = new express();

const port = 3000;

app.listen(process.env.PORT, () =>
  console.log(`servidor ${process.env.NODE_ENV} on na porta ${port}`)
);

module.exports = app;
