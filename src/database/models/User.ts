import {STRING} from 'sequelize';
import Database from '../Database';

export const UserModel = Database.define(
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

export default UserModel;

// // force: true will drop the table if it already exists
// User.sync({force: true}).then(() => {
//     // Table created
//     return User.create({
//         firstName: 'John',
//         lastName: 'Hancock'
//     });
// });