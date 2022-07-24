import { Router } from "express";
import { CreateUserController } from "../../../../modules/accounts/useCases/createUser/createUserController";
import { ListUserController } from "../../../../modules/accounts/useCases/listUsers/listUsersController";

const accountsRoutes = Router();

const createUserController = new CreateUserController();
const listUserController = new ListUserController();

accountsRoutes.post('/', createUserController.handle);
accountsRoutes.get('/', listUserController.handle);
export { accountsRoutes };
