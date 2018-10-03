import {ISequelizeDatabase} from "../types/config/database";

const database: ISequelizeDatabase = {
    name: process.env.DB_NAME || 'postgres',
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'root',
    options: {
        host: process.env.DB_HOST || 'localhost',
        dialect: process.env.DB_HOST || 'postgres',
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