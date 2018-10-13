import database from '../config/database';
import Sequelize from "sequelize";

class Database {

    public sequelize: Sequelize.Sequelize;

    constructor() {
        this.sequelize = Database.setUpTheConnection();

        this.testConnection();
    }

    /**
     * Setting up the connection to postgres
     * @returns {Sequelize.Sequelize}
     */
    private static setUpTheConnection(): Sequelize.Sequelize {
        return new Sequelize(
            database.name,
            database.username,
            database.password,
            database.options,
        );

    }

    /**
     * Test the connection to postgres
     */
    private testConnection() {
        this.sequelize.authenticate()
            .then(() => {
                console.log('Connection has been established successfully.');
            })
            .catch(err => {
                console.error('Unable to connect to the database:', err);
            });
    }
}

export default new Database().sequelize;