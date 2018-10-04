import {RequestHandler, Router} from 'express';
import UserMiddleware from '../http/middleware/UserMiddleware';
import UserController from '../http/controller/UserController';
import {IRoute, ISubMiddleware} from "../types/router";

class UserRoute implements IRoute<UserRoute> {

    public readonly router: Router;

    public readonly prefix: string = '/user';

    private static middleware: RequestHandler[] = [
        UserMiddleware.isAuthenticated,
        UserMiddleware.isAllowed,
    ];

    private static subMiddleware = [
        {path: '/:id', middleware: UserMiddleware.isAllowed},
    ];

    /**
     * Define all path of your router
     * @return UserRoute
     */
    public routes(): UserRoute {
        this.router.get('/', UserController.index);
        this.router.post('/', UserController.add);
        this.router.get('/:id', UserController.show);
        this.router.put('/:id', UserMiddleware.isAllowed, UserController.update);
        this.router.delete('/:id', UserController.delete);

        return this;
    }

    constructor() {
        this.router = Router();
        this.setGlobalMiddleware(UserRoute.middleware)
            .setSubStackMiddleware(UserRoute.subMiddleware)
            .routes();
    }

    /**
     * Set a middleware sub-stack shows request info
     * for any type of HTTP request to the path
     * @param {ISubMiddleware[]} middlewareSubStack
     * @return UserRoute
     */
    public setSubStackMiddleware(middlewareSubStack: ISubMiddleware[]): UserRoute {
        middlewareSubStack.forEach((subStack: ISubMiddleware) => {
            this.router.use(subStack.path, subStack.middleware);
        });

        return this;
    }

    /**
     * Set a middleware function with no mount path.
     * This code is executed for every request to the router
     * @param {RequestHandler[]} middlewareStack
     * @return UserRoute
     */
    public setGlobalMiddleware(middlewareStack: RequestHandler[]): UserRoute {
        middlewareStack.forEach((middleware: RequestHandler) => {
            this.router.use(middleware);
        });
        return this;
    }

}

export default new UserRoute();