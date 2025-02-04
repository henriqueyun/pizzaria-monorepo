# backend-pizzaria

Backend do Projeto Pizzaria feito para integrar-se com os projetos:

[Front-end do Administrador da Pizzaria](https://github.com/henriqueyun/frontend-pizzaria-admin)<br/>
[Front-end do Cliente da Pizzaria](https://github.com/henriqueyun/frontend-pizzaria-cliente)

## Rodando O Projeto

### Environment

Em primeiro lugar, para disponibilizar a aplicação no host local diretamente é fundamental atribuir corretamente as variáveis no arquivo [./env](./.env). Além disso, é necessário oferecer uma conexão Postgres para o serviço.

Após configurar as variáveis de ambiente e subir o Postgres, deve-se rodar:

```sh
yarn install
yarn db:migrate
yarn db:seed # opcional
```

Isso vai atualizar as tabelas no banco de dados em conforme com às entidades da aplicação;

### Host

Com a etapa de enviroment ccompleta, basta executar:
```
# .env configurado e database "pizzaria" criado
yarn start
```

### Docker

Você pode rodar o projeto utilizando Docker Compose, basta executar na pasta raíz do projeto backend-pizzaria:
```
yarn dev:docker
```
> Para que os containers subam sem problemas, assegure que as portas **8000** e **5432** não estejam em uso, caso estejam altere as portas no docker-compose.yaml


## Desenvolvendo

Localmente ou através do Docker, a aplicação está preparada para rodar em desenvolvimento com [Nodemon](https://www.npmjs.com/package/nodemon), que permite o *hot reloading*, sempre que uma alteração é feita a aplicação é reiniciada.
```
yarn dev
```

### Seeders

O projeto utiliza migrations e seeders disponibilizados pelo sequelize-cli, para as migrations e os seeders:
```
# migrations (roda automaticamente após subir dev com dev:docker através do post script postdev:docker)
yarn db:migrate

# seeders
yarn db:seed
```