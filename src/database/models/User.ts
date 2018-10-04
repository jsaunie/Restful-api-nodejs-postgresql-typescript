import {DefineAttributes, STRING} from 'sequelize';
import Database from '../Database';

class UserModel {

    public model;

    private static modelName: string = 'user';

    private static attributes: DefineAttributes = {
        firstName: {
            type: STRING
        },
        lastName: {
            type: STRING
        }
    };

    private static options = {};

    constructor() {
        this.model = Database.define(
            UserModel.modelName,
            UserModel.attributes,
            UserModel.options,
        );

        this.createTable();
    }

    /**
     * Create table
     */
    private createTable(): void {
        this.model.sync({force: true}).then(() => {
            console.log('recreate');
            // Table created
            return this.model.create({
                firstName: 'John',
                lastName: 'Doe'
            });
        });
    }

}

export default new UserModel().model;
