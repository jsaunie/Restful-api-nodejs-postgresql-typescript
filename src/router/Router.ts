import {Application} from "express";
import UserRoute from "./userRouter";

export class Router {

    constructor(app: Application) {
        app.use(UserRoute.prefix, UserRoute.router);
    }

}