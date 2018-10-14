import {RequestHandler, Router} from 'express';
import AuthMiddleware from '../http/middleware/AuthMiddleware';
import UserController from '../http/controller/UserController';
import {IRouter, ISubMiddleware} from "../types/router";

class UserRouter implements IRouter<UserRouter> {

    public readonly router: Router;

    public readonly prefix: string = '/user';

    readonly middleware: RequestHandler[] = [
        AuthMiddleware.isAuthenticated,
        AuthMiddleware.isAllowed,
    ];

    readonly subMiddleware = [
        {path: '/:id', middleware: AuthMiddleware.isAllowed},
    ];

    /**
     * Define all path of your router
     * @return UserRouter
     */
    public routes() {
        this.router.get('/', UserController.index);
        this.router.post('/', UserController.add);
        this.router.get('/:id', UserController.show);
        this.router.put('/:id', AuthMiddleware.isAllowed, UserController.update);
        this.router.delete('/:id', UserController.delete);
    }

    constructor() {
        this.router = Router();
        this.setGlobalMiddleware()
            .setSubStackMiddleware();
        this.routes();
    }

    /**
     * Set a middleware sub-stack shows request info
     * for any type of HTTP request to the path
     * @return UserRouter
     */
    public setSubStackMiddleware(): UserRouter {
        this.subMiddleware.forEach((subStack: ISubMiddleware) => {
            this.router.use(subStack.path, subStack.middleware);
        });

        return this;
    }

    /**
     * Set a middleware function with no mount path.
     * This code is executed for every request to the router
     * @return UserRouter
     */
    public setGlobalMiddleware(): UserRouter {
        this.middleware.forEach((middleware: RequestHandler) => {
            this.router.use(middleware);
        });
        return this;
    }

}

export default new UserRouter();