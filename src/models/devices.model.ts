import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize";
import { database } from "../config/database";
import { User } from "./users.model";

export class Device extends Model {
    public id!: string;
    public name!: string;
    public ipAddress!: string;
    public deviceType!: number;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Device.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        unique: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    ipAddress: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    deviceType: {
        type: new DataTypes.INTEGER(),
        allowNull: false,
    }
},
    {
        tableName: "devices",
        sequelize: database
    }
);

export interface DeviceInterface {
    name: string;
    ipAddress: string;
    deviceType: number;
}

export interface ListRequestInterface {
    userEmail: string;
    userType: number;
    deviceType: number;
}

export interface AssignmentInterface {
    userEmail: string,
    deviceId: string
}


Device.sync(
    // { force: true }
).then(() => {
    // tslint:disable-next-line:no-console
    console.log("Devices table created");
});

