import { Model } from 'mongoose';
import { Arrival, ArrivalDocument } from './schema/arrival.schema';
import { CreateArrivalDto } from './dto/create-arrival.dto';
export declare class ArrivalService {
    private arrivalModel;
    constructor(arrivalModel: Model<ArrivalDocument>);
    create(createArrivalDto: CreateArrivalDto): Promise<Arrival>;
    findAll(): Promise<Arrival[]>;
    getArrivalElpByMillId(millid: string): Promise<(import("mongoose").FlattenMaps<ArrivalDocument> & Required<{
        _id: import("mongoose").FlattenMaps<unknown>;
    }> & {
        __v: number;
    })[]>;
    findById(id: string): Promise<Arrival>;
    updateStatus(id: string, status: string): Promise<Arrival>;
    update(id: string, updateDto: Partial<CreateArrivalDto>): Promise<Arrival>;
    delete(id: string): Promise<Arrival>;
}
