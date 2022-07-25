import { container } from "tsyringe";
import { UserRepository } from "../../modules/accounts/repositories/implementations/UserRepository";
import { IUserRepository } from "../../modules/accounts/repositories/IUserRepository";
import { IEventDayRepository } from "../../modules/events/repositories/IEventDayRepository";
import { IEventRepository } from "../../modules/events/repositories/IEventRepository";
import { EventDayRepository } from "../../modules/events/repositories/implementations/EventDayRepository";
import { EventRepository } from "../../modules/events/repositories/implementations/EventRepository";

container.registerSingleton<IUserRepository>(
    'UserRepository',
    UserRepository
);

container.registerSingleton<IEventRepository>(
    'EventRepository',
    EventRepository
);

container.registerSingleton<IEventDayRepository>(
    'EventDayRepository',
    EventDayRepository
);