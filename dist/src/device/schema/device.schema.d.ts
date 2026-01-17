import { Document, Types } from 'mongoose';
export declare class Device extends Document {
    millid: Types.ObjectId;
    deviceModel: string;
    deviceBrand: string;
    location: {
        latitude: number;
        longitude: number;
        altitude?: number;
        speed?: number;
    };
    approximateLocation: string;
    internetStatus: boolean;
    imei?: string;
    macAddress?: string;
}
export declare const DeviceSchema: import("mongoose").Schema<Device, import("mongoose").Model<Device, any, any, any, Document<unknown, any, Device, any, {}> & Device & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Device, Document<unknown, {}, import("mongoose").FlatRecord<Device>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Device> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
