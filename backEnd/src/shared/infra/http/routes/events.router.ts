import { Router } from "express";
import { ListEventController } from "../../../../modules/events/useCases/listEvent/listEventController";

const eventsRoutes = Router();

const listEventController = new ListEventController();

eventsRoutes.get('/', listEventController.handle);

export { eventsRoutes };
