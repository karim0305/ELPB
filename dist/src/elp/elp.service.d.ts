import { Model } from 'mongoose';
import { Elp, ElpDocument } from './schema/elp.schema';
import { CreateElpDto } from './dto/create-elp.dto';
import { UpdateElpDto } from './dto/update-elp.dto';
export declare class ElpService {
    private readonly elpModel;
    findAll(): void;
    constructor(elpModel: Model<ElpDocument>);
    create(createElpDto: CreateElpDto): Promise<Elp>;
    findAllElps(): Promise<Elp[]>;
    findOne(id: string): Promise<Elp>;
    update(id: string, updateElpDto: UpdateElpDto): Promise<Elp>;
    remove(id: string): Promise<void>;
    findByMillId(millid: string): Promise<(import("mongoose").Document<unknown, {}, ElpDocument, {}, {}> & Elp & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
}
