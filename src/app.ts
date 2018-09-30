import express from 'express';
import bodyParser from 'body-parser';
import UserRoute from './router/user';

class App {

    public app: express.Application;

    constructor() {
        this.app = express();
        this.config()
            .routerModules();
    }

    /**
     * Config the application
     * @return App
     */
    private config(): App {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        return this;
    }

    /**
     * Define all router modules
     * @return App
     */
    private routerModules(): App {
        this.app.use(UserRoute.prefix, UserRoute.router);

        return this;
    }
}

export default new App().app;