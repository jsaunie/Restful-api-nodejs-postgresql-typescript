import express, { RequestHandler } from 'express';
import UserMiddleware from '../http/middleware/UserMiddleware';
import UserController from '../http/controller/UserController';

class UserRoute {

    public readonly router: express.Router;
    public readonly prefix: string = '/user';

    constructor() {
        this.router = express.Router();
        this.setGlobalMiddleware(UserMiddleware.isAuthenticated)
            .setSubStackMiddleware()
            .routes();
    }

    /**
     * Define all path of your router
     * @return UserRoute
     */
    private routes(): UserRoute {
        this.router.get('/', UserController.index);
        this.router.post('/', UserController.add);
        this.router.get('/:id', UserController.show);
        this.router.put('/:id', UserMiddleware.isAllowed, UserController.update);
        this.router.delete('/:id/delete', UserController.delete);

        return this;
    }

    /**
     * Set a middleware sub-stack shows request info
     * for any type of HTTP request to the /user/:id path
     * @return UserRoute
     */
    private setSubStackMiddleware(): UserRoute {
        this.router.use('/:id/delete', UserMiddleware.isAllowed);

        return this;
    }

    /**
     * Set a middleware function with no mount path.
     * This code is executed for every request to the router
     * @param middleware
     * @return UserRoute
     */
    private setGlobalMiddleware(middleware: RequestHandler | RequestHandler[]): UserRoute {
        this.router.use(middleware);
        return this;
    }

}

export default new UserRoute();