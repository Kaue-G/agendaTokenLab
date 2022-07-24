import { Router } from "express";
import { CreateUserController } from "../../../../modules/accounts/useCases/createUser/createUserController";
import { DeleteUserController } from "../../../../modules/accounts/useCases/deleteUser/deleteUserController";
import { ListUserController } from "../../../../modules/accounts/useCases/listUsers/listUsersController";

const accountsRoutes = Router();

const createUserController = new CreateUserController();
const listUserController = new ListUserController();
const deleteUserController = new DeleteUserController();

accountsRoutes.post('/', createUserController.handle);
accountsRoutes.get('/', listUserController.handle);
accountsRoutes.delete('/', deleteUserController.handle);

export { accountsRoutes };
