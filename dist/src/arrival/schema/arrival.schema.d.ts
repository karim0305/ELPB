import { Document, Types } from 'mongoose';
export type ArrivalDocument = Arrival & Document;
export declare class Gps {
    latitude: number;
    longitude: number;
}
export declare const GpsSchema: import("mongoose").Schema<Gps, import("mongoose").Model<Gps, any, any, any, Document<unknown, any, Gps, any, {}> & Gps & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Gps, Document<unknown, {}, import("mongoose").FlatRecord<Gps>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Gps> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export declare class Arrival {
    millid: Types.ObjectId;
    deviceId: Types.ObjectId;
    elpId: Types.ObjectId;
    gps?: Gps;
    towerId?: string;
    regid: string;
    haulage?: string;
    vehicleNumber?: string;
    documentNo?: string;
    driverImage?: string;
    vehicleImage?: string;
    permitImage?: string;
    remarks?: string;
    status: string;
}
export declare const ArrivalSchema: import("mongoose").Schema<Arrival, import("mongoose").Model<Arrival, any, any, any, Document<unknown, any, Arrival, any, {}> & Arrival & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Arrival, Document<unknown, {}, import("mongoose").FlatRecord<Arrival>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Arrival> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
