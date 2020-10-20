import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize";
import sequelize = require("sequelize");
import { database } from "../config/database";
import { Device } from "./devices.model";

export class User extends Model {
    public email!: string;
    public firstName!: string;
    public lastName!: string;
    public userType!: number;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

User.init({
    email: {
        type: DataTypes.STRING(255),
        unique: true,
        primaryKey: true
    },
    firstName: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    userType: {
        type: DataTypes.INTEGER(),
        allowNull: false,
    },
},
    {
        tableName: "users",
        sequelize: database
    }
);

export interface UserInterface {
    email: string;
    firstName: string;
    lastName: string;
    userType: number;
}

User.belongsToMany(Device, {
    through: "user_devices",
    as: "devices",
    foreignKey: "user_id",
});

Device.belongsToMany(User, {
    through: "user_devices",
    as: "users",
    foreignKey: "device_id",
});

database.sync();

User.sync(
    // { force: true }
).then(() => {
    // tslint:disable-next-line:no-console
    console.log("Users table created");
});


