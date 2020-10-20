"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
const devices_model_1 = require("./devices.model");
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
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: false,
    },
    lastName: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: false,
    },
    userType: {
        type: sequelize_1.DataTypes.INTEGER(),
        allowNull: false,
    },
}, {
    tableName: "users",
    sequelize: database_1.database
});
User.belongsToMany(devices_model_1.Device, {
    through: "user_devices",
    as: "devices",
    foreignKey: "user_id",
});
devices_model_1.Device.belongsToMany(User, {
    through: "user_devices",
    as: "users",
    foreignKey: "device_id",
});
database_1.database.sync();
User.sync(
// { force: true }
).then(() => {
    // tslint:disable-next-line:no-console
    console.log("Users table created");
});
//# sourceMappingURL=users.model.js.map