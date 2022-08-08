import { verify } from "jsonwebtoken";
import { AppError } from "../../../errors/AppError";
import { NextFunction, Request, Response } from "express";
import authentication from "../../../../../config/authentication";
import { UserRepository } from "../../../../modules/accounts/repositories/implementations/UserRepository";

interface IPayLoad {
    sub: string;
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new AppError("Token missing", 401);
    }

    const [, token] = authHeader.split(" ");
    const { secret_token } = authentication;

    try {
        const { sub: userId } = verify(token, secret_token) as IPayLoad;
        
        const userRepository = new UserRepository();

        const user = await userRepository.findUserById({ id: userId as string });

        if (!user) {
            throw new AppError("User not found in database", 401)
        }

        request.user = {
            id: user.id
        };

        next();
    } catch {
        throw new AppError("Invalid token!");
    }
}
