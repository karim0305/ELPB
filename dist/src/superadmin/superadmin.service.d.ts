import { Model } from 'mongoose';
import { SuperAdmin, SuperAdminDocument } from './schema/user.schema';
import { CreateSuperAdminDto } from './dto/create-superadmin.dto';
import { UpdateSuperAdminDto } from './dto/update-superadmin.dto';
export declare class SuperAdminService {
    private superAdminModel;
    constructor(superAdminModel: Model<SuperAdminDocument>);
    create(createDto: CreateSuperAdminDto): Promise<SuperAdmin>;
    findAll(): Promise<SuperAdmin[]>;
    findOne(id: string): Promise<SuperAdmin>;
    update(id: string, updateDto: UpdateSuperAdminDto): Promise<import("mongoose").Document<unknown, {}, SuperAdminDocument, {}, {}> & SuperAdmin & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
