import {Request, Response} from 'express';
import User from "../../database/models/User";

export default class UserController {

    /**
     * Show all users
     * @method GET
     * @param {Request} req
     * @param {Response} res
     * @return void
     */
    public static index(req: Request, res: Response): void {
        res.status(200).send({
            message: 'Hello user!'
        })
    }

    /**
     * Show user according by hid id and the id parameter
     * @method GET
     * @param {Request} req
     * @param {Response} res
     * @return void
     */
    public static show(req: Request, res: Response): void {
        res.status(200).send({
            id: req.params.id
        });
    }

    /**
     * Save a new user
     * @method POST
     * @param {Request} req
     * @param {Response} res
     * @return void
     */
    public static add(req: Request, res: Response): void {
        const data = req.body;
        // force: true will drop the table if it already exists
        User.sync({force: true}).then(() => {
            // Table created
            return User.create(data);
        });
        const users = User.findAll().then(users => {
            console.log('users :', users);
            return users;
        });
        res.status(200).send({
            message: `User was successfully added !`,
            data,
            users,
        });
    }

    /**
     * Update user
     * @method PUT
     * @param {Request} req
     * @param {Response} res
     * @return void
     */
    public static update(req: Request, res: Response): void {
        const data = req.body;
        res.status(200).send({
            message: `User ${req.params.id} was successfully updated !`,
            data,
        });
    }


    /**
     * Delete user
     * @method DELETE
     * @param {Request} req
     * @param {Response} res
     * @return void
     */
    public static delete(req: Request, res: Response): void {
        res.status(200).send({
            message: `User ${req.params.id} was successfully deleted !`
        })
    }

}