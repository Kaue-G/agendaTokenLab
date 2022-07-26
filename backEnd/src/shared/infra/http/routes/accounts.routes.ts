import { Router } from "express";
import { ChangePasswordController } from "../../../../modules/accounts/useCases/changePassword/changePasswordController";
import { CreateUserController } from "../../../../modules/accounts/useCases/createUser/createUserController";
import { DeleteUserController } from "../../../../modules/accounts/useCases/deleteUser/deleteUserController";
import { ListUserController } from "../../../../modules/accounts/useCases/listUsers/listUsersController";
import { LoginUserController } from "../../../../modules/accounts/useCases/login/loginUserController";
import { UpdateUserController } from "../../../../modules/accounts/useCases/updateUser/updateUserController";

const accountsRoutes = Router();

const createUserController = new CreateUserController();
const listUserController = new ListUserController();
const deleteUserController = new DeleteUserController();
const updateUserController = new UpdateUserController();
const changePasswordController = new ChangePasswordController();
const loginController = new LoginUserController();

accountsRoutes.post('/', createUserController.handle);
accountsRoutes.post('/login', loginController.handle);
accountsRoutes.get('/', listUserController.handle);
accountsRoutes.delete('/', deleteUserController.handle);
accountsRoutes.put('/', updateUserController.handle);
accountsRoutes.patch('/changePassword', changePasswordController.handle);

export { accountsRoutes };
