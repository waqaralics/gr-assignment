import { Sequelize } from "sequelize";
import { Database } from 'sqlite3';

const db = new Database('db/assignment.sqlite');

export const database = new Sequelize({
    database: "assignment-db",
    dialect: "sqlite",
    storage: "db/assignment.sqlite",
});
