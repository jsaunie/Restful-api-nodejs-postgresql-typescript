import { NextFunction, Request, Response } from 'express';

export default class UserMiddleware {

    constructor() {}

    /**
     * If user is authenticated, he can go to the next route
     * @param req
     * @param res
     * @param next
     * @return void
     */
    public static isAuthenticated(req: Request, res: Response, next: NextFunction): void {
        console.log('is Authenticated');
        next();
    }

    /**
     * If user is allowed, he can go to the next route
     * @param req
     * @param res
     * @param next
     * @return void
     */
    public static isAllowed(req: Request, res: Response, next: NextFunction): void {
        console.log('is Allowed :', req.params.id);
        next();
    }

}