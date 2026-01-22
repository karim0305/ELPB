declare class LocationDto {
    latitude: number;
    longitude: number;
    altitude?: number;
    speed?: number;
}
export declare class CreateDeviceDto {
    millid: string;
    deviceModel: string;
    deviceBrand: string;
    location: LocationDto;
    approximateLocation?: string;
    internetStatus: boolean;
    imei?: string;
    macAddress?: string;
    status?: string;
}
export {};
