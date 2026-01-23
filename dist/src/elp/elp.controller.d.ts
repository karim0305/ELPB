import { ElpService } from './elp.service';
import { CreateElpDto } from './dto/create-elp.dto';
import { UpdateElpDto } from './dto/update-elp.dto';
export declare class ElpController {
    private readonly elpService;
    constructor(elpService: ElpService);
    create(createElpDto: CreateElpDto): Promise<import("./schema/elp.schema").Elp>;
    findAllElps(): Promise<import("./schema/elp.schema").Elp[]>;
    findAll(millid?: string): void | Promise<(import("mongoose").Document<unknown, {}, import("./schema/elp.schema").ElpDocument, {}, {}> & import("./schema/elp.schema").Elp & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findOne(id: string): Promise<import("./schema/elp.schema").Elp>;
    update(id: string, updateElpDto: UpdateElpDto): Promise<import("./schema/elp.schema").Elp>;
    remove(id: string): Promise<void>;
}
