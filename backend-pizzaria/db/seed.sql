INSERT INTO usuarios (username, password, fullName, role, activeSession, createdAt, updatedAt) 
VALUES ('admin', 'admin', 'Administrador', 'admin', '', NOW(), NOW())
,('caique', '123', 'Caique', 'admin', '', NOW(), NOW())
,('isis', '123', 'Isis', 'admin', '', NOW(), NOW())
,('henrique', '123', 'Henrique', 'admin', '', NOW(), NOW());

INSERT INTO pizzas (nome, preco, imgURL, ingredientes, createdAt, updatedAt)
VALUES ('Muçarela', '31', NULL, 'Queijo muçarela, tomate, azeitona e orégano', NOW(), NOW())
,('Calabresa', '31', NULL, 'Calabresa, queijo muçarela, tomate, azeitona e orégano', NOW(), NOW())
,('Margherita', '31', NULL, 'Queijo muçarela, manjericão, tomate, azeitona e orégano', NOW(), NOW())
,('Baiana', '34', NULL, 'Queijo muçarela, presunto, calabresa, ovo, pimenta, cebola, tomate, azeitona e orégano', NOW(), NOW())
,('Vegana', '38', NULL, 'Queijo de castanha, tomate, azeitona e orégano', NOW(), NOW())
,('Portuguesa', '34', NULL, 'Queijo muçarela, presunto, cebola, pimentão, milho, ervilha, tomate, azeitona e orégano', NOW(), NOW());