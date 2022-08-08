import { Router } from "express";
import { ChangePasswordController } from "../../../../modules/accounts/useCases/changePassword/changePasswordController";
import { CreateUserController } from "../../../../modules/accounts/useCases/createUser/createUserController";
import { DeleteUserController } from "../../../../modules/accounts/useCases/deleteUser/deleteUserController";
import { ListUserController } from "../../../../modules/accounts/useCases/listUsers/listUsersController";
import { AuthenticateUserController } from "../../../../modules/accounts/useCases/authenticateUser/AuthenticateUserController";
import { UpdateUserController } from "../../../../modules/accounts/useCases/updateUser/updateUserController";

const accountsRoutes = Router();

const createUserController = new CreateUserController();
const listUserController = new ListUserController();
const deleteUserController = new DeleteUserController();
const updateUserController = new UpdateUserController();
const changePasswordController = new ChangePasswordController();
const authenticateUserController = new AuthenticateUserController();

accountsRoutes.post('/', createUserController.handle);
accountsRoutes.post('/login', authenticateUserController.handle);
accountsRoutes.get('/', listUserController.handle);
accountsRoutes.delete('/', deleteUserController.handle);
accountsRoutes.put('/', updateUserController.handle);
accountsRoutes.patch('/changePassword', changePasswordController.handle);

export { accountsRoutes };
