import { ElpService } from './elp.service';
import { CreateElpDto } from './dto/create-elp.dto';
import { UpdateElpDto } from './dto/update-elp.dto';
export declare class ElpController {
    private readonly elpService;
    constructor(elpService: ElpService);
    create(createElpDto: CreateElpDto): Promise<import("./schema/elp.schema").Elp>;
    findAll(): Promise<import("./schema/elp.schema").Elp[]>;
    findOne(id: string): Promise<import("./schema/elp.schema").Elp>;
    update(id: string, updateElpDto: UpdateElpDto): Promise<import("./schema/elp.schema").Elp>;
    remove(id: string): Promise<void>;
}
