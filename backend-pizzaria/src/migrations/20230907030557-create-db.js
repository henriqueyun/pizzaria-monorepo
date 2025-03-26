'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`    
      CREATE TABLE "pizzas" (
          "id" SERIAL PRIMARY KEY,
        "nome" varchar(255) NOT NULL,
        "preco" double precision NOT NULL,
        "imgURL" varchar(255) DEFAULT NULL,
        "ingredientes" varchar(255) DEFAULT NULL,
        "createdAt" timestamp NOT NULL,
        "updatedAt" timestamp NOT NULL
      );
    `)

    await queryInterface.sequelize.query(`    
      CREATE TABLE "bebidas" (
        "id" SERIAL PRIMARY KEY,
        "nome" varchar(255) NOT NULL,
        "preco" double precision NOT NULL,
        "imgURL" varchar(255) DEFAULT NULL,
        "alcoolica" boolean NOT NULL,
        "volume" smallint NOT NULL,
        "createdAt" timestamp NOT NULL,
        "updatedAt" timestamp NOT NULL
      );
    `)

    await queryInterface.sequelize.query(`    
      CREATE TABLE "pedidos" (
        "id" SERIAL PRIMARY KEY,
        "nomeCliente" varchar(255) NOT NULL,
        "enderecoCliente" varchar(255) NOT NULL,
        "telefoneCliente" bigint NOT NULL,
        "formaPagamento" varchar(255) NOT NULL,
        "status" varchar(255) NOT NULL,
        "observacao" varchar(255) DEFAULT NULL,
        "createdAt" timestamp NOT NULL,
        "updatedAt" timestamp NOT NULL
      );
    `)

    await queryInterface.sequelize.query(`    
      CREATE TABLE "usuarios" (
        "id" SERIAL PRIMARY KEY,
        "username" varchar(255) NOT NULL UNIQUE,
        "password" varchar(255) NOT NULL,
        "fullName" varchar(255) DEFAULT NULL,
        "role" varchar(255) DEFAULT NULL,
        "activeSession" varchar(255) DEFAULT NULL,
        "createdAt" timestamp NOT NULL,
        "updatedAt" timestamp NOT NULL
      );
    `)

    await queryInterface.sequelize.query(`    
      CREATE TABLE "bebidaItemPedidos" (
        "pedidoId" int NOT NULL,
        "bebidaId" int NOT NULL,
        "qtd" varchar(255) NOT NULL,
        "createdAt" timestamp NOT NULL,
        "updatedAt" timestamp NOT NULL,
        PRIMARY KEY ("pedidoId", "bebidaId"),
        CONSTRAINT "bebidaItemPedidos_pedidoId_fkey" FOREIGN KEY ("pedidoId") REFERENCES "pedidos" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
        CONSTRAINT "bebidaItemPedidos_bebidaId_fkey" FOREIGN KEY ("bebidaId") REFERENCES "bebidas" ("id") ON DELETE CASCADE ON UPDATE CASCADE
      );
    `)

    await queryInterface.sequelize.query(`    
      CREATE TABLE "pizzaItemPedidos" (
        "pedidoId" int NOT NULL,
        "pizzaId" int NOT NULL,
        "qtd" varchar(255) NOT NULL,
        "createdAt" timestamp NOT NULL,
        "updatedAt" timestamp NOT NULL,
        PRIMARY KEY ("pedidoId", "pizzaId"),
        CONSTRAINT "pizzaItemPedidos_pedidoId_fkey" FOREIGN KEY ("pedidoId") REFERENCES "pedidos" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
        CONSTRAINT "pizzaItemPedidos_pizzaId_fkey" FOREIGN KEY ("pizzaId") REFERENCES "pizzas" ("id") ON DELETE CASCADE ON UPDATE CASCADE
      );
    `)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`DROP TABLE "pizzaItemPedidos"`)
    await queryInterface.sequelize.query(`DROP TABLE "bebidaItemPedidos"`)
    await queryInterface.sequelize.query(`DROP TABLE "bebidas"`)
    await queryInterface.sequelize.query(`DROP TABLE "pizzas"`)
    await queryInterface.sequelize.query(`DROP TABLE "usuarios"`)
  }
};