import Sequelize, {DefineModelAttributes, DefineOptions, STRING} from 'sequelize';
import {UserAttributes, UserInstance} from '../../types/models/User';
import {IModel} from "../../types/models/Model";
import Database from "../Database";

class UserModel implements IModel<UserInstance, UserAttributes> {

    public readonly model: Sequelize.Model<UserInstance, UserAttributes>;

    readonly modelName: string = 'user';

    readonly attributes: DefineModelAttributes<UserAttributes> = {
        firstName: {
            type: STRING
        },
        lastName: {
            type: STRING
        }
    };

    readonly options: DefineOptions<UserInstance> = {};

    constructor() {
        this.model = Database.define(this.modelName, this.attributes, this.options);
    }

}

export default new UserModel().model;
