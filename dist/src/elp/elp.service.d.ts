import { Model } from 'mongoose';
import { Elp, ElpDocument } from './schema/elp.schema';
import { CreateElpDto } from './dto/create-elp.dto';
import { UpdateElpDto } from './dto/update-elp.dto';
export declare class ElpService {
    private readonly elpModel;
    constructor(elpModel: Model<ElpDocument>);
    create(createElpDto: CreateElpDto): Promise<Elp>;
    findAll(): Promise<Elp[]>;
    findOne(id: string): Promise<Elp>;
    update(id: string, updateElpDto: UpdateElpDto): Promise<Elp>;
    remove(id: string): Promise<void>;
}
