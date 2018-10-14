import {Application} from "express";
import UserRouter from "./UserRouter";

export class Router {

    constructor(app: Application) {
        app.use(UserRouter.prefix, UserRouter.router);
    }

}