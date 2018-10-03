import {ISequelizeDatabase} from "../types/config/database";

const database: ISequelizeDatabase = {
    name: process.env.DB_NAME,
    username: 'postgres',
    password: 'root',
    options: {
        host: 'localhost',
        dialect: 'postgres',
        operatorsAliases: false,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },

    },
};

export default database;