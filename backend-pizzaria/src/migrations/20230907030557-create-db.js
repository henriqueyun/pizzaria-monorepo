'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`    
      CREATE TABLE \`pizzas\` (
          \`id\` int NOT NULL AUTO_INCREMENT,
        \`nome\` varchar(255) NOT NULL,
        \`preco\` double NOT NULL,
        \`imgURL\` varchar(255) DEFAULT NULL,
        \`ingredientes\` varchar(255) DEFAULT NULL,
        \`createdAt\` datetime NOT NULL,
        \`updatedAt\` datetime NOT NULL,
        PRIMARY KEY (\`id\`)
      );
    `)

    await queryInterface.sequelize.query(`    
      CREATE TABLE \`bebidas\` (
        \`id\` int NOT NULL AUTO_INCREMENT,
        \`nome\` varchar(255) NOT NULL,
        \`preco\` double NOT NULL,
        \`imgURL\` varchar(255) DEFAULT NULL,
        \`alcoolica\` tinyint(1) NOT NULL,
        \`volume\` smallint NOT NULL,
        \`createdAt\` datetime NOT NULL,
        \`updatedAt\` datetime NOT NULL,
        PRIMARY KEY (\`id\`)
      );
    `)

    await queryInterface.sequelize.query(`    
      CREATE TABLE \`pedidos\` (
        \`id\` int NOT NULL AUTO_INCREMENT,
        \`nomeCliente\` varchar(255) NOT NULL,
        \`enderecoCliente\` varchar(255) NOT NULL,
        \`telefoneCliente\` bigint NOT NULL,
        \`formaPagamento\` varchar(255) NOT NULL,
        \`status\` varchar(255) NOT NULL,
        \`observacao\` varchar(255) DEFAULT NULL,
        \`createdAt\` datetime NOT NULL,
        \`updatedAt\` datetime NOT NULL,
        PRIMARY KEY (\`id\`)
      );
    `)

    await queryInterface.sequelize.query(`    
      CREATE TABLE \`usuarios\` (
        \`id\` int NOT NULL AUTO_INCREMENT,
        \`username\` varchar(255) NOT NULL,
        \`password\` varchar(255) NOT NULL,
        \`fullName\` varchar(255) DEFAULT NULL,
        \`role\` varchar(255) DEFAULT NULL,
        \`activeSession\` varchar(255) DEFAULT NULL,
        \`createdAt\` datetime NOT NULL,
        \`updatedAt\` datetime NOT NULL,
        PRIMARY KEY (\`id\`),
        UNIQUE KEY \`username\` (\`username\`)
      );
    `)

    await queryInterface.sequelize.query(`    
      CREATE TABLE \`bebidaItemPedidos\` (
        \`pedidoId\` int NOT NULL,
        \`bebidaId\` int NOT NULL,
        \`qtd\` varchar(255) NOT NULL,
        \`createdAt\` datetime NOT NULL,
        \`updatedAt\` datetime NOT NULL,
        PRIMARY KEY (\`pedidoId\`,\`bebidaId\`),
        KEY \`bebidaId\` (\`bebidaId\`),
        CONSTRAINT \`bebidaItemPedidos_ibfk_1\` FOREIGN KEY (\`pedidoId\`) REFERENCES \`pedidos\` (\`id\`) ON DELETE CASCADE ON UPDATE CASCADE,
        CONSTRAINT \`bebidaItemPedidos_ibfk_2\` FOREIGN KEY (\`bebidaId\`) REFERENCES \`bebidas\` (\`id\`) ON DELETE CASCADE ON UPDATE CASCADE
      );
    `)

    await queryInterface.sequelize.query(`    
      CREATE TABLE \`pizzaItemPedidos\` (
        \`pedidoId\` int NOT NULL,
        \`pizzaId\` int NOT NULL,
        \`qtd\` varchar(255) NOT NULL,
        \`createdAt\` datetime NOT NULL,
        \`updatedAt\` datetime NOT NULL,
        PRIMARY KEY (\`pedidoId\`,\`pizzaId\`),
        KEY \`pizzaId\` (\`pizzaId\`),
        CONSTRAINT \`pizzaItemPedidos_ibfk_1\` FOREIGN KEY (\`pedidoId\`) REFERENCES \`pedidos\` (\`id\`) ON DELETE CASCADE ON UPDATE CASCADE,
        CONSTRAINT \`pizzaItemPedidos_ibfk_2\` FOREIGN KEY (\`pizzaId\`) REFERENCES \`pizzas\` (\`id\`) ON DELETE CASCADE ON UPDATE CASCADE
      );
    `)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`DROP TABLE pizzaItemPedidos`)
    await queryInterface.sequelize.query(`DROP TABLE bebidaItemPedidos`)
    await queryInterface.sequelize.query(`DROP TABLE bebidas`)
    await queryInterface.sequelize.query(`DROP TABLE pizzas`)
    await queryInterface.sequelize.query(`DROP TABLE usuarios`)
  }
};
