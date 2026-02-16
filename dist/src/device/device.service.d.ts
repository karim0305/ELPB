import { Model } from 'mongoose';
import { Device } from './schema/device.schema';
import { CreateDeviceDto } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';
export declare class DeviceService {
    private readonly deviceModel;
    constructor(deviceModel: Model<Device>);
    create(data: CreateDeviceDto): Promise<Device>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, Device, {}, {}> & Device & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findByImei(imei: string): Promise<Device>;
    findByMillid(millid: string): Promise<Device[]>;
    updateByImei(imei: string, updateData: UpdateDeviceDto): Promise<Device>;
    deleteByImei(imei: string): Promise<{
        message: string;
    }>;
}
