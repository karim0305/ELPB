import { Document, Types } from "mongoose";
export type SuperAdminDocument = SuperAdmin & Document;
export declare class SuperAdmin {
    name: string;
    email: string;
    phone: string;
    cnic: string;
    address: string;
    image: string;
    lastLogin: Date;
    status: string;
    password: string;
}
export declare const SuperAdminSchema: import("mongoose").Schema<SuperAdmin, import("mongoose").Model<SuperAdmin, any, any, any, Document<unknown, any, SuperAdmin, any, {}> & SuperAdmin & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, SuperAdmin, Document<unknown, {}, import("mongoose").FlatRecord<SuperAdmin>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<SuperAdmin> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
