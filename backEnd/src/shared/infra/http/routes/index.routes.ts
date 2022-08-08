import { Router } from "express";
import { accountsRoutes } from "./accounts.routes";
import { authenticationRoutes } from "./authenticate.routes";
import { eventsRoutes } from "./events.routes";

const router = Router();

router.use(authenticationRoutes);
router.use('/accounts', accountsRoutes);
router.use('/events', eventsRoutes);

export { router };