'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Inserir dados na tabela "usuarios"
    await queryInterface.sequelize.query(`
      INSERT INTO "usuarios" ("username", "password", "fullName", "role", "activeSession", "createdAt", "updatedAt") 
      VALUES 
        ('admin', 'admin', 'Administrador', 'admin', '', NOW(), NOW()),
        ('caique', '123', 'Caique', 'admin', '', NOW(), NOW()),
        ('isis', '123', 'Isis', 'admin', '', NOW(), NOW()),
        ('henrique', '123', 'Henrique', 'admin', '', NOW(), NOW());
    `);

    // Inserir dados na tabela "pizzas"
    await queryInterface.sequelize.query(`
      INSERT INTO "pizzas" ("nome", "preco", "imgURL", "ingredientes", "createdAt", "updatedAt")
      VALUES 
        ('Muçarela', '31', 'https://i.imgur.com/01uIZES.jpeg', 'Queijo muçarela, tomate, azeitona e orégano', NOW(), NOW()),
        ('Calabresa', '31', 'https://i.imgur.com/D3I47m8.jpeg', 'Calabresa, queijo muçarela, tomate, azeitona e orégano', NOW(), NOW()),
        ('Margherita', '31', 'https://i.imgur.com/dFFRmUd.png', 'Queijo muçarela, manjericão, tomate, azeitona e orégano', NOW(), NOW()),
        ('Baiana', '34', 'https://i.imgur.com/gbDbex5.png', 'Queijo muçarela, presunto, calabresa, ovo, pimenta, cebola, tomate, azeitona e orégano', NOW(), NOW()),
        ('Vegana', '38', 'https://i.imgur.com/L9WqVzD.jpeg', 'Queijo de castanha, tomate, azeitona e orégano', NOW(), NOW()),
        ('Portuguesa', '34', 'https://i.imgur.com/VDq8tie.jpeg', 'Queijo muçarela, presunto, cebola, pimentão, milho, ervilha, tomate, azeitona e orégano', NOW(), NOW());
    `);

    // Inserir dados na tabela "bebidas"
    await queryInterface.sequelize.query(`
      INSERT INTO "bebidas" ("nome", "preco", "imgURL", "alcoolica", "volume", "createdAt", "updatedAt")
      VALUES 
        ('Garrafa Coca-cola 2L', '11', 'https://ogimg.infoglobo.com.br/in/24776942-109-2b5/FT1086A/coca.jpg', true, 2000, NOW(), NOW()),
        ('Garrafa de Vinho', '80', 'https://images.unsplash.com/photo-1560148218-1a83060f7b32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdpbmUlMjBib3R0bGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60', true, 1100, NOW(), NOW()),
        ('Garrafa Whisky', '11', 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2hpc2t5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60', true, 900, NOW(), NOW()),
        ('Lata Coca-cola', '8', 'https://images.unsplash.com/photo-1629019416996-712aa1bd87f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2564&q=80', true, 350, NOW(), NOW());
    `);
  },

  async down(queryInterface, Sequelize) {
    // Limpar tabelas (usando TRUNCATE para remover todos os registros)
    await queryInterface.sequelize.query(`TRUNCATE TABLE "usuarios" RESTART IDENTITY CASCADE;`);
    await queryInterface.sequelize.query(`TRUNCATE TABLE "pizzas" RESTART IDENTITY CASCADE;`);
    await queryInterface.sequelize.query(`TRUNCATE TABLE "bebidas" RESTART IDENTITY CASCADE;`);
  }
};