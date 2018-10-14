import bodyParser from 'body-parser';
import {Application} from "express";

export class Middleware {

    constructor(app: Application) {
        // App use global middleware
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended: false}));
    }

}