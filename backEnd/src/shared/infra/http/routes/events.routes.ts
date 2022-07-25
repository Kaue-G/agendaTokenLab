import { Router } from "express";
import { CreateEventController } from "../../../../modules/events/useCases/createEvent/createEventController";
import { DeleteEventController } from "../../../../modules/events/useCases/deleteEvent/deleteEventController";
import { ListEventController } from "../../../../modules/events/useCases/listEvent/listEventController";
import { UpdateEventController } from "../../../../modules/events/useCases/updateEvent/updateEventController";

const eventsRoutes = Router();

const createEventController = new CreateEventController();
const deleteEventController = new DeleteEventController();
const listEventController = new ListEventController();
const updateEventController = new UpdateEventController();

eventsRoutes.post('/', createEventController.handle);
eventsRoutes.get('/', listEventController.handle);
eventsRoutes.delete('/', deleteEventController.handle);
eventsRoutes.put('/', updateEventController.handle);

export { eventsRoutes };
