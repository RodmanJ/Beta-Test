"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    username: 'esalas',
    password: '0ewj0Ra6zYWe',
    port: 5434,
    database: 'postgres',
    entities: [],
    logging: true
});
