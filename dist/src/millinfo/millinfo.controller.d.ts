import { MillInfoService } from './millinfo.service';
import { CreateMillInfoDto } from './dto/create-millinfo.dto';
import { UpdateMillInfoDto } from './dto/update-millinfo.dto';
import { MillInfo } from './schema/millinfo.schema';
export declare class MillInfoController {
    private readonly millInfoService;
    constructor(millInfoService: MillInfoService);
    create(createDto: CreateMillInfoDto): Promise<MillInfo>;
    findAll(): Promise<MillInfo[]>;
    findOne(id: string): Promise<MillInfo>;
    update(id: string, updateDto: UpdateMillInfoDto): Promise<MillInfo>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
