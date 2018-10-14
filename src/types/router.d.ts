import {PathParams, RequestHandlerParams} from "express-serve-static-core";
import {RequestHandler, Router} from "express";

export type ISubMiddleware = {
    middleware: RequestHandlerParams;
    path: PathParams;
};

export interface IRouter<T> {
    readonly router: Router;
    readonly prefix: string;
    readonly middleware: RequestHandler[];
    readonly subMiddleware: ISubMiddleware[];

    setSubStackMiddleware(middlewareSubStack: ISubMiddleware[]): T;
    setGlobalMiddleware(middlewareStack: RequestHandler[]): T;
    routes(): void;
}