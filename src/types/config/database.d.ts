import {Options} from "sequelize";

export interface ISequelizeDatabase {
    name: string;
    username: string;
    password: string;
    options: Options
}