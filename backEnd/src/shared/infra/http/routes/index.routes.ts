import { Router } from "express";
import { accountsRoutes } from "./accounts.routes";
import { eventsRoutes } from "./events.router";

const router = Router();

router.use('/accounts', accountsRoutes);
router.use('/events', eventsRoutes);

export { router };