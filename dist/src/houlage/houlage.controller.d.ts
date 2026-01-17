import { Haulage } from './schema/houlage.schema';
import { HaulageService } from './houlage.service';
import { CreateHaulageDto } from './dto/create-houlage.dto';
import { UpdateHaulageDto } from './dto/update-houlage.dto';
export declare class HaulageController {
    private readonly haulageService;
    constructor(haulageService: HaulageService);
    create(dto: CreateHaulageDto): Promise<Haulage>;
    findAll(): Promise<Haulage[]>;
    findOne(id: string): Promise<Haulage>;
    update(id: string, dto: UpdateHaulageDto): Promise<Haulage>;
    remove(id: string): Promise<void>;
}
