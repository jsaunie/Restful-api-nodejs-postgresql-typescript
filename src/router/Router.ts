import {Application} from "express";
import UserRoute from "./user";

export class Router {

    constructor(app: Application) {
        app.use(UserRoute.prefix, UserRoute.router);
    }

}