import {ISequelizeDatabase} from "../types/config/database";

const database: ISequelizeDatabase = {
    name: process.env.DB_NAME || 'postgres',
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'root',
    options: {
        // the sql dialect of the database
        // currently supported: 'mysql', 'sqlite', 'postgres', 'mssql'
        dialect: process.env.DB_HOST || 'postgres',

        // custom host; default: localhost
        host: process.env.DB_HOST || 'localhost',

        // custom port; default: dialect default
        // port: 12345,

        operatorsAliases: false,

        // custom protocol; default: 'tcp'
        // postgres only, useful for Heroku
        // protocol: null,

        // disable logging; default: console.log
        logging: false,

        // you can also pass any dialect options to the underlying dialect library
        // - default is empty
        // - currently supported: 'mysql', 'postgres', 'mssql'
        dialectOptions: {},

        // the storage engine for sqlite
        // - default ':memory:'
        // storage: 'path/to/database.sqlite',

        // disable inserting undefined values as NULL
        // - default: false
        omitNull: true,

        // a flag for using a native library or not.
        // in the case of 'pg' -- set this to true will allow SSL support
        // - default: false
        // native: true,

        // Specify options, which are used when sequelize.define is called.
        // The following example:
        //   define: { timestamps: false }
        // is basically the same as:
        //   sequelize.define(name, attributes, { timestamps: false })
        // so defining the timestamps for each model will be not necessary
        define: {
            charset: 'utf8',
            freezeTableName: false,
            timestamps: true,
            underscored: false
        },

        // similar for sync: you can define this to always force sync for models
        sync: {force: true},

        // pool configuration used to pool database connections
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },

        // isolation level of each transaction
        // defaults to dialect default
        // isolationLevel: Transaction.ISOLATION_LEVELS.REPEATABLE_READ
    },

};

export default database;