"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.database = void 0;
const sequelize_1 = require("sequelize");
const sqlite3_1 = require("sqlite3");
const db = new sqlite3_1.Database('db/assignment.sqlite');
exports.database = new sequelize_1.Sequelize({
    database: "assignment-db",
    dialect: "sqlite",
    storage: "db/assignment.sqlite",
});
//# sourceMappingURL=database.js.map