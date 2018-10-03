import {STRING} from 'sequelize';
import Database from '../Database';

const UserModel = Database.define(
    'user',
    {
        firstName: {
            type: STRING
        },
        lastName: {
            type: STRING
        }
    },
    {}
);

UserModel.sync({force: true}).then(() => {
    // Table created
    return UserModel.create({
        firstName: 'John',
        lastName: 'Doe'
    });
});

export default UserModel;
