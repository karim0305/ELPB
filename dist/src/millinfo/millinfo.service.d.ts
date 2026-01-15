import { Model } from 'mongoose';
import { MillInfo, MillInfoDocument } from './schema/millinfo.schema';
import { CreateMillInfoDto } from './dto/create-millinfo.dto';
import { UpdateMillInfoDto } from './dto/update-millinfo.dto';
export declare class MillInfoService {
    private millInfoModel;
    constructor(millInfoModel: Model<MillInfoDocument>);
    create(createMillInfoDto: CreateMillInfoDto): Promise<MillInfo>;
    findAll(): Promise<MillInfo[]>;
    findOne(id: string): Promise<MillInfo>;
    update(id: string, updateDto: UpdateMillInfoDto): Promise<MillInfo>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
