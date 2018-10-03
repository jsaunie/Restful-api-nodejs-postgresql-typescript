import database from '../config/database';
import Sequelize from "sequelize";

class Database {

    public sequelize: Sequelize.Sequelize;

    constructor() {
        this.setUpTheConnection()
            .testConnection();
    }

    /**
     * Setting up the connection to postgres
     * @returns {Database}
     */
    private setUpTheConnection(): Database {
        console.log('db name :', database.name);
        this.sequelize = new Sequelize(
            database.name,
            database.username,
            database.password,
            database.options,
        );

        return this;
    }

    /**
     * Test the connection to postgre
     * @returns {Database}
     */
    private testConnection(): Database {
        this.sequelize.authenticate()
            .then(() => {
                console.log('Connection has been established successfully.');
            })
            .catch(err => {
                console.error('Unable to connect to the database:', err);
            });

        return this;
    }
}

export default new Database().sequelize;