import { Document, Types } from 'mongoose';
export type VerificationDocument = Verification & Document;
export declare class Verification {
    millid: Types.ObjectId;
    registrationid: Types.ObjectId;
    arrivalid: Types.ObjectId;
    status: string;
    remarks?: string;
}
export declare const VerificationSchema: import("mongoose").Schema<Verification, import("mongoose").Model<Verification, any, any, any, Document<unknown, any, Verification, any, {}> & Verification & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Verification, Document<unknown, {}, import("mongoose").FlatRecord<Verification>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Verification> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
