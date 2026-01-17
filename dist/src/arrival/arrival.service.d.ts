import { Model } from 'mongoose';
import { Arrival, ArrivalDocument } from './schema/arrival.schema';
import { CreateArrivalDto } from './dto/create-arrival.dto';
export declare class ArrivalService {
    private arrivalModel;
    constructor(arrivalModel: Model<ArrivalDocument>);
    create(createArrivalDto: CreateArrivalDto): Promise<Arrival>;
    findAll(): Promise<Arrival[]>;
    findById(id: string): Promise<Arrival>;
    updateStatus(id: string, status: string): Promise<Arrival>;
    delete(id: string): Promise<Arrival>;
}
