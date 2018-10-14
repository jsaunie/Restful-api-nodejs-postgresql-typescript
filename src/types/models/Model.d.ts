import Sequelize, {DefineModelAttributes, DefineOptions} from "sequelize";

export interface IModel<T, U> {

    readonly model: Sequelize.Model<T, U>;

    readonly modelName: string;

    readonly attributes: DefineModelAttributes<U>;

    readonly options: DefineOptions<T>;

}