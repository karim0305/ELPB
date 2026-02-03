import { Document } from 'mongoose';
import { Types } from 'mongoose';
export type RegistrationDocument = Registration & Document;
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
export declare class Registration {
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
export declare const RegistrationSchema: import("mongoose").Schema<Registration, import("mongoose").Model<Registration, any, any, any, Document<unknown, any, Registration, any, {}> & Registration & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Registration, Document<unknown, {}, import("mongoose").FlatRecord<Registration>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Registration> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
