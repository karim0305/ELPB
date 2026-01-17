export declare class GpsDto {
    latitude: number;
    longitude: number;
}
export declare class CreateArrivalDto {
    millid: string;
    deviceId: string;
    registrationId: string;
    companyCode: string;
    companyName: string;
    lpCode: string;
    lpName: string;
    serialNumber: string;
    imei: string;
    gps?: GpsDto;
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
    status: string;
}
