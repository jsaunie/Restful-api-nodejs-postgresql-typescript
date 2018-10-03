import {PathParams, RequestHandlerParams} from "express-serve-static-core";
import {RequestHandler, Router} from "express";

export type ISubMiddleware = {
    middleware: RequestHandlerParams;
    path: PathParams;
};

export interface IRoute<T> {
    readonly router: Router;
    readonly prefix: string;
    middleware?: RequestHandler[];
    subMiddleware?: ISubMiddleware[];

    routes(): T;
    setSubStackMiddleware(middlewareSubStack: ISubMiddleware[]): T;
    setGlobalMiddleware(middlewareStack: RequestHandler[]): T;
}