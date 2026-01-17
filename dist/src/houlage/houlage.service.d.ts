import { Model } from 'mongoose';
import { CreateHaulageDto } from './dto/create-houlage.dto';
import { UpdateHaulageDto } from './dto/update-houlage.dto';
import { Haulage, HaulageDocument } from './schema/houlage.schema';
export declare class HaulageService {
    private haulageModel;
    constructor(haulageModel: Model<HaulageDocument>);
    create(dto: CreateHaulageDto): Promise<Haulage>;
    findAll(): Promise<Haulage[]>;
    findOne(id: string): Promise<Haulage>;
    update(id: string, dto: UpdateHaulageDto): Promise<Haulage>;
    remove(id: string): Promise<void>;
}
