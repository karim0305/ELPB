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
    companyCode: string;
    companyName: string;
    lpCode: string;
    lpName: string;
    serialNumber: string;
    imei: string;
    gps?: Gps;
    gpsDistance?: number;
    towerId?: string;
    haulageCode?: string;
    haulageName?: string;
    registrationNumber?: string;
    vehicleNumber?: string;
    permitImage?: string;
    driverImage?: string;
    vehicleImage?: string;
    date?: Date;
    time?: string;
    remarks?: string;
    documentNo?: string;
    standardTime?: string;
    timeTaken?: string;
    difference?: string;
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
