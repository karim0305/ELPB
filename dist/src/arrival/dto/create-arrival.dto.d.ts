export declare class GpsDto {
    latitude: number;
    longitude: number;
}
export declare class CreateArrivalDto {
    userid: string;
    millid: string;
    deviceId: string;
    elpId: string;
    gps?: GpsDto;
    towerId?: string;
    regid: string;
    haulage?: string;
    documentNo?: string;
    vehicleNumber?: string;
    permitImage?: string;
    driverImage?: string;
    vehicleImage?: string;
    remarks?: string;
    status: string;
}
