import express from 'express';
import {Middleware} from "./http/middleware/Middleware";
import {Router} from "./router/Router";

class App {

    public app: express.Application;

    constructor() {
        this.app = express();
        new Middleware(this.app);
        new Router(this.app);
    }

}

export default new App().app;