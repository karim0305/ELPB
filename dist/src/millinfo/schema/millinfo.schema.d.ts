import { Document } from 'mongoose';
export type MillInfoDocument = MillInfo & Document;
export declare class MillInfo {
    millcode: string;
    millname: string;
    focalperson: string;
    cnic: string;
    phone: string;
    address?: string;
    email: string;
    role: string;
    profilePicture: string;
    lastLogin: Date;
    status: string;
    password: string;
}
export declare const MillInfoSchema: import("mongoose").Schema<MillInfo, import("mongoose").Model<MillInfo, any, any, any, Document<unknown, any, MillInfo, any, {}> & MillInfo & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, MillInfo, Document<unknown, {}, import("mongoose").FlatRecord<MillInfo>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<MillInfo> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
