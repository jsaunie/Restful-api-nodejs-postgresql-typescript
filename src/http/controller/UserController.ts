import { Request, Response } from 'express';

export default class UserController {

    /**
     * Show all users
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
     * @param {Request} req
     * @param {Response} res
     * @return void
     */
    public static add(req: Request, res: Response): void {
        const data = req.body;
        res.status(200).send({
            message: `User was successfully added !`,
            data,
        });
    }

    /**
     * Update user
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