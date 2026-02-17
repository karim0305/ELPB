import { Document, Types } from 'mongoose';
export type ElpDocument = Elp & Document;
export declare class Elp {
    millid: Types.ObjectId;
    elpCode: string;
    elpName: string;
    remarks?: string;
    status: string;
}
export declare const ElpSchema: import("mongoose").Schema<Elp, import("mongoose").Model<Elp, any, any, any, Document<unknown, any, Elp, any, {}> & Elp & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Elp, Document<unknown, {}, import("mongoose").FlatRecord<Elp>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Elp> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
