// fields of a single database row
import Sequelize from "sequelize";

export interface UserAttributes {
    id?: string; // id is an auto-generated UUID
    firstName: string;
    lastName: string;
    createdAt?: string;
    updatedAt?: string;
}

// a single database row
export type UserInstance = Sequelize.Instance<UserAttributes> & UserAttributes;
