import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { accountsRoutes } from "./accounts.routes";
import { authenticationRoutes } from "./authenticate.routes";
import { eventsRoutes } from "./events.routes";

const router = Router();

router.use(authenticationRoutes);

router.use(ensureAuthenticated);
router.use('/accounts', accountsRoutes);
router.use('/events', eventsRoutes);

export { router };