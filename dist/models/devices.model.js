"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Device = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
class Device extends sequelize_1.Model {
}
exports.Device = Device;
Device.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        allowNull: false,
        unique: true,
        primaryKey: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: false,
    },
    ipAddress: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: false,
    },
    deviceType: {
        type: new sequelize_1.DataTypes.INTEGER(),
        allowNull: false,
    }
}, {
    tableName: "devices",
    sequelize: database_1.database
});
Device.sync(
// { force: true }
).then(() => {
    // tslint:disable-next-line:no-console
    console.log("Devices table created");
});
//# sourceMappingURL=devices.model.js.map