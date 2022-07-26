import express, { NextFunction, Request, Response } from "express";
import 'reflect-metadata';
import '../../container';
import 'express-async-errors';
import swaggerUI from 'swagger-ui-express';
import createConnection from '../typeorm';
import swaggerFile from '../../../swagger.json';
import { router } from "./routes/index.routes";
import { AppError } from "../../errors/AppError";
import cors from 'cors';


createConnection();

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.use(router);

app.use(
    (
        error: Error,
        request: Request,
        response: Response,
        next: NextFunction,
    ) => {
        if (error instanceof AppError) {
            return response
                .status(error.statusCode)
                .json({ message: error.message });
        }

        return response.status(500).json({
            status: 'error',
            message: `Internal server Error - ${error.message}`,
        });
        next();
    },
);

app.listen(3333, () => console.log("server on"));