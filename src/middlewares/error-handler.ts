import {Response, Request, NextFunction} from "express";
import {IErrorMessage} from "../interfaces";

function errorHandler(error: IErrorMessage, _req: Request, res: Response, _next: NextFunction): object {
  console.log("@@@ Error Message", error);
  return res.status(error.statusCode).send(error);
}

export default errorHandler;
