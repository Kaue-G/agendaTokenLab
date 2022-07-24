import { inject, injectable } from "tsyringe";
import { IEventRepository } from "../../repositories/IEventRepository";

@injectable()
class ListEcentUserCase {
    constructor(
        @inject('EventRepository')
        private eventRepository: IEventRepository,
    ) {}
    
    async execute() {
        return await this.eventRepository.listEvent();
    }
}

export { ListEcentUserCase };
