declare class LocationDto {
    latitude: number;
    longitude: number;
    altitude?: number;
    speed?: number;
}
export declare class CreateDeviceDto {
    millid: string;
    elpid: string;
    deviceModel: string;
    deviceBrand: string;
    location: LocationDto;
    approximateLocation?: string;
    internetStatus: boolean;
    imei?: string;
    Tawerid?: string;
    status?: string;
}
export {};
