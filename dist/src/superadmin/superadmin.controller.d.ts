import { SuperAdminService } from './superadmin.service';
import { CreateSuperAdminDto } from './dto/create-superadmin.dto';
import { UpdateSuperAdminDto } from './dto/update-superadmin.dto';
export declare class SuperAdminController {
    private readonly superAdminService;
    constructor(superAdminService: SuperAdminService);
    create(createDto: CreateSuperAdminDto): Promise<import("./schema/user.schema").SuperAdmin>;
    findAll(): Promise<import("./schema/user.schema").SuperAdmin[]>;
    findOne(id: string): Promise<import("./schema/user.schema").SuperAdmin>;
    update(id: string, updateDto: UpdateSuperAdminDto): Promise<import("mongoose").Document<unknown, {}, import("./schema/user.schema").SuperAdminDocument, {}, {}> & import("./schema/user.schema").SuperAdmin & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
