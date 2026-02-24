import { ArrivalService } from './arrival.service';
import { CreateArrivalDto } from './dto/create-arrival.dto';
import { Arrival } from './schema/arrival.schema';
export declare class ArrivalController {
    private readonly arrivalService;
    constructor(arrivalService: ArrivalService);
    create(createArrivalDto: CreateArrivalDto): Promise<Arrival>;
    registrationWithElp(millid: string): Promise<(import("mongoose").FlattenMaps<import("./schema/arrival.schema").ArrivalDocument> & Required<{
        _id: import("mongoose").FlattenMaps<unknown>;
    }> & {
        __v: number;
    })[]>;
    findAll(): Promise<Arrival[]>;
    findOne(id: string): Promise<Arrival>;
    updateStatus(id: string, status: string): Promise<Arrival>;
    updateArrival(id: string, updateDto: Partial<CreateArrivalDto>): Promise<Arrival>;
    remove(id: string): Promise<Arrival>;
}
