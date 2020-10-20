"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
class User extends sequelize_1.Model {
}
exports.User = User;
User.init({
    email: {
        type: sequelize_1.DataTypes.STRING(255),
        unique: true,
        primaryKey: true
    },
    firstName: {
        type: new sequelize_1.DataTypes.STRING(255),
        allowNull: false,
    },
    lastName: {
        type: new sequelize_1.DataTypes.STRING(255),
        allowNull: false,
    },
    userType: {
        type: new sequelize_1.DataTypes.INTEGER(),
        allowNull: false,
    },
}, {
    tableName: "users",
    sequelize: database_1.database
});
User.sync({ force: true }).then(() => {
    // tslint:disable-next-line:no-console
    console.log("Users table created");
});
//# sourceMappingURL=users.model.js.map