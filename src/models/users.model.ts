import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize";
import { database } from "../config/database";

export class User extends Model {
    public email!: string;
    public firstNname!: string;
    public lastName!: string;
    public userType!: number;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

User.init(
    {
        email: {
            type: DataTypes.STRING(255),
            unique: true,
            primaryKey: true
        },
        firstName: {
            type: new DataTypes.STRING(255),
            allowNull: false,
        },
        lastName: {
            type: new DataTypes.STRING(255),
            allowNull: false,
        },
        userType: {
            type: new DataTypes.INTEGER(),
            allowNull: false,
        },
    },
    {
        tableName: "users",
        sequelize: database
    }
);

User.sync({ force: true }).then(() => {
    // tslint:disable-next-line:no-console
    console.log("Users table created");
});
