import { DataSource } from "typeorm";
import { Personas } from "./entities/Personas";

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    username: 'esalas',
    password: '0ewj0Ra6zYWe',
    port: 5434,
    database: 'postgres',
    entities: [Personas],
    logging: true,
    synchronize: true
})