import { Express, Request, Response, RequestHandler } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';

export default (func: (arg0: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, arg1: Response<any, Record<string, any>>, arg2: any) => Promise<any>) => {
    return (req: Request, res: Response, next: any) => {
        func(req, res, next).catch(next)
    }
}