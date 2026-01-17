import { Document, Types } from 'mongoose';
export type HaulageDocument = Haulage & Document;
export declare class Haulage {
    millid: Types.ObjectId;
    haulageCode: string;
    haulageName: string;
    remarks?: string;
}
export declare const HaulageSchema: import("mongoose").Schema<Haulage, import("mongoose").Model<Haulage, any, any, any, Document<unknown, any, Haulage, any, {}> & Haulage & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Haulage, Document<unknown, {}, import("mongoose").FlatRecord<Haulage>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Haulage> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
